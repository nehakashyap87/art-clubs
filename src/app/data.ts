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

export const BLOG_POSTS: Record<string, BlogPost> = {
  "satellite-art-fairs-2026": {
    id: "satellite-art-fairs-2026",
    title: "5 Satellite Art Fairs to watch this LA Art Week 2026",
    tag: "COMMUNITY",
    author: "Komal",
    date: "February 24, 2026",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    excerpt: "By the time LA Art Week begins, the city already feels charged. Here are the satellite fairs you cannot miss.",
    content: `
      By the time LA Art Week begins, the city already feels charged. The air is thick with anticipation, and the galleries are bustling with activity. While the main fair often takes center stage, the satellite fairs are where the real innovation happens. 

      In 2026, we are seeing a shift towards more immersive and community-focused exhibitions. These five satellite fairs are leading the charge:

      1. **The Independent Collective**: Focusing strictly on unrepresented women artists.
      2. **Neon Horizon**: A celebration of new media and digital installations in derelict industrial spaces.
      3. **Vessel & Void**: A curated exploration of ceramic and sculptural forms.
      4. **The Pulse**: A mobile gallery experience that travels across the city during the week.
      5. **Roots & Shoots**: An eco-conscious fair highlighting sustainable art practices.
    `
  },
  "museums-la-art-week": {
    id: "museums-la-art-week",
    title: "Top Museums to Visit in LA During Art Week",
    tag: "TRAVEL",
    author: "Komal",
    date: "February 24, 2026",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800",
    excerpt: "LA feels different during Art Week. These museums offer the perfect sanctuary for the soulful viewer.",
    content: `
      Los Angeles is a city of layers, and during Art Week, those layers are more visible than ever. Beyond the temporary booths of the fairs, the permanent institutions of the city stand as pillars of inspiration.

      Institutions to visit:
      - **The Broad**: Its iconic honeycomb structure houses one of the world's most impressive contemporary collections.
      - **LACMA**: The sprawling campus offers everything from masterworks to digital avant-garde.
    `
  }
};
