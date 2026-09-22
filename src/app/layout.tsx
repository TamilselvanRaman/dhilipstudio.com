import type { Metadata } from "next";
import "./globals.css";
import { FloatingActions } from "@/components/layout/FloatingActions";

export const metadata: Metadata = {
  title: "Dhilip Studio — Editorial Wedding Photography",
  description:
    "Wedding Photographer in Chennai capturing timeless moments with candid, traditional, and cinematic photography to make your special day unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Dancing+Script:wght@400;600&family=Great+Vibes&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-container-lowest text-on-surface antialiased">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
