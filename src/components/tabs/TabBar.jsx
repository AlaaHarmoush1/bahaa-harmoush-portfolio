import { Icon } from "../common/Icon";
import styles from "../../styles/TabBar.module.css";

const TABS = [
  { id: "posts", label: "Campaigns", icon: "grid" },
  { id: "reels", label: "Reels", icon: "reel" },
  { id: "testimonials", label: "Testimonials", icon: "tag" },
];

export function TabBar({ activeTab, onChangeTab }) {
  return (
    <div className={styles.tabBar} role="tablist" aria-label="Portfolio sections">
      {TABS.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
            onClick={() => onChangeTab(tab.id)}
          >
            <Icon name={tab.icon} size={16} filled={isActive} />
            <span className={styles.label}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
