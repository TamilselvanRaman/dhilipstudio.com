// Administrative Data Store & Types for Studio Admin & SEO Dashboard

export interface Booking {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  status: "Confirmed" | "Pending" | "Completed" | "Cancelled";
  amount: string;
}

export interface Inquiry {
  id: string;
  clientName: string;
  phone: string;
  eventDate: string;
  venue: string;
  budget: string;
  status: "New" | "Contacted" | "Quoted" | "Booked" | "Archived";
  createdAt: string;
}

export interface MetaTagEntry {
  routePath: string;
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogImageUrl: string;
  status: "Optimized" | "Needs Review" | "Missing Tags";
}

export interface TargetKeyword {
  id: string;
  keyword: string;
  targetRoute: string;
  currentRank: number;
  monthlySearchVolume: number;
  difficulty: "Low" | "Medium" | "High";
}

export const initialBookings: Booking[] = [
  {
    id: "BK-101",
    clientName: "Ananya & Rahul",
    phone: "+91 98401 23456",
    email: "rahul.ananya@gmail.com",
    eventType: "Brahmin Sacred Muhurtham",
    eventDate: "2026-11-14",
    location: "Mylapore Palace, Chennai",
    status: "Confirmed",
    amount: "₹1,85,000",
  },
  {
    id: "BK-102",
    clientName: "Kavya & Vikram",
    phone: "+91 97902 34567",
    email: "vikram.kavya@gmail.com",
    eventType: "Candid Pre-Wedding Beach Film",
    eventDate: "2026-10-28",
    location: "ECR Beach Resort, Chennai",
    status: "Pending",
    amount: "₹75,000",
  },
  {
    id: "BK-103",
    clientName: "Priya & Siddharth",
    phone: "+91 98840 56789",
    email: "sid.priya@gmail.com",
    eventType: "Grand Destination Reception",
    eventDate: "2026-12-05",
    location: "Leela Palace, Chennai",
    status: "Confirmed",
    amount: "₹2,50,000",
  },
];

export const initialInquiries: Inquiry[] = [
  {
    id: "INQ-201",
    clientName: "Sridevi Raman",
    phone: "+91 91762 31420",
    eventDate: "2026-12-18",
    venue: "Mayor Ramanathan Hall, Chetpet",
    budget: "₹2,00,000 - ₹3,00,000",
    status: "New",
    createdAt: "2026-09-22",
  },
  {
    id: "INQ-202",
    clientName: "Karthik Subramanian",
    phone: "+91 98410 98765",
    eventDate: "2027-01-22",
    venue: "Sri Ramachandra Convention Center, Thiruvanmiyur",
    budget: "₹1,50,000 - ₹2,00,000",
    status: "Contacted",
    createdAt: "2026-09-21",
  },
];

export const initialMetaTags: MetaTagEntry[] = [
  {
    routePath: "/",
    pageName: "Homepage",
    metaTitle: "Dhilip Studio — Editorial Wedding Photography Chennai",
    metaDescription: "Premier candid wedding photographers in Chennai specializing in Brahmin Muhurtham rituals, pre-wedding films & milestone celebrations.",
    canonicalUrl: "https://dhilipstudio.com/",
    ogImageUrl: "/logo.png",
    status: "Optimized",
  },
  {
    routePath: "/gallery",
    pageName: "Monograph Gallery",
    metaTitle: "Candid Wedding Monographs & Portfolio — Dhilip Studio",
    metaDescription: "Explore 500+ candid wedding monographs, traditional South Indian ceremonies & pre-wedding beach films.",
    canonicalUrl: "https://dhilipstudio.com/gallery",
    ogImageUrl: "/logo.png",
    status: "Optimized",
  },
  {
    routePath: "/videos",
    pageName: "Cinematography Films",
    metaTitle: "Wedding Films & Cinematography Teasers — Dhilip Studio",
    metaDescription: "Watch 4K wedding highlight films, candid ceremony teasers and pre-wedding cinematic stories.",
    canonicalUrl: "https://dhilipstudio.com/videos",
    ogImageUrl: "/logo.png",
    status: "Optimized",
  },
  {
    routePath: "/about",
    pageName: "About Dhilip Studio",
    metaTitle: "About Us — Luxury Wedding Photographers Porur Chennai",
    metaDescription: "Learn about Dhilip Studio's legacy in candid wedding photography, sacred Brahmin rituals & editorial films.",
    canonicalUrl: "https://dhilipstudio.com/about",
    ogImageUrl: "/logo.png",
    status: "Optimized",
  },
  {
    routePath: "/contact",
    pageName: "Bookings & Contact",
    metaTitle: "Book Wedding Photographers — Dhilip Studio Porur",
    metaDescription: "Get custom quotes for wedding photography, candid films, maternity & birthday celebrations in Chennai.",
    canonicalUrl: "https://dhilipstudio.com/contact",
    ogImageUrl: "/logo.png",
    status: "Optimized",
  },
  {
    routePath: "/blog",
    pageName: "Wedding Journal & Blog",
    metaTitle: "Wedding Photography Tips & Brahmin Ceremony Guides — Dhilip Studio",
    metaDescription: "Read expert advice on candid wedding photography, Brahmin Muhurtham timelines, and choosing wedding photographers.",
    canonicalUrl: "https://dhilipstudio.com/blog",
    ogImageUrl: "/logo.png",
    status: "Optimized",
  },
];

export const initialKeywords: TargetKeyword[] = [
  {
    id: "KW-1",
    keyword: "Brahmin Wedding Photographer Chennai",
    targetRoute: "/gallery",
    currentRank: 2,
    monthlySearchVolume: 1600,
    difficulty: "High",
  },
  {
    id: "KW-2",
    keyword: "Candid Wedding Photography Porur",
    targetRoute: "/",
    currentRank: 1,
    monthlySearchVolume: 880,
    difficulty: "Medium",
  },
  {
    id: "KW-3",
    keyword: "Pre-Wedding Beach Shoot Chennai",
    targetRoute: "/videos",
    currentRank: 3,
    monthlySearchVolume: 1200,
    difficulty: "High",
  },
  {
    id: "KW-4",
    keyword: "Best Wedding Cinematography Chennai",
    targetRoute: "/videos",
    currentRank: 4,
    monthlySearchVolume: 2100,
    difficulty: "High",
  },
];
