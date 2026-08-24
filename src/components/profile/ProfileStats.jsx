import styles from "../../styles/ProfileStats.module.css";

export function ProfileStats({ stats }) {
  return (
    <ul className={styles.stats}>
      {stats.map((stat) => (
        <li key={stat.label} className={styles.stat}>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
