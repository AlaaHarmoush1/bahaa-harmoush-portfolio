import { HighlightBubble } from "./HighlightBubble";
import styles from "../../styles/HighlightsRow.module.css";

export function HighlightsRow({ highlights, onOpenHighlight }) {
  return (
    <nav className={styles.row} aria-label="Service highlights">
      {highlights.map((highlight, index) => (
        <HighlightBubble
          key={highlight.id}
          highlight={highlight}
          onOpen={() => onOpenHighlight(index)}
        />
      ))}
    </nav>
  );
}
