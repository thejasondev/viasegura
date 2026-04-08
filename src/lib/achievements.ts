// ============================================
// VíaSegura — Achievement Definitions & Logic
// ============================================

import type { Achievement, UserProgress } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_lesson',
    title: 'Primera Lección',
    description: 'Completa tu primera sección de estudio',
    icon: '📖',
    condition: 'Leer al menos una sección de cualquier módulo',
    category: 'study',
  },
  {
    id: 'module_master',
    title: 'Módulo Completado',
    description: 'Completa todas las secciones de un módulo',
    icon: '🎓',
    condition: 'Leer todas las secciones de un módulo',
    category: 'study',
  },
  {
    id: 'all_modules',
    title: 'Estudioso Total',
    description: 'Completa todos los módulos de estudio',
    icon: '🏆',
    condition: 'Leer todas las secciones de todos los módulos',
    category: 'study',
  },
  {
    id: 'first_quiz',
    title: 'Primer Intento',
    description: 'Realiza tu primer quiz de práctica',
    icon: '✍️',
    condition: 'Completar un quiz de práctica',
    category: 'quiz',
  },
  {
    id: 'quiz_ace',
    title: 'Sin Errores',
    description: 'Obtén 100% en un quiz de práctica',
    icon: '💯',
    condition: 'Score perfecto en un quiz',
    category: 'quiz',
  },
  {
    id: 'first_exam',
    title: 'Examinado',
    description: 'Completa tu primer simulacro de examen',
    icon: '📝',
    condition: 'Completar un examen simulacro',
    category: 'quiz',
  },
  {
    id: 'exam_pass',
    title: 'Aprobado',
    description: 'Aprueba un simulacro de examen (70%+)',
    icon: '✅',
    condition: 'Aprobar un examen simulacro',
    category: 'quiz',
  },
  {
    id: 'exam_perfect',
    title: 'Examen Perfecto',
    description: 'Obtén 20/20 en un simulacro de examen',
    icon: '🌟',
    condition: 'Score perfecto en examen',
    category: 'mastery',
  },
  {
    id: 'five_exams_passed',
    title: 'Máquina de Exámenes',
    description: 'Aprueba 5 simulacros de examen',
    icon: '🔥',
    condition: 'Aprobar 5 exámenes',
    category: 'mastery',
  },
  {
    id: 'streak_3',
    title: 'Constancia',
    description: 'Racha de 3 días consecutivos',
    icon: '🔥',
    condition: 'Estudiar 3 días seguidos',
    category: 'streak',
  },
  {
    id: 'streak_7',
    title: 'Semana Completa',
    description: 'Racha de 7 días consecutivos',
    icon: '⚡',
    condition: 'Estudiar 7 días seguidos',
    category: 'streak',
  },
  {
    id: 'streak_30',
    title: 'Imparable',
    description: 'Racha de 30 días consecutivos',
    icon: '👑',
    condition: 'Estudiar 30 días seguidos',
    category: 'streak',
  },
  {
    id: 'signal_master',
    title: 'Señalero',
    description: 'Responde correctamente preguntas de todas las señales',
    icon: '🚦',
    condition: 'Dominar las señales de tránsito',
    category: 'mastery',
  },
];

/** Check all achievement conditions and return newly unlocked ones */
export function checkAchievements(
  progress: UserProgress,
  moduleCount: number = 8,
  moduleSectionCounts: Record<string, number> = {}
): string[] {
  const newlyUnlocked: string[] = [];
  const already = new Set(progress.achievements);

  function tryUnlock(id: string): void {
    if (!already.has(id)) {
      newlyUnlocked.push(id);
    }
  }

  // Study achievements
  const totalSectionsRead = Object.values(progress.modulesRead).flat().length;
  if (totalSectionsRead >= 1) tryUnlock('first_lesson');

  // Check if any module is fully completed
  for (const [moduleId, sections] of Object.entries(progress.modulesRead)) {
    const total = moduleSectionCounts[moduleId] || 0;
    if (total > 0 && sections.length >= total) {
      tryUnlock('module_master');
      break;
    }
  }

  // All modules completed
  const completedModules = Object.entries(progress.modulesRead).filter(
    ([moduleId, sections]) => {
      const total = moduleSectionCounts[moduleId] || 0;
      return total > 0 && sections.length >= total;
    }
  ).length;
  if (completedModules >= moduleCount) tryUnlock('all_modules');

  // Quiz achievements
  if (progress.quizHistory.length >= 1) tryUnlock('first_quiz');
  if (progress.quizHistory.some((q) => q.score === 100)) tryUnlock('quiz_ace');

  // Exam achievements
  if (progress.examHistory.length >= 1) tryUnlock('first_exam');
  if (progress.examHistory.some((e) => e.passed)) tryUnlock('exam_pass');
  if (progress.examHistory.some((e) => e.score === 100)) tryUnlock('exam_perfect');

  const passedExams = progress.examHistory.filter((e) => e.passed).length;
  if (passedExams >= 5) tryUnlock('five_exams_passed');

  // Streak achievements
  if (progress.streak.current >= 3 || progress.streak.longest >= 3)
    tryUnlock('streak_3');
  if (progress.streak.current >= 7 || progress.streak.longest >= 7)
    tryUnlock('streak_7');
  if (progress.streak.current >= 30 || progress.streak.longest >= 30)
    tryUnlock('streak_30');

  return newlyUnlocked;
}
