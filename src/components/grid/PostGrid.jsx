import { PostThumbnail } from "./PostThumbnail";
import styles from "../../styles/PostGrid.module.css";

export function PostGrid({ posts, tabId, onOpenPost }) {
  if (posts.length === 0) {
    return (
      <div id={`panel-${tabId}`} role="tabpanel" aria-labelledby={`tab-${tabId}`} className={styles.empty}>
        Nothing here yet — check back soon.
      </div>
    );
  }

  return (
    <div
      id={`panel-${tabId}`}
      role="tabpanel"
      aria-labelledby={`tab-${tabId}`}
      className={styles.grid}
    >
      {posts.map((post) => (
        <PostThumbnail key={post.id} post={post} onOpen={() => onOpenPost(post)} />
      ))}
    </div>
  );
}
