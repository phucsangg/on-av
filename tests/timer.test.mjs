import test from 'node:test';
import assert from 'node:assert/strict';

function computeTimeElapsed(startTimeMs, nowMs) {
  if (nowMs <= startTimeMs) return 0;
  return Math.floor((nowMs - startTimeMs) / 1000);
}

function computeTimeRemaining(totalDurationSeconds, elapsedSeconds) {
  if (totalDurationSeconds <= 0) return 0;
  return Math.max(0, totalDurationSeconds - elapsedSeconds);
}

test('timer logic: computes drift-free elapsed seconds from timestamps', () => {
  const start = 1700000000000;
  const now = start + 54321; // 54.321 seconds later

  const elapsed = computeTimeElapsed(start, now);
  assert.equal(elapsed, 54);
});

test('timer logic: computes countdown remaining time correctly', () => {
  const durationSeconds = 50 * 60; // 3000 seconds
  const elapsed = 1250;

  const remaining = computeTimeRemaining(durationSeconds, elapsed);
  assert.equal(remaining, 1750);
});

test('timer logic: clamps remaining time at 0 on timeout', () => {
  const durationSeconds = 300;
  const elapsed = 350;

  const remaining = computeTimeRemaining(durationSeconds, elapsed);
  assert.equal(remaining, 0);
});
