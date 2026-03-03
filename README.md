# Arts to Hearts — Homepage

A premium editorial homepage for the **Arts to Hearts Project** — a global platform celebrating women artists, open calls, books, magazines, and podcast content.

Built with **Next.js 15 (App Router)**, **React 19**, and **Vanilla CSS**.

---

## Project Structure

```
art-club/
├── public/                    # Static assets
├── src/
│   └── app/
│       ├── blog/
│       │   └── [slug]/
│       │       └── page.tsx   # Dynamic blog post page
│       ├── data.ts            # All static site data & TypeScript types
│       ├── globals.css        # Global styles, design tokens, components
│       ├── layout.tsx         # Root layout (fonts, metadata)
│       └── page.tsx           # Homepage (main component)
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Framework  | Next.js 16 (App Router)           |
| UI Library | React 19                          |
| Language   | TypeScript 5                      |
| Styling    | Vanilla CSS (globals.css)         |
| Fonts      | Google Fonts — Inter, Playfair Display |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## Design System

All design tokens (colors, fonts, spacing) are defined as CSS variables in `globals.css`:

```css
:root {
  --background: #000000;
  --foreground: #FFFFFF;
  --accent:     #E27D60;
  --muted:      #888888;
  --font-serif: 'Playfair Display', serif;
  --font-sans:  'Inter', sans-serif;
}
```

The site supports **dark mode** (default) and **light mode**, toggled via the nav button which sets `data-theme` on `<html>`.

---

## Page Sections

| # | Section         | Description                                  |
|---|-----------------|----------------------------------------------|
| 1 | Hero            | Full-screen hero with animated title         |
| 2 | Art Stars       | Filterable featured artists with ornate frames |
| 3 | Submissions     | Open calls with sliding image stage          |
| 4 | Gallery         | 8-tile masonry art gallery with hover overlay |
| 5 | New Releases    | Horizontal slider for books & magazines      |
| 6 | Podcast         | Player UI with episode list                  |
| 7 | Blog            | Sidebar category nav + horizontal card slider |
| 8 | Testimonials    | Animated quote slider with dot navigation    |
| 9 | Brand Scroller  | Partner brand marquee                        |

---

## Data

All static content (art stars, releases, submissions, gallery items, blog posts, etc.) lives in `src/app/data.ts` with full TypeScript types.  
To update content, edit only that file — the UI updates automatically.

---

## Copy Protection

The design is protected against casual copying:

- **Right-click disabled** — context menu is blocked via JavaScript
- **Text selection disabled** — via `user-select: none` CSS
- **Image dragging blocked** — `draggable={false}` + `pointer-events: none`
- **Keyboard shortcuts blocked** — F12, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+C, DevTools shortcuts
- **Transparent overlay** — covers image containers so native image menus cannot appear
- **CSS watermark** — subtle `© Arts to Hearts` text on gallery tiles

---

## License

© 2025 Arts to Hearts Project. All rights reserved.  
Unauthorized copying or reproduction of this design is prohibited.
