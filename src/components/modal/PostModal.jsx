import { Modal } from "../common/Modal";
import { ModalMetrics } from "./ModalMetrics";
import styles from "../../styles/PostModal.module.css";

export function PostModal({ post, onClose }) {
  const isOpen = Boolean(post);

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="post-modal-heading">
      {post && (
        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            {post.video ? (
              <video
                key={post.video}
                src={post.video}
                poster={post.image}
                className={styles.video}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={post.image} alt={post.altText} className={styles.image} />
            )}
          </div>

          <div className={styles.details}>
            <div className={styles.header}>
              <span className={styles.categoryTag}>{post.category}</span>
              <h2 id="post-modal-heading" className={styles.client}>
                {post.fullCaseStudy.client}
              </h2>
            </div>

            <p className={styles.caption}>{post.caption}</p>

            <ModalMetrics metrics={post.metrics} />

            <dl className={styles.caseStudy}>
              <dt>Challenge</dt>
              <dd>{post.fullCaseStudy.challenge}</dd>

              <dt>Approach</dt>
              <dd>{post.fullCaseStudy.approach}</dd>

              <dt>Results</dt>
              <dd>
                <ul className={styles.resultsList}>
                  {post.fullCaseStudy.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </dd>

              <dt>Timeframe</dt>
              <dd>{post.fullCaseStudy.timeframe}</dd>
            </dl>
          </div>
        </div>
      )}
    </Modal>
  );
}
