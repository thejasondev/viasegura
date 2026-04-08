// ============================================
// VíaSegura — Progress Tracking
// ============================================
import { getTodayString } from './storage';
import type { UserStreak } from './types';

export function calculateNewStreak(currentStreak: UserStreak): UserStreak {
  const today = getTodayString();
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  if (currentStreak.lastDate === today) {
    return currentStreak; // Already studied today
  }

  if (currentStreak.lastDate === yesterday) {
    // Continuing streak
    const newCurrent = currentStreak.current + 1;
    return {
      current: newCurrent,
      longest: Math.max(newCurrent, currentStreak.longest),
      lastDate: today,
    };
  }

  // Streak broken or first time
  return {
    current: 1,
    longest: Math.max(1, currentStreak.longest),
    lastDate: today,
  };
}
