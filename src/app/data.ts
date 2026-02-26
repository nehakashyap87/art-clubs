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

      Each of these spaces offers a unique perspective on the current state of contemporary art, providing a platform for voices that are often sidelined in larger commercial environments.
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

      If you're looking for a deeper dive into the artistic soul of the city, these museums are essential:

      - **The Broad**: Its iconic honeycomb structure houses one of the world's most impressive contemporary collections.
      - **LACMA**: The sprawling campus offers everything from ancient masterpieces to cutting-edge contemporary installations.
      - **MOCA**: The only museum in Los Angeles devoted exclusively to contemporary art.
      - **The Getty Center**: Not just for the art, but for the architecture and the unparalleled views of the city.

      Visiting these institutions during Art Week allows for a dialogue between the immediate energy of the fairs and the historical context of the collections.
    `
    },
    "ceramic-artists-2026": {
        id: "ceramic-artists-2026",
        title: "5 Ceramic Artists That Make IKEA Look Boring",
        tag: "CRAFT",
        author: "Ayesha Malik",
        date: "January 12, 2026",
        img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
        excerpt: "Ceramics is often mistaken for something familiar, even ordinary, yet this new wave of artists...",
        content: `
      The world of ceramics is undergoing a massive transformation. No longer relegated to the "craft" corner, clay is proving to be one of the most versatile and expressive mediums for contemporary artists.

      These five creators are pushing the boundaries of what is possible with earth and fire:

      - **Elena Vance**: Known for her gravity-defying sculptural forms that look more like bone than clay.
      - **Sadaf Khan**: Uses traditional techniques to tell modern stories of migration and identity.
      - **The Studio Collective**: A group focusing on large-scale architectural ceramic installations.
      - **Marcus Thorne**: His work explores the intersection of raw texture and refined glaze.
      - **Lina Rossi**: Minimalist forms that focus on the 'perfect imperfection' of the human touch.

      Their work challenges our perception of everyday objects, elevating functional forms into works of high art.
    `
    },
    "art-star-january-2026": {
        id: "art-star-january-2026",
        title: "Submit Now to Become the Art Star of January!",
        tag: "OPEN CALL",
        author: "Ayesha Malik",
        date: "January 5, 2026",
        img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800",
        excerpt: "The start of a new year carries quiet possibility, offering space to begin again.",
        content: `
      Are you ready to shine? Our monthly 'Art Star' program is now open for submissions for January 2026. This is more than just a contest; it's a platform designed to amplify the voices of independent women artists.

      The selected Art Star will receive:
      - A featured multi-page interview in the digital edition.
      - Social media spotlighting to our global community of 200k+ followers.
      - A permanent place in our 'Art Star' archive.
      - A free studio consultation session with our curators.

      We are looking for authenticity, vision, and a commitment to the craft. Whether you are an established creator or just starting your journey, we want to see your heart on the canvas. Submit your portfolio today and join the movement.
    `
    }
};
