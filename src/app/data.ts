// ============================================================
// data.ts — All static data for Arts to Hearts Project
// ============================================================

// ----------------------------
// Types
// ----------------------------

export interface BlogPost {
  id: string;
  title: string;
  tag: string;
  author: string;
  date: string;
  img: string;
  content: string;
  excerpt: string;
}

export interface ArtStar {
  name: string;
  loc: string;
  month: string;
  frame: "frame-gold" | "frame-wood";
  category: "GOLD" | "WOODEN";
  img: string;
}

export interface Release {
  title: string;
  date: string;
  price: string;
  sale: string;
  category: "BOOKS" | "MAGAZINES";
  img: string;
  frame: "frame-gold" | "frame-wood";
  month: string;
}

export interface Testimonial {
  text: string;
  name: string;
  title: string;
  img: string;
}

export interface Submission {
  title: string;
  date: string;
  loc: string;
  img: string;
  desc: string;
  status: string;
}

export interface GalleryItem {
  title: string;
  sub: string;
  img: string;
}

export interface PodcastEpisode {
  title: string;
  time: string;
  date: string;
}

// ----------------------------
// Art Stars of 2025
// ----------------------------

export const ART_STARS: ArtStar[] = [
  {
    name: "Fhionna Love McGeechan",
    loc: "Scotland",
    month: "November. 2025",
    frame: "frame-gold",
    category: "GOLD",
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
  },
  {
    name: "Fhionna Love McGeechan",
    loc: "Scotland",
    month: "October. 2025",
    frame: "frame-wood",
    category: "WOODEN",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
  },
  {
    name: "Wawi Amasha",
    loc: "Kenya",
    month: "October. 2025",
    frame: "frame-gold",
    category: "GOLD",
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800",
  },
];

// ----------------------------
// New Releases
// ----------------------------

export const RELEASES: Release[] = [
  {
    title: "Studio Visit Book Vol. 7",
    date: "FEB 2026 EDITION",
    price: "$150.00",
    sale: "$120.00",
    category: "BOOKS",
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
    frame: "frame-gold",
    month: "BEST SELLER",
  },
  {
    title: "101 Art Book : Food Edition",
    date: "COLLECTORS ITEM",
    price: "$157.00",
    sale: "$120.00",
    category: "BOOKS",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    frame: "frame-wood",
    month: "COLLECTORS",
  },
  {
    title: "Arts to Hearts Magazine issue 11",
    date: "LATEST ISSUE",
    price: "$79.00",
    sale: "$69.00",
    category: "MAGAZINES",
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800",
    frame: "frame-gold",
    month: "LATEST",
  },
  {
    title: "The Creative Soul Guide",
    date: "APRIL 2026 EDITION",
    price: "$130.00",
    sale: "$99.00",
    category: "BOOKS",
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800",
    frame: "frame-wood",
    month: "NEW",
  },
  {
    title: "Artist Residency Vol. 2",
    date: "SPRING 2026",
    price: "$110.00",
    sale: "$85.00",
    category: "BOOKS",
    img: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?q=80&w=800",
    frame: "frame-gold",
    month: "PRE-ORDER",
  },
];

// ----------------------------
// Testimonials
// ----------------------------

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Arts to Hearts Project is more than a gallery; it's a sanctuary for souls who breathe creativity. The community has empowered me to see my art through a lens of global connection and profound impact.",
    name: "Elena Vance",
    title: "Contemporary Painter | London",
    img: "https://i.pravatar.cc/150?u=artist1",
  },
  {
    text: "Being part of this community has transformed my artistic practice. The support and visibility provided by Arts to Hearts are unparalleled in the modern art world.",
    name: "Marcus Thorne",
    title: "Mixed Media Artist | Berlin",
    img: "https://i.pravatar.cc/150?u=artist2",
  },
  {
    text: "A truly unique platform that celebrates diversity and innovation. It's not just about showcasing art; it's about building lasting connections with fellow creatives.",
    name: "Sarah Jenkins",
    title: "Sculptor | New York",
    img: "https://i.pravatar.cc/150?u=artist3",
  },
];

// ----------------------------
// Submissions / Open Calls
// ----------------------------

export const SUBMISSIONS: Submission[] = [
  {
    title: "The Big Book of Tiny Creatives Ed. 3",
    date: "JANUARY 14, 2026",
    loc: "INTERNATIONAL",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200",
    desc: "A global call for young artists aged 2 to 18 years, inviting parents and guardians to celebrate their children's creativity. Selected artworks will be published in a professionally produced hardcover book distributed globally.",
    status: "OPEN FOR ENTRIES",
  },
  {
    title: "101 Art Book: Dog Edition",
    date: "FEBRUARY 22, 2026",
    loc: "INTERNATIONAL",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200",
    desc: "An international call for art inviting artists to explore the theme of dogs through diverse visual practices. Selected artists will be published in a professionally produced hardcover book distributed globally.",
    status: "SUBMISSIONS OPEN",
  },
  {
    title: "Arts to Hearts Magazine Issue 11",
    date: "MARCH 30, 2026",
    loc: "INTERNATIONAL",
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1200",
    desc: "Our flagship publication's 11th edition. We are looking for artists who push boundaries and tell compelling stories through their medium. This issue focuses on 'Resilience' and global impact.",
    status: "FINAL CALL",
  },
];

// ----------------------------
// Gallery Items
// ----------------------------

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Ancient Marble",
    sub: "Sculpture",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800",
  },
  {
    title: "Golden Gaze",
    sub: "Photography",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
  },
  {
    title: "The Passage",
    sub: "Installation",
    img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=800",
  },
  {
    title: "Statue Study",
    sub: "Classical",
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800",
  },
  {
    title: "Ethereal Form",
    sub: "Modern Art",
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
  },
  {
    title: "Quiet Echo",
    sub: "Vintage Art",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
  },
  {
    title: "Relic 01",
    sub: "History",
    img: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=800",
  },
  {
    title: "Old World",
    sub: "Fine Art",
    img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
  },
];

// ----------------------------
// Podcast Episodes
// ----------------------------

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    title: "Can Grief and Loss Make You a Better Artist? ...",
    time: "55:15",
    date: "Dec 25, 2025",
  },
  {
    title: "How to Get People Excited About Your Art Wo...",
    time: "1:13:37",
    date: "Dec 18, 2025",
  },
  {
    title: "How to build an art career from scratch | ATH...",
    time: "38:14",
    date: "Dec 11, 2025",
  },
  {
    title: "The Power of Vulnerability in Contemporary Art",
    time: "42:20",
    date: "Dec 04, 2025",
  },
];

// ----------------------------
// Brand Partners
// ----------------------------

export const BRANDS: string[] = [
  "HOMEGROWN",
  "CREATE!",
  "THE ARTIST ADVISORY",
  "VAC",
  "THE JEALOUS CURATOR",
  "ART GIRL RISING",
];

// ----------------------------
// Navigation / Blog Categories
// ----------------------------

export const BLOG_CATEGORIES: string[] = [
  "ART BIZ",
  "ARTIST INTERVIEWS",
  "ATH COMMUNITY",
  "ART COLLECTOR",
  "ARTICLES",
  "ART HISTORY",
  "CREATIVE SUCCESS",
  "WOMEN IN ARTS",
];

// ----------------------------
// Blog Posts
// ----------------------------

export const BLOG_POSTS: Record<string, BlogPost> = {
  "satellite-art-fairs-2026": {
    id: "satellite-art-fairs-2026",
    title: "5 Satellite Art Fairs to watch this LA Art Week 2026",
    tag: "COMMUNITY",
    author: "Komal",
    date: "February 24, 2026",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    excerpt:
      "By the time LA Art Week begins, the city already feels charged. Here are the satellite fairs you cannot miss.",
    content: `
      By the time LA Art Week begins, the city already feels charged. The air is thick with anticipation, and the galleries are bustling with activity. While the main fair often takes center stage, the satellite fairs are where the real innovation happens. 

      In 2026, we are seeing a shift towards more immersive and community-focused exhibitions. These five satellite fairs are leading the charge:

      1. **The Independent Collective**: Focusing strictly on unrepresented women artists.
      2. **Neon Horizon**: A celebration of new media and digital installations in derelict industrial spaces.
      3. **Vessel & Void**: A curated exploration of ceramic and sculptural forms.
      4. **The Pulse**: A mobile gallery experience that travels across the city during the week.
      5. **Roots & Shoots**: An eco-conscious fair highlighting sustainable art practices.
    `,
  },
  "museums-la-art-week": {
    id: "museums-la-art-week",
    title: "Top Museums to Visit in LA During Art Week",
    tag: "TRAVEL",
    author: "Komal",
    date: "February 24, 2026",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800",
    excerpt:
      "LA feels different during Art Week. These museums offer the perfect sanctuary for the soulful viewer.",
    content: `
      Los Angeles is a city of layers, and during Art Week, those layers are more visible than ever. Beyond the temporary booths of the fairs, the permanent institutions of the city stand as pillars of inspiration.

      Institutions to visit:
      - **The Broad**: Its iconic honeycomb structure houses one of the world's most impressive contemporary collections.
      - **LACMA**: The sprawling campus offers everything from masterworks to digital avant-garde.
    `,
  },
};
