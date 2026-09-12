import { useState, useEffect, useRef, useCallback } from 'react';

interface UseQuizTimerOptions {
  initialSeconds?: number;
  durationMinutes?: number;
  isCountDown?: boolean;
  onTimeUp?: () => void;
  autoStart?: boolean;
}

export function useQuizTimer({
  initialSeconds = 0,
  durationMinutes,
  isCountDown = false,
  onTimeUp,
  autoStart = true
}: UseQuizTimerOptions = {}) {
  const [timeElapsed, setTimeElapsed] = useState<number>(initialSeconds);
  const [isPaused, setIsPaused] = useState<boolean>(!autoStart);

  const totalDurationSeconds = durationMinutes ? durationMinutes * 60 : 0;
  
  // Track start and accumulated elapsed time using timestamps for drift-free timing
  const startTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(initialSeconds);
  const onTimeUpRef = useRef(onTimeUp);

  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    if (isPaused) {
      accumulatedTimeRef.current = timeElapsed;
      return;
    }

    startTimeRef.current = Date.now() - accumulatedTimeRef.current * 1000;

    const intervalId = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setTimeElapsed(elapsed);

      if (isCountDown && totalDurationSeconds > 0 && elapsed >= totalDurationSeconds) {
        clearInterval(intervalId);
        if (onTimeUpRef.current) {
          onTimeUpRef.current();
        }
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [isPaused, isCountDown, totalDurationSeconds, timeElapsed]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);
  const togglePause = useCallback(() => setIsPaused(prev => !prev), []);

  const timeRemaining = totalDurationSeconds > 0
    ? Math.max(0, totalDurationSeconds - timeElapsed)
    : 0;

  return {
    timeElapsed,
    timeRemaining,
    isPaused,
    pause,
    resume,
    togglePause
  };
}
