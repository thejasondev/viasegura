// ============================================
// VíaSegura — Spaced Repetition (SM-2)
// ============================================
import type { QuestionConfidence } from './types';

export function calculateNextReview(
  existing: QuestionConfidence | undefined,
  questionId: string,
  wasCorrect: boolean
): QuestionConfidence {
  const now = new Date().toISOString();

  if (existing) {
    const newTimesCorrect = existing.timesCorrect + (wasCorrect ? 1 : 0);
    const newTimesAnswered = existing.timesAnswered + 1;
    const ratio = newTimesCorrect / newTimesAnswered;

    // SM-2 inspired ease factor adjustment
    let newEF = existing.easeFactor;
    if (wasCorrect) {
      newEF = Math.min(3.0, newEF + 0.1);
    } else {
      newEF = Math.max(1.3, newEF - 0.3);
    }

    const newInterval = wasCorrect ? Math.max(1, Math.round(existing.interval * newEF)) : 1;
    const nextReview = new Date(Date.now() + newInterval * 86400000).toISOString();

    return {
      questionId,
      timesAnswered: newTimesAnswered,
      timesCorrect: newTimesCorrect,
      lastAnswered: now,
      nextReview,
      interval: newInterval,
      easeFactor: newEF,
      confidence: ratio >= 0.8 ? 'high' : ratio >= 0.5 ? 'medium' : 'low',
    };
  }

  // First time answering
  return {
    questionId,
    timesAnswered: 1,
    timesCorrect: wasCorrect ? 1 : 0,
    lastAnswered: now,
    nextReview: new Date(Date.now() + (wasCorrect ? 3 : 1) * 86400000).toISOString(),
    interval: wasCorrect ? 3 : 1,
    easeFactor: 2.5,
    confidence: wasCorrect ? 'medium' : 'low',
  };
}
