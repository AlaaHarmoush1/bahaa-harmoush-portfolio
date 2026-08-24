import { Modal } from "../common/Modal";
import { Icon } from "../common/Icon";
import styles from "../../styles/ContactModal.module.css";

export function ContactModal({ isOpen, onClose, contact, name }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="contact-modal-heading">
      <div className={styles.content}>
        <h2 id="contact-modal-heading" className={styles.heading}>
          Message {name}
        </h2>
        <p className={styles.subheading}>
          Reach out directly — real inquiries only, no chatbot in between.
        </p>

        <a
          className={styles.option}
          href={`mailto:${contact.email}`}
        >
          <span className={styles.iconWrap}>
            <Icon name="mail" size={20} />
          </span>
          <span>
            <span className={styles.optionLabel}>Email</span>
            <span className={styles.optionValue}>{contact.email}</span>
          </span>
        </a>

        <a
          className={styles.option}
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.iconWrap}>
            <Icon name="whatsapp" size={20} filled />
          </span>
          <span>
            <span className={styles.optionLabel}>WhatsApp</span>
            <span className={styles.optionValue}>Send a message</span>
          </span>
        </a>
      </div>
    </Modal>
  );
}
