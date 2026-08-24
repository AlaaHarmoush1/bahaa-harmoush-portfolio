import { useRef } from "react";
import { useModal } from "../../hooks/useModal";
import { useKeyboardDismiss } from "../../hooks/useKeyboardDismiss";
import { Icon } from "./Icon";
import styles from "../../styles/Modal.module.css";

// Generic accessible overlay: focus trap, scroll lock, ESC + backdrop-click to close.
// PostModal and StoryViewer both render their content inside this shell.
export function Modal({ isOpen, onClose, labelledBy, children, variant = "default" }) {
  const containerRef = useRef(null);

  useModal(isOpen, containerRef);
  useKeyboardDismiss(isOpen, onClose);

  if (!isOpen) return null;

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <div className={styles.backdrop} onMouseDown={handleBackdropClick}>
      <div
        ref={containerRef}
        className={`${styles.dialog} ${variant === "story" ? styles.storyVariant : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          <Icon name="close" size={22} />
        </button>
        {children}
      </div>
    </div>
  );
}
