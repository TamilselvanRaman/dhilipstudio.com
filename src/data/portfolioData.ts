export interface PortfolioDetailItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  edition: string;
  client: string;
  location: string;
  date: string;
  coverImage: string;
  isViewAllCard?: boolean;
  images: {
    src: string;
    caption: string;
    alt: string;
  }[];
  description: string;
  equipment: string[];
  instagramUrl: string;
}

export const portfolioDetailsList: PortfolioDetailItem[] = [
  {
    id: 1,
    slug: "a-day-for-love-in-chennai",
    title: "A Day For Love In Chennai",
    category: "SACRED MUHURTHAM",
    edition: "STORY EDITION 01",
    client: "Jane & Vishal",
    location: "Mylapore Palace, Chennai",
    date: "NOVEMBER 2025",
    coverImage: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    images: [
      {
        src: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
        caption: "Bride Jane and Groom Vishal under decorated temple mandap during flower shower ritual.",
        alt: "Jane & Vishal South Indian wedding couple under decorated mandap",
      },
      {
        src: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
        caption: "Unscripted candid smile of Jane captured during Mangalyadharanam sacred vows.",
        alt: "Jane & Vishal candid wedding moment",
      },
      {
        src: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio-mobile-opt.webp",
        caption: "Jane & Vishal grand evening reception mandap entrance.",
        alt: "Jane & Vishal reception portrait",
      },
    ],
    description: "An extraordinary celebration of love set amidst traditional temple pillars and fragrant jasmine garlands. Dhilip Studio captured every sacred ritual from Kasi Yatra to the grand evening reception with dual 4K cinema cameras.",
    equipment: ["Sony A7IV 4K Cinema", "Master 85mm f/1.4 GM Lens", "DJI Mavic 3 Pro Drone", "Raw Silk Heirloom Album"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
  {
    id: 2,
    slug: "candid-heritage-vows",
    title: "Candid Heritage Vows & Oonjal Rituals",
    category: "CANDID PHOTOGRAPHY",
    edition: "STORY EDITION 02",
    client: "Bharathi & Radhan",
    location: "Adyar Mandapam, Chennai",
    date: "DECEMBER 2025",
    coverImage: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
    images: [
      {
        src: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
        caption: "Mid-laugh candid interaction of Bharathi & Radhan during garland exchange.",
        alt: "Bharathi & Radhan candid wedding laughter",
      },
      {
        src: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
        caption: "Sacred Oonjal swing ceremony with traditional South Indian songs.",
        alt: "Oonjal ritual couple portrait",
      },
    ],
    description: "Unscripted candid wedding documentation. Dhilip Studio operates with unobtrusive reverence so real emotions, mid-laugh glances, and tears of joy are preserved in authentic warmth.",
    equipment: ["Canon R5 8K", "50mm f/1.2 L USM", "Godox Studio Lighting"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
  {
    id: 3,
    slug: "brahmin-wedding-photography-rituals",
    title: "Traditional Brahmin Wedding & Kasi Yatra",
    category: "BRAHMIN RITUALS",
    edition: "STORY EDITION 03",
    client: "Ramanathan & Meenakshi",
    location: "Mylapore Hall, Chennai",
    date: "DECEMBER 2025",
    coverImage: "/home_Page_images/brahmin-wedding-photography.webp",
    images: [
      {
        src: "/home_Page_images/brahmin-wedding-photography.webp",
        caption: "Traditional Iyer priest homam ritual and rice flower shower for Ramanathan & Meenakshi.",
        alt: "Brahmin wedding ceremony flower shower",
      },
      {
        src: "/home_Page_images/brahmin-wedding-photography-mobile.webp",
        caption: "Kanyadaanam & Mangalyadharanam auspicious minute framing.",
        alt: "Brahmin wedding sacred vows",
      },
    ],
    description: "Specialized documentation of authentic Iyer & Iyengar rituals. Capturing Kasi Yatra, Oonjal, and Kanyadaanam without disturbing sacred chants.",
    equipment: ["Sony A7SIII", "24-70mm f/2.8 GM II", "Raw Silk Album"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
  {
    id: 4,
    slug: "cinematic-post-wedding-solitude",
    title: "Mahabalipuram Beach Solitude Monograph",
    category: "PRE & POST-WEDDING",
    edition: "STORY EDITION 04",
    client: "Ramkumar & Kalai",
    location: "Mahabalipuram Beach & Shore Temple",
    date: "JANUARY 2026",
    coverImage: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.webp",
    images: [
      {
        src: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.webp",
        caption: "Sunset couple monograph of Ramkumar & Kalai framed against ancient coastal stone architecture.",
        alt: "Ramkumar & Kalai Mahabalipuram beach shoot",
      },
      {
        src: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio-mobile.webp",
        caption: "Golden hour dramatic gown flow with ocean breeze.",
        alt: "Mahabalipuram pre wedding outdoor portrait",
      },
    ],
    description: "A romantic cinematic monograph captured along the golden shores of Mahabalipuram. Featuring 4K slow-motion aerial drone footage and signature hand-retouched color grading.",
    equipment: ["Sony FX3 Cinema Line", "DJI Air 3 Drone", "24-70mm f/2.8 GM II"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
  {
    id: 5,
    slug: "studio-engagement-celebration",
    title: "Ring Exchange & Family Monograph",
    category: "ENGAGEMENT",
    edition: "STORY EDITION 05",
    client: "Sugarmar & Partner",
    location: "Anna Nagar Studio, Chennai",
    date: "FEBRUARY 2026",
    coverImage: "/home_Page_images/engagement-photo-studio-chennai.webp",
    images: [
      {
        src: "/home_Page_images/engagement-photo-studio-chennai.webp",
        caption: "Romantic ring exchange portrait with custom studio backdrop.",
        alt: "Engagement studio photo",
      },
      {
        src: "/home_Page_images/engagement-photo-studio-chennai-mobile.webp",
        caption: "Bridal close-up highlighting gold temple jewelry.",
        alt: "Bridal gold jewelry close-up",
      },
    ],
    description: "Vibrant ring exchange celebrations captured in our temperature-controlled studio. Warm ambient lighting combined with high-contrast portrait framing.",
    equipment: ["Hasselblad Medium Format", "Profoto Lighting System"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
  {
    id: 6,
    slug: "maternity-baby-shower-monograph",
    title: "Maternity Solitude & Baby Bump Journey",
    category: "MATERNITY",
    edition: "STORY EDITION 06",
    client: "Priya & Karthik",
    location: "ECR Resort, Chennai",
    date: "FEBRUARY 2026",
    coverImage: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.webp",
    images: [
      {
        src: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.webp",
        caption: "Flowing royal blue gown portrait of Priya along secluded garden paths.",
        alt: "Priya maternity gown photoshoot",
      },
      {
        src: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio-mobile.webp",
        caption: "Tender husband Karthik and wife Priya embrace celebrating upcoming parenthood.",
        alt: "Priya & Karthik maternity couple embrace",
      },
    ],
    description: "A tender, serene maternity monograph celebrating the magical path to parenthood. Gentle natural lighting and artistic gown styling.",
    equipment: ["Sony A7SIII", "50mm f/1.4 GM"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
  {
    id: 7,
    slug: "newborn-baby-photoshoot-chennai",
    title: "Newborn Baby Innocence Monograph",
    category: "NEWBORN",
    edition: "STORY EDITION 07",
    client: "Kavitha & Arul",
    location: "Porur Studio, Chennai",
    date: "MARCH 2026",
    coverImage: "/home_Page_images/best-newborn-baby-photographer-chennai-dhilip-studio.webp",
    images: [
      {
        src: "/home_Page_images/best-newborn-baby-photographer-chennai-dhilip-studio.webp",
        caption: "Gentle temperature-controlled sleeping baby prop portrait.",
        alt: "Newborn baby sleeping photo",
      },
      {
        src: "/home_Page_images/best-newborn-baby-photographer-chennai-dhilip-studio-mobile.webp",
        caption: "Parents Kavitha & Arul holding tiny newborn hands.",
        alt: "Newborn parent hands close-up",
      },
    ],
    description: "Gentle, safe, temperature-controlled studio sessions capturing the pure innocence of your newborn's first days.",
    equipment: ["Canon R6 Mark II", "85mm f/1.2 L"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
  {
    id: 8,
    slug: "amrutha-first-birthday-celebration",
    title: "Amrutha 1st Birthday Milestone",
    category: "MILESTONE JOY",
    edition: "STORY EDITION 08",
    client: "Amrutha & Family",
    location: "T. Nagar Grand Hall, Chennai",
    date: "MARCH 2026",
    coverImage: "/home_Page_images/kids-birthday-photographer-chennai.webp",
    images: [
      {
        src: "/home_Page_images/kids-birthday-photographer-chennai.webp",
        caption: "Milestone marquee lighting setup with cake smash joy for baby Amrutha.",
        alt: "Amrutha 1st birthday celebration setup",
      },
      {
        src: "/home_Page_images/kids-birthday-photographer-chennai-mobile.webp",
        caption: "Candid laugh of baby Amrutha with parents and grandparents.",
        alt: "Amrutha family celebration smile",
      },
    ],
    description: "A vibrant 1st birthday milestone celebration filled with marquee lights, cake smash smiles, and multi-generational family warmth.",
    equipment: ["Canon R6 Mark II", "35mm f/1.4 L"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
  {
    id: 9,
    slug: "all-portfolios-gallery",
    title: "Explore Full Dhilip Studio Portfolio Gallery",
    category: "COMPLETE GALLERY (500+ MONOGRAPHS)",
    edition: "SPECIAL EDITION 09",
    client: "All Dhilip Studio Clients",
    location: "Chennai & South India",
    date: "FULL COLLECTION",
    coverImage: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    isViewAllCard: true,
    images: [],
    description: "Browse all our candid wedding photography monographs, sacred Brahmin rituals, pre-wedding beach films, maternity & milestone birthday celebrations in our main gallery.",
    equipment: ["Full 4K Cinema Gear"],
    instagramUrl: "https://instagram.com/dhilipstudio",
  },
];

