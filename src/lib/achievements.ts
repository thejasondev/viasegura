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
    id: 'quiz_10',
    title: 'Estudiante Frecuente',
    description: 'Completa 10 sesiones de práctica rápida',
    icon: '📚',
    condition: 'Completar 10 quizzes de práctica',
    category: 'quiz',
  },
  {
    id: 'quiz_master_50',
    title: 'Medio Centenar',
    description: 'Responde correctamente 50 preguntas en total (Práctica)',
    icon: '🎯',
    condition: 'Acumular 50 aciertos en prácticas',
    category: 'mastery',
  },
  {
    id: 'exam_veteran',
    title: 'Veterano del Examen',
    description: 'Aprueba 10 simulacros de examen',
    icon: '🎖️',
    condition: 'Aprobar 10 exámenes',
    category: 'mastery',
  },
  {
    id: 'half_journey',
    title: 'A Mitad de Camino',
    description: 'Lee el 50% de las secciones de estudio',
    icon: '🧗',
    condition: 'Progreso de lectura superior al 50%',
    category: 'study',
  },
  {
    id: 'by_a_hair',
    title: 'Por un Pelo',
    description: 'Aprueba un examen raspando con puntaje exacto al mínimo (70%)',
    icon: '😅',
    condition: 'Puntaje exacto del 70% en examen',
    category: 'quiz',
  },
  {
    id: 'signal_theory',
    title: 'Experto en Señales',
    description: 'Completa al 100% el Módulo de Señalización Vial',
    icon: '🚦',
    condition: 'Completar lecturas del módulo 4',
    category: 'study',
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

  // All modules completed & 50% completion
  let totalRead = 0;
  let totalAvailable = 0;
  let completedModules = 0;
  
  for (const [moduleId, sections] of Object.entries(progress.modulesRead)) {
    const total = moduleSectionCounts[moduleId] || 0;
    if (total > 0) {
      totalAvailable += total;
      totalRead += sections.length;
      if (sections.length >= total) {
        completedModules++;
        // Check for specific signal module (using 'mod-4')
        if (moduleId === 'mod-4') tryUnlock('signal_theory');
      }
    }
  }

  if (completedModules >= moduleCount) tryUnlock('all_modules');
  if (totalAvailable > 0 && totalRead >= Math.ceil(totalAvailable / 2)) {
    tryUnlock('half_journey');
  }

  // Quiz achievements
  if (progress.quizHistory.length >= 1) tryUnlock('first_quiz');
  if (progress.quizHistory.length >= 10) tryUnlock('quiz_10');
  if (progress.quizHistory.some((q) => q.score === 100)) tryUnlock('quiz_ace');
  
  // Total correct answers in practice
  let totalCorrectAnswers = 0;
  progress.quizHistory.forEach(q => {
    totalCorrectAnswers += Math.round((q.score / 100) * q.totalQuestions);
  });
  if (totalCorrectAnswers >= 50) tryUnlock('quiz_master_50');

  // Exam achievements
  if (progress.examHistory.length >= 1) tryUnlock('first_exam');
  if (progress.examHistory.some((e) => e.passed)) tryUnlock('exam_pass');
  if (progress.examHistory.some((e) => e.score === 100)) tryUnlock('exam_perfect');
  if (progress.examHistory.some((e) => Math.round(e.score) === 70)) tryUnlock('by_a_hair');

  const passedExams = progress.examHistory.filter((e) => e.passed).length;
  if (passedExams >= 5) tryUnlock('five_exams_passed');
  if (passedExams >= 10) tryUnlock('exam_veteran');

  // Streak achievements
  if (progress.streak.current >= 3 || progress.streak.longest >= 3)
    tryUnlock('streak_3');
  if (progress.streak.current >= 7 || progress.streak.longest >= 7)
    tryUnlock('streak_7');
  if (progress.streak.current >= 30 || progress.streak.longest >= 30)
    tryUnlock('streak_30');

  return newlyUnlocked;
}
