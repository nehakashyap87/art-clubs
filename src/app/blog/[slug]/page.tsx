"use client";

import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from "../../data";

export default function BlogDetail({ params }: { params: { slug: string } }) {
    const [theme, setTheme] = useState('dark');
    const blog = BLOG_POSTS[params.slug] || BLOG_POSTS["satellite-art-fairs-2026"];

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <main style={{ paddingTop: '80px' }}>
            <header className="nav-container">
                <div className="nav-main">
                    <a href="/" className="serif" style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', textDecoration: 'none', color: 'inherit' }}>
                        ARTS<span style={{ color: 'var(--accent)' }}>2</span>HEARTS
                    </a>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {theme === 'dark' ? 'Light' : 'Dark'}
                        </button>
                        <a href="/" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Back to Home</a>
                    </div>
                </div>
            </header>

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

            <section className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '6vw' }}>
                <div className="reveal">
                    <div className="serif" style={{ fontSize: '1.8rem', marginBottom: '3rem', fontStyle: 'italic', opacity: 0.8, lineHeight: 1.4 }}>
                        "{blog.excerpt}"
                    </div>
                    <div style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                        {blog.content}
                    </div>
                </div>

                <aside className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div>
                        <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Details</h4>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                            <p>Curator: Elena Vance</p>
                            <p>Location: virtual-gallery-01</p>
                        </div>
                    </div>
                </aside>
            </section>

            <footer style={{ padding: '5rem 8vw', borderTop: '1px solid var(--glass-border)', textAlign: 'center', opacity: 0.3, fontSize: '0.7rem' }}>
                © 2026 ARTS TO HEARTS PROJECT.
            </footer>
        </main>
    );
}
