import styles from "../../styles/TestimonialGrid.module.css";

export function TestimonialGrid({ testimonials }) {
  return (
    <div
      id="panel-testimonials"
      role="tabpanel"
      aria-labelledby="tab-testimonials"
      className={styles.grid}
    >
      {testimonials.map((testimonial) => (
        <figure key={testimonial.id} className={styles.card}>
          <blockquote className={styles.quote}>“{testimonial.quote}”</blockquote>
          <figcaption className={styles.author}>
            <img
              src={testimonial.avatar}
              alt=""
              className={styles.avatar}
              loading="lazy"
              width={40}
              height={40}
            />
            <span>
              <span className={styles.name}>{testimonial.clientName}</span>
              {testimonial.company && (
                <span className={styles.company}>{testimonial.company}</span>
              )}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
