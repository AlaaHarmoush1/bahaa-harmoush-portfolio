import { Icon } from "../common/Icon";
import styles from "../../styles/PostThumbnail.module.css";

export function PostThumbnail({ post, onOpen }) {
  return (
    <button
      type="button"
      className={styles.thumbnail}
      onClick={onOpen}
      aria-label={`Open case study: ${post.caption}`}
    >
      <img
        src={post.image}
        alt={post.altText}
        className={styles.image}
        loading="lazy"
        width={400}
        height={400}
      />
      {post.type === "reel" && (
        <span className={styles.reelBadge}>
          <Icon name="reel" size={14} filled />
        </span>
      )}
      <div className={styles.overlay}>
        <span className={styles.overlayStat}>
          <Icon name="heart" size={18} filled />
          {post.metrics.likeLabel}
        </span>
        <span className={styles.overlayStat}>
          <Icon name="comment" size={18} filled />
          {post.metrics.commentLabel}
        </span>
      </div>
    </button>
  );
}
