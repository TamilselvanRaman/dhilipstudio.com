export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  cardTitle: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  coverImage: string;
  excerpt: string;
  sections: {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    slug: "how-professional-photographers-capture-beautiful-maternity-photos",
    title: "How Professional Photographers Capture Beautiful Maternity Photos",
    cardTitle: "HOW PROFESSIONAL PHOTOGRAPHERS CAPTURE BEAUTIFUL MATERNITY P",
    category: "MATERNITY SHOOT",
    date: "SEPT 15, 2026",
    readTime: "6 MIN READ",
    author: "Dhilip Kumar",
    coverImage: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg",
    excerpt: "There's a particular kind of quiet that settles into a room during a maternity shoot. Nine months of waiting, of feeling the baby move, of watching your body change in ways you didn't expect and somehow it all needs to fit into a handful of photographs.",
    sections: [
      {
        paragraphs: [
          "There's a particular kind of quiet that settles into a room during a maternity shoot. Nine months of waiting, of feeling the baby move, of watching your body change in ways you didn't expect and somehow it all needs to fit into a handful of photographs. That's a lot to ask of a camera. But the right photographer knows how to slow things down and actually see the person in front of them, not just the belly. This is why so many expecting parents in the city start their search with a maternity photoshoot Chennai, hoping to find someone who gets that balance right. In this blog, we will take a closer look at what actually goes into making those photographs feel real instead of rehearsed.",
        ],
      },
      {
        heading: "IT STARTS WITH MAKING THE MOTHER FEEL LIKE HERSELF",
        paragraphs: [
          "Before a single frame is shot, a good photographer talks. Not about angles or lighting, just a normal conversation about how the pregnancy has been, what she's been craving, whether the nursery is done yet. It sounds unrelated to photography, but it isn't. A mother who feels heard relaxes her shoulders without being told to. She stops sucking in her stomach or worrying about how her arms look.",
          "Some women want to feel powerful in front of the lens. Others want something quiet and tender. Neither is more photogenic than the other and a photographer who's paying attention will notice which one a woman is drawn to within the first ten minutes, often before she says it out loud.",
        ],
      },
      {
        heading: "LIGHT DOES MORE WORK THAN PEOPLE REALIZE",
        paragraphs: [
          "Nothing kills a maternity photo faster than the wrong light. Too harsh and every stretch mark and shadow gets exaggerated in ways that feel unkind. Too flat and the belly, which is really the whole point of the shoot, loses its shape entirely.",
          "Most photographers reach for soft, indirect light. Window light in the late morning. A studio softbox bounced off a white wall instead of pointed straight at the face. Outdoor sessions during golden hour have become popular for good reason. That low sun wraps around a person instead of hitting them head on and the warmth in the tone does a lot of emotional heavy lifting on its own.",
        ],
      },
      {
        heading: "POSING WITHOUT MAKING IT LOOK LIKE POSING",
        paragraphs: [
          "This is the part people underestimate. A stiff pose reads as stiff no matter how nice the dress or the backdrop is. So instead of barking out instructions, experienced photographers guide gently, one small shift at a time.",
          "A few things they tend to lean on:",
        ],
        bullets: [
          "Turning the body slightly instead of facing the camera straight on",
          "Letting hands rest naturally on the belly rather than spreading the fingers wide",
          "A small downward tilt of the chin to avoid an unflattering shadow underneath",
          "Bringing in the partner, or an older sibling, for a moment that isn't posed at all",
        ],
      },
      {
        heading: "CLOTHES AND PROPS, KEPT SIMPLE",
        paragraphs: [
          "Fabric that moves matters more than people expect. Flowy gowns, soft knits, anything that isn't stiff tends to photograph beautifully because it drapes around the belly instead of fighting it. Solid colors usually win over busy prints, since a loud pattern pulls the eye away from the person wearing it.",
          "Props get used sparingly and that's intentional. A worn pair of baby shoes. An ultrasound photo tucked into a hand. A note written by the father. Small details like these carry weight precisely because there aren't too many of them competing for attention.",
        ],
      },
      {
        heading: "THE REAL SKILL IS CATCHING WHAT WASN'T PLANNED",
        paragraphs: [
          "Anyone can direct a pose. What's harder and what actually separates a forgettable shoot from a memorable one, is catching the moments nobody planned for. A laugh between partners. A hand resting instinctively on the bump. A look that says more than any smile could.",
          "Photographers who are good at this often stay quiet and just watch, camera ready, waiting instead of directing. They ask a question, then photograph the reaction rather than the answer. It's a small shift in approach, but it's usually where the best images in the whole gallery come from.",
        ],
      },
      {
        heading: "EDITING THAT DOESN'T TRY TOO HARD",
        paragraphs: [
          "The editing stage should barely be noticeable. A touch of color correction, some smoothing on the skin tone, nothing that changes how the mother actually looked that day. Overprocessed maternity photos tend to feel cold, almost clinical, which defeats the entire purpose of the shoot.",
          "What matters more is consistency. A gallery where every photo has the same warmth and tone feels considered. One where each image looks edited by a different person feels disjointed, even if each photo is technically fine on its own.",
          "We started Dhilip Studio because we wanted maternity photography to feel less like a transaction and more like something worth remembering. Every session we shoot teaches us a little more about what makes a photograph honest instead of just polished. We are not interested in cookie cutter poses or forced smiles. We would rather sit with a family for an extra twenty minutes if it means catching one real, unplanned moment.",
          "If you are somewhere in your pregnancy and thinking about capturing this chapter, we would genuinely love to talk. And once the baby arrives and the next big celebration comes around, our team also handles wedding photography in Chennai with the same honesty we bring to every maternity session.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "tell-your-love-story-through-a-song-themed-pre-wedding-shoot",
    title: "Tell Your Love Story Through a Song-Themed Pre-Wedding Shoot",
    cardTitle: "TELL YOUR LOVE STORY THROUGH A SONG-THEMED PRE-WEDDING SHOOT",
    category: "PRE-WEDDING",
    date: "AUG 28, 2026",
    readTime: "5 MIN READ",
    author: "Dhilip Kumar",
    coverImage: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg",
    excerpt: "Every couple has songs that bring back memories. It could be the first song you danced to, the track playing during your first road trip, or a melody that became part of your unique bond.",
    sections: [
      {
        paragraphs: [
          "Every couple has songs that bring back memories. It could be the first song you danced to, the track playing during your first road trip, or a melody that became part of your unique bond.",
          "We craft cinematic pre-wedding monographs where scenes are storyboarded to match your favorite music tracks and romantic melodies.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "best-pre-wedding-shoot-locations-in-chennai",
    title: "Best Pre-Wedding Shoot Locations in Chennai",
    cardTitle: "BEST PRE-WEDDING SHOOT LOCATIONS IN CHENNAI",
    category: "LOCATION GUIDE",
    date: "AUG 14, 2026",
    readTime: "4 MIN READ",
    author: "Studio Editorial Team",
    coverImage: "/home_Page_images/engagement-photo-studio-chennai.jpg",
    excerpt: "A pre-wedding shoot is one of the most exciting parts of the wedding journey. It gives couples the opportunity to celebrate their relationship before the big day.",
    sections: [
      {
        paragraphs: [
          "A pre-wedding shoot is one of the most exciting parts of the wedding journey. It gives couples the opportunity to celebrate their relationship before the big day.",
          "From Mahabalipuram's heritage shore temples to ECR sunset beaches and DakshinaChitra cultural backdrops, Chennai offers incredible outdoor photography locations.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "best-wedding-photographers-in-chennai-candid-traditional",
    title: "Best Wedding Photographers in Chennai | Candid & Traditional",
    cardTitle: "BEST WEDDING PHOTOGRAPHERS IN CHENNAI | CANDID & TRADITIONAL",
    category: "WEDDING GUIDE",
    date: "JULY 30, 2026",
    readTime: "7 MIN READ",
    author: "Dhilip Kumar",
    coverImage: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    excerpt: "Chennai is known for its rich culture, grand wedding traditions, and venues. Finding the best wedding photographers in Chennai ensures every sacred ritual is documented with crystal clear precision.",
    sections: [
      {
        paragraphs: [
          "Chennai is known for its rich culture, grand wedding traditions, and venues. Finding the best wedding photographers in Chennai ensures that every sacred ritual—from Kasi Yatra to Oonjal and Mangalyadharanam—is documented with crystal clear 4K precision and emotional warmth.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "wedding-photographer-chennai-best-candid-traditional",
    title: "Wedding Photographer Chennai – Best Candid & Traditional Photography",
    cardTitle: "WEDDING PHOTOGRAPHER CHENNAI – BEST CANDID & TRADITIONAL P",
    category: "BRAHMIN RITUALS",
    date: "JULY 18, 2026",
    readTime: "6 MIN READ",
    author: "Dhilip Kumar",
    coverImage: "/home_Page_images/brahmin-wedding-photography.jpg",
    excerpt: "Choosing the right wedding photographer in Chennai is essential to capture your big day perfectly. At Dhilip Studio, we specialize in candid moments and traditional heirloom album production.",
    sections: [
      {
        paragraphs: [
          "Choosing the right wedding photographer in Chennai is essential to capture your big day perfectly. At Dhilip Studio, we specialize in candid moments, high-speed shutter mandap action, and traditional heirloom album production built to last generations.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "top-wedding-photography-in-chennai-best-candid-traditional",
    title: "Top Wedding Photography in Chennai | Best Candid & Traditional",
    cardTitle: "TOP WEDDING PHOTOGRAPHY IN CHENNAI | BEST CANDID & TRADITION",
    category: "PHOTOGRAPHY INSIGHTS",
    date: "JUNE 25, 2026",
    readTime: "5 MIN READ",
    author: "Studio Editorial Team",
    coverImage: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
    excerpt: "Weddings in Chennai are filled with vibrant traditions, emotional moments, and grand celebrations. Choosing top wedding photography in Chennai ensures every special moment is captured authentically.",
    sections: [
      {
        paragraphs: [
          "Weddings in Chennai are filled with vibrant traditions, emotional moments, and grand celebrations. Choosing top wedding photography in Chennai ensures every special laugh, flower toss, and tear of happiness is captured authentically without feeling staged.",
        ],
      },
    ],
  },
];
