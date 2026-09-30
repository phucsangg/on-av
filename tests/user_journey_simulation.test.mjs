import test from 'node:test';
import assert from 'node:assert/strict';

// In-Memory Storage Simulator replicating storageService logic
class StorageSimulator {
  constructor() {
    this.store = new Map();
  }

  getItem(key) {
    return this.store.get(key) || null;
  }

  setItem(key, value) {
    this.store.set(key, String(value));
  }

  removeItem(key) {
    this.store.delete(key);
  }

  clear() {
    this.store.clear();
  }
}

// User Journey State Machine Simulator
class QuizSimulator {
  constructor(exam, storage = new StorageSimulator()) {
    this.exam = exam;
    this.storage = storage;
    this.currentIndex = 0;
    this.answers = new Map();
    this.flagged = new Set();
    this.eliminated = new Map(); // questionId -> Set of eliminated option keys
    this.isSubmitted = false;
    this.startTime = Date.now();
    this.elapsedSeconds = 0;
    this.isSubmitting = false;
  }

  // Answer selection (A -> B -> C -> D)
  selectAnswer(questionId, optionKey) {
    if (this.isSubmitted) return;
    this.answers.set(questionId, optionKey);
    this.autoSave();
  }

  // Eliminate option (strikethrough scratchpad)
  toggleElimination(questionId, optionKey) {
    if (this.isSubmitted) return;
    if (!this.eliminated.has(questionId)) {
      this.eliminated.set(questionId, new Set());
    }
    const set = this.eliminated.get(questionId);
    if (set.has(optionKey)) {
      set.delete(optionKey);
    } else {
      set.add(optionKey);
    }
  }

  // Flag toggle
  toggleFlag(questionId) {
    if (this.isSubmitted) return;
    if (this.flagged.has(questionId)) {
      this.flagged.delete(questionId);
    } else {
      this.flagged.add(questionId);
    }
    this.autoSave();
  }

  // Navigation
  goToNext() {
    if (this.currentIndex < this.exam.questions.length - 1) {
      this.currentIndex++;
      this.autoSave();
    }
  }

  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.autoSave();
    }
  }

  jumpTo(index) {
    if (index >= 0 && index < this.exam.questions.length) {
      this.currentIndex = index;
      this.autoSave();
    }
  }

  // Throttled / State Change Auto-Save
  autoSave() {
    const session = {
      examId: this.exam.id,
      examTitle: this.exam.title,
      currentIndex: this.currentIndex,
      answers: Array.from(this.answers.entries()).map(([qId, ans]) => ({
        questionId: qId,
        selectedAnswer: ans,
        isCorrect: ans === this.exam.questions.find(q => q.id === qId)?.correctAnswer
      })),
      flagged: Array.from(this.flagged),
      timeElapsedSeconds: this.elapsedSeconds,
      timestamp: Date.now()
    };
    this.storage.setItem('on_av_active_session', JSON.stringify(session));
  }

  // Reload / Resume simulation
  static resume(exam, storage) {
    const raw = storage.getItem('on_av_active_session');
    if (!raw) return null;
    try {
      const data = JSON.parse(raw);
      if (data.examId !== exam.id) return null;
      const sim = new QuizSimulator(exam, storage);
      sim.currentIndex = data.currentIndex || 0;
      sim.elapsedSeconds = data.timeElapsedSeconds || 0;
      for (const a of (data.answers || [])) {
        sim.answers.set(a.questionId, a.selectedAnswer);
      }
      for (const f of (data.flagged || [])) {
        sim.flagged.add(f);
      }
      return sim;
    } catch {
      return null;
    }
  }

  // Submit with double-submission protection
  submit() {
    if (this.isSubmitting || this.isSubmitted) return null;
    this.isSubmitting = true;
    this.isSubmitted = true;

    const totalQuestions = this.exam.questions.length;
    let correctCount = 0;
    const answerRecords = this.exam.questions.map(q => {
      const selected = this.answers.get(q.id) || null;
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        selectedAnswer: selected,
        isCorrect
      };
    });

    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const result = {
      examId: this.exam.id,
      examTitle: this.exam.title,
      totalQuestions,
      correctCount,
      incorrectCount: totalQuestions - correctCount - answerRecords.filter(a => a.selectedAnswer === null).length,
      unansweredCount: answerRecords.filter(a => a.selectedAnswer === null).length,
      percentage,
      timeSpentSeconds: this.elapsedSeconds,
      answers: answerRecords
    };

    // Clear active session
    this.storage.removeItem('on_av_active_session');
    this.isSubmitting = false;
    return result;
  }
}

// -----------------------------------------------------------------------------
// TEST SUITE: Real User Simulation
// -----------------------------------------------------------------------------

const mockExam50 = {
  id: 'huit-toeic-tong-hop-2026',
  title: 'Đề Luyện HUIT TOEIC Tổng Hợp Nâng Cao 2026',
  questions: Array.from({ length: 50 }, (_, i) => ({
    id: `q-${i + 1}`,
    question: `Sample question ${i + 1}`,
    options: { A: 'Opt A', B: 'Opt B', C: 'Opt C', D: 'Opt D' },
    correctAnswer: i % 4 === 0 ? 'A' : i % 4 === 1 ? 'B' : i % 4 === 2 ? 'C' : 'D',
    explanation: 'Detailed explanation',
    topicTag: 'Grammar - Tenses'
  }))
};

test('Scenario 1: Fresh User Normal Flow (Select → Answer → Flag → Submit → Score)', () => {
  const storage = new StorageSimulator();
  const sim = new QuizSimulator(mockExam50, storage);

  // Q1: Select A, change to B
  sim.selectAnswer('q-1', 'A');
  assert.equal(sim.answers.get('q-1'), 'A');
  sim.selectAnswer('q-1', 'B');
  assert.equal(sim.answers.get('q-1'), 'B', 'User successfully changed answer');

  // Q1: Flag it
  sim.toggleFlag('q-1');
  assert.equal(sim.flagged.has('q-1'), true);

  // Q1: Eliminate distractor D
  sim.toggleElimination('q-1', 'D');
  assert.equal(sim.eliminated.get('q-1')?.has('D'), true);

  // Navigate to Q2
  sim.goToNext();
  assert.equal(sim.currentIndex, 1);
  sim.selectAnswer('q-2', 'B'); // Correct for i=1

  // Navigate to Q3
  sim.goToNext();
  sim.selectAnswer('q-3', 'C'); // Correct for i=2

  // Submit test
  const result = sim.submit();
  assert.notEqual(result, null);
  assert.equal(result.totalQuestions, 50);
  assert.equal(result.unansweredCount, 47);
  assert.equal(result.correctCount, 2); // q-2 (B) & q-3 (C) are correct; q-1 (correct was A, user selected B)
  assert.equal(result.percentage, 4); // 2/50 = 4%
  assert.equal(storage.getItem('on_av_active_session'), null, 'Session cleared upon submit');
});

test('Scenario 2: Careless User Mid-Exam Refresh & Resume', () => {
  const storage = new StorageSimulator();
  const sim = new QuizSimulator(mockExam50, storage);

  sim.selectAnswer('q-1', 'A');
  sim.selectAnswer('q-2', 'B');
  sim.toggleFlag('q-2');
  sim.goToNext(); // At Q2
  sim.goToNext(); // At Q3
  sim.elapsedSeconds = 125;
  sim.autoSave();

  // User accidentally presses F5 / reloads
  const resumedSim = QuizSimulator.resume(mockExam50, storage);
  assert.notEqual(resumedSim, null, 'Session must resume');
  assert.equal(resumedSim.currentIndex, 2, 'Must resume at Question 3');
  assert.equal(resumedSim.answers.get('q-1'), 'A', 'Answer Q1 preserved');
  assert.equal(resumedSim.answers.get('q-2'), 'B', 'Answer Q2 preserved');
  assert.equal(resumedSim.flagged.has('q-2'), true, 'Flag on Q2 preserved');
  assert.equal(resumedSim.elapsedSeconds, 125, 'Timer preserved');
});

test('Scenario 3: Double-Click and Rapid Submit Guard', () => {
  const storage = new StorageSimulator();
  const sim = new QuizSimulator(mockExam50, storage);

  sim.selectAnswer('q-1', 'A');
  
  // Rapid double click submit
  const res1 = sim.submit();
  const res2 = sim.submit();

  assert.notEqual(res1, null, 'First submit succeeds');
  assert.equal(res2, null, 'Second rapid submit blocked by debouncing guard');
});

test('Scenario 4: Navigation Boundaries (Q1 Previous & QLast Next)', () => {
  const storage = new StorageSimulator();
  const sim = new QuizSimulator(mockExam50, storage);

  // At Q1, click Previous
  sim.goToPrevious();
  assert.equal(sim.currentIndex, 0, 'Cannot go before Q1');

  // Jump to last question
  sim.jumpTo(49);
  assert.equal(sim.currentIndex, 49);

  // At QLast, click Next
  sim.goToNext();
  assert.equal(sim.currentIndex, 49, 'Cannot go past last question');
});

test('Scenario 5: Session Conflict Detection When Switching Exam', () => {
  const storage = new StorageSimulator();
  const simA = new QuizSimulator(mockExam50, storage);
  simA.selectAnswer('q-1', 'A');
  simA.autoSave();

  const savedRaw = storage.getItem('on_av_active_session');
  assert.notEqual(savedRaw, null);
  const sessionData = JSON.parse(savedRaw);

  const anotherExam = { id: 'bac-ninh-2026', title: 'Đề Bắc Ninh 2026' };
  const hasConflict = sessionData && sessionData.examId !== anotherExam.id;
  assert.equal(hasConflict, true, 'System detects conflict with another pending exam');
});

test('Scenario 6: Perfect Score (50/50 = 100%) and Zero Score (0/50 = 0%)', () => {
  const storage = new StorageSimulator();
  
  // Perfect run
  const simPerfect = new QuizSimulator(mockExam50, storage);
  for (const q of mockExam50.questions) {
    simPerfect.selectAnswer(q.id, q.correctAnswer);
  }
  const perfResult = simPerfect.submit();
  assert.equal(perfResult.correctCount, 50);
  assert.equal(perfResult.unansweredCount, 0);
  assert.equal(perfResult.percentage, 100);

  // Zero run (all unanswered)
  const simZero = new QuizSimulator(mockExam50, storage);
  const zeroResult = simZero.submit();
  assert.equal(zeroResult.correctCount, 0);
  assert.equal(zeroResult.unansweredCount, 50);
  assert.equal(zeroResult.percentage, 0);
  assert.equal(Number.isNaN(zeroResult.percentage), false);
});
