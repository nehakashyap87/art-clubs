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
        <main className="page-top-offset">
            <header className="nav-container">
                <div className="nav-main">
                    <a href="/" className="serif logo-text no-decor color-inherit">
                        ARTS<span className="logo-accent">2</span>HEARTS
                    </a>
                    <div className="nav-right-actions">
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {theme === 'dark' ? 'Light' : 'Dark'}
                        </button>
                        <a href="/" className="nav-item">Back to Home</a>
                    </div>
                </div>
            </header>

            <section className="blog-hero-detail">
                <img
                    src={blog.img}
                    alt={blog.title}
                    className="blog-hero-image"
                />
                <div className="reveal blog-hero-content">
                    <span className="badge blog-tag-badge">{blog.tag}</span>
                    <h1 className="serif blog-main-title">{blog.title}</h1>
                    <div className="blog-meta-group">
                        <span>By <strong>{blog.author}</strong></span>
                        <span>{blog.date}</span>
                    </div>
                </div>
            </section>

            <section className="container blog-detail-grid">
                <div className="reveal">
                    <div className="serif blog-excerpt-quote">
                        "{blog.excerpt}"
                    </div>
                    <div className="blog-body-text">
                        {blog.content}
                    </div>
                </div>

                <aside className="reveal blog-sidebar-aside">
                    <div>
                        <h4 className="blog-detail-label">Details</h4>
                        <div className="blog-detail-meta-text">
                            <p>Curator: Elena Vance</p>
                            <p>Location: virtual-gallery-01</p>
                        </div>
                    </div>
                </aside>
            </section>

            <footer className="blog-fixed-footer">
                © 2026 ARTS TO HEARTS PROJECT.
            </footer>
        </main>
    );
}
