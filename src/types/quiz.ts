export type QuestionType = 
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'stress'
  | 'synonym'
  | 'antonym'
  | 'communication'
  | 'reading_comprehension'
  | 'cloze_test'
  | 'reordering';

export type PageTab = 'dashboard' | 'catalog' | 'mistakes' | 'history' | 'dictionary' | 'builder';

export interface SavedWord {
  id: string;
  word: string;
  phonetic?: string;
  partOfSpeech?: string;
  definition: string;
  translation: string;
  example?: string;
  savedAt: string;
}

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  translation?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  questionText: string;
  readingPassage?: string; // For reading comprehension or cloze test
  passageTranslation?: string; // Vietnamese translation of the reading passage
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  translation?: string;
  topicTag: string; // e.g. "Thì Quá khứ đơn", "Phát âm /s/ & /z/", "Collocation"
  difficulty?: 'easy' | 'medium' | 'hard';
  audioUrl?: string; // Optional audio URL or generated speech
}

export interface ExamSet {
  id: string;
  title: string;
  description: string;
  category: 'thpt_qg' | 'toeic' | 'ielts' | 'quick_quiz' | 'grammar_focus' | 'vocab_focus';
  durationMinutes: number; // e.g., 50 mins, 15 mins
  totalQuestions: number;
  badge: string;
  questions: Question[];
  iconName?: string;
}

export interface UserAnswerRecord {
  questionId: string;
  selectedAnswer: 'A' | 'B' | 'C' | 'D' | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
  isFlagged?: boolean;
}

export interface UserAttempt {
  id: string;
  examSetId: string;
  examTitle: string;
  date: string; // ISO string
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  answers: UserAnswerRecord[];
}

export interface SavedMistake {
  question: Question;
  addedAt: string;
  userWrongAnswersCount: number;
}

export interface UserStats {
  totalTestsTaken: number;
  totalQuestionsAnswered: number;
  correctAnswersCount: number;
  streakDays: number;
  lastActiveDate: string;
  skillAccuracy: Record<string, { total: number; correct: number }>;
}

