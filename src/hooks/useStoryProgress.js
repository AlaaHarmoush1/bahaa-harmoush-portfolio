import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_DURATION_MS = 6000;

// Drives an Instagram-style story viewer: per-slide progress (0-1), auto-advance,
// manual next/prev, and pause (e.g. while the user is pressing down on the story).
export function useStoryProgress(slideCount, { onComplete, active = true } = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const frameRef = useRef(null);
  const startRef = useRef(null);
  const elapsedRef = useRef(0);

  const goTo = useCallback(
    (index) => {
      if (index < 0) {
        setActiveIndex(0);
      } else if (index >= slideCount) {
        onComplete?.();
      } else {
        setActiveIndex(index);
      }
      elapsedRef.current = 0;
      setProgress(0);
    },
    [slideCount, onComplete]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!active || isPaused) {
      startRef.current = null;
      return undefined;
    }

    function tick(timestamp) {
      if (startRef.current === null) {
        startRef.current = timestamp - elapsedRef.current;
      }
      const elapsed = timestamp - startRef.current;
      elapsedRef.current = elapsed;
      const ratio = Math.min(elapsed / SLIDE_DURATION_MS, 1);
      setProgress(ratio);

      if (ratio >= 1) {
        startRef.current = null;
        elapsedRef.current = 0;
        goNext();
        return;
      }
      frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isPaused, activeIndex]);

  return {
    activeIndex,
    progress,
    isPaused,
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
    goNext,
    goPrev,
    goTo,
  };
}
