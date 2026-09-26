"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ImageUploadPicker } from "@/components/admin/ui/ImageUploadPicker";

export interface ListItemData {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  imageUrl: string;
  link?: string;
}

export interface SectionData {
  id: string;
  name: string;
  badge: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  buttonLabel: string;
  buttonLink: string;
  items?: ListItemData[];
}

export interface PageData {
  id: string;
  name: string;
  path: string;
  sections: SectionData[];
}

function PageEditorInner() {
  const searchParams = useSearchParams();
  const pageParam = searchParams ? searchParams.get("page") : null;

  const [selectedPageId, setSelectedPageId] = useState<string>("home");
  const [selectedSectionId, setSelectedSectionId] = useState<string>("hero");
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [previewTheme, setPreviewTheme] = useState<"dark" | "light">("light");

  const [allPages, setAllPages] = useState<Record<string, PageData>>({
    home: {
      id: "home",
      name: "Home Page",
      path: "/",
      sections: [
        {
          id: "hero",
          name: "Hero 3D Carousel & Title",
          badge: "BEST WEDDING PHOTOGRAPHERS",
          title: "BEST WEDDING PHOTOGRAPHERS in Chennai",
          subtitle: "candid · traditional · cinematic",
          content: "There is no doubt that the wedding day is the most memorable and important event in our entire life.",
          imageUrl: "/banners/home_hero_banner.jpg",
          buttonLabel: "RESERVE YOUR DATES →",
          buttonLink: "/contact",
          items: [
            {
              id: "hero_card_1",
              title: "Amrutha Milestone Celebration",
              category: "KIDS BIRTHDAY",
              imageUrl: "/home_Page_images/milestone-celebration.jpg",
              link: "/gallery",
            },
            {
              id: "hero_card_2",
              title: "Chennai Wedding Story",
              category: "SACRED MUHURTHAM",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
              link: "/gallery",
            },
            {
              id: "hero_card_3",
              title: "Jane & Vishal - Beach Vows",
              category: "CANDID MOMENTS",
              imageUrl: "/home_Page_images/candid-moments.jpg",
              link: "/gallery",
            },
            {
              id: "hero_card_4",
              title: "Kasi Yatra & Mangalyadharanam",
              category: "BRAHMIN RITUALS",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai-dhilip-studio.jpg",
              link: "/gallery",
            },
            {
              id: "hero_card_5",
              title: "Post Wedding Monograph",
              category: "CINEMATIC FILMS",
              imageUrl: "/home_Page_images/best-candid-wedding-photographers-in-chennai.jpg",
              link: "/gallery",
            },
            {
              id: "hero_card_6",
              title: "Baby Shower Monograph",
              category: "MATERNITY SOLITUDE",
              imageUrl: "/home_Page_images/maternity-shoot.jpg",
              link: "/gallery",
            },
          ],
        },
        {
          id: "marquee",
          name: "Portfolios & Wedding Stories",
          badge: "PORTFOLIOS & WEDDING STORIES",
          title: "a glimpse of the work we love",
          subtitle: "Explore our recent candid wedding highlights, sacred Brahmin rituals, and outdoor couple monographs.",
          content: "Every single photograph is individually hand-retouched in rich heirloom tones.",
          imageUrl: "/home_Page_images/candid-moments.jpg",
          buttonLabel: "VIEW ALL GALLERIES →",
          buttonLink: "/gallery",
          items: [
            {
              id: "m1",
              title: "Post Wedding Monograph",
              category: "CINEMATIC FILMS",
              imageUrl: "/home_Page_images/best-candid-wedding-photographers-in-chennai.jpg",
            },
            {
              id: "m2",
              title: "Chennai Wedding Story",
              category: "SACRED MUHURTHAM",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
            },
            {
              id: "m3",
              title: "Jane & Vishal - Beach Vows",
              category: "CANDID MOMENTS",
              imageUrl: "/home_Page_images/candid-moments.jpg",
            },
            {
              id: "m4",
              title: "Kasi Yatra & Mangalyadharanam",
              category: "BRAHMIN RITUALS",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai-dhilip-studio.jpg",
            },
            {
              id: "m5",
              title: "Amrutha Birthday Shoot",
              category: "MILESTONE CELEBRATIONS",
              imageUrl: "/home_Page_images/milestone-celebration.jpg",
            },
            {
              id: "m6",
              title: "Baby Shower Monograph",
              category: "MATERNITY SOLITUDE",
              imageUrl: "/home_Page_images/maternity-shoot.jpg",
            },
          ],
        },
        {
          id: "services",
          name: "Our Specialized Services (8 Cards)",
          badge: "OUR PHOTOGRAPHY SERVICES",
          title: "Stand out with wedding stories that feel like you",
          subtitle: "Total care over every frame of your big day",
          content: "Comprehensive wedding packages tailored for South Indian traditions and modern aesthetic ceremonies.",
          imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
          buttonLabel: "EXPLORE SERVICE PACKAGES →",
          buttonLink: "/services",
          items: [
            {
              id: "s1",
              title: "Wedding Photography",
              subtitle: "Timeless sacred rituals, mandap moments & grand wedding celebrations.",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
            },
            {
              id: "s2",
              title: "Candid Photography",
              subtitle: "Pure unscripted emotions, candid laughs & genuine wedding stories.",
              imageUrl: "/home_Page_images/candid-moments.jpg",
            },
            {
              id: "s3",
              title: "Brahmin Wedding Photography",
              subtitle: "Authentic Iyer & Iyengar rituals, Kasi Yatra & Oonjal coverage.",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai-dhilip-studio.jpg",
            },
            {
              id: "s4",
              title: "Pre & Post-Wedding Shoot",
              subtitle: "Cinematic romantic couple monographs in scenic outdoor locations.",
              imageUrl: "/home_Page_images/best-candid-wedding-photographers-in-chennai.jpg",
            },
            {
              id: "s5",
              title: "Engagement Vows",
              subtitle: "Intimate ring exchange rituals & family blessing moments.",
              imageUrl: "/home_Page_images/engagement-vows.jpg",
            },
            {
              id: "s6",
              title: "Maternity Solitude",
              subtitle: "Cherishing new beginnings with artistic pre-maternity portraits.",
              imageUrl: "/home_Page_images/maternity-shoot.jpg",
            },
            {
              id: "s7",
              title: "Newborn Monograph",
              subtitle: "Tender, gentle newborn portraits captured with extreme care.",
              imageUrl: "/home_Page_images/newborn-monograph.jpg",
            },
            {
              id: "s8",
              title: "Milestone Celebrations",
              subtitle: "1st birthday & family milestone photography.",
              imageUrl: "/home_Page_images/milestone-celebration.jpg",
            },
          ],
        },
        {
          id: "story",
          name: "Wedding Photographer Story & Stats",
          badge: "OUR STORY & PASSION",
          title: "Wedding Photographer in Chennai Capturing Love Stories",
          subtitle: "Capturing the smiles, tears & sacred vows you hold dear",
          content: "Finding professional wedding photographers in Chennai who can snap a wide range of photoshoots—from pre-wedding, candid, traditional, to maternity—is essential. Dhilip Studio never misses capturing precious smiles.",
          imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
          buttonLabel: "LEARN MORE ABOUT US →",
          buttonLink: "/about",
        },
        {
          id: "reviews",
          name: "Clients Review & Feedback",
          badge: "CLIENTS REVIEW",
          title: "Loved By Couples Across Tamil Nadu",
          subtitle: "Read authentic stories and experiences shared by our clients.",
          content: "Dhilip Studio turned our wedding into a timeless masterpiece! Every ceremony was captured with utmost grace.",
          imageUrl: "/banners/client_reviews_bg.jpg",
          buttonLabel: "SEE ALL REVIEWS →",
          buttonLink: "/about",
          items: [
            {
              id: "r1",
              title: "Ramkumar Anandan",
              subtitle: "Porur, Chennai · Pre-Wedding & Wedding Story",
              category: "⭐⭐⭐⭐⭐",
              imageUrl: "/home_Page_images/engagement-vows.jpg",
              link: "Best pre-wedding shoot experience in Mahabalipuram! Dhilip made us feel relaxed from minute one.",
            },
            {
              id: "r2",
              title: "Priya & Karthik",
              subtitle: "Mylapore, Chennai · Brahmin Muhurtham",
              category: "⭐⭐⭐⭐⭐",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
              link: "They captured every traditional ritual so perfectly without interrupting priest rituals!",
            },
          ],
        },
        {
          id: "steps",
          name: "Why Couples Choose Us (5-Step)",
          badge: "OUR 5-STEP EXPERIENCE",
          title: "Why Couples Choose Dhilip Studio",
          subtitle: "a seamless 5-step journey to your timeless wedding heirloom",
          content: "From initial story alignment to 4K cinematography and custom raw silk album delivery.",
          imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai-dhilip-studio.jpg",
          buttonLabel: "BOOK YOUR CONSULTATION →",
          buttonLink: "/contact",
          items: [
            {
              id: "st1",
              title: "01. Story Alignment & Consultation",
              subtitle: "We sit down over coffee or video call to map out your sacred ritual timeline and preferences.",
              category: "STEP 01 - PLANNING",
              imageUrl: "/home_Page_images/engagement-vows.jpg",
            },
            {
              id: "st2",
              title: "02. Unobtrusive Master Coverage",
              subtitle: "Over 12+ years documenting South Indian weddings means we anticipate every sacred ritual.",
              category: "STEP 02 - DOCUMENTATION",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
            },
            {
              id: "st3",
              title: "03. 4K Cinema & Aerial Artistry",
              subtitle: "Dual lead photographers paired with 4K cinema cameras and certified drone operators.",
              category: "STEP 03 - DRONE & CINEMA",
              imageUrl: "/home_Page_images/candid-moments.jpg",
            },
            {
              id: "st4",
              title: "04. Signature Color Grading",
              subtitle: "Every single photograph is individually hand-retouched and color-graded in rich temple gold hues.",
              category: "STEP 04 - POST-PRODUCTION",
              imageUrl: "/home_Page_images/best-candid-wedding-photographers-in-chennai.jpg",
            },
            {
              id: "st5",
              title: "05. Raw Silk Album & Digital SSD",
              subtitle: "Bespoke wedding monograph printed on museum-grade raw silk paper delivered with high-speed SSD.",
              category: "STEP 05 - FINAL DELIVERY",
              imageUrl: "/home_Page_images/milestone-celebration.jpg",
            },
          ],
        },
        {
          id: "cta",
          name: "Call-To-Action Booking Band",
          badge: "NOW BOOKING 2026 WEDDING DATES",
          title: "See your love story through a different lens.",
          subtitle: "Candid, traditional and cinematic wedding photography in Chennai — packages engineered for visual storytellers and timeless remembrance.",
          content: "Contact our Chennai studio today to check date availability.",
          imageUrl: "/banners/cta_band_bg.jpg",
          buttonLabel: "Book a Session ↓",
          buttonLink: "/contact",
          items: [
            {
              id: "cta_card_1",
              title: "Candid Couple (Top Left)",
              category: "GREEN DRESS",
              imageUrl: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp",
            },
            {
              id: "cta_card_2",
              title: "Brahmin Ritual (Mid Left)",
              category: "HOMAM RITUAL",
              imageUrl: "/home_Page_images/brahmin-wedding-photography.jpg",
            },
            {
              id: "cta_card_3",
              title: "Engagement Couple (Bottom Left)",
              category: "GOLD COUTURES",
              imageUrl: "/home_Page_images/engagement-photo-studio-chennai.jpg",
            },
            {
              id: "cta_card_4",
              title: "Mandap Couple (Top Right)",
              category: "YELLOW SILK",
              imageUrl: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp",
            },
            {
              id: "cta_card_5",
              title: "Cinematic Lawn (Mid Right)",
              category: "RED BLACK",
              imageUrl: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg",
            },
            {
              id: "cta_card_6",
              title: "Maternity Blue (Bottom Right)",
              category: "MATERNITY",
              imageUrl: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg",
            },
          ],
        },
      ],
    },
    services: {
      id: "services",
      name: "Service Pages (8 Legacy Landing Pages)",
      path: "/services",
      sections: [
        {
          id: "service_overview",
          name: "All 8 Specialized Service Landing Pages",
          badge: "SERVICES CMS",
          title: "Service Pages Content & Meta Editor",
          subtitle: "Birthday, Candid, Brahmin Wedding, Maternity, Newborn, Wedding, Pre-Wedding, Engagement",
          content: "Manage and update content for all 8 legacy service landing pages in the dedicated Services CMS.",
          imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
          buttonLabel: "OPEN SERVICES CMS →",
          buttonLink: "/admin/services",
          items: [
            { id: "svc_1", title: "Birthday Photography in Chennai", subtitle: "/services/birthday-photography-in-chennai", category: "BIRTHDAY", imageUrl: "/home_Page_images/kids-birthday-photographer-chennai.webp", link: "/admin/services" },
            { id: "svc_2", title: "Candid Photography", subtitle: "/services/candid-photography", category: "CANDID", imageUrl: "/home_Page_images/candid-moments.jpg", link: "/admin/services" },
            { id: "svc_3", title: "Brahmin Wedding Photography", subtitle: "/services/brahmin-wedding-photography", category: "BRAHMIN", imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai-dhilip-studio.jpg", link: "/admin/services" },
            { id: "svc_4", title: "Maternity Photoshoot Chennai", subtitle: "/services/maternity-photoshoot-chennai", category: "MATERNITY", imageUrl: "/home_Page_images/maternity-shoot.jpg", link: "/admin/services" },
            { id: "svc_5", title: "Newborn Baby Photoshoot", subtitle: "/services/newborn-baby-photoshoot", category: "NEWBORN", imageUrl: "/home_Page_images/newborn-monograph.jpg", link: "/admin/services" },
            { id: "svc_6", title: "Wedding Photography", subtitle: "/services/wedding-photography", category: "WEDDING", imageUrl: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp", link: "/admin/services" },
            { id: "svc_7", title: "Pre-Wedding Photoshoot", subtitle: "/services/pre-wedding-photoshoot", category: "PRE-WEDDING", imageUrl: "/home_Page_images/best-candid-wedding-photographers-in-chennai.jpg", link: "/admin/services" },
            { id: "svc_8", title: "Engagement Photography Chennai", subtitle: "/services/engagement-photography-chennai", category: "ENGAGEMENT", imageUrl: "/home_Page_images/engagement-vows.jpg", link: "/admin/services" },
          ],
        },
      ],
    },
    about: {
      id: "about",
      name: "About Us Page",
      path: "/about",
      sections: [
        {
          id: "banner",
          name: "Top Page Banner",
          badge: "OUR LEGACY & CRAFT",
          title: "Our Story & Photography Philosophy",
          subtitle: "15+ Years of documenting South Indian weddings with passion, authenticity, and heirloom craftsmanship.",
          content: "Dhilip Studio was founded with a single mission: to create timeless monograph photographs that evoke pure emotion.",
          imageUrl: "/banners/about_page_banner.jpg",
          buttonLabel: "EXPLORE PORTFOLIO →",
          buttonLink: "/gallery",
        },
        {
          id: "craft",
          name: "The Craft & Tradition",
          badge: "BRAHMIN & CANDID MONOGRAPHS",
          title: "Mastering Sacred Rituals & Candid Moments",
          subtitle: "Specialized in Muhurtham, Oonjal, Kanyadaan, and beach pre-wedding films.",
          content: "Every photograph is individually color-graded and hand-retouched in rich heirloom tones.",
          imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai-dhilip-studio.jpg",
          buttonLabel: "GET IN TOUCH →",
          buttonLink: "/contact",
        },
      ],
    },
    gallery: {
      id: "gallery",
      name: "Gallery Page",
      path: "/gallery",
      sections: [
        {
          id: "header",
          name: "Gallery Header & Hero",
          badge: "PHOTOGRAPHIC MONOGRAPH GALLERY",
          title: "Visual Celebrations & Monograph Archive",
          subtitle: "Every photograph individually hand-retouched in rich heirloom tones.",
          content: "Filter through Brahmin Sacred Muhurtham, Candid Wedding Highlights, Pre-Wedding Films, Maternity, and Birthday shoots.",
          imageUrl: "/banners/gallery_page_banner.png",
          buttonLabel: "BOOK SIMILAR SHOOT →",
          buttonLink: "/contact",
          items: [
            {
              id: "g1",
              title: "Chennai Wedding Story",
              category: "SACRED MUHURTHAM",
              imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
            },
            {
              id: "g2",
              title: "Jane & Vishal Beach Vows",
              category: "CANDID MOMENTS",
              imageUrl: "/home_Page_images/candid-moments.jpg",
            },
            {
              id: "g3",
              title: "Post Wedding Monograph",
              category: "CINEMATIC FILMS",
              imageUrl: "/home_Page_images/best-candid-wedding-photographers-in-chennai.jpg",
            },
          ],
        },
      ],
    },
    videos: {
      id: "videos",
      name: "Videos Page",
      path: "/videos",
      sections: [
        {
          id: "header",
          name: "Videos Banner & Cinema Showcase",
          badge: "CINEMATOGRAPHY & HIGHLIGHT FILMS",
          title: "Cinematic Wedding Films & Teasers",
          subtitle: "Experience high-definition 4K cinematography, candid teasers, and pre-wedding stories.",
          content: "Watch our curated collection of candid wedding highlight films.",
          imageUrl: "/banners/videos_page_banner.jpg",
          buttonLabel: "INQUIRE VIDEO PACKAGES →",
          buttonLink: "/contact",
        },
      ],
    },
    contact: {
      id: "contact",
      name: "Contact Us Page",
      path: "/contact",
      sections: [
        {
          id: "header",
          name: "Contact Page Top Header",
          badge: "RESERVE YOUR WEDDING DATES",
          title: "Get In Touch With Dhilip Studio",
          subtitle: "We document candid wedding monographs, Brahmin sacred rituals, pre-wedding beach films, maternity & milestone celebrations across Chennai & Tamil Nadu.",
          content: "Fill out our booking inquiry form or chat directly on WhatsApp for instant date confirmation.",
          imageUrl: "/banners/contact_header.jpg",
          buttonLabel: "SUBMIT INQUIRY →",
          buttonLink: "#form",
        },
        {
          id: "location",
          name: "Porur Studio & Map Details",
          badge: "CHENNAI STUDIO LOCATION",
          title: "Visit Our Porur Studio",
          subtitle: "No. 4/1, Mandaveli Street, Karambakkam, Porur, Chennai, Tamil Nadu 600116",
          content: "Phone: +91 91762 31420 | Email: dhilipstudio@gmail.com | Open Daily 9 AM - 9 PM",
          imageUrl: "/banners/studio_location_map.jpg",
          buttonLabel: "OPEN GOOGLE MAPS →",
          buttonLink: "https://maps.google.com/?q=13.0377,80.1514",
        },
      ],
    },
    blog: {
      id: "blog",
      name: "Blog Page",
      path: "/blog",
      sections: [
        {
          id: "header",
          name: "Blog Header & Journal Title",
          badge: "WEDDING JOURNAL & INSIGHTS",
          title: "Wedding Photography Articles & Guides",
          subtitle: "Explore expert photography advice, candid wedding tips, Brahmin ritual traditions, and behind-the-scenes stories from real celebrations.",
          content: "Curated wedding advice and guide articles for brides and grooms.",
          imageUrl: "/banners/blog_page_banner.jpg",
          buttonLabel: "READ JOURNAL ARTICLES →",
          buttonLink: "#articles",
        },
      ],
    },
    footer: {
      id: "footer",
      name: "Global Footer & Branding",
      path: "Global Component",
      sections: [
        {
          id: "branding",
          name: "Footer Brand Description & Links",
          badge: "DHILIP STUDIO BRANDING",
          title: "Dhilip Studio Wedding Photography",
          subtitle: "We believe in offering high-end wedding images and cinematography.",
          content: "No. 4/1, Mandaveli Street, Karambakkam, Porur, Chennai-600116. Phone: +91 91762 31420.",
          imageUrl: "/logo.png",
          buttonLabel: "PROVIDED BY TS DEV",
          buttonLink: "https://tamilselvandev.in/",
        },
      ],
    },
  });

  useEffect(() => {
    if (pageParam && allPages[pageParam]) {
      setSelectedPageId(pageParam);
      const targetPage = allPages[pageParam];
      if (targetPage && targetPage.sections && targetPage.sections.length > 0) {
        setSelectedSectionId(targetPage.sections[0].id);
      }
    }
  }, [pageParam]);

  const currentPage = allPages[selectedPageId] || allPages["home"];
  const currentSection =
    currentPage.sections.find((sec) => sec.id === selectedSectionId) ||
    currentPage.sections[0];

  // Handler for text/image fields
  const handleFieldChange = (field: keyof SectionData, value: string) => {
    setAllPages((prev) => {
      const updatedPage = { ...prev[selectedPageId] };
      updatedPage.sections = updatedPage.sections.map((sec) =>
        sec.id === currentSection.id ? { ...sec, [field]: value } : sec
      );
      return { ...prev, [selectedPageId]: updatedPage };
    });
  };

  // Handler for List Item fields (Title, Category, Subtitle, ImageUrl)
  const handleItemChange = (itemIndex: number, field: keyof ListItemData, value: string) => {
    setAllPages((prev) => {
      const updatedPage = { ...prev[selectedPageId] };
      updatedPage.sections = updatedPage.sections.map((sec) => {
        if (sec.id === currentSection.id && sec.items) {
          const newItems = [...sec.items];
          newItems[itemIndex] = { ...newItems[itemIndex], [field]: value };
          return { ...sec, items: newItems };
        }
        return sec;
      });
      return { ...prev, [selectedPageId]: updatedPage };
    });
  };

  // Move Item Up / Down (Reordering)
  const handleMoveItem = (index: number, direction: "up" | "down") => {
    if (!currentSection.items) return;
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentSection.items.length) return;

    setAllPages((prev) => {
      const updatedPage = { ...prev[selectedPageId] };
      updatedPage.sections = updatedPage.sections.map((sec) => {
        if (sec.id === currentSection.id && sec.items) {
          const newItems = [...sec.items];
          const temp = newItems[index];
          newItems[index] = newItems[targetIndex];
          newItems[targetIndex] = temp;
          return { ...sec, items: newItems };
        }
        return sec;
      });
      return { ...prev, [selectedPageId]: updatedPage };
    });
  };

  // Add New Item Card
  const handleAddItem = () => {
    const newItem: ListItemData = {
      id: `item_${Date.now()}`,
      title: "New Photo Card",
      category: "WEDDING MONOGRAPH",
      subtitle: "Custom monograph description...",
      imageUrl: "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg",
    };

    setAllPages((prev) => {
      const updatedPage = { ...prev[selectedPageId] };
      updatedPage.sections = updatedPage.sections.map((sec) => {
        if (sec.id === currentSection.id) {
          const newItems = sec.items ? [...sec.items, newItem] : [newItem];
          return { ...sec, items: newItems };
        }
        return sec;
      });
      return { ...prev, [selectedPageId]: updatedPage };
    });
  };

  // Delete Item Card
  const handleDeleteItem = (index: number) => {
    if (!currentSection.items) return;
    setAllPages((prev) => {
      const updatedPage = { ...prev[selectedPageId] };
      updatedPage.sections = updatedPage.sections.map((sec) => {
        if (sec.id === currentSection.id && sec.items) {
          const newItems = sec.items.filter((_, i) => i !== index);
          return { ...sec, items: newItems };
        }
        return sec;
      });
      return { ...prev, [selectedPageId]: updatedPage };
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  // Exact Section Preview Renderer
  const renderExactSectionPreview = () => {
    // 1. Footer Section Preview
    if (selectedPageId === "footer" || currentSection.id === "branding") {
      return (
        <div className="bg-[#1b1c1c] text-slate-300 p-6 rounded-2xl border border-stone-800 space-y-6 text-xs font-sans shadow-2xl">
          <div className="grid grid-cols-2 gap-4 border-b border-slate-800/80 pb-5">
            <div className="space-y-2">
              <img
                src={currentSection.imageUrl || "/logo.png"}
                alt="Dhilip Studio Logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logo.png";
                }}
              />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {currentSection.subtitle || "We believe in offering high-end wedding images and cinematography."}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-[#f3e3a1] block mb-2">
                QUICK MENU
              </span>
              <ul className="space-y-1 text-[10px] text-slate-400">
                <li>• HOME</li>
                <li>• ABOUT US</li>
                <li>• GALLERY</li>
                <li>• CONTACT US</li>
              </ul>
            </div>
          </div>
          <div className="space-y-1.5 text-[11px] text-slate-300">
            <p className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-[#b88c42]">location_on</span>
              <span>{currentSection.content || "No. 4/1, Mandaveli Street, Porur, Chennai-600116"}</span>
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span>© 2026 Dhilip Studio. All rights reserved.</span>
            <a
              href={currentSection.buttonLink || "https://tamilselvandev.in/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f3e3a1] hover:underline font-bold flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{currentSection.buttonLabel || "Provided by TS Dev"}</span>
            </a>
          </div>
        </div>
      );
    }

    // 2. Hero 3D Coverflow Preview
    if (currentSection.id === "hero") {
      return (
        <div className="bg-[#fcfbfa] text-stone-900 p-6 rounded-2xl border border-stone-200 space-y-4 shadow-2xl">
          <div className="text-center space-y-1">
            <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-stone-900">
              {currentSection.title}
            </h2>
            <p className="text-xs font-serif italic text-[#b88c42]">
              {currentSection.subtitle}
            </p>
            <p className="text-[11px] text-stone-500 max-w-sm mx-auto leading-relaxed pt-1">
              {currentSection.content}
            </p>
          </div>

          {/* 3D Coverflow Cards Stack Mockup */}
          {currentSection.items && currentSection.items.length > 0 && (
            <div className="flex items-center justify-center gap-2 pt-2 overflow-x-auto py-2">
              {currentSection.items.slice(0, 5).map((item, idx) => (
                <div
                  key={item.id || idx}
                  className={`relative rounded-xl overflow-hidden border transition-all duration-300 shrink-0 ${
                    idx === 2
                      ? "w-36 h-48 border-[#b88c42] shadow-xl z-20 scale-105"
                      : "w-24 h-36 border-stone-300 opacity-80 scale-95"
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/home_Page_images/brahmin-wedding-photographers-in-chennai.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-2 flex flex-col justify-end text-white">
                    <span className="text-[8px] font-mono text-[#f3e3a1] uppercase font-bold">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-bold line-clamp-1 font-serif">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // 3. Portfolios & Wedding Stories Marquee Preview
    if (currentSection.id === "marquee") {
      return (
        <div className="bg-[#1b1c1c] text-white p-6 rounded-2xl border border-stone-800 space-y-4 shadow-2xl">
          <div className="text-center space-y-1">
            <span className="text-[9px] font-serif font-bold uppercase tracking-widest text-[#f3e3a1]">
              {currentSection.badge}
            </span>
            <h3 className="font-serif italic text-lg text-stone-300">
              {currentSection.title}
            </h3>
          </div>

          {currentSection.items && (
            <div className="grid grid-cols-3 gap-2 pt-2">
              {currentSection.items.slice(0, 6).map((item, idx) => (
                <div key={item.id || idx} className="bg-stone-900 rounded-xl p-1.5 border border-stone-800 space-y-1">
                  <div className="h-20 rounded-lg overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[8px] font-mono text-[#b88c42] block uppercase font-bold truncate">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-serif font-bold text-white block truncate">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // 4. Services 8-Card Grid Preview
    if (currentSection.id === "services") {
      return (
        <div className="bg-[#fcfbfa] text-stone-900 p-6 rounded-2xl border border-stone-200 space-y-4 shadow-2xl">
          <div className="text-center space-y-1">
            <span className="text-[9px] font-mono uppercase font-bold text-[#b88c42]">
              {currentSection.badge}
            </span>
            <h3 className="font-serif text-xl font-bold">{currentSection.title}</h3>
            <p className="text-xs italic text-stone-500">{currentSection.subtitle}</p>
          </div>

          {currentSection.items && (
            <div className="grid grid-cols-4 gap-2 pt-2">
              {currentSection.items.map((item, idx) => (
                <div key={item.id || idx} className="bg-white p-2 rounded-xl border border-stone-200 space-y-1 shadow-xs">
                  <div className="h-16 rounded-lg overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-bold font-serif block truncate">{item.title}</span>
                  <p className="text-[8px] text-stone-500 line-clamp-2 leading-tight">{item.subtitle}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // 5. Why Couples Choose Us 5-Step Experience Preview
    if (currentSection.id === "steps") {
      return (
        <div className="bg-stone-50 text-stone-900 p-6 rounded-2xl border border-stone-200 space-y-4 shadow-2xl">
          <div className="text-center space-y-1">
            <span className="text-[9px] font-mono uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {currentSection.badge}
            </span>
            <h3 className="font-serif text-xl font-bold">{currentSection.title}</h3>
            <p className="text-xs italic text-stone-500">{currentSection.subtitle}</p>
          </div>

          {currentSection.items && (
            <div className="grid grid-cols-3 gap-2 pt-2">
              {currentSection.items.map((item, idx) => (
                <div key={item.id || idx} className="bg-white p-2.5 rounded-xl border border-stone-200 space-y-1">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h4 className="text-[10px] font-bold font-serif line-clamp-1">{item.title}</h4>
                  <p className="text-[8px] text-stone-500 line-clamp-2">{item.subtitle}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // 6. Contact Page 2-Column Split Preview
    if (selectedPageId === "contact") {
      return (
        <div className="bg-[#fcfbfa] p-5 rounded-2xl border border-stone-200 text-stone-900 space-y-4 shadow-2xl">
          <div className="text-center space-y-1">
            <span className="text-[9px] font-mono font-bold uppercase text-[#b88c42] bg-[#b88c42]/10 px-2 py-0.5 rounded-full border border-[#b88c42]/20">
              {currentSection.badge || "RESERVE YOUR WEDDING DATES"}
            </span>
            <h4 className="font-serif text-lg font-bold">
              {currentSection.title || "Get In Touch With Dhilip Studio"}
            </h4>
            <p className="text-[10px] text-stone-500">
              {currentSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[10px]">
            <div className="space-y-2">
              <div className="h-28 bg-stone-200 rounded-xl overflow-hidden relative flex items-center justify-center text-stone-500 font-mono">
                <span className="material-symbols-outlined text-2xl text-[#b88c42]">map</span>
                <span className="absolute bottom-1 left-1.5 bg-stone-900/80 text-white text-[8px] px-1.5 py-0.5 rounded">PORUR MAP</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-stone-200 space-y-1 shadow-xs">
                <span className="font-bold text-stone-900 block">Visit Our Porur Studio</span>
                <p className="text-stone-500 text-[9px] leading-tight">No. 4/1, Mandaveli Street, Porur, Chennai</p>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-2 shadow-xs">
              <span className="font-bold text-stone-900 block">Send Us a Direct Message</span>
              <div className="space-y-1.5">
                <div className="bg-stone-50 border border-stone-200 p-1.5 rounded text-stone-400">Full Name *</div>
                <div className="bg-stone-50 border border-stone-200 p-1.5 rounded text-stone-400">Phone Number *</div>
                <div className="bg-stone-900 text-white text-center py-1.5 rounded-lg font-bold text-[9px] uppercase">
                  {currentSection.buttonLabel || "SUBMIT INQUIRY →"}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 7. CTA Band Section (Scattered Floating Cards + Title + Subtitle + Badge + Buttons)
    if (currentSection.id === "cta") {
      const ctaCards = currentSection.items || [
        { id: "1", title: "Candid", imageUrl: "/home_Page_images/wedding-ceremony-candid-photography-chennai-dhilip-studio.webp" },
        { id: "2", title: "Brahmin", imageUrl: "/home_Page_images/brahmin-wedding-photography.jpg" },
        { id: "3", title: "Engagement", imageUrl: "/home_Page_images/engagement-photo-studio-chennai.jpg" },
        { id: "4", title: "Mandap", imageUrl: "/home_Page_images/wedding-photography-in-chennai-dhilip-studio.webp" },
        { id: "5", title: "Cinematic", imageUrl: "/home_Page_images/cinematic-post-wedding-photography-chennai-dhilip-studio.jpg" },
        { id: "6", title: "Maternity", imageUrl: "/home_Page_images/baby-shower-photography-chennai-dhilip-studio.jpg" },
      ];

      return (
        <div className="relative w-full bg-[#f6f3ed] p-6 sm:p-8 rounded-2xl border border-stone-300 text-stone-900 shadow-2xl overflow-hidden min-h-[440px] flex items-center justify-center">
          {/* Ambient Spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_70%)] pointer-events-none" />

          {/* Floating Scattered Image Cards */}
          {ctaCards[0] && (
            <div className="absolute top-4 left-4 w-20 h-28 sm:w-24 sm:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform -rotate-12 hover:rotate-0 transition-transform z-10">
              <img src={ctaCards[0].imageUrl} alt="Card 1" className="w-full h-full object-cover" />
            </div>
          )}
          {ctaCards[1] && (
            <div className="absolute top-1/3 left-2 w-16 h-22 sm:w-20 sm:h-28 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform rotate-6 hover:rotate-0 transition-transform z-10">
              <img src={ctaCards[1].imageUrl} alt="Card 2" className="w-full h-full object-cover" />
            </div>
          )}
          {ctaCards[2] && (
            <div className="absolute bottom-4 left-6 w-18 h-24 sm:w-22 sm:h-28 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform -rotate-6 hover:rotate-0 transition-transform z-10">
              <img src={ctaCards[2].imageUrl} alt="Card 3" className="w-full h-full object-cover" />
            </div>
          )}
          {ctaCards[3] && (
            <div className="absolute top-4 right-4 w-20 h-28 sm:w-24 sm:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform rotate-12 hover:rotate-0 transition-transform z-10">
              <img src={ctaCards[3].imageUrl} alt="Card 4" className="w-full h-full object-cover" />
            </div>
          )}
          {ctaCards[4] && (
            <div className="absolute top-1/3 right-2 w-16 h-22 sm:w-20 sm:h-28 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform -rotate-8 hover:rotate-0 transition-transform z-10">
              <img src={ctaCards[4].imageUrl} alt="Card 5" className="w-full h-full object-cover" />
            </div>
          )}
          {ctaCards[5] && (
            <div className="absolute bottom-4 right-6 w-18 h-24 sm:w-22 sm:h-28 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform rotate-8 hover:rotate-0 transition-transform z-10">
              <img src={ctaCards[5].imageUrl} alt="Card 6" className="w-full h-full object-cover" />
            </div>
          )}

          {/* Center Main Content Box */}
          <div className="relative z-20 max-w-md mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#b88c42]/30 shadow-sm text-[10px] font-bold tracking-wider uppercase text-stone-800">
              <span className="w-2 h-2 rounded-full bg-[#b88c42] animate-pulse" />
              <span>{currentSection.badge || "NOW BOOKING 2026 WEDDING DATES"}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl text-stone-900 font-serif font-bold leading-tight tracking-tight">
              {currentSection.title || "See your love story through a different lens."}
            </h3>

            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              {currentSection.subtitle || "Candid, traditional and cinematic wedding photography in Chennai — packages engineered for visual storytellers and timeless remembrance."}
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-stone-900 text-white font-serif font-bold text-xs px-4 py-2.5 rounded-xl shadow-md">
                <span>{currentSection.buttonLabel || "Book a Session ↓"}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white text-stone-900 font-serif font-bold text-xs px-4 py-2.5 rounded-xl border border-stone-300 shadow-xs">
                <span>View Gallery</span>
              </span>
            </div>
          </div>
        </div>
      );
    }

    // Default Section Card Preview
    return (
      <div
        className={`rounded-2xl border p-6 space-y-4 shadow-2xl transition-all ${
          previewTheme === "dark" ? "bg-stone-950 text-white border-stone-800" : "bg-[#fcfbfa] text-stone-900 border-stone-200"
        }`}
      >
        {currentSection.badge && (
          <span className="inline-block text-[9px] font-mono font-bold uppercase text-[#b88c42] bg-[#b88c42]/10 px-2.5 py-0.5 rounded-full border border-[#b88c42]/20">
            {currentSection.badge}
          </span>
        )}
        <h3 className="font-serif text-xl font-bold">{currentSection.title}</h3>
        <p className="text-xs text-stone-600 leading-relaxed">{currentSection.subtitle}</p>
        
        {currentSection.imageUrl && (
          <div className="h-36 w-full rounded-xl overflow-hidden border border-stone-300/30">
            <img
              src={currentSection.imageUrl}
              alt={currentSection.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/home_Page_images/best-candid-wedding-photographers-in-chennai.jpg";
              }}
            />
          </div>
        )}
        
        {currentSection.content && (
          <p className="text-xs text-stone-500 leading-relaxed">{currentSection.content}</p>
        )}

        {currentSection.buttonLabel && (
          <span className="inline-block bg-[#b88c42] text-stone-950 font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-full shadow-md">
            {currentSection.buttonLabel}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT COLUMN: EDITABLE CONTROLS, PAGE & SECTION SELECTORS, FORM INPUTS */}
      <div className="lg:col-span-6 xl:col-span-6 space-y-6">
        {/* Page Title & Status Header */}
        <div className="bg-white border border-slate-200 p-6 sm:p-7 rounded-3xl shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-bold">
              CMS &amp; SECTION CONTENT MANAGER
            </span>
            {savedSuccess && (
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 animate-pulse flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">check_circle</span> Saved Live!
              </span>
            )}
          </div>
          <h1 className="font-serif text-2xl font-bold text-slate-900 tracking-wide">
            Editing {currentPage.name} Content
          </h1>
          <p className="text-xs text-slate-500">
            Select any section below to update headlines, descriptions, badges, button links, cover images, and card order with live visual preview.
          </p>
        </div>

        {/* Section Tabs */}
        <div className="bg-white border border-slate-200 p-3.5 rounded-2xl flex items-center gap-2 overflow-x-auto no-scrollbar shadow-xs">
          <span className="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider mr-1 shrink-0">
            PAGE SECTIONS:
          </span>
          {currentPage.sections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => setSelectedSectionId(sec.id)}
              className={`px-3.5 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                currentSection.id === sec.id
                  ? "bg-blue-600 text-white shadow-sm font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>

        {/* Step 3: Form Editor Panel */}
        <form
          onSubmit={handleSave}
          className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-6 shadow-xs"
        >
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider font-bold">
                EDITING SECTION
              </span>
              <h2 className="font-serif text-xl font-bold text-slate-900 mt-0.5">
                {currentSection.name}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              ID: {currentSection.id}
            </span>
          </div>

          <div className="space-y-4">
            {/* Badge Text */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                Category / Pill Badge Text
              </label>
              <input
                type="text"
                value={currentSection.badge}
                onChange={(e) => handleFieldChange("badge", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none transition-all"
              />
            </div>

            {/* Main Headline Title */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                Main Headline Title (H1 / H2)
              </label>
              <input
                type="text"
                value={currentSection.title}
                onChange={(e) => handleFieldChange("title", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm font-serif font-bold text-slate-900 focus:outline-none transition-all"
              />
            </div>

            {/* Subtitle / Tagline */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                Subtitle / Tagline Paragraph
              </label>
              <input
                type="text"
                value={currentSection.subtitle}
                onChange={(e) => handleFieldChange("subtitle", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none transition-all"
              />
            </div>

            {/* Detailed Content / Body Text */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                Body Content Paragraph
              </label>
              <textarea
                rows={3}
                value={currentSection.content}
                onChange={(e) => handleFieldChange("content", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none transition-all"
              />
            </div>

            {/* Primary Image URL & Thumbnail */}
            <div>
              <ImageUploadPicker
                label="Primary Cover Image / Banner Asset (Click or Drag & Drop)"
                value={currentSection.imageUrl}
                onChange={(val) => handleFieldChange("imageUrl", val)}
              />
            </div>

            {/* Image Cards & Reordering Manager */}
            {currentSection.items && currentSection.items.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase font-bold text-blue-700 tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-blue-600">swap_vert</span>
                    IMAGE CARDS &amp; ORDER MANAGER ({currentSection.items.length})
                  </span>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200 rounded-lg text-[10px] font-bold uppercase transition-all flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">add</span>
                    <span>Add Photo Card</span>
                  </button>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                  {currentSection.items.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl space-y-2 relative shadow-xs"
                    >
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-[10px] font-mono font-bold text-slate-600 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">
                            {idx + 1}
                          </span>
                          Card #{idx + 1}
                        </span>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => handleMoveItem(idx, "up")}
                            className="p-1 text-slate-500 hover:text-slate-900 disabled:opacity-30 rounded hover:bg-slate-200"
                            title="Move Up"
                          >
                            <span className="material-symbols-outlined text-sm">arrow_upward</span>
                          </button>
                          <button
                            type="button"
                            disabled={idx === (currentSection.items?.length || 1) - 1}
                            onClick={() => handleMoveItem(idx, "down")}
                            className="p-1 text-slate-500 hover:text-slate-900 disabled:opacity-30 rounded hover:bg-slate-200"
                            title="Move Down"
                          >
                            <span className="material-symbols-outlined text-sm">arrow_downward</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteItem(idx)}
                            className="p-1 text-rose-500 hover:text-rose-700 rounded hover:bg-rose-50"
                            title="Delete Card"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <label className="block text-[9px] font-mono text-slate-500 uppercase font-bold mb-1">
                            Card Title
                          </label>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => handleItemChange(idx, "title", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] font-mono text-slate-500 uppercase font-bold mb-1">
                            Category / Subtitle
                          </label>
                          <input
                            type="text"
                            value={item.category || item.subtitle || ""}
                            onChange={(e) => handleItemChange(idx, "category", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900"
                          />
                        </div>
                      </div>

                      <div>
                        <ImageUploadPicker
                          label="Card Photo Asset (Click or Drag & Drop)"
                          value={item.imageUrl}
                          onChange={(val) => handleItemChange(idx, "imageUrl", val)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Button Label & Link */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                  Button Label
                </label>
                <input
                  type="text"
                  value={currentSection.buttonLabel}
                  onChange={(e) => handleFieldChange("buttonLabel", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                  Button Target Link
                </label>
                <input
                  type="text"
                  value={currentSection.buttonLink}
                  onChange={(e) => handleFieldChange("buttonLink", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-900 font-mono focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-mono">
              Auto-syncs changes to live site
            </span>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-2xl transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">publish</span>
              <span>Publish Section Edits</span>
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT COLUMN: STICKY LIVE WEBSITE VISUAL PREVIEW DISPLAY */}
      <div className="lg:col-span-6 xl:col-span-6 space-y-4 sticky top-6">
        <div className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl shadow-xs">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-700 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              LIVE VISUAL PREVIEW
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              dhilipstudio.com{currentPage.path}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setPreviewTheme("light")}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${
                previewTheme === "light"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Light
            </button>
            <button
              type="button"
              onClick={() => setPreviewTheme("dark")}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${
                previewTheme === "dark"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Dark
            </button>
          </div>
        </div>

        {/* Live Website Canvas Container */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2 shadow-xs overflow-hidden min-h-[600px]">
          {renderExactSectionPreview()}
        </div>
      </div>
    </div>
  );
}

export default function AdminPageEditor() {
  return (
    <Suspense fallback={<div className="p-8 text-[#f3e3a1] font-mono text-xs">Loading Studio Page Editor...</div>}>
      <PageEditorInner />
    </Suspense>
  );
}
