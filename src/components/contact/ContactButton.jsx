import styles from "../../styles/ContactButton.module.css";

export function ContactButton({ onOpenContact }) {
  return (
    <button type="button" className={styles.button} onClick={onOpenContact}>
      Message
    </button>
  );
}
