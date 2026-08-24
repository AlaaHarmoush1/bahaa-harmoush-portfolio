import styles from "../../styles/HighlightBubble.module.css";

export function HighlightBubble({ highlight, onOpen }) {
  return (
    <button
      type="button"
      className={styles.bubble}
      onClick={onOpen}
      aria-label={`View ${highlight.label} highlights`}
    >
      <span className={styles.ring}>
        <img src={highlight.coverImage} alt="" className={styles.cover} />
      </span>
      <span className={styles.label}>{highlight.label}</span>
    </button>
  );
}
