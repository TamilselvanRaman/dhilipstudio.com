export interface CarouselCard {
  id: number;
  category: string;
  title: string;
  src: string;
  alt: string;
}

export interface Review {
  id: number;
  quote: string;
  author: string;
  location: string;
  avatar: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  img1: string;
  img1Alt: string;
  img1Rotate: string;
  img2: string;
  img2Alt: string;
  img2Rotate: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  isHighlighted?: boolean;
}

export interface MarqueeItemRow1 {
  tag: string;
  title: string;
  src: string;
  alt: string;
}

export interface MarqueeItemRow2 {
  tag?: string;
  title?: string;
  quote?: string;
  src: string;
  alt: string;
  isOverlay?: boolean;
}
