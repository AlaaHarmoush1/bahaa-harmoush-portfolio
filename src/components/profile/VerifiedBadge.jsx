import { Icon } from "../common/Icon";
import styles from "../../styles/VerifiedBadge.module.css";

export function VerifiedBadge({ label = "Verified" }) {
  return (
    <span className={styles.badge} title={label} aria-label={label}>
      <Icon name="verified" size={16} filled className={styles.icon} />
    </span>
  );
}
