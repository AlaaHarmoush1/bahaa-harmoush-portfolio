import { Icon } from "../common/Icon";
import styles from "../../styles/ModalMetrics.module.css";

export function ModalMetrics({ metrics }) {
  return (
    <div className={styles.metrics}>
      <span className={styles.metric}>
        <Icon name="heart" size={22} filled />
        <span>{metrics.likeLabel}</span>
      </span>
      <span className={styles.metric}>
        <Icon name="comment" size={22} filled />
        <span>{metrics.commentLabel}</span>
      </span>
      <span className={styles.metric}>
        <Icon name="share" size={20} />
      </span>
      <span className={styles.bookmark}>
        <Icon name="bookmark" size={20} />
      </span>
    </div>
  );
}
