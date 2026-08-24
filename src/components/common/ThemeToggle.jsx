import { useTheme } from "../../context/ThemeContext";
import { Icon } from "./Icon";
import styles from "../../styles/ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Icon name={isDark ? "sun" : "moon"} size={18} />
    </button>
  );
}
