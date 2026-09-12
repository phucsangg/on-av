import type { Question, ExamSet } from '../types/quiz';
import { sanitizeHtml } from './sanitize';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

const VALID_TYPES = new Set([
  'grammar',
  'vocabulary',
  'pronunciation',
  'stress',
  'synonym',
  'antonym',
  'communication',
  'reading_comprehension',
  'cloze_test',
  'reordering'
]);

const VALID_ANSWERS = new Set(['A', 'B', 'C', 'D']);

export function validateQuestion(q: any, index?: number): { valid: boolean; errors: string[]; sanitizedQuestion?: Question } {
  const errors: string[] = [];
  const prefix = index !== undefined ? `Câu ${index + 1}: ` : '';

  if (!q || typeof q !== 'object') {
    return { valid: false, errors: [`${prefix}Dữ liệu câu hỏi không hợp lệ (không phải object).`] };
  }

  const id = typeof q.id === 'string' && q.id.trim() ? q.id.trim() : `q-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const type = VALID_TYPES.has(q.type) ? q.type : 'grammar';

  if (typeof q.questionText !== 'string' || !q.questionText.trim()) {
    errors.push(`${prefix}Thiếu nội dung câu hỏi (questionText).`);
  }

  if (!Array.isArray(q.options) || q.options.length < 2) {
    errors.push(`${prefix}Câu hỏi phải có ít nhất 2 phương án lựa chọn.`);
  }

  const sanitizedOptions = Array.isArray(q.options)
    ? q.options.map((opt: any, optIdx: number) => {
        const optId = VALID_ANSWERS.has(opt.id) ? opt.id : (['A', 'B', 'C', 'D'][optIdx] || 'A');
        const text = typeof opt.text === 'string' ? sanitizeHtml(opt.text.trim()) : '';
        const translation = typeof opt.translation === 'string' ? opt.translation.trim() : undefined;
        return { id: optId as 'A' | 'B' | 'C' | 'D', text, translation };
      })
    : [];

  const correctAnswer = VALID_ANSWERS.has(q.correctAnswer) ? q.correctAnswer : 'A';
  if (!VALID_ANSWERS.has(q.correctAnswer)) {
    errors.push(`${prefix}Đáp án đúng không hợp lệ (phải là A, B, C, hoặc D).`);
  }

  const topicTag = typeof q.topicTag === 'string' && q.topicTag.trim() ? q.topicTag.trim() : 'Tổng hợp';
  const explanation = typeof q.explanation === 'string' ? q.explanation.trim() : '';
  const translation = typeof q.translation === 'string' ? q.translation.trim() : undefined;
  const readingPassage = typeof q.readingPassage === 'string' ? q.readingPassage.trim() : undefined;
  const passageTranslation = typeof q.passageTranslation === 'string' ? q.passageTranslation.trim() : undefined;

  const sanitizedQuestion: Question = {
    id,
    type,
    questionText: sanitizeHtml(q.questionText || ''),
    options: sanitizedOptions,
    correctAnswer,
    explanation,
    translation,
    topicTag,
    readingPassage,
    passageTranslation,
    difficulty: ['easy', 'medium', 'hard'].includes(q.difficulty) ? q.difficulty : undefined
  };

  return {
    valid: errors.length === 0,
    errors,
    sanitizedQuestion
  };
}

export function validateExam(exam: any): { valid: boolean; errors: string[]; sanitizedExam?: ExamSet } {
  const errors: string[] = [];

  if (!exam || typeof exam !== 'object') {
    return { valid: false, errors: ['Dữ liệu đề thi không phải là object.'] };
  }

  if (typeof exam.title !== 'string' || !exam.title.trim()) {
    errors.push('Tên đề thi không được để trống.');
  }

  if (!Array.isArray(exam.questions) || exam.questions.length === 0) {
    errors.push('Bộ đề thi phải có ít nhất 1 câu hỏi.');
    return { valid: false, errors };
  }

  const sanitizedQuestions: Question[] = [];
  exam.questions.forEach((q: any, idx: number) => {
    const qResult = validateQuestion(q, idx);
    if (!qResult.valid) {
      errors.push(...qResult.errors);
    }
    if (qResult.sanitizedQuestion) {
      sanitizedQuestions.push(qResult.sanitizedQuestion);
    }
  });

  const durationMinutes = Number(exam.durationMinutes) > 0 ? Number(exam.durationMinutes) : 50;
  const sanitizedExam: ExamSet = {
    id: typeof exam.id === 'string' && exam.id.trim() ? exam.id.trim() : `custom-${Date.now()}`,
    title: exam.title.trim(),
    description: typeof exam.description === 'string' ? exam.description.trim() : 'Đề thi tự tạo bởi người dùng.',
    category: exam.category || 'quick_quiz',
    durationMinutes,
    totalQuestions: sanitizedQuestions.length,
    badge: typeof exam.badge === 'string' ? exam.badge.trim() : 'Tự Tạo',
    questions: sanitizedQuestions,
    iconName: exam.iconName || 'Sparkles'
  };

  return {
    valid: errors.length === 0,
    errors,
    sanitizedExam
  };
}
