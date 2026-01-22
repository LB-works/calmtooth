
export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface GMBData {
  name: string;
  address: string;
  phone: string;
  description: string;
  averageRating: number;
  totalReviews: number;
  hours: BusinessHours[];
  services: string[];
  images: {
    logo: string;
    cover: string;
    interior: string[];
    exterior: string[];
    staff: string[];
  };
  reviews: Review[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    googleMaps: string;
  };
}

export enum Page {
  Home = 'Home',
  Services = 'Services',
  About = 'About',
  Reviews = 'Reviews',
  Contact = 'Contact'
}
