import { useCallback, useEffect, useRef } from "react";
import { Modal } from "../common/Modal";
import { useStoryProgress } from "../../hooks/useStoryProgress";
import styles from "../../styles/StoryViewer.module.css";

const SLIDE_TYPE_LABEL = {
  stat: "By the numbers",
  tool: "Toolkit",
  quote: "Client says",
  credential: "Credential",
};

// A press shorter than this is treated as a tap (navigate); longer counts as
// a hold (pause on the current slide so the reader has time to finish it).
const HOLD_THRESHOLD_MS = 180;

function StoryContent({ highlight, onCompleteHighlight, onPrevHighlight }) {
  const {
    activeIndex: slideIndex,
    progress,
    goNext,
    goPrev,
    pause,
    resume,
  } = useStoryProgress(highlight.slides.length, {
    onComplete: onCompleteHighlight,
    active: true,
  });

  const slide = highlight.slides[slideIndex];

  const handlePrev = useCallback(() => {
    if (slideIndex === 0) {
      onPrevHighlight();
    } else {
      goPrev();
    }
  }, [slideIndex, goPrev, onPrevHighlight]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") handlePrev();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, handlePrev]);

  // Press-and-hold (anywhere in the story, including the left/right tap
  // zones) pauses playback; a quick tap still navigates. wasHoldRef lets a
  // nav button's click handler (which fires right after pointerup) tell the
  // two apart and swallow the click that would otherwise follow a hold.
  const holdTimerRef = useRef(null);
  const wasHoldRef = useRef(false);

  const clearHoldTimer = useCallback(() => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  }, []);

  const handlePressStart = useCallback(() => {
    wasHoldRef.current = false;
    clearHoldTimer();
    holdTimerRef.current = setTimeout(() => {
      wasHoldRef.current = true;
      pause();
    }, HOLD_THRESHOLD_MS);
  }, [clearHoldTimer, pause]);

  const handlePressEnd = useCallback(() => {
    clearHoldTimer();
    if (wasHoldRef.current) resume();
  }, [clearHoldTimer, resume]);

  const withHoldGuard = useCallback((navigate) => {
    return () => {
      if (wasHoldRef.current) {
        wasHoldRef.current = false;
        return;
      }
      navigate();
    };
  }, []);

  return (
    <div
      className={styles.storyContent}
      onPointerDown={handlePressStart}
      onPointerUp={handlePressEnd}
      onPointerLeave={handlePressEnd}
      onPointerCancel={handlePressEnd}
    >
      <div className={styles.progressRow}>
        {highlight.slides.map((s, i) => (
          <div key={s.id} className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{
                width:
                  i < slideIndex ? "100%" : i === slideIndex ? `${progress * 100}%` : "0%",
              }}
            />
          </div>
        ))}
      </div>

      <div className={styles.storyHeader}>
        <img src={highlight.coverImage} alt="" className={styles.storyAvatar} />
        <span className={styles.storyLabel}>{highlight.label}</span>
      </div>

      <div className={styles.slideBody}>
        <span className={styles.slideBadge}>{SLIDE_TYPE_LABEL[slide.type] ?? slide.type}</span>
        {slide.image && (
          <img src={slide.image} alt={slide.imageAlt ?? slide.heading} className={styles.slideImage} />
        )}
        <h3 id="story-viewer-heading" className={styles.slideHeading}>
          {slide.heading}
        </h3>
        <p className={styles.slideText}>{slide.body}</p>
      </div>

      <button
        type="button"
        className={`${styles.navZone} ${styles.navLeft}`}
        onClick={withHoldGuard(handlePrev)}
        aria-label="Previous slide"
      />
      <button
        type="button"
        className={`${styles.navZone} ${styles.navRight}`}
        onClick={withHoldGuard(goNext)}
        aria-label="Next slide"
      />
    </div>
  );
}

export function StoryViewer({ highlights, activeIndex, onClose, onNavigate }) {
  const isOpen = activeIndex !== null;
  const highlight = isOpen ? highlights[activeIndex] : null;

  function handleCompleteHighlight() {
    if (activeIndex < highlights.length - 1) {
      onNavigate(activeIndex + 1);
    } else {
      onClose();
    }
  }

  function handlePrevHighlight() {
    if (activeIndex > 0) onNavigate(activeIndex - 1);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="story-viewer-heading" variant="story">
      {highlight && (
        <StoryContent
          key={highlight.id}
          highlight={highlight}
          onCompleteHighlight={handleCompleteHighlight}
          onPrevHighlight={handlePrevHighlight}
        />
      )}
    </Modal>
  );
}
