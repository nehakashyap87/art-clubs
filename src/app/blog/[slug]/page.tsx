import React from 'react';
import { BLOG_POSTS } from "../../data";

const Navbar = () => (
    <header className="nav-container">
        <div className="nav-main">
            <a href="/" className="serif" style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', textDecoration: 'none', color: 'inherit' }}>ARTS<span style={{ color: 'var(--accent)' }}>2</span>HEARTS</a>

            <nav className="nav-links">
                <a href="/#magazine" className="nav-item">Magazine</a>
                <a href="/#exhibitions" className="nav-item">Exhibitions</a>
                <a href="/#podcast" className="nav-item">Podcast</a>
                <a href="/#shop" className="nav-item">Shop</a>
                <button className="btn-submit">Submit Your Art</button>
            </nav>
        </div>
    </header>
);

export default function BlogDetail({ params }: { params: { slug: string } }) {
    const blog = BLOG_POSTS[params.slug] || BLOG_POSTS["satellite-art-fairs-2026"];

    return (
        <main style={{ paddingTop: '80px' }}>
            <Navbar />

            {/* Blog Hero */}
            <section style={{ height: '70vh', position: 'relative', overflow: 'hidden', padding: 0 }}>
                <img
                    src={blog.img}
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
                />
                <div
                    className="reveal"
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '8vw',
                        maxWidth: '900px'
                    }}
                >
                    <span className="badge" style={{ background: 'var(--accent)', color: 'white', border: 'none' }}>{blog.tag}</span>
                    <h1 className="serif" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1.1, marginTop: '1.5rem', color: 'white' }}>{blog.title}</h1>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', opacity: 0.8, fontSize: '0.9rem', color: 'white' }}>
                        <span>By <strong>{blog.author}</strong></span>
                        <span>{blog.date}</span>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section style={{ padding: '100px 8vw', display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) 300px', gap: '8vw' }}>
                <div className="reveal stagger-1">
                    <div className="serif" style={{ fontSize: '1.8rem', marginBottom: '3rem', fontStyle: 'italic', opacity: 0.9, lineHeight: 1.4, borderLeft: '4px solid var(--accent)', paddingLeft: '2rem' }}>
                        "{blog.excerpt}"
                    </div>
                    <div style={{ fontSize: '1.15rem', opacity: 0.9, lineHeight: 1.9, whiteSpace: 'pre-line' }}>
                        {blog.content}
                    </div>

                    <div style={{ marginTop: '5rem', display: 'flex', gap: '1.5rem' }}>
                        <button className="btn-submit">Share Article</button>
                        <button className="btn-outline" style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}>Inquire</button>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="reveal stagger-2" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    <div>
                        <h4 className="serif" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Details</h4>
                        <div style={{ fontSize: '0.85rem', opacity: 0.6, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <div><strong>Curator:</strong> Elena Vance</div>
                            <div><strong>Location:</strong> virtual-gallery-01</div>
                            <div><strong>Type:</strong> Independent Study</div>
                        </div>
                    </div>

                    <div>
                        <h4 className="serif" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Related Stories</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {Object.values(BLOG_POSTS).filter(p => p.id !== blog.id).slice(0, 3).map((p, i) => (
                                <a key={i} href={`/blog/${p.id}`} style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                                    <img src={p.img} style={{ width: '60px', height: '60px', objectFit: 'cover' }} alt={p.title} />
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, lineHeight: 1.3 }}>{p.title}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>

            <footer style={{ padding: '5rem 8vw', background: '#050505', borderTop: '1px solid var(--glass-border)', textAlign: 'center', opacity: 0.5, fontSize: '0.7rem' }}>
                <p>© 2026 ARTS TO HEARTS PROJECT. A GLOBAL COMMUNITY.</p>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Instagram</a>
                </div>
            </footer>
        </main>
    );
}
