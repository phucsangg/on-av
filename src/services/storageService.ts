import type { UserAttempt, SavedMistake, SavedWord, UserStats, ExamSet } from '../types/quiz';

const STORAGE_PREFIX = 'eq_';
const SESSION_KEY = 'on_av_active_session';
const THEME_KEY = 'eq_theme';
const FONT_KEY = 'eq_font';
const STORAGE_VERSION_KEY = 'eq_storage_version';
const CURRENT_STORAGE_VERSION = 2;

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
  constructor() {
    this.migrateIfNeeded();
  }

  private migrateIfNeeded(): void {
    try {
      const rawVer = localStorage.getItem(STORAGE_VERSION_KEY);
      const version = rawVer ? parseInt(rawVer, 10) : 1;

      if (version < 2) {
        // v1 -> v2 migration: ensure integrity of attempts and mistake schema without losing user progress
        const attempts = this.getAttempts();
        if (attempts.length > 0) {
          const sanitizedAttempts = attempts.map(att => ({
            ...att,
            percentage: typeof att.percentage === 'number' ? att.percentage : Math.round((att.score / (att.totalQuestions || 1)) * 100),
            date: att.date || new Date().toISOString()
          }));
          this.saveAttempts(sanitizedAttempts);
        }

        const mistakes = this.getMistakes();
        if (mistakes.length > 0) {
          const sanitizedMistakes = mistakes.map(m => ({
            ...m,
            userWrongAnswersCount: Math.max(1, Number(m.userWrongAnswersCount) || 1),
            addedAt: m.addedAt || new Date().toISOString()
          }));
          this.saveMistakes(sanitizedMistakes);
        }

        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_STORAGE_VERSION.toString());
      }
    } catch (e) {
      console.warn('[StorageService] Error during storage migration:', e);
    }
  }

  public getStorageVersion(): number {
    try {
      const ver = localStorage.getItem(STORAGE_VERSION_KEY);
      return ver ? parseInt(ver, 10) : CURRENT_STORAGE_VERSION;
    } catch {
      return CURRENT_STORAGE_VERSION;
    }
  }

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
    const val = this.safeGet<UserAttempt[]>(`${STORAGE_PREFIX}attempts`, []);
    return Array.isArray(val) ? val : [];
  }

  saveAttempts(attempts: UserAttempt[]): boolean {
    return this.safeSet(`${STORAGE_PREFIX}attempts`, attempts);
  }

  // --- Mistakes ---
  getMistakes(): SavedMistake[] {
    const val = this.safeGet<SavedMistake[]>(`${STORAGE_PREFIX}mistakes`, []);
    return Array.isArray(val) ? val : [];
  }

  saveMistakes(mistakes: SavedMistake[]): boolean {
    return this.safeSet(`${STORAGE_PREFIX}mistakes`, mistakes);
  }

  clearMistakes(): boolean {
    return this.saveMistakes([]);
  }

  // --- Saved Words ---
  getSavedWords(): SavedWord[] {
    const val = this.safeGet<SavedWord[]>(`${STORAGE_PREFIX}saved_words`, []);
    return Array.isArray(val) ? val : [];
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
    const val = this.safeGet<any>(`${STORAGE_PREFIX}stats`, defaultStats);
    if (!val || typeof val !== 'object' || Array.isArray(val)) {
      return defaultStats;
    }
    return {
      totalTestsTaken: Math.max(0, Number(val.totalTestsTaken) || 0),
      totalQuestionsAnswered: Math.max(0, Number(val.totalQuestionsAnswered) || 0),
      correctAnswersCount: Math.max(0, Number(val.correctAnswersCount) || 0),
      streakDays: Math.max(0, Number(val.streakDays) || 0),
      lastActiveDate: typeof val.lastActiveDate === 'string' ? val.lastActiveDate : '',
      skillAccuracy: (val.skillAccuracy && typeof val.skillAccuracy === 'object' && !Array.isArray(val.skillAccuracy)) ? val.skillAccuracy : {}
    };
  }

  saveStats(stats: UserStats): boolean {
    return this.safeSet(`${STORAGE_PREFIX}stats`, stats);
  }

  // --- Custom Exams ---
  getCustomExams(): ExamSet[] {
    const val = this.safeGet<ExamSet[]>(`${STORAGE_PREFIX}custom_exams`, []);
    return Array.isArray(val) ? val : [];
  }

  saveCustomExams(exams: ExamSet[]): boolean {
    return this.safeSet(`${STORAGE_PREFIX}custom_exams`, exams);
  }

  // --- Active Session ---
  getActiveSession(): ActiveQuizSession | null {
    const val = this.safeGet<any>(SESSION_KEY, null);
    if (!val || typeof val !== 'object' || Array.isArray(val)) {
      return null;
    }
    return val as ActiveQuizSession;
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

  // --- Font Preference ---
  getFont(): string {
    try {
      return localStorage.getItem(FONT_KEY) || 'plus-jakarta';
    } catch {
      return 'plus-jakarta';
    }
  }

  setFont(font: string): void {
    try {
      localStorage.setItem(FONT_KEY, font);
    } catch (err) {
      console.warn('[StorageService] Failed to save font preference:', err);
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
