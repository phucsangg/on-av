import test from 'node:test';
import assert from 'node:assert/strict';

// Import learning engine logic
const DEFAULT_SRS_INTERVALS = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30
};

function calculateNextReview(currentBox = 1, rating) {
  let nextBox = currentBox;
  switch (rating) {
    case 'again':
      nextBox = 1;
      break;
    case 'hard':
      nextBox = Math.max(1, currentBox);
      break;
    case 'good':
      nextBox = Math.min(5, currentBox + 1);
      break;
    case 'easy':
      nextBox = Math.min(5, currentBox + 2);
      break;
  }
  const intervalDays = DEFAULT_SRS_INTERVALS[nextBox] || 1;
  const dueDate = new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000).toISOString();
  return { box: nextBox, intervalDays, dueDate };
}

function estimateCEFRLevel(attempts) {
  if (!attempts || attempts.length === 0) {
    return { level: 'A2', confidence: 0.3, estimatedScoreTOEIC: 350 };
  }
  let weightedScore = 0;
  let totalWeight = 0;
  const recent = attempts.slice(0, 10);
  recent.forEach((att, idx) => {
    const weight = Math.pow(0.85, idx);
    weightedScore += att.percentage * weight;
    totalWeight += weight;
  });
  const avg = totalWeight > 0 ? weightedScore / totalWeight : 50;

  let level = 'A2';
  let estimatedScoreTOEIC = 350;
  if (avg >= 85) {
    level = 'C1';
    estimatedScoreTOEIC = 850 + Math.round((avg - 85) * 6.5);
  } else if (avg >= 70) {
    level = 'B2';
    estimatedScoreTOEIC = 650 + Math.round((avg - 70) * 13.3);
  } else if (avg >= 50) {
    level = 'B1';
    estimatedScoreTOEIC = 450 + Math.round((avg - 50) * 10);
  } else {
    level = 'A2';
    estimatedScoreTOEIC = Math.max(200, Math.round(avg * 9));
  }
  return { level, estimatedScoreTOEIC: Math.min(990, estimatedScoreTOEIC) };
}

function analyzeWeakTopics(attempts) {
  const topicAggregates = {};
  for (const attempt of attempts) {
    for (const ans of attempt.answers) {
      const topic = ans.topicTag || 'Chung';
      if (!topicAggregates[topic]) topicAggregates[topic] = { total: 0, correct: 0 };
      topicAggregates[topic].total += 1;
      if (ans.isCorrect) topicAggregates[topic].correct += 1;
    }
  }
  const results = [];
  for (const [topic, data] of Object.entries(topicAggregates)) {
    if (data.total >= 2) {
      const rate = data.correct / data.total;
      if (rate < 0.7) {
        results.push({
          topic,
          accuracyRate: Math.round(rate * 100) / 100,
          severity: rate < 0.4 ? 'high' : rate < 0.6 ? 'medium' : 'low'
        });
      }
    }
  }
  return results.sort((a, b) => a.accuracyRate - b.accuracyRate);
}

test('SRS Leitner Algorithm: Schedule calculation across ratings', () => {
  // Again always resets to Box 1 (1 day)
  const resAgain = calculateNextReview(3, 'again');
  assert.equal(resAgain.box, 1);
  assert.equal(resAgain.intervalDays, 1);

  // Hard keeps current box
  const resHard = calculateNextReview(2, 'hard');
  assert.equal(resHard.box, 2);
  assert.equal(resHard.intervalDays, 3);

  // Good advances by 1 box (Box 1 -> Box 2: 3 days)
  const resGood = calculateNextReview(1, 'good');
  assert.equal(resGood.box, 2);
  assert.equal(resGood.intervalDays, 3);

  // Good advances Box 2 -> Box 3: 7 days
  const resGood3 = calculateNextReview(2, 'good');
  assert.equal(resGood3.box, 3);
  assert.equal(resGood3.intervalDays, 7);

  // Easy jumps 2 boxes (Box 1 -> Box 3: 7 days)
  const resEasy = calculateNextReview(1, 'easy');
  assert.equal(resEasy.box, 3);
  assert.equal(resEasy.intervalDays, 7);

  // Ceiling check: Box 5 cannot exceed Box 5 (30 days)
  const resCeil = calculateNextReview(5, 'easy');
  assert.equal(resCeil.box, 5);
  assert.equal(resCeil.intervalDays, 30);
});

test('CEFR Level & TOEIC Estimation: Correct score boundaries', () => {
  // Perfect score
  const resC1 = estimateCEFRLevel([{ percentage: 95 }, { percentage: 90 }]);
  assert.equal(resC1.level, 'C1');
  assert.ok(resC1.estimatedScoreTOEIC >= 850);

  // B2 score (75%)
  const resB2 = estimateCEFRLevel([{ percentage: 75 }, { percentage: 78 }]);
  assert.equal(resB2.level, 'B2');
  assert.ok(resB2.estimatedScoreTOEIC >= 650 && resB2.estimatedScoreTOEIC < 850);

  // B1 score (55%)
  const resB1 = estimateCEFRLevel([{ percentage: 55 }, { percentage: 60 }]);
  assert.equal(resB1.level, 'B1');
  assert.ok(resB1.estimatedScoreTOEIC >= 450 && resB1.estimatedScoreTOEIC < 650);

  // A2 score (30%)
  const resA2 = estimateCEFRLevel([{ percentage: 30 }, { percentage: 35 }]);
  assert.equal(resA2.level, 'A2');
  assert.ok(resA2.estimatedScoreTOEIC < 450);
});

test('Weak Topic Analyzer: Correctly groups and ranks low-accuracy topics', () => {
  const mockAttempts = [
    {
      answers: [
        { topicTag: 'Thì Quá khứ', isCorrect: false },
        { topicTag: 'Thì Quá khứ', isCorrect: false },
        { topicTag: 'Thì Quá khứ', isCorrect: true },
        { topicTag: 'Mệnh đề quan hệ', isCorrect: true },
        { topicTag: 'Mệnh đề quan hệ', isCorrect: true },
        { topicTag: 'Mệnh đề quan hệ', isCorrect: true },
        { topicTag: 'Câu điều kiện', isCorrect: false },
        { topicTag: 'Câu điều kiện', isCorrect: false }
      ]
    }
  ];

  const weak = analyzeWeakTopics(mockAttempts);
  assert.equal(weak.length, 2);
  // 'Câu điều kiện' (0/2 = 0%) should rank worst with high severity
  assert.equal(weak[0].topic, 'Câu điều kiện');
  assert.equal(weak[0].severity, 'high');
  assert.equal(weak[0].accuracyRate, 0);

  // 'Thì Quá khứ' (1/3 = 33%)
  assert.equal(weak[1].topic, 'Thì Quá khứ');
  assert.equal(weak[1].severity, 'high');
});
