// ============================================
// VíaSegura — localStorage Wrapper
// ============================================

const STORAGE_VERSION = 1;
const STORAGE_PREFIX = 'viasegura_';

interface StorageSchema {
  version: number;
  data: unknown;
}

function getKey(key: string): string {
  return `${STORAGE_PREFIX}${key}`;
}

export function saveToStorage<T>(key: string, data: T): void {
  try {
    const wrapped: StorageSchema = {
      version: STORAGE_VERSION,
      data,
    };
    localStorage.setItem(getKey(key), JSON.stringify(wrapped));
  } catch (e) {
    console.warn(`[VíaSegura] Failed to save "${key}" to localStorage:`, e);
  }
}

export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(getKey(key));
    if (!raw) return defaultValue;

    const parsed: StorageSchema = JSON.parse(raw);
    if (parsed.version !== STORAGE_VERSION) {
      // Future: add migration logic here
      console.warn(`[VíaSegura] Storage version mismatch for "${key}". Resetting.`);
      removeFromStorage(key);
      return defaultValue;
    }

    return parsed.data as T;
  } catch (e) {
    console.warn(`[VíaSegura] Failed to load "${key}" from localStorage:`, e);
    return defaultValue;
  }
}

export function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(getKey(key));
  } catch (e) {
    console.warn(`[VíaSegura] Failed to remove "${key}" from localStorage:`, e);
  }
}

export function clearAllStorage(): void {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith(STORAGE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.warn('[VíaSegura] Failed to clear localStorage:', e);
  }
}

/** Get today's date as YYYY-MM-DD string */
export function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

/** Generate a unique ID */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
