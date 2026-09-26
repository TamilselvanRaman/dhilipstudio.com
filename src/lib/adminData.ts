// Administrative Data Store & Types for Studio Admin & SEO Dashboard
import { legacyServicesList, ServiceDetailItem } from "@/data/servicesData";
import { blogArticles, BlogArticle } from "@/data/blogData";

export interface Booking {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  status: "Enquiry" | "Confirmed" | "Advance Paid" | "Completed" | "Delivered" | "Closed";
  totalAmount: number;
  advancePaid: number;
  balanceDue: number;
  assignedStaff: string[];
  contractAttached: boolean;
  notes?: string;
}

export interface Inquiry {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  eventDate: string;
  venue: string;
  budget: string;
  status: "New" | "Contacted" | "Quoted" | "Follow-up" | "Won" | "Lost";
  source: "Website Form" | "WhatsApp" | "Instagram" | "Referral" | "Google My Business";
  notes?: string;
  score?: "Hot" | "Warm" | "Cold";
  createdAt: string;
}

export interface GalleryMonograph {
  id: string;
  title: string;
  category: string;
  client: string;
  coverImage: string;
  photoCount: number;
  watermark: boolean;
  privateLink?: {
    pin: string;
    expiresAt: string;
    allowDownload: boolean;
  };
}

export interface AlbumCollection {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  photos: string[];
  pricePackage: string;
}

export interface VideoShowcase {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  featuredOnHome: boolean;
  views: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface ClientReview {
  id: string;
  clientName: string;
  eventDate: string;
  rating: number;
  reviewText: string;
  photoUrl?: string;
  status: "Approved" | "Pending" | "Rejected";
  featuredOnHome: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string;
  specialties: string[];
  assignedShootsCount: number;
  avatar: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  tier: "Silver" | "Gold" | "Platinum" | "Custom";
  price: string;
  inclusions: string[];
  popular: boolean;
}

export interface UserAccess {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Manager" | "Editor" | "Photographer" | "Accountant";
  twoFactorEnabled: boolean;
  lastLogin: string;
}

export interface StudioSettingsData {
  studioName: string;
  phone: string;
  email: string;
  gstNumber: string;
  address: string;
  whatsappApiKey: string;
  razorpayKeyId: string;
  autoSmsReminders: boolean;
}

export interface MetaTagEntry {
  routePath: string;
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogImageUrl: string;
  focusKeyword?: string;
  status: "Optimized" | "Needs Review" | "Missing Tags";
}

export interface TargetKeyword {
  id: string;
  keyword: string;
  targetRoute: string;
  currentRank: number;
  previousRank: number;
  localPackRank: number; // Google Maps 3-pack rank
  monthlySearchVolume: number;
  difficulty: "Low" | "Medium" | "High";
  competitorRanks?: { name: string; rank: number }[];
}

export interface SchemaMarkupEntry {
  id: string;
  pageRoute: string;
  schemaType: "LocalBusiness" | "Event" | "Article" | "FAQPage" | "BreadcrumbList" | "AggregateRating";
  active: boolean;
  rawJson: string;
}

export interface OpenGraphEntry {
  routePath: string;
  pageName: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCardType: "summary_large_image" | "summary";
}

export interface RedirectRule {
  id: string;
  sourcePath: string;
  targetPath: string;
  type: 301 | 302;
  hitCount: number;
  createdAt: string;
}

export interface TechnicalAuditIssue {
  id: string;
  category: "Core Web Vitals" | "Alt Text" | "Links" | "Mobile" | "Indexing";
  title: string;
  affectedUrl: string;
  severity: "Critical" | "Warning" | "Passed";
  score: string;
}

// Initial Sample Stores
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
    totalAmount: 185000,
    advancePaid: 50000,
    balanceDue: 135000,
    assignedStaff: ["Dhilip Kumar", "Rajesh V"],
    contractAttached: true,
    notes: "Requires dual 4K cinema cameras and raw silk heirloom album.",
  },
  {
    id: "BK-102",
    clientName: "Kavya & Vikram",
    phone: "+91 97902 34567",
    email: "vikram.kavya@gmail.com",
    eventType: "Candid Pre-Wedding Beach Film",
    eventDate: "2026-10-28",
    location: "ECR Beach Resort, Chennai",
    status: "Advance Paid",
    totalAmount: 75000,
    advancePaid: 30000,
    balanceDue: 45000,
    assignedStaff: ["Santhosh K"],
    contractAttached: true,
  },
];

export const initialInquiries: Inquiry[] = [
  {
    id: "INQ-201",
    clientName: "Sridevi Raman",
    phone: "+91 91762 31420",
    email: "sridevi.raman@gmail.com",
    eventDate: "2026-12-18",
    venue: "Mayor Ramanathan Hall, Chetpet, Chennai",
    budget: "₹2,00,000 - ₹3,00,000",
    status: "New",
    source: "Website Form",
    score: "Hot",
    createdAt: "2026-09-22",
    notes: "Interested in full 3-day Brahmin wedding package & drone cinematography.",
  },
  {
    id: "INQ-202",
    clientName: "Karthik Subramanian",
    phone: "+91 98402 88210",
    email: "karthik.subramanian@outlook.com",
    eventDate: "2026-11-25",
    venue: "Le Royal Meridien, Guindy, Chennai",
    budget: "₹1,50,000 - ₹2,50,000",
    status: "Contacted",
    source: "Website Form",
    score: "Hot",
    createdAt: "2026-09-21",
    notes: "Submitted website inquiry for candid reception & couple outdoor monograph.",
  },
  {
    id: "INQ-203",
    clientName: "Ananya & Raghav",
    phone: "+91 97901 44910",
    email: "ananya.raghav2026@gmail.com",
    eventDate: "2026-10-14",
    venue: "Mylapore Fine Arts Club, Chennai",
    budget: "₹3,00,000 - ₹4,50,000",
    status: "Quoted",
    source: "Website Form",
    score: "Hot",
    createdAt: "2026-09-20",
    notes: "Requires full raw silk heirloom album + 4K cinematic teaser film.",
  },
  {
    id: "INQ-204",
    clientName: "Priya Lakshmi",
    phone: "+91 94441 55210",
    email: "priyalakshmi.dev@gmail.com",
    eventDate: "2026-12-05",
    venue: "InterContinental ECR, Chennai",
    budget: "₹1,00,000 - ₹1,80,000",
    status: "Follow-up",
    source: "Website Form",
    score: "Warm",
    createdAt: "2026-09-19",
    notes: "Inquired via website form for pre-maternity sunset monograph.",
  },
  {
    id: "INQ-205",
    clientName: "Venkatesh Iyer",
    phone: "+91 98840 99310",
    email: "venkatesh.iyer@tcs.com",
    eventDate: "2026-11-08",
    venue: "Sree Hall, T. Nagar, Chennai",
    budget: "₹2,50,000 - ₹3,50,000",
    status: "Won",
    source: "Website Form",
    score: "Hot",
    createdAt: "2026-09-18",
    notes: "Converted lead from website inquiry. Advance paid ₹50,000.",
  },
];

export const initialMonographs: GalleryMonograph[] = [
  {
    id: "MONO-01",
    title: "A Day For Love In Chennai",
    category: "SACRED MUHURTHAM",
    client: "Jane & Vishal",
    coverImage: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    photoCount: 42,
    watermark: true,
    privateLink: {
      pin: "8821",
      expiresAt: "2026-12-31",
      allowDownload: true,
    },
  },
];

export const initialAlbums: AlbumCollection[] = [
  {
    id: "ALB-01",
    title: "Tamil Traditional Wedding Collection",
    category: "Wedding",
    coverImage: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    photos: ["/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp"],
    pricePackage: "Gold Tier — ₹1,85,000",
  },
];

export const initialVideos: VideoShowcase[] = [
  {
    id: "VID-01",
    title: "Jane & Vishal — Grand Temple Muhurtham Cinema",
    category: "Wedding Film",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    featuredOnHome: true,
    views: 14200,
  },
];

export const initialCategories: CategoryItem[] = [
  { id: "CAT-1", name: "Sacred Muhurtham", slug: "sacred-muhurtham", description: "Brahmin Iyer & Iyengar rituals", count: 18 },
  { id: "CAT-2", name: "Candid Photography", slug: "candid-photography", description: "Unscripted emotional moments", count: 24 },
];

export const initialReviews: ClientReview[] = [
  {
    id: "REV-101",
    clientName: "Jane & Vishal",
    eventDate: "Nov 2025",
    rating: 5,
    reviewText: "Dhilip Studio captured our temple wedding with such grace.",
    status: "Approved",
    featuredOnHome: true,
  },
];

export const initialTeam: TeamMember[] = [
  {
    id: "TM-01",
    name: "Dhilip Kumar",
    role: "Founder & Master Photographer",
    phone: "+91 98401 99887",
    specialties: ["Sacred Muhurtham", "Cinematic Portraits"],
    assignedShootsCount: 14,
    avatar: "/logo.png",
  },
];

export const initialPackages: PricingPackage[] = [
  {
    id: "PKG-01",
    title: "Gold Package — 2-Day Tamil Wedding",
    tier: "Gold",
    price: "₹1,85,000",
    inclusions: ["2-Day Coverage", "2 Candid Photographers", "1 Cinema Drone Film"],
    popular: true,
  },
];

export const initialUsers: UserAccess[] = [
  { id: "USR-01", name: "Dhilip Kumar", email: "admin@dhilipstudio.com", role: "Owner", twoFactorEnabled: true, lastLogin: "Just now" },
];

export const initialSettings: StudioSettingsData = {
  studioName: "Dhilip Studio South Indian Wedding Photography",
  phone: "+91 98401 23456",
  email: "contact@dhilipstudio.com",
  gstNumber: "33AAAAA0000A1Z5",
  address: "No. 14, Trunk Road, Porur, Chennai, Tamil Nadu 600116",
  whatsappApiKey: "WA_PROD_KEY_8829102",
  razorpayKeyId: "rzp_live_DhilipStudio992",
  autoSmsReminders: true,
};

export const coreMetaTags: MetaTagEntry[] = [
  {
    routePath: "/",
    pageName: "Homepage",
    metaTitle: "Best Wedding Photography in Chennai | Wedding Photographers Chennai",
    metaDescription: "Wedding Photographer in Chennai capturing timeless moments with candid, traditional, and cinematic photography to make your special day unforgettable.",
    canonicalUrl: "https://dhilipstudio.com/",
    ogImageUrl: "/logo.png",
    focusKeyword: "Wedding Photographers in Chennai",
    status: "Optimized",
  },
  {
    routePath: "/gallery",
    pageName: "Monograph Gallery",
    metaTitle: "Candid Wedding Monographs & Portfolio — Dhilip Studio",
    metaDescription: "Explore 500+ candid wedding monographs, traditional South Indian ceremonies & pre-wedding beach films.",
    canonicalUrl: "https://dhilipstudio.com/gallery",
    ogImageUrl: "/logo.png",
    focusKeyword: "Brahmin Wedding Photography",
    status: "Optimized",
  },
  {
    routePath: "/about",
    pageName: "About Us",
    metaTitle: "About Dhilip Studio — Luxury Wedding Photographers Porur",
    metaDescription: "Discover 15+ years of South Indian wedding photography craftsmanship by lead director Dhilip Kumar.",
    canonicalUrl: "https://dhilipstudio.com/about",
    ogImageUrl: "/logo.png",
    focusKeyword: "Luxury Wedding Photographers Porur",
    status: "Needs Review",
  },
  {
    routePath: "/videos",
    pageName: "Cinematic Films",
    metaTitle: "4K Wedding & Pre-Wedding Cinematic Films — Dhilip Studio",
    metaDescription: "Watch cinematic wedding highlights, engagement films & aerial drone teasers in Chennai.",
    canonicalUrl: "https://dhilipstudio.com/videos",
    ogImageUrl: "/logo.png",
    focusKeyword: "Wedding Cinema Film Chennai",
    status: "Optimized",
  },
  {
    routePath: "/contact",
    pageName: "Contact & Booking",
    metaTitle: "Book Best Wedding Photographers in Chennai — Dhilip Studio",
    metaDescription: "Get free custom price quote for your wedding, engagement, or birthday photoshoot in Chennai.",
    canonicalUrl: "https://dhilipstudio.com/contact",
    ogImageUrl: "/logo.png",
    focusKeyword: "Wedding Photographer Quotation Chennai",
    status: "Optimized",
  },
];

const serviceMetaEntries: MetaTagEntry[] = legacyServicesList.map((s) => ({
  routePath: `/services/${s.slug}`,
  pageName: `Service: ${s.title}`,
  metaTitle: s.metaTitle || s.title,
  metaDescription: s.metaDescription || (s.paragraphs[0] ? s.paragraphs[0].slice(0, 155) + "..." : ""),
  canonicalUrl: s.canonicalUrl || `https://dhilipstudio.com/${s.slug}.php`,
  ogImageUrl: s.coverImage || "/logo.png",
  focusKeyword: `${s.category} Photography Chennai`,
  status: s.metaDescription ? "Optimized" : "Needs Review",
}));

const blogMetaEntries: MetaTagEntry[] = blogArticles.map((b) => ({
  routePath: `/blog/${b.slug}`,
  pageName: `Article: ${b.title && b.title !== "BLOG" ? b.title : b.metaTitle || b.slug}`,
  metaTitle: b.metaTitle || b.title,
  metaDescription: b.metaDescription || (b.excerpt ? b.excerpt.slice(0, 155) : ""),
  canonicalUrl: b.canonicalUrl || `https://dhilipstudio.com/blog/${b.slug}.php`,
  ogImageUrl: b.coverImage || "/logo.png",
  focusKeyword: `${b.category} Tips Chennai`,
  status: b.metaDescription || b.excerpt ? "Optimized" : "Needs Review",
}));

export const initialMetaTags: MetaTagEntry[] = [
  ...coreMetaTags,
  ...serviceMetaEntries,
  ...blogMetaEntries,
];

export const initialKeywords: TargetKeyword[] = [
  {
    id: "KW-1",
    keyword: "Brahmin Wedding Photographer Chennai",
    targetRoute: "/gallery",
    currentRank: 2,
    previousRank: 4,
    localPackRank: 1,
    monthlySearchVolume: 1600,
    difficulty: "High",
    competitorRanks: [
      { name: "Studio A", rank: 1 },
      { name: "Dhilip Studio", rank: 2 },
      { name: "Studio B", rank: 3 },
    ],
  },
  {
    id: "KW-2",
    keyword: "Candid Wedding Photography Porur",
    targetRoute: "/",
    currentRank: 1,
    previousRank: 1,
    localPackRank: 1,
    monthlySearchVolume: 880,
    difficulty: "Medium",
    competitorRanks: [
      { name: "Dhilip Studio", rank: 1 },
      { name: "Studio C", rank: 2 },
    ],
  },
  {
    id: "KW-3",
    keyword: "Pre-Wedding Beach Shoot Chennai",
    targetRoute: "/videos",
    currentRank: 3,
    previousRank: 5,
    localPackRank: 2,
    monthlySearchVolume: 1200,
    difficulty: "High",
    competitorRanks: [
      { name: "Studio D", rank: 1 },
      { name: "Studio E", rank: 2 },
      { name: "Dhilip Studio", rank: 3 },
    ],
  },
];

export const initialSchemas: SchemaMarkupEntry[] = [
  {
    id: "SCH-01",
    pageRoute: "/",
    schemaType: "LocalBusiness",
    active: true,
    rawJson: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Dhilip Studio",
        image: "https://dhilipstudio.com/logo.png",
        telephone: "+919840123456",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 14, Trunk Road",
          addressLocality: "Porur",
          addressRegion: "Chennai",
          postalCode: "600116",
        },
      },
      null,
      2
    ),
  },
  {
    id: "SCH-02",
    pageRoute: "/gallery",
    schemaType: "BreadcrumbList",
    active: true,
    rawJson: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dhilipstudio.com" },
          { "@type": "ListItem", position: 2, name: "Gallery", item: "https://dhilipstudio.com/gallery" },
        ],
      },
      null,
      2
    ),
  },
];

export const initialOpenGraph: OpenGraphEntry[] = [
  {
    routePath: "/",
    pageName: "Homepage",
    ogTitle: "Dhilip Studio — South Indian Wedding Photography",
    ogDescription: "Editorial candid wedding photography, Brahmin Muhurtham rituals & pre-wedding films in Chennai.",
    ogImage: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    twitterCardType: "summary_large_image",
  },
  {
    routePath: "/gallery",
    pageName: "Monograph Gallery",
    ogTitle: "500+ Wedding Monographs & Portfolio — Dhilip Studio",
    ogDescription: "Browse high-res candid photography monographs, traditional Iyer/Iyengar weddings & outdoor couple shoots.",
    ogImage: "/home_Page_images/brahmin-wedding-photography.jpg",
    twitterCardType: "summary_large_image",
  },
];

export const initialRedirects: RedirectRule[] = [
  { id: "RED-01", sourcePath: "/old-portfolio", targetPath: "/gallery", type: 301, hitCount: 1420, createdAt: "2026-08-01" },
  { id: "RED-02", sourcePath: "/contact-us", targetPath: "/contact", type: 301, hitCount: 890, createdAt: "2026-08-15" },
];

export const initialTechnicalAudit: TechnicalAuditIssue[] = [
  { id: "AUD-01", category: "Core Web Vitals", title: "LCP (Largest Contentful Paint) 1.2s", affectedUrl: "/", severity: "Passed", score: "99/100" },
  { id: "AUD-02", category: "Core Web Vitals", title: "CLS (Cumulative Layout Shift) 0.01", affectedUrl: "/", severity: "Passed", score: "100/100" },
  { id: "AUD-03", category: "Alt Text", title: "Missing image alt attribute", affectedUrl: "/blog/post-1", severity: "Warning", score: "Needs Alt" },
  { id: "AUD-04", category: "Mobile", title: "Mobile Viewport & Touch Targets", affectedUrl: "/gallery", severity: "Passed", score: "Passed" },
];
