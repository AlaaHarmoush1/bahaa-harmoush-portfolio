import { VerifiedBadge } from "./VerifiedBadge";
import { ProfileStats } from "./ProfileStats";
import { ContactButton } from "../contact/ContactButton";
import { ThemeToggle } from "../common/ThemeToggle";
import styles from "../../styles/ProfileHeader.module.css";

export function ProfileHeader({ profile, onOpenContact }) {
  const { name, handle, verified, verifiedLabel, avatar, bio, website, stats } = profile;

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.avatarWrap}>
          <img
            src={avatar}
            alt={`${name}'s profile photo`}
            className={styles.avatar}
            width={168}
            height={168}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.handleRow}>
            <p className={styles.handle}>{handle}</p>
            {verified && <VerifiedBadge label={verifiedLabel} />}
            <div className={styles.themeToggleDesktop}>
              <ThemeToggle />
            </div>
          </div>

          <ProfileStats stats={stats} />

          <div className={styles.bio}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.tagline}>{bio.tagline}</p>
            <p className={styles.specialties}>
              {bio.specialties.map((s) => `#${s.replace(/\s+/g, "")}`).join("  ")}
            </p>
            <p className={styles.location}>{bio.location}</p>
            <a
              className={styles.website}
              href={website.url}
              target="_blank"
              rel="noreferrer"
            >
              🔗 {website.label}
            </a>
          </div>

          <div className={styles.actions}>
            <ContactButton onOpenContact={onOpenContact} />
          </div>
        </div>

        <div className={styles.themeToggleMobile}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
