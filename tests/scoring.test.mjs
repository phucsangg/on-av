import test from 'node:test';
import assert from 'node:assert/strict';

function calculateQuizScore(questions, userAnswers) {
  let correctCount = 0;
  let answeredCount = 0;

  for (const q of questions) {
    const userAns = userAnswers[q.id];
    if (userAns) {
      answeredCount++;
      if (userAns === q.correctAnswer) {
        correctCount++;
      }
    }
  }

  const total = questions.length;
  const rawScore = total > 0 ? (correctCount / total) * 10 : 0;
  const roundedScore = Math.round(rawScore * 100) / 100;
  const accuracyPercentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  return {
    correctCount,
    answeredCount,
    total,
    score: roundedScore,
    accuracyPercentage
  };
}

test('calculateQuizScore: calculates perfect score correctly', () => {
  const mockQuestions = [
    { id: 'q1', correctAnswer: 'A' },
    { id: 'q2', correctAnswer: 'B' },
    { id: 'q3', correctAnswer: 'C' }
  ];
  const userAnswers = { q1: 'A', q2: 'B', q3: 'C' };

  const result = calculateQuizScore(mockQuestions, userAnswers);
  assert.equal(result.correctCount, 3);
  assert.equal(result.answeredCount, 3);
  assert.equal(result.score, 10);
  assert.equal(result.accuracyPercentage, 100);
});

test('calculateQuizScore: handles partial answers and incorrect choices', () => {
  const mockQuestions = [
    { id: 'q1', correctAnswer: 'A' },
    { id: 'q2', correctAnswer: 'B' },
    { id: 'q3', correctAnswer: 'C' },
    { id: 'q4', correctAnswer: 'D' }
  ];
  const userAnswers = { q1: 'A', q2: 'C' }; // q1 correct, q2 wrong, q3 & q4 unanswered

  const result = calculateQuizScore(mockQuestions, userAnswers);
  assert.equal(result.correctCount, 1);
  assert.equal(result.answeredCount, 2);
  assert.equal(result.score, 2.5);
  assert.equal(result.accuracyPercentage, 25);
});

test('calculateQuizScore: returns zero when no answers are provided', () => {
  const mockQuestions = [
    { id: 'q1', correctAnswer: 'A' },
    { id: 'q2', correctAnswer: 'B' }
  ];
  const userAnswers = {};

  const result = calculateQuizScore(mockQuestions, userAnswers);
  assert.equal(result.correctCount, 0);
  assert.equal(result.answeredCount, 0);
  assert.equal(result.score, 0);
  assert.equal(result.accuracyPercentage, 0);
});
