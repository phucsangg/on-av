import type { 
  SavedMistake, 
  UserAttempt, 
  CEFRLevel, 
  ExamSet,
  SRSRating,
  SRSItemSchedule
} from '../types/quiz';

export type { SRSRating, SRSItemSchedule };

export interface WeakTopicAnalysis {
  topic: string;
  totalAsked: number;
  correctCount: number;
  accuracyRate: number; // 0.0 to 1.0
  severity: 'high' | 'medium' | 'low';
}

export interface RecommendationAction {
  type: 'srs_review' | 'weak_topic_practice' | 'diagnostic' | 'full_exam';
  title: string;
  reason: string;
  targetId?: string;
  questionCount?: number;
  actionText: string;
}

/**
 * Standard Spaced Repetition Intervals (Configurable)
 * Box 1: 1 day (Initial learning or failed review)
 * Box 2: 3 days (Early retention)
 * Box 3: 7 days (Medium consolidation)
 * Box 4: 14 days (Long-term consolidation)
 * Box 5: 30 days (Mastery)
 */
export const DEFAULT_SRS_INTERVALS: Record<number, number> = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30
};

export class LearningEngine {
  private intervals: Record<number, number>;

  constructor(customIntervals?: Record<number, number>) {
    this.intervals = customIntervals || DEFAULT_SRS_INTERVALS;
  }

  /**
   * Calculates the next spaced repetition schedule given user feedback
   */
  public calculateNextReview(currentBox: number = 1, rating: SRSRating): SRSItemSchedule {
    let nextBox = currentBox;

    switch (rating) {
      case 'again':
        nextBox = 1; // Reset to Box 1 for relearning
        break;
      case 'hard':
        nextBox = Math.max(1, currentBox); // Maintain current box
        break;
      case 'good':
        nextBox = Math.min(5, currentBox + 1); // Advance to next box
        break;
      case 'easy':
        nextBox = Math.min(5, currentBox + 2); // Jump 2 boxes ahead
        break;
    }

    const intervalDays = this.intervals[nextBox] || 1;
    const dueDate = new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000).toISOString();

    return {
      box: nextBox,
      intervalDays,
      dueDate,
      lastReviewedAt: new Date().toISOString()
    };
  }

  /**
   * Filters mistake notebook items that are currently due for review
   */
  public getDueMistakes(mistakes: SavedMistake[]): SavedMistake[] {
    const now = new Date();
    return mistakes.filter(m => {
      // If mastered manually, not due
      if (m.mastered) return false;

      // If no schedule metadata attached yet, considered immediately due for first review
      const dueDateStr = (m as any).srsSchedule?.dueDate;
      if (!dueDateStr) return true;

      const dueDate = new Date(dueDateStr);
      return dueDate <= now;
    });
  }

  /**
   * Analyzes attempts to identify student's weakest grammatical / lexical topics
   */
  public analyzeWeakTopics(attempts: UserAttempt[], minAttempts: number = 2): WeakTopicAnalysis[] {
    const topicAggregates: Record<string, { total: number; correct: number }> = {};

    for (const attempt of attempts) {
      for (const ans of attempt.answers) {
        // Find question metadata if stored in attempt or resolve by ID
        const rawTopic = (ans as any).topicTag || (ans as any).topic || 'Chung';
        const topic = rawTopic.replace(/<[^>]*>/g, '').trim();

        if (!topicAggregates[topic]) {
          topicAggregates[topic] = { total: 0, correct: 0 };
        }
        topicAggregates[topic].total += 1;
        if (ans.isCorrect) {
          topicAggregates[topic].correct += 1;
        }
      }
    }

    const results: WeakTopicAnalysis[] = [];
    for (const [topic, data] of Object.entries(topicAggregates)) {
      if (data.total >= minAttempts) {
        const accuracyRate = data.correct / data.total;
        if (accuracyRate < 0.7) {
          results.push({
            topic,
            totalAsked: data.total,
            correctCount: data.correct,
            accuracyRate: Math.round(accuracyRate * 100) / 100,
            severity: accuracyRate < 0.4 ? 'high' : accuracyRate < 0.6 ? 'medium' : 'low'
          });
        }
      }
    }

    // Sort by lowest accuracy first, then by total questions asked
    return results.sort((a, b) => a.accuracyRate - b.accuracyRate || b.totalAsked - a.totalAsked);
  }

  /**
   * Estimates student CEFR proficiency level (A2, B1, B2, C1) based on overall test scores
   */
  public estimateCEFRLevel(attempts: UserAttempt[]): { level: CEFRLevel; confidence: number; estimatedScoreTOEIC: number } {
    if (!attempts || attempts.length === 0) {
      return { level: 'A2', confidence: 0.3, estimatedScoreTOEIC: 350 };
    }

    // Weight recent attempts higher (Exponential Decay)
    let weightedScore = 0;
    let totalWeight = 0;

    const recent = attempts.slice(0, 10);
    recent.forEach((att, idx) => {
      const weight = Math.pow(0.85, idx);
      weightedScore += att.percentage * weight;
      totalWeight += weight;
    });

    const avgPercentage = totalWeight > 0 ? weightedScore / totalWeight : 50;

    let level: CEFRLevel = 'A2';
    let estimatedScoreTOEIC = 350;

    if (avgPercentage >= 85) {
      level = 'C1';
      estimatedScoreTOEIC = 850 + Math.round((avgPercentage - 85) * 6.5);
    } else if (avgPercentage >= 70) {
      level = 'B2';
      estimatedScoreTOEIC = 650 + Math.round((avgPercentage - 70) * 13.3);
    } else if (avgPercentage >= 50) {
      level = 'B1';
      estimatedScoreTOEIC = 450 + Math.round((avgPercentage - 50) * 10);
    } else {
      level = 'A2';
      estimatedScoreTOEIC = Math.max(200, Math.round(avgPercentage * 9));
    }

    const confidence = Math.min(1.0, 0.4 + attempts.length * 0.1);

    return {
      level,
      confidence: Math.round(confidence * 100) / 100,
      estimatedScoreTOEIC: Math.min(990, estimatedScoreTOEIC)
    };
  }

  /**
   * Generates intelligent, prioritized recommendations for what the student should do next
   */
  public recommendNextAction(
    attempts: UserAttempt[],
    mistakes: SavedMistake[],
    examSets: ExamSet[]
  ): RecommendationAction {
    const dueMistakes = this.getDueMistakes(mistakes);

    // 1. Priority 1: Outstanding Due Spaced Repetition items
    if (dueMistakes.length >= 3) {
      return {
        type: 'srs_review',
        title: `Ôn tập ${dueMistakes.length} câu hỏi đến hạn`,
        reason: 'Thuật toán lặp lại ngắt quãng nhắc bạn củng cố các câu từng làm sai để khắc sâu trí nhớ dài hạn.',
        questionCount: dueMistakes.length,
        actionText: 'Bắt đầu ôn câu sai'
      };
    }

    // 2. Priority 2: Weak Topic Practice if user has made attempts
    if (attempts.length >= 2) {
      const weakTopics = this.analyzeWeakTopics(attempts);
      if (weakTopics.length > 0) {
        const topWeak = weakTopics[0];
        return {
          type: 'weak_topic_practice',
          title: `Khắc phục điểm yếu: ${topWeak.topic}`,
          reason: `Độ chính xác gần đây của bạn ở phần này chỉ đạt ${Math.round(topWeak.accuracyRate * 100)}% (${topWeak.correctCount}/${topWeak.totalAsked} câu).`,
          targetId: topWeak.topic,
          actionText: 'Luyện tập chuyên đề này'
        };
      }
    }

    // 3. Priority 3: First-time user diagnostic test
    if (attempts.length === 0) {
      const diagnosticExam = examSets.find(e => e.id.includes('diagnostic') || e.category === 'quick_quiz');
      return {
        type: 'diagnostic',
        title: 'Làm bài kiểm tra đầu vào (Diagnostic Test)',
        reason: 'Đánh giá nhanh trình độ hiện tại và phân loại thang điểm CEFR trong 15 phút.',
        targetId: diagnosticExam?.id || examSets[0]?.id,
        actionText: 'Bắt đầu kiểm tra'
      };
    }

    // 4. Default: Next recommended full exam
    const completedExamIds = new Set(attempts.map(a => a.examSetId));
    const nextUnattempted = examSets.find(e => !completedExamIds.has(e.id));
    const target = nextUnattempted || examSets[0];

    return {
      type: 'full_exam',
      title: `Thử sức với đề thi: ${target.title}`,
      reason: 'Tiếp tục luyện tập đề mới để nâng cao phản xạ và mở rộng vốn từ vựng học thuật.',
      targetId: target.id,
      actionText: 'Làm đề thi này'
    };
  }
}

export const learningEngine = new LearningEngine();
