"use client";

import React, { useState, useEffect } from "react";
import {
  ART_STARS,
  RELEASES,
  TESTIMONIALS,
  SUBMISSIONS,
  GALLERY_ITEMS,
  PODCAST_EPISODES,
  BRANDS,
  BLOG_CATEGORIES,
  BLOG_POSTS,
} from "./data";

// ─────────────────────────────────────────────
// Home Page Component
// ─────────────────────────────────────────────

export default function Home() {
  // ── Theme & Scroll State ──────────────────
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);

  // ── Filter / Slider State ─────────────────
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [releaseCategory, setReleaseCategory] = useState("ALL");
  const [currentSubIndex, setCurrentSubIndex] = useState(0);
  const [blogSliderIndex, setBlogSliderIndex] = useState(0);
  const [releaseSliderIndex, setReleaseSliderIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);

  // ── Derived Data ──────────────────────────
  const filteredStars =
    activeCategory === "ALL"
      ? ART_STARS
      : ART_STARS.filter((star) => star.category === activeCategory);

  const filteredReleases =
    releaseCategory === "ALL"
      ? RELEASES
      : RELEASES.filter((rel) => rel.category === releaseCategory);

  const blogPosts = Object.values(BLOG_POSTS);

  // ── Effects ───────────────────────────────

  /** Update <html data-theme> whenever theme changes */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  /** Sticky header on scroll */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Copy Protection
   * Prevents right-click, text selection, image drag,
   * and common DevTools / copy keyboard shortcuts.
   */
  useEffect(() => {
    // Disable right-click context menu
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();

    // Block DevTools shortcuts and common copy commands
    const blockKeys = (e: KeyboardEvent) => {
      const forbidden =
        e.key === "F12" ||
        (e.ctrlKey && ["u", "s", "a", "c", "p"].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(e.key.toLowerCase()));
      if (forbidden) e.preventDefault();
    };

    // Prevent image dragging
    const blockDrag = (e: DragEvent) => e.preventDefault();

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("dragstart", blockDrag);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  // ── Helpers ───────────────────────────────
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const prevSub = () =>
    setCurrentSubIndex((prev) =>
      prev === 0 ? SUBMISSIONS.length - 1 : prev - 1
    );
  const nextSub = () =>
    setCurrentSubIndex((prev) =>
      prev === SUBMISSIONS.length - 1 ? 0 : prev + 1
    );

  // ── Render ────────────────────────────────
  return (
    <main>
      {/* ── NAVIGATION ─────────────────────────── */}
      <header className={`nav-container ${isScrolled ? "sticky-header" : ""}`}>
        <div className="nav-main">
          <div className="serif logo-text">
            ARTS<span className="logo-accent">2</span>HEARTS
          </div>

          <nav className="nav-links">
            <div className="nav-item">
              AtHoames <span className="logo-accent">⚡</span>
            </div>
            <div className="nav-item">Books ▾</div>
            <div className="nav-item">Shop ▾</div>
            <div className="nav-item">Read ▾</div>
            <div className="nav-item">Podcast</div>
            <div className="nav-item">Exhibitions</div>
            <button className="btn-submit nav-btn-submit">Submit Your Art</button>
          </nav>

          <div className="nav-right-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? "☀ Light" : "☾ Dark"}
            </button>
            <span className="search-icon-btn">🔍</span>
          </div>
        </div>
      </header>

      {/* ── 1. HERO ─────────────────────────────── */}
      <section className="hero-dive">
        <div className="reveal">
          <p className="hero-subtitle">ARTS TO HEARTS</p>
          <h1 className="hero-title">LET'S DIVE</h1>
          <div className="flex-center">
            <div className="btn-bracket">
              <div className="bracket bracket-left" />
              <span>Live Demos</span>
              <div className="bracket bracket-right" />
            </div>
          </div>
        </div>
      </section>

      <div className="artistic-ray" />

      {/* ── 2. ART STARS ────────────────────────── */}
      <section className="art-stars-section">
        <div className="section-header-compact">
          <h2 className="serif section-title-large">Art Stars of 2025!</h2>
          <p className="section-tagline-muted">
            Featured Artworks from our community
          </p>

          <div className="filter-container reveal filter-wrap-top">
            {["ALL", "GOLD", "WOODEN"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="featured-grid centered-max-container">
          {filteredStars.map((star, i) => (
            <div key={i} className="artwork-card artwork-card-wrapper reveal">
              <div className="artwork-img-box">
                <div className={`ornate-frame ${star.frame} ornate-inner-padding`}>
                  <div className="artist-tag-gold artist-tag-mini">
                    {star.month}
                  </div>
                  <img
                    src={star.img}
                    alt={star.name}
                    className="full-width-auto"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="artist-profile-tag artist-profile-border">
                <img
                  src={`https://i.pravatar.cc/150?u=${star.name}`}
                  className="artist-pfp"
                  alt={star.name}
                  draggable={false}
                />
                <div className="artist-name-verified">
                  {star.name}
                  <span className="verified-badge">✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="artistic-ray" />

      {/* ── 3. SUBMISSIONS ──────────────────────── */}
      <section className="submissions-section">
        <div className="sub-header-center reveal">
          <p className="sub-tagline">Open Calls</p>
          <h2 className="sub-main-title">Submissions Open Now!</h2>
        </div>

        <div className="sub-stage">
          <div className="sub-content-col reveal">
            <div className="sub-nav-list">
              {SUBMISSIONS.map((sub, i) => (
                <div
                  key={i}
                  className={`sub-nav-item ${currentSubIndex === i ? "active" : ""}`}
                  onClick={() => setCurrentSubIndex(i)}
                >
                  <h4>{sub.title}</h4>
                  <span>{sub.status}</span>
                </div>
              ))}
            </div>

            <div className="sub-details-box">
              <p className="sub-desc-text">
                {SUBMISSIONS[currentSubIndex].desc}
              </p>
              <div className="sub-meta-row">
                <div className="sub-meta-item">
                  <label>Region</label>
                  <span>{SUBMISSIONS[currentSubIndex].loc}</span>
                </div>
                <div className="sub-meta-item">
                  <label>Closing Date</label>
                  <span>{SUBMISSIONS[currentSubIndex].date}</span>
                </div>
              </div>
            </div>

            <div className="slider-controls">
              <button className="slide-btn" onClick={prevSub}>
                <ArrowLeftIcon />
              </button>
              <button className="slide-btn" onClick={nextSub}>
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          <div className="sub-image-stage reveal">
            <div className="sub-floating-label">Featured Opportunity</div>
            {SUBMISSIONS.map((sub, i) => (
              <img
                key={i}
                src={sub.img}
                alt={sub.title}
                className={`sub-slide-img ${currentSubIndex === i ? "active" : ""}`}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="artistic-ray" />

      {/* ── 4. GALLERY ──────────────────────────── */}
      <section className="alicante-gallery-section alicante-white-theme">
        <div className="section-header-compact">
          <h2 className="serif section-title-large">Our Gallery</h2>
          <div className="alicante-filters">
            <span className="alicante-filter-active">ALL</span>
            <span>ANCIENT STATUE</span>
            <span>MODERN ART</span>
            <span>VINTAGE ART</span>
          </div>
        </div>

        <div className="gallery-alicante centered-max-container">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="gallery-tile">
              <img src={item.img} alt={item.title} draggable={false} />
              <div className="gallery-overlay">
                <div className="overlay-icons">
                  <div className="icon-circle">🔍</div>
                  <div className="icon-circle">🔗</div>
                </div>
                <div className="overlay-content">
                  <h4 className="overlay-title">{item.title}</h4>
                  <p className="overlay-sub">{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="artistic-ray" />

      {/* ── 5. NEW RELEASES ─────────────────────── */}
      <section className="gallery-wall">
        <div className="releases-header reveal">
          <div className="releases-header-left">
            <span className="wall-heading">Arts to Hearts Project</span>
            <h2 className="wall-title">
              NEW <span className="price-sale-tag">RELEASES</span>
            </h2>
            <p className="wall-description">
              Shop from our range of premium collectible editions of Artists
              Books, Coffee table books featuring artists from around the world.
            </p>
            <div className="btn-bracket bracket-btn-foreground">
              <div className="bracket bracket-left bracket-border-foreground" />
              <span>Shop Collection</span>
              <div className="bracket bracket-right bracket-border-foreground" />
            </div>
          </div>

          <div className="releases-header-right">
            <div className="slider-controls">
              <button
                className="slide-btn"
                onClick={() =>
                  setReleaseSliderIndex((prev) => Math.max(0, prev - 1))
                }
              >
                <ArrowLeftIcon />
              </button>
              <button
                className="slide-btn"
                onClick={() =>
                  setReleaseSliderIndex((prev) =>
                    Math.min(RELEASES.length - 1, prev + 1)
                  )
                }
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="gallery-grid-wrapper">
          <div
            className="gallery-grid"
            style={
              {
                "--release-offset": `-${releaseSliderIndex * (100 / 3)}%`,
              } as React.CSSProperties
            }
          >
            {filteredReleases.map((item, i) => (
              <div key={i} className="art-frame reveal">
                <div className={`ornate-frame ${item.frame} ornate-inner-padding`}>
                  <div className="artist-tag-gold artist-tag-mini">
                    {item.month}
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="full-width-auto"
                    draggable={false}
                  />
                </div>
                <div className="frame-info">
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                  <div className="price-container">
                    <span className="price-old-strike">{item.price}</span>
                    <span className="price-new-bold">{item.sale}</span>
                  </div>
                  <div className="btn-bracket bracket-btn-dark">
                    <div className="bracket bracket-left" />
                    <span>Add to Cart</span>
                    <div className="bracket bracket-right" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="artistic-ray" />

      {/* ── 6. PODCAST ──────────────────────────── */}
      <section className="podcast-section">
        <div className="podcast-grid">
          {/* Left: Device Mockup */}
          <div className="podcast-mockup-col reveal">
            <div className="phone-wrapper">
              <img
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800"
                alt="Arts To Hearts Podcast"
                className="podcast-phone-img"
                draggable={false}
              />
              <div className="podcast-earbuds-decor">
                <img
                  src="https://images.unsplash.com/photo-1590664095641-7fa05f689813?q=80&w=400"
                  alt="Earbuds"
                  className="podcast-earbuds-img"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Right: Player Interface */}
          <div className="podcast-player-col reveal">
            <div className="player-meta">
              <span>FOLLOW</span>
              <span>SHARE</span>
              <div className="flex-center-gap">
                <span className="search-icon-btn">𝕏</span>
                <span className="search-icon-btn">📻</span>
              </div>
            </div>

            <div className="player-main-info">
              <h4 className="podcast-title-group">Arts To Hearts Podcast</h4>
              <h1 className="serif podcast-main-heading">
                How to Get People Excited About Your Art Workshop | A T
              </h1>
            </div>

            <div className="audio-controls-box">
              <div className="progress-bar-container">
                <div className="progress-fill" />
              </div>
              <div className="time-row">
                <span>0:08</span>
                <span>1:13:37</span>
              </div>
              <div className="playback-controls">
                <button className="control-btn search-icon-btn">⏪</button>
                <div className="playback-play-pause">
                  <span className="search-icon-btn">⏸️</span>
                </div>
                <button className="control-btn search-icon-btn">⏩</button>
                <span className="section-tagline-muted">1x</span>
              </div>
            </div>

            <div className="episode-list-scroll">
              {PODCAST_EPISODES.map((ep, i) => (
                <div key={i} className="episode-item">
                  <div className="episode-icon">
                    <span className="episode-list-meta">▶</span>
                  </div>
                  <div className="episode-info-text">
                    <h5 className="episode-list-title">{ep.title}</h5>
                    <span className="episode-list-meta">
                      {ep.date} • {ep.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="podcast-desc-footer reveal">
          <div className="desc-left">
            A popular podcast for women in the visual Arts. Charuka records this
            journey as she works out of her studio in Delhi &amp; Agra. Join her
            amidst her messy, but oh so real conversations from creative women
            from around the world.
          </div>
          <div className="desc-right">
            Welcome to Arts To Hearts Podcast, the premier podcast for visual
            Artists. With over 20,000+ downloads, 150+ shows, and hundreds of
            reviews, we provide a unique experience. Each episode is a raw and
            intimate conversation with women in the Global Arts. Discover the
            power in connecting the Arts to the Hearts and join our creative
            family. Subscribe today, grab a cup of coffee, and listen with an
            open heart. You won't want to miss out!
          </div>
        </div>
      </section>

      <div className="artistic-ray" />

      {/* ── 7. BLOG ─────────────────────────────── */}
      <section className="blog-unique-section centered-max-container">
        <div className="blog-sidebar reveal">
          <p className="sub-tagline blog-sidebar-title">
            Inside Arts to Hearts
          </p>
          {BLOG_CATEGORIES.map((link, i) => (
            <div
              key={i}
              className={`blog-cat-link ${blogSliderIndex === i ? "active" : ""}`}
              onClick={() =>
                setBlogSliderIndex(Math.min(i, blogPosts.length - 1))
              }
            >
              {link}
            </div>
          ))}

          <div className="slider-controls blog-nav-margin">
            <button
              className="slide-btn"
              onClick={() =>
                setBlogSliderIndex((prev) => Math.max(0, prev - 1))
              }
            >
              <ArrowLeftIcon />
            </button>
            <button
              className="slide-btn"
              onClick={() =>
                setBlogSliderIndex((prev) =>
                  Math.min(blogPosts.length - 1, prev + 1)
                )
              }
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="blog-slider-main reveal">
          <div
            className="blog-track-unique"
            style={
              {
                "--blog-offset": `-${blogSliderIndex * 540}px`,
              } as React.CSSProperties
            }
          >
            {blogPosts.map((post, i) => (
              <a key={i} href={`/blog/${post.id}`} className="blog-card-unique">
                <div className="blog-number">0{i + 1}</div>
                <div className="card-img-container">
                  <img src={post.img} alt={post.title} draggable={false} />
                </div>
                <span className="unique-tag">{post.tag}</span>
                <h3 className="unique-title">{post.title}</h3>
                <div className="unique-meta">
                  BY {post.author} — {post.date}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="artistic-ray" />

      {/* ── 8. TESTIMONIALS ─────────────────────── */}
      <section className="testimonial-section">
        <div className="testimonial-focus-box reveal">
          <div className="testimonial-quote-mark">"</div>

          <div className="testimonial-slider-track">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testimonial-slide ${testIndex === i ? "active" : ""}`}
                style={{
                  display: testIndex === i ? "block" : "none",
                  animation:
                    testIndex === i ? "fadeInScale 0.8s ease forwards" : "none",
                }}
              >
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author-wrap">
                  <img
                    src={t.img}
                    className="author-pfp-small"
                    alt={t.name}
                    draggable={false}
                  />
                  <div className="author-meta-text">
                    <span className="author-name-small">{t.name}</span>
                    <span className="author-title-small">{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, i) => (
              <div
                key={i}
                className={`test-dot ${testIndex === i ? "active" : ""}`}
                onClick={() => setTestIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="artistic-ray" />

      {/* ── 9. BRAND SCROLLER ───────────────────── */}
      <section className="brand-scroller">
        <div className="brand-track">
          {BRANDS.map((brand, i) => (
            <div key={i} className="brand-item">
              <h3
                className={
                  i % 2 === 0 ? "brand-text-serif" : "brand-text-sans"
                }
              >
                {brand}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer className="main-footer">
        <div className="serif footer-brand">ARTS TO HEARTS</div>
        <div className="footer-nav">
          <a href="#">Shop</a>
          <a href="#">Magazine</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <p className="footer-copyright">
          © 2025 ARTS TO HEARTS PROJECT. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}

// ─────────────────────────────────────────────
// Shared Icon Components
// ─────────────────────────────────────────────

function ArrowLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
