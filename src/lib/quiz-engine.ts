// ============================================
// VíaSegura — Quiz Engine
// ============================================

import type { Question, QuizSession, QuizResult } from './types';
import { generateId, getTodayString } from './storage';
import { $progress } from './store';

/** Shuffle array using Fisher-Yates */
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Select questions for a practice quiz */
export function selectPracticeQuestions(
  allQuestions: Question[],
  moduleId?: string,
  count: number = 10
): Question[] {
  let pool = moduleId
    ? allQuestions.filter((q) => q.moduleId === moduleId)
    : [...allQuestions];

  // Prioritize questions the user has gotten wrong before
  const confidence = $progress.get().questionConfidence;
  const needsReview: Question[] = [];
  const others: Question[] = [];

  pool.forEach((q) => {
    const conf = confidence[q.id];
    if (conf && conf.confidence === 'low') {
      needsReview.push(q);
    } else if (conf && new Date(conf.nextReview) <= new Date()) {
      needsReview.push(q);
    } else {
      others.push(q);
    }
  });

  // Take from needsReview first, then fill with others
  const selected = [
    ...shuffle(needsReview).slice(0, Math.ceil(count * 0.6)),
    ...shuffle(others),
  ];

  return shuffle(selected).slice(0, count);
}

/** Select questions for a full exam simulation */
export function selectExamQuestions(
  allQuestions: Question[],
  count: number = 20
): Question[] {
  // Get module IDs for proportional distribution
  const moduleIds = [...new Set(allQuestions.map((q) => q.moduleId))];
  const perModule = Math.max(1, Math.floor(count / moduleIds.length));
  const remainder = count - perModule * moduleIds.length;

  let selected: Question[] = [];

  moduleIds.forEach((mid, idx) => {
    const moduleQuestions = allQuestions.filter((q) => q.moduleId === mid);
    const take = perModule + (idx < remainder ? 1 : 0);
    selected = [...selected, ...shuffle(moduleQuestions).slice(0, take)];
  });

  return shuffle(selected).slice(0, count);
}

/** Create a new quiz session */
export function createQuizSession(
  type: 'practice' | 'exam',
  questions: Question[],
  moduleId?: string,
  timeLimit?: number
): QuizSession {
  return {
    id: generateId(),
    type,
    moduleId,
    questions: questions.map((q) => q.id),
    answers: {},
    startedAt: new Date().toISOString(),
    timeLimit,
  };
}

/** Calculate quiz results */
export function calculateResults(
  session: QuizSession,
  allQuestions: Question[]
): QuizResult {
  const questions = allQuestions.filter((q) =>
    session.questions.includes(q.id)
  );
  const total = questions.length;
  let correct = 0;
  const wrongIds: string[] = [];

  questions.forEach((q) => {
    const userAnswer = session.answers[q.id];
    if (userAnswer === q.correctIndex) {
      correct++;
    } else {
      wrongIds.push(q.id);
    }
  });

  const score = total > 0 ? Math.round((correct / total) * 100) : 0;
  const startTime = new Date(session.startedAt).getTime();
  const endTime = session.completedAt
    ? new Date(session.completedAt).getTime()
    : Date.now();

  return {
    id: session.id,
    type: session.type,
    moduleId: session.moduleId,
    date: getTodayString(),
    totalQuestions: total,
    correctAnswers: correct,
    score,
    passed: score >= 70,
    timeSpent: Math.round((endTime - startTime) / 1000),
    wrongQuestionIds: wrongIds,
  };
}

/** Format seconds to mm:ss */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
