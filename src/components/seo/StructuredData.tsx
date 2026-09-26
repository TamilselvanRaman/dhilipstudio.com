"use client";

import React from "react";

export const StructuredData: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dhilip Studio",
    "alternateName": "Dhilip Studio Wedding Photography",
    "url": "https://dhilipstudio.com",
    "logo": "https://dhilipstudio.com/logo.png",
    "sameAs": [
      "https://facebook.com/dhilipstudio",
      "https://instagram.com/dhilipstudio",
      "https://youtube.com/@dhilipstudio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-91762-31420",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dhilipstudio.com/#localbusiness",
    "name": "Dhilip Studio Porur - Wedding Photographers in Chennai",
    "image": "https://dhilipstudio.com/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
    "telephone": "+919176231420",
    "email": "dhilipstudio@gmail.com",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 4/1, Mandaveli Street, Karambakkam",
      "addressLocality": "Porur",
      "addressRegion": "Chennai, Tamil Nadu",
      "postalCode": "600116",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0377,
      "longitude": 80.1514
    },
    "url": "https://dhilipstudio.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wedding Photography & Cinematography",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dhilip Studio"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Chennai & South India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Candid Wedding Photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brahmin Muhurtham Ritual Coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pre & Post-Wedding Outdoor Shoot"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maternity & Baby Shower Photoshoot"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Newborn Baby Studio Photoshoot"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "1st Birthday Milestone Celebration"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who are the best wedding photographers in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dhilip Studio is widely recognized as one of the best candid and traditional wedding photography teams in Chennai, with over 12 years of experience and 500+ weddings documented across South India."
        }
      },
      {
        "@type": "Question",
        "name": "Do you specialize in Brahmin wedding rituals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dhilip Studio specializes in capturing Iyer and Iyengar Brahmin wedding rituals including Kasi Yatra, Oonjal, Mangalyadharanam, and Homam without interrupting sacred priest chants."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Dhilip Studio located in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dhilip Studio is located at No. 4/1, Mandaveli Street, Karambakkam, Porur, Chennai - 600116."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
