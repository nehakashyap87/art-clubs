import React from 'react';
import { BLOG_POSTS } from "./data";

const MegaMenu = ({ items, hasImages = false }: { items: string[], hasImages?: boolean }) => (
  <div className="mega-menu">
    <div className="side-links">
      {items.map((item, i) => (
        <a key={i} href="#" className={`side-link ${i === 0 ? 'active' : ''}`}>{item}</a>
      ))}
    </div>
    <div className="content-grid">
      {hasImages ? (
        Object.values(BLOG_POSTS).map((post, i) => (
          <a key={i} href={`/blog/${post.id}`} className="content-item">
            <img src={post.img} alt={post.title} />
            <div className="content-tag">{post.tag}</div>
            <div className="content-title" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{post.title}</div>
          </a>
        ))
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 className="serif" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Featured Series</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.7, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>Artists to Watch 2026</li>
              <li>100 Artwork Series</li>
              <li>101 Art Book Series</li>
              <li>Creative Process Books</li>
            </ul>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400" alt="Book" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <p style={{ fontSize: '0.7rem', marginTop: '1rem', opacity: 0.5 }}>LATEST RELEASE: MY CREATIVITY JOURNAL</p>
          </div>
        </div>
      )}
    </div>
  </div>
);

const Navbar = () => (
  <header className="nav-container">
    <div className="nav-main">
      <div className="serif" style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>ARTS<span style={{ color: 'var(--accent)' }}>2</span>HEARTS</div>

      <nav className="nav-links">
        <div className="nav-item">AtHoames <span style={{ fontSize: '0.6rem' }}>⚡</span></div>
        <div className="nav-item">
          Books ▾
          <MegaMenu items={["Art Books", "Journals", "Collector Series", "Limited Editions"]} />
        </div>
        <div className="nav-item">
          Shop ▾
          <MegaMenu items={["Magazines", "Fine Art Prints", "Apparel", "Gift Cards"]} />
        </div>
        <div className="nav-item">
          Read ▾
          <MegaMenu hasImages items={["ART BIZ", "INTERVIEWS", "ATH COMMUNITY", "STUDIO VISIT"]} />
        </div>
        <div className="nav-item">Podcast</div>
        <div className="nav-item">Exhibitions</div>
        <button className="btn-submit">Submit Your Art</button>
      </nav>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <span style={{ cursor: 'pointer', fontSize: '1rem' }}>☀</span>
        <span style={{ cursor: 'pointer', fontSize: '1rem' }}>🔍</span>
      </div>
    </div>
  </header>
);

const SectionHeading = ({ top, main, sub }: { top: string, main: string, sub?: string }) => (
  <div style={{ marginBottom: '4rem' }}>
    <span className="badge">{top}</span>
    <h2 className="serif" style={{ fontSize: '3.5rem', marginTop: '1rem' }}>{main}</h2>
    {sub && <p style={{ opacity: 0.6, maxWidth: '600px', marginTop: '1rem' }}>{sub}</p>}
  </div>
);

export default function Home() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal stagger-1">
            <span className="badge" style={{ background: 'var(--accent)', color: 'white', border: 'none' }}>EST. 2018</span>
          </div>
          <h1 className="reveal stagger-2">Empowering the <br /><i>Modern</i> Woman Artist</h1>
          <p className="reveal stagger-3" style={{ margin: '0 auto 3rem' }}>
            A global community and premium publication dedicated to the voices, visions, and businesses of independent women in the visual arts.
          </p>
          <div className="reveal stagger-4" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <button className="btn-submit" style={{ padding: '1.2rem 2.5rem' }}>Join the Club</button>
            <button className="btn-outline">Browse Magazine</button>
          </div>
        </div>
      </section>

      {/* Magazine Section */}
      <section id="magazine" style={{ padding: 'var(--section-padding)', background: '#080808' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6vw', alignItems: 'center' }}>
          <div className="reveal">
            <SectionHeading
              top="LATEST PUBLICATION"
              main="Issue #12: The Resilience Series"
              sub="Available in Barnes & Noble, Amazon, and fine bookstores worldwide. Featuring over 50+ independent artists."
            />
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              <div>
                <h3 className="serif" style={{ fontSize: '1.5rem' }}>150+ Pages</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>of curated content</p>
              </div>
              <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
              <div>
                <h3 className="serif" style={{ fontSize: '1.5rem' }}>Global Distribution</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>In 15 countries</p>
              </div>
            </div>
            <button className="btn-outline" style={{ marginTop: '4rem' }}>Order Your Copy</button>
          </div>
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--gradient-gold)', padding: '40px', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }}>
              <div style={{ border: '2px solid white', height: '100%', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h4 className="serif" style={{ fontSize: '3rem' }}>ARTS TO HEARTS</h4>
                <div className="serif" style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>Winter 2026</div>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--accent)', padding: '15px 25px', color: 'white', fontWeight: 800, fontSize: '0.8rem' }}>ISSUE #12</div>
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section id="exhibitions" style={{ padding: 'var(--section-padding)' }}>
        <SectionHeading top="CURATED SPACES" main="Exhibitions" sub="Step into our virtual halls exploring the intersection of identity and art." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
          <div className="museum-card reveal">
            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800" alt="Ex1" />
            <div className="museum-info">
              <h3 className="serif" style={{ fontSize: '2rem' }}>GAZE: Solo Show</h3>
              <p>Featuring Elena Vance — Feb 2026</p>
              <button className="btn-submit" style={{ marginTop: '1rem', width: 'fit-content' }}>Enter Room</button>
            </div>
          </div>
          <div className="museum-card reveal" style={{ animationDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200" alt="Ex2" />
            <div className="museum-info">
              <h3 className="serif" style={{ fontSize: '2rem' }}>Everything Is Art</h3>
              <p>Global Women Group Show — In Session</p>
              <button className="btn-submit" style={{ marginTop: '1rem', width: 'fit-content' }}>View Collection</button>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" style={{ padding: 'var(--section-padding)', background: '#0a0a0a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'center' }}>
          <div className="reveal">
            <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600" alt="Podcast" style={{ width: '100%', filter: 'grayscale(1) brightness(0.7)', border: '1px solid var(--glass-border)' }} />
          </div>
          <div className="reveal">
            <SectionHeading top="LISTEN & LEARN" main="The ATH Podcast" sub="Join host Charuka Arora as she dives deep into the business and soul of art with women leaders worldwide." />
            <div className="podcast-player" style={{ marginBottom: '2rem' }}>
              <div className="play-button">▶</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '5px' }}>LATEST EPISODE</p>
                <h4 className="serif" style={{ fontSize: '1.2rem' }}>EP 142: Scaling your Heart-Centered Business</h4>
              </div>
              <div className="wave-form">
                {[...Array(20)].map((_, i) => <div key={i} className="wave-bar"></div>)}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {["Building a Studio Practice", "The Future of Art Fairs", "Digital vs Traditional Mediums"].map((ep, i) => (
                <div key={i} style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', opacity: 0.6, fontSize: '0.9rem' }}>
                  <span>{ep}</span>
                  <span>Listen →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section as per Screenshot */}
      <section className="creatives-section">
        <SectionHeading top="THE JOURNAL" main="Inside the Studio" sub="Interviews, business strategies, and community stories." />
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '4rem' }}>
          <div className="side-links reveal">
            {["ART BIZ", "ARTIST INTERVIEWS", "ATH COMMUNITY", "ART COLLECTOR", "ART HISTORY", "CREATIVE SUCCESS", "WOMEN IN ARTS", "STUDIO VISIT"].map((link, i) => (
              <a key={i} href="#" className="side-link" style={{ fontSize: '0.8rem' }}>{link}</a>
            ))}
          </div>
          <div className="content-grid reveal">
            {Object.values(BLOG_POSTS).map((post, i) => (
              <a key={i} href={`/blog/${post.id}`} className="content-item">
                <img src={post.img} alt={post.title} />
                <div className="content-tag">{post.tag}</div>
                <div className="content-title" style={{ fontWeight: 600 }}>{post.title}</div>
                <div className="content-meta">by {post.author} — {post.date}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container" style={{ textAlign: 'center', padding: '100px 5vw' }}>
        <div className="glass" style={{ padding: '6rem' }}>
          <SectionHeading top="GROW WITH US" main="For the Modern Artist" sub="From mentorship to international publishing, we provide the tools you need to build a sustainable art career." />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <button className="btn-submit" style={{ padding: '1.2rem 2.5rem' }}>View Artist Services</button>
            <button className="btn-outline">Join Community</button>
          </div>
        </div>
      </section>

      <footer style={{ padding: '6rem 8vw', background: '#030303', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem' }}>
          <div>
            <div className="serif" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>ARTS<span style={{ color: 'var(--accent)' }}>2</span>HEARTS</div>
            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>The global pulse of women in visual arts. Publication, community, and support system for creators.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.7rem', opacity: 0.3, marginBottom: '2rem' }}>PLATFORM</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.7, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>Open Calls</li>
              <li>Magazine</li>
              <li>Exhibitions</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.7rem', opacity: 0.3, marginBottom: '2rem' }}>SUPPORT</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.7, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>Shop</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.7rem', opacity: 0.3, marginBottom: '2rem' }}>SOCIAL</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.7, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', opacity: 0.3, fontSize: '0.7rem' }}>
          © 2026 ARTS TO HEARTS PROJECT. A GLOBAL COMMUNITY.
        </div>
      </footer>
    </main>
  );
}
