import { useState, useMemo } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { profile, posts, highlights, testimonials } from "./content/content";
import { ProfileHeader } from "./components/profile/ProfileHeader";
import { HighlightsRow } from "./components/highlights/HighlightsRow";
import { StoryViewer } from "./components/highlights/StoryViewer";
import { TabBar } from "./components/tabs/TabBar";
import { PostGrid } from "./components/grid/PostGrid";
import { PostModal } from "./components/modal/PostModal";
import { TestimonialGrid } from "./components/testimonials/TestimonialGrid";
import { ContactModal } from "./components/contact/ContactModal";
import styles from "./styles/App.module.css";

function App() {
  const [activeTab, setActiveTab] = useState("posts");
  const [activePost, setActivePost] = useState(null);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(null);
  const [isContactOpen, setContactOpen] = useState(false);

  const visiblePosts = useMemo(() => {
    if (activeTab === "reels") return posts.filter((post) => post.type === "reel");
    if (activeTab === "posts") return posts.filter((post) => post.type === "post");
    return [];
  }, [activeTab]);

  return (
    <ThemeProvider>
      <main className={styles.page}>
        <ProfileHeader profile={profile} onOpenContact={() => setContactOpen(true)} />

        <HighlightsRow highlights={highlights} onOpenHighlight={setActiveHighlightIndex} />

        <TabBar activeTab={activeTab} onChangeTab={setActiveTab} />

        {activeTab === "testimonials" ? (
          <TestimonialGrid testimonials={testimonials} />
        ) : (
          <PostGrid posts={visiblePosts} tabId={activeTab} onOpenPost={setActivePost} />
        )}

        <footer className={styles.footer}>
          <p>{profile.name} — {profile.bio.tagline}</p>
        </footer>
      </main>

      <PostModal post={activePost} onClose={() => setActivePost(null)} />

      <StoryViewer
        highlights={highlights}
        activeIndex={activeHighlightIndex}
        onClose={() => setActiveHighlightIndex(null)}
        onNavigate={setActiveHighlightIndex}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setContactOpen(false)}
        contact={profile.contact}
        name={profile.name}
      />
    </ThemeProvider>
  );
}

export default App;
