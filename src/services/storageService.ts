import type { UserAttempt, SavedMistake, SavedWord, UserStats, ExamSet } from '../types/quiz';

const STORAGE_PREFIX = 'eq_';
const SESSION_KEY = 'on_av_active_session';
const THEME_KEY = 'eq_theme';

export interface ActiveQuizSession {
  examId: string;
  selectedAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  flagged: Record<string, boolean>;
  currentIndex: number;
  timeRemainingSeconds: number;
  startTime: number;
  timestamp: number;
}

class StorageService {
  private safeGet<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null || raw === undefined) return fallback;
      return JSON.parse(raw) as T;
    } catch (err) {
      console.warn(`[StorageService] Failed to read/parse key "${key}":`, err);
      return fallback;
    }
  }

  private safeSet<T>(key: string, value: T): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err: any) {
      // Handle QuotaExceededError or private browsing restrictions
      console.error(`[StorageService] Failed to write key "${key}":`, err);
      if (err?.name === 'QuotaExceededError' || err?.code === 22) {
        this.pruneOldAttempts();
        try {
          localStorage.setItem(key, JSON.stringify(value));
          return true;
        } catch {
          console.error('[StorageService] Quota still exceeded after pruning.');
        }
      }
      return false;
    }
  }

  private pruneOldAttempts(): void {
    try {
      const attempts = this.getAttempts();
      if (attempts.length > 20) {
        // Keep most recent 20 attempts
        const pruned = attempts.slice(0, 20);
        localStorage.setItem(`${STORAGE_PREFIX}attempts`, JSON.stringify(pruned));
      }
    } catch (e) {
      console.warn('[StorageService] Error during attempt pruning:', e);
    }
  }

  // --- Attempts ---
  getAttempts(): UserAttempt[] {
    return this.safeGet<UserAttempt[]>(`${STORAGE_PREFIX}attempts`, []);
  }

  saveAttempts(attempts: UserAttempt[]): boolean {
    return this.safeSet(`${STORAGE_PREFIX}attempts`, attempts);
  }

  // --- Mistakes ---
  getMistakes(): SavedMistake[] {
    return this.safeGet<SavedMistake[]>(`${STORAGE_PREFIX}mistakes`, []);
  }

  saveMistakes(mistakes: SavedMistake[]): boolean {
    return this.safeSet(`${STORAGE_PREFIX}mistakes`, mistakes);
  }

  // --- Saved Words ---
  getSavedWords(): SavedWord[] {
    return this.safeGet<SavedWord[]>(`${STORAGE_PREFIX}saved_words`, []);
  }

  saveSavedWords(words: SavedWord[]): boolean {
    return this.safeSet(`${STORAGE_PREFIX}saved_words`, words);
  }

  // --- User Stats ---
  getStats(): UserStats {
    const defaultStats: UserStats = {
      totalTestsTaken: 0,
      totalQuestionsAnswered: 0,
      correctAnswersCount: 0,
      streakDays: 0,
      lastActiveDate: '',
      skillAccuracy: {}
    };
    return this.safeGet<UserStats>(`${STORAGE_PREFIX}stats`, defaultStats);
  }

  saveStats(stats: UserStats): boolean {
    return this.safeSet(`${STORAGE_PREFIX}stats`, stats);
  }

  // --- Custom Exams ---
  getCustomExams(): ExamSet[] {
    return this.safeGet<ExamSet[]>(`${STORAGE_PREFIX}custom_exams`, []);
  }

  saveCustomExams(exams: ExamSet[]): boolean {
    return this.safeSet(`${STORAGE_PREFIX}custom_exams`, exams);
  }

  // --- Active Session ---
  getActiveSession(): ActiveQuizSession | null {
    return this.safeGet<ActiveQuizSession | null>(SESSION_KEY, null);
  }

  saveActiveSession(session: ActiveQuizSession): boolean {
    return this.safeSet(SESSION_KEY, session);
  }

  clearActiveSession(): void {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (err) {
      console.warn('[StorageService] Failed to clear active session:', err);
    }
  }

  // --- Theme ---
  getTheme(): 'dark' | 'light' {
    try {
      const val = localStorage.getItem(THEME_KEY);
      if (val === 'dark' || val === 'light') return val;
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    } catch {
      return 'light';
    }
  }

  setTheme(theme: 'dark' | 'light'): void {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (err) {
      console.warn('[StorageService] Failed to save theme:', err);
    }
  }

  clearAllData(): void {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}attempts`);
      localStorage.removeItem(`${STORAGE_PREFIX}mistakes`);
      localStorage.removeItem(`${STORAGE_PREFIX}words`);
      localStorage.removeItem(`${STORAGE_PREFIX}stats`);
      localStorage.removeItem(`${STORAGE_PREFIX}custom_exams`);
      localStorage.removeItem(SESSION_KEY);
    } catch (err) {
      console.warn('[StorageService] Failed to clear all data:', err);
    }
  }
}

export const storageService = new StorageService();
