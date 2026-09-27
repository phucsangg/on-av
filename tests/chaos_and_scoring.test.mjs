import test from 'node:test';
import assert from 'node:assert/strict';

// Helper to simulate hand-checked scoring calculation
function calculateHandMetrics(totalQuestions, answers) {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const unansweredCount = answers.filter(a => a.selectedAnswer === null || a.selectedAnswer === undefined).length;
  const incorrectCount = answers.filter(a => a.selectedAnswer !== null && a.selectedAnswer !== undefined && !a.isCorrect).length;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return {
    correctCount,
    unansweredCount,
    incorrectCount,
    totalQuestions,
    percentage
  };
}

test('Hand Math Scoring: 10 questions (7 correct, 2 wrong, 1 unanswered)', () => {
  const mockAnswers = [
    { questionId: 'q1', selectedAnswer: 'A', isCorrect: true },
    { questionId: 'q2', selectedAnswer: 'B', isCorrect: true },
    { questionId: 'q3', selectedAnswer: 'C', isCorrect: true },
    { questionId: 'q4', selectedAnswer: 'D', isCorrect: true },
    { questionId: 'q5', selectedAnswer: 'A', isCorrect: true },
    { questionId: 'q6', selectedAnswer: 'B', isCorrect: true },
    { questionId: 'q7', selectedAnswer: 'C', isCorrect: true },
    { questionId: 'q8', selectedAnswer: 'D', isCorrect: false },
    { questionId: 'q9', selectedAnswer: 'A', isCorrect: false },
    { questionId: 'q10', selectedAnswer: null, isCorrect: false },
  ];

  const metrics = calculateHandMetrics(10, mockAnswers);
  assert.equal(metrics.correctCount, 7);
  assert.equal(metrics.incorrectCount, 2);
  assert.equal(metrics.unansweredCount, 1);
  assert.equal(metrics.percentage, 70);
});

test('Hand Math Scoring: Edge Cases (0/100, 100/100, 0 total)', () => {
  // 0 / 100
  const zeroAnswers = Array.from({ length: 100 }, (_, i) => ({
    questionId: `q${i}`,
    selectedAnswer: null,
    isCorrect: false
  }));
  const zeroMetrics = calculateHandMetrics(100, zeroAnswers);
  assert.equal(zeroMetrics.percentage, 0);
  assert.equal(zeroMetrics.unansweredCount, 100);
  assert.equal(zeroMetrics.correctCount, 0);

  // 100 / 100
  const perfectAnswers = Array.from({ length: 100 }, (_, i) => ({
    questionId: `q${i}`,
    selectedAnswer: 'A',
    isCorrect: true
  }));
  const perfectMetrics = calculateHandMetrics(100, perfectAnswers);
  assert.equal(perfectMetrics.percentage, 100);
  assert.equal(perfectMetrics.correctCount, 100);

  // 0 total questions
  const emptyMetrics = calculateHandMetrics(0, []);
  assert.equal(emptyMetrics.percentage, 0);
  assert.ok(!Number.isNaN(emptyMetrics.percentage));
});

test('LocalStorage Chaos: Sanitize corrupted storage inputs safely', () => {
  // Mock safeGet logic
  function parseAttempts(rawVal) {
    if (!rawVal) return [];
    try {
      const parsed = JSON.parse(rawVal);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function parseStats(rawVal) {
    const defaultStats = {
      totalTestsTaken: 0,
      totalQuestionsAnswered: 0,
      correctAnswersCount: 0,
      streakDays: 0,
      lastActiveDate: '',
      skillAccuracy: {}
    };
    if (!rawVal) return defaultStats;
    try {
      const val = JSON.parse(rawVal);
      if (!val || typeof val !== 'object' || Array.isArray(val)) return defaultStats;
      return {
        totalTestsTaken: Math.max(0, Number(val.totalTestsTaken) || 0),
        totalQuestionsAnswered: Math.max(0, Number(val.totalQuestionsAnswered) || 0),
        correctAnswersCount: Math.max(0, Number(val.correctAnswersCount) || 0),
        streakDays: Math.max(0, Number(val.streakDays) || 0),
        lastActiveDate: typeof val.lastActiveDate === 'string' ? val.lastActiveDate : '',
        skillAccuracy: (val.skillAccuracy && typeof val.skillAccuracy === 'object' && !Array.isArray(val.skillAccuracy)) ? val.skillAccuracy : {}
      };
    } catch {
      return defaultStats;
    }
  }

  // Corrupted attempts tests
  assert.deepEqual(parseAttempts('invalid json string {[{'), []);
  assert.deepEqual(parseAttempts('{"notAnArray": true}'), []);
  assert.deepEqual(parseAttempts('12345'), []);

  // Corrupted stats tests
  assert.deepEqual(parseStats('null'), {
    totalTestsTaken: 0,
    totalQuestionsAnswered: 0,
    correctAnswersCount: 0,
    streakDays: 0,
    lastActiveDate: '',
    skillAccuracy: {}
  });
  assert.deepEqual(parseStats('["an", "array"]'), {
    totalTestsTaken: 0,
    totalQuestionsAnswered: 0,
    correctAnswersCount: 0,
    streakDays: 0,
    lastActiveDate: '',
    skillAccuracy: {}
  });
  assert.deepEqual(parseStats('{"totalTestsTaken": "notANumber", "streakDays": -5}'), {
    totalTestsTaken: 0,
    totalQuestionsAnswered: 0,
    correctAnswersCount: 0,
    streakDays: 0,
    lastActiveDate: '',
    skillAccuracy: {}
  });
});
