import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { StructuredData } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhilipstudio.com"),
  title: {
    default: "Best Wedding Photography in Chennai | Wedding Photographers Chennai",
    template: "%s | Dhilip Studio Chennai",
  },
  description:
    "Wedding Photographer in Chennai capturing timeless moments with candid, traditional, and cinematic photography to make your special day unforgettable.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Wedding Photography in Chennai | Wedding Photographers Chennai",
    description:
      "Wedding Photographer in Chennai capturing timeless moments with candid, traditional, and cinematic photography to make your special day unforgettable.",
    url: "https://dhilipstudio.com",
    siteName: "Dhilip Studio",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Dhilip Studio Wedding Photography" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wedding Photography in Chennai | Wedding Photographers Chennai",
    description:
      "Wedding Photographer in Chennai capturing timeless moments with candid, traditional, and cinematic photography.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}
    >
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var l = document.createElement('link');
                l.rel = 'stylesheet';
                l.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';
                document.head.appendChild(l);
              })();
            `,
          }}
        />
      </head>
      <body className="bg-surface-container-lowest text-on-surface antialiased overflow-x-clip w-full relative">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}

