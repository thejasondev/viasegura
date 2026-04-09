// ============================================
// VíaSegura — State Management (nanostores)
// ============================================

import { atom, map } from 'nanostores';
import type { UserProgress, ThemeMode, QuizResult, QuizSession } from './types';
import { saveToStorage, loadFromStorage, getTodayString } from './storage';
import { calculateNextReview } from './spaced-repetition';
import { checkBrokenStreak, calculateNewStreak } from './progress';

// ---- Default State ----
const defaultProgress: UserProgress = {
  modulesRead: {},
  quizHistory: [],
  examHistory: [],
  streak: { current: 0, longest: 0, lastDate: '' },
  achievements: [],
  questionConfidence: {},
  totalStudyTime: 0,
};

// ---- Stores ----
export const $theme = atom<ThemeMode>('light');
export const $progress = map<UserProgress>(defaultProgress);
export const $currentQuiz = atom<QuizSession | null>(null);
export const $showConfetti = atom(false);

// ---- Initialize from localStorage ----
export function initStores(): void {
  const savedTheme = loadFromStorage<ThemeMode>('theme', 'light');
  $theme.set(savedTheme);

  const savedProgress = loadFromStorage<UserProgress>('progress', defaultProgress);
  $progress.set(savedProgress);

  // Silently check if streak broke due to inactivity, DO NOT increment just for opening
  $progress.setKey('streak', checkBrokenStreak(savedProgress.streak));
}

// ---- Theme Actions ----
export function setTheme(mode: ThemeMode): void {
  $theme.set(mode);
  saveToStorage('theme', mode);
  applyTheme(mode);
}

export function applyTheme(mode: ThemeMode): void {
  const root = document.documentElement;
  if (mode === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', prefersDark);
  } else {
    root.classList.toggle('dark', mode === 'dark');
  }
}

// ---- Progress Actions ----
function persistProgress(): void {
  saveToStorage('progress', $progress.get());
}

export function markSectionRead(moduleId: string, sectionId: string): void {
  const current = $progress.get();
  const moduleReadSections = current.modulesRead[moduleId] || [];
  if (!moduleReadSections.includes(sectionId)) {
    $progress.setKey('modulesRead', {
      ...current.modulesRead,
      [moduleId]: [...moduleReadSections, sectionId],
    });
    persistProgress();
  }
}

export function addQuizResult(result: QuizResult): void {
  const current = $progress.get();
  if (result.type === 'practice') {
    $progress.setKey('quizHistory', [...current.quizHistory, result]);
  } else {
    $progress.setKey('examHistory', [...current.examHistory, result]);
  }
  persistProgress();
}

export function updateStreak(): void {
  const current = $progress.get();
  $progress.setKey('streak', calculateNewStreak(current.streak));
  persistProgress();
}

export function recordStudyActivity(): void {
  const current = $progress.get();
  const today = getTodayString();

  if (current.streak.lastDate !== today) {
    updateStreak();
  } else {
    persistProgress();
  }
}

export function updateQuestionConfidence(
  questionId: string,
  wasCorrect: boolean
): void {
  const current = $progress.get();
  const existing = current.questionConfidence[questionId];
  
  const updatedConfidence = calculateNextReview(existing, questionId, wasCorrect);

  $progress.setKey('questionConfidence', {
    ...current.questionConfidence,
    [questionId]: updatedConfidence,
  });

  persistProgress();
}

export function unlockAchievement(achievementId: string): void {
  const current = $progress.get();
  if (!current.achievements.includes(achievementId)) {
    $progress.setKey('achievements', [...current.achievements, achievementId]);
    $showConfetti.set(true);
    setTimeout(() => $showConfetti.set(false), 3000);
    persistProgress();
  }
}
