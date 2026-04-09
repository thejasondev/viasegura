// ============================================
// VíaSegura — Progress Tracking
// ============================================
import { getTodayString } from './storage';
import type { UserStreak } from './types';

// Safely get local yesterday string
function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function checkBrokenStreak(currentStreak: UserStreak): UserStreak {
  const today = getTodayString();
  const yesterday = getYesterdayString();

  if (currentStreak.lastDate === today || currentStreak.lastDate === yesterday) {
    // Still active or protected
    return currentStreak;
  }

  // They didn't study yesterday or today. Streak is broken.
  return {
    ...currentStreak,
    current: 0
    // do not change lastDate, so we know when they last actually studied
  };
}

export function calculateNewStreak(currentStreak: UserStreak): UserStreak {
  const today = getTodayString();
  const yesterday = getYesterdayString();

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

  // Streak was broken, but now they studied!
  return {
    current: 1,
    longest: Math.max(1, currentStreak.longest),
    lastDate: today,
  };
}
