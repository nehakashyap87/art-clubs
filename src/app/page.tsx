"use client";

import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from "./data";

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [releaseCategory, setReleaseCategory] = useState('ALL');

  const artStars = [
    { name: "Fhionna Love McGeechan", loc: "Scotland", month: "November. 2025", frame: "frame-gold", category: "GOLD", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800" },
    { name: "Fhionna Love McGeechan", loc: "Scotland", month: "October. 2025", frame: "frame-wood", category: "WOODEN", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800" },
    { name: "Wawi Amasha", loc: "Kenya", month: "October. 2025", frame: "frame-gold", category: "GOLD", img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800" }
  ];

  const filteredStars = activeCategory === 'ALL'
    ? artStars
    : artStars.filter(star => star.category === activeCategory);

  const releases = [
    { title: "Studio Visit Book Vol. 7", date: "FEB 2026 EDITION", price: "$150.00", sale: "$120.00", category: "BOOKS", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800", frame: "frame-gold", month: "BEST SELLER" },
    { title: "101 Art Book : Food Edition", date: "COLLECTORS ITEM", price: "$157.00", sale: "$120.00", category: "BOOKS", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800", frame: "frame-wood", month: "COLLECTORS" },
    { title: "Arts to Hearts Magazine issue 11", date: "LATEST ISSUE", price: "$79.00", sale: "$69.00", category: "MAGAZINES", img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800", frame: "frame-gold", month: "LATEST" }
  ];

  const filteredReleases = releaseCategory === 'ALL'
    ? releases
    : releases.filter(rel => rel.category === releaseCategory);

  const [currentSubIndex, setCurrentSubIndex] = useState(0);
  const [blogSliderIndex, setBlogSliderIndex] = useState(0);

  const submissionData = [
    {
      title: "The Big Book of Tiny Creatives Ed. 3",
      date: "JANUARY 14, 2026",
      loc: "INTERNATIONAL",
      img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200",
      desc: "A global call for young artists aged 2 to 18 years, inviting parents and guardians to celebrate their children's creativity. Selected artworks will be published in a professionally produced hardcover book distributed globally.",
      status: "OPEN FOR ENTRIES"
    },
    {
      title: "101 Art Book: Dog Edition",
      date: "FEBRUARY 22, 2026",
      loc: "INTERNATIONAL",
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200",
      desc: "An international call for art inviting artists to explore the theme of dogs through diverse visual practices. Selected artists will be published in a professionally produced hardcover book distributed globally.",
      status: "SUBMISSIONS OPEN"
    },
    {
      title: "Arts to Hearts Magazine Issue 11",
      date: "MARCH 30, 2026",
      loc: "INTERNATIONAL",
      img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1200",
      desc: "Our flagship publication's 11th edition. We are looking for artists who push boundaries and tell compelling stories through their medium. This issue focuses on 'Resilience' and global impact.",
      status: "FINAL CALL"
    }
  ];

  return (
    <main>
      {/* Sticky Navigation */}
      <header className={`nav-container ${isScrolled ? 'sticky-header' : ''}`}>
        <div className="nav-main">
          <div className="serif" style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            ARTS<span style={{ color: 'var(--accent)' }}>2</span>HEARTS
          </div>

          <nav className="nav-links">
            <div className="nav-item">AtHoames <span style={{ fontSize: '0.6rem' }}>⚡</span></div>
            <div className="nav-item">Books ▾</div>
            <div className="nav-item">Shop ▾</div>
            <div className="nav-item">Read ▾</div>
            <div className="nav-item">Podcast</div>
            <div className="nav-item">Exhibitions</div>
            <button className="btn-submit" style={{ borderRadius: '0' }}>Submit Your Art</button>
          </nav>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? '☀ Light' : '☾ Dark'}
            </button>
            <span style={{ cursor: 'pointer', fontSize: '1rem' }}>🔍</span>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="hero-dive">
        <div className="reveal">
          <p className="hero-subtitle">EX NIHILO'S</p>
          <h1 className="hero-title">THE DIVE</h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="btn-bracket">
              <div className="bracket bracket-left"></div>
              <span>Live Demos</span>
              <div className="bracket bracket-right"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTWORKS (Art Stars of 2025 - Community Spotlight) */}
      <section className="art-stars-section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="serif" style={{ fontSize: '4rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Art Stars of 2025!</h2>
          <p style={{ color: 'var(--muted)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>Featured Artworks from our community</p>

          <div className="filter-container reveal" style={{ marginTop: '1.5rem' }}>
            {['ALL', 'GOLD', 'WOODEN'].map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="featured-grid" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          {filteredStars.map((star, i) => (
            <div key={i} className="artwork-card reveal" style={{ animationDelay: `${i * 0.1}s`, border: 'none', background: 'transparent' }}>
              <div className="artwork-img-box">
                <div className={`ornate-frame ${star.frame}`} style={{ padding: '15px' }}>
                  <div className="artist-tag-gold" style={{ fontSize: '0.5rem', padding: '4px 10px' }}>{star.month}</div>
                  <img src={star.img} alt={star.name} style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
              <div className="artist-profile-tag" style={{ border: '1px solid var(--glass-border)', marginTop: '10px' }}>
                <img src={`https://i.pravatar.cc/150?u=${star.name}`} className="artist-pfp" alt={star.name} />
                <div className="artist-name-verified">
                  {star.name}
                  <span className="verified-badge">✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SUBMISSIONS SECTION (Opportunities) */}
      <section className="submissions-section">
        <div className="sub-header-center reveal">
          <p className="sub-tagline">Open Calls</p>
          <h2 className="sub-main-title">Submissions Open Now!</h2>
        </div>

        <div className="sub-stage">
          <div className="sub-content-col reveal">
            <div className="sub-nav-list">
              {submissionData.map((sub, i) => (
                <div
                  key={i}
                  className={`sub-nav-item ${currentSubIndex === i ? 'active' : ''}`}
                  onClick={() => setCurrentSubIndex(i)}
                >
                  <h4>{sub.title}</h4>
                  <span>{sub.status}</span>
                </div>
              ))}
            </div>

            <div className="sub-details-box">
              <p className="sub-desc-text">
                {submissionData[currentSubIndex].desc}
              </p>
              <div className="sub-meta-row">
                <div className="sub-meta-item">
                  <label>Region</label>
                  <span>{submissionData[currentSubIndex].loc}</span>
                </div>
                <div className="sub-meta-item">
                  <label>Closing Date</label>
                  <span>{submissionData[currentSubIndex].date}</span>
                </div>
              </div>
            </div>

            <div className="slider-controls">
              <button className="slide-btn" onClick={() => setCurrentSubIndex(prev => (prev === 0 ? submissionData.length - 1 : prev - 1))}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </button>
              <button className="slide-btn" onClick={() => setCurrentSubIndex(prev => (prev === submissionData.length - 1 ? 0 : prev + 1))}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>

          <div className="sub-image-stage reveal">
            <div className="sub-floating-label">Featured Opportunity</div>
            {submissionData.map((sub, i) => (
              <img
                key={i}
                src={sub.img}
                alt={sub.title}
                className={`sub-slide-img ${currentSubIndex === i ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR GALLERY (Artistic Showcase) */}
      <section className="alicante-gallery-section" style={{ backgroundColor: '#fff', color: '#000', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center', paddingBottom: '0' }}>
          <h2 className="serif" style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '3rem' }}>Our Gallery</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
            <span style={{ borderBottom: '2px solid #e3b04b', paddingBottom: '5px' }}>ALL</span>
            <span>ANCIENT STATUE</span>
            <span>MODERN ART</span>
            <span>VINTAGE ART</span>
          </div>
        </div>
        <div className="gallery-alicante" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          {[
            { title: "Ancient Marble", sub: "Sculpture", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800" },
            { title: "Golden Gaze", sub: "Photography", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800" },
            { title: "The Passage", sub: "Installation", img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=800" },
            { title: "Statue Study", sub: "Classical", img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800" },
            { title: "Ethereal Form", sub: "Modern Art", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800" },
            { title: "Quiet Echo", sub: "Vintage Art", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800" },
            { title: "Relic 01", sub: "History", img: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=800" },
            { title: "Old World", sub: "Fine Art", img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800" }
          ].map((item, i) => (
            <div key={i} className="gallery-tile">
              <img src={item.img} alt={item.title} />
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

      {/* 5. NEW RELEASES SECTION (Commerce) */}
      <section className="gallery-wall">
        <div className="wall-content reveal">
          <span className="wall-heading">Arts to Hearts Project</span>
          <h2 className="wall-title">NEW <span style={{ color: '#ff0000' }}>RELEASES</span></h2>
          <p className="wall-description">
            Shop from our range of premium collectible editions of Artists Books, Coffee table books featuring artists from around the world.
          </p>

          <div className="btn-bracket" style={{ color: 'var(--foreground)' }}>
            <div className="bracket bracket-left" style={{ borderColor: 'var(--foreground)' }}></div>
            <span style={{ fontSize: '0.7rem' }}>Shop Collection</span>
            <div className="bracket bracket-right" style={{ borderColor: 'var(--foreground)' }}></div>
          </div>
        </div>

        <div className="gallery-grid" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          {releases.map((item, i) => (
            <div key={i} className="art-frame reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`ornate-frame ${item.frame}`} style={{ padding: '15px' }}>
                <div className="artist-tag-gold" style={{ fontSize: '0.5rem', padding: '4px 10px' }}>{item.month}</div>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="frame-info">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                <div style={{ marginTop: '0.8rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', textDecoration: 'line-through', color: '#999', fontWeight: 500 }}>{item.price}</span>
                  <span style={{ fontSize: '0.9rem', color: '#ff4d4d', fontWeight: 800 }}>{item.sale}</span>
                </div>
                <div className="btn-bracket" style={{ marginTop: '1.5rem', color: '#000' }}>
                  <div className="bracket bracket-left" style={{ borderColor: '#000' }}></div>
                  <span style={{ fontSize: '0.6rem' }}>Add to Cart</span>
                  <div className="bracket bracket-right" style={{ borderColor: '#000' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BLOG SECTION (Editorial depth) */}
      <section className="blog-unique-section" style={{ maxWidth: '1600px' }}>
        <div className="blog-sidebar reveal">
          <p className="sub-tagline" style={{ marginBottom: '2rem' }}>Inside Arts to Hearts</p>
          {["ART BIZ", "ARTIST INTERVIEWS", "ATH COMMUNITY", "ART COLLECTOR", "ARTICLES", "ART HISTORY", "CREATIVE SUCCESS", "WOMEN IN ARTS"].map((link, i) => (
            <div
              key={i}
              className={`blog-cat-link ${blogSliderIndex === i ? 'active' : ''}`}
              onClick={() => setBlogSliderIndex(Math.min(i, Object.values(BLOG_POSTS).length - 1))}
            >
              {link}
            </div>
          ))}

          <div className="slider-controls" style={{ marginTop: '4rem' }}>
            <button className="slide-btn" onClick={() => setBlogSliderIndex(prev => Math.max(0, prev - 1))}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <button className="slide-btn" onClick={() => setBlogSliderIndex(prev => Math.min(Object.values(BLOG_POSTS).length - 1, prev + 1))}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>

        <div className="blog-slider-main reveal">
          <div className="blog-track-unique" style={{ transform: `translateX(-${blogSliderIndex * 540}px)` }}>
            {Object.values(BLOG_POSTS).map((post, i) => (
              <a key={i} href={`/blog/${post.id}`} className="blog-card-unique">
                <div className="blog-number">0{i + 1}</div>
                <div className="card-img-container">
                  <img src={post.img} alt={post.title} />
                </div>
                <span className="unique-tag">{post.tag}</span>
                <h3 className="unique-title">{post.title}</h3>
                <div className="unique-meta">BY {post.author} — {post.date}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION (Validation) */}
      <section className="testimonial-section">
        <div className="testimonial-focus-box reveal">
          <div className="testimonial-quote-mark">“</div>
          <p className="testimonial-text">
            "Arts to Hearts Project is more than a gallery; it's a sanctuary for souls who breathe creativity. The community has empowered me to see my art through a lens of global connection and profound impact."
          </p>
          <div className="testimonial-author-wrap">
            <img src="https://i.pravatar.cc/150?u=artist1" className="author-pfp-small" alt="Artist" />
            <div className="author-meta-text">
              <span className="author-name-small">Elena Vance</span>
              <span className="author-title-small">Contemporary Painter | London</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BRAND SCROLLER (Authority) */}
      <section className="brand-scroller">
        <div className="brand-track">
          {["HOMEGROWN", "CREATE!", "THE ARTIST ADVISORY", "VAC", "THE JEALOUS CURATOR", "ART GIRL RISING"].map((brand, i) => (
            <div key={i} className="brand-item">
              <h3 style={{
                fontFamily: i % 2 === 0 ? 'var(--font-serif)' : 'var(--font-sans)',
                fontSize: '1.2rem',
                fontWeight: 800,
                letterSpacing: '0.1em'
              }}>
                {brand}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: '8rem 5vw', background: 'var(--background)', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <div className="serif" style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 900 }}>ARTS TO HEARTS</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', fontSize: '0.75rem', letterSpacing: '0.2rem', textTransform: 'uppercase', opacity: 0.6 }}>
          <a href="#">Shop</a>
          <a href="#">Magazine</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <p style={{ marginTop: '5rem', fontSize: '0.65rem', opacity: 0.3 }}>© 2025 ARTS TO HEARTS PROJECT. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
