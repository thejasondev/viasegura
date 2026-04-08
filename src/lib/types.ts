// ============================================
// VíaSegura — Core Type Definitions
// ============================================

/** Study module metadata */
export interface StudyModule {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // emoji
  color: string; // tailwind color class
  sections: ModuleSection[];
}

export interface ModuleSection {
  id: string;
  title: string;
  content: string; // HTML content
  keyPoints?: string[];
  tips?: string[];
}

/** Question for quizzes and exams */
export interface Question {
  id: string;
  moduleId: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  relatedArticle?: string;
}

/** Traffic signal data */
export interface TrafficSignal {
  id: string;
  name: string;
  category: SignalCategory;
  description: string;
  meaning: string;
  shape: 'circle' | 'triangle' | 'diamond' | 'rectangle' | 'octagon';
  colors: string[];
  svgIcon: string; // inline SVG or path
}

export type SignalCategory =
  | 'prohibitiva'
  | 'obligatoria'
  | 'preventiva'
  | 'informativa'
  | 'transitoria';

/** Quiz/Exam session */
export interface QuizSession {
  id: string;
  type: 'practice' | 'exam';
  moduleId?: string; // null for mixed/exam
  questions: string[]; // question IDs
  answers: Record<string, number>; // questionId -> selected index
  startedAt: string; // ISO date
  completedAt?: string;
  timeLimit?: number; // minutes
  score?: number;
  passed?: boolean;
}

/** User progress tracking */
export interface UserProgress {
  modulesRead: Record<string, string[]>; // moduleId -> section IDs read
  quizHistory: QuizResult[];
  examHistory: QuizResult[];
  streak: StreakData;
  achievements: string[]; // achievement IDs
  questionConfidence: Record<string, QuestionConfidence>;
  lastStudyDate?: string;
  totalStudyTime: number; // minutes
}

export interface QuizResult {
  id: string;
  type: 'practice' | 'exam';
  moduleId?: string;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  score: number; // percentage
  passed: boolean;
  timeSpent: number; // seconds
  wrongQuestionIds: string[];
}

export interface StreakData {
  current: number;
  longest: number;
  lastDate: string; // ISO date (date only)
}

export interface QuestionConfidence {
  questionId: string;
  timesAnswered: number;
  timesCorrect: number;
  lastAnswered: string;
  nextReview: string;
  interval: number; // days
  easeFactor: number;
  confidence: 'low' | 'medium' | 'high';
}

/** Achievement definition */
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji
  condition: string; // description of unlock condition
  category: 'study' | 'quiz' | 'streak' | 'mastery';
}

/** Theme preference */
export type ThemeMode = 'light' | 'dark' | 'system';
