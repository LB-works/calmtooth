import { GMBData } from "../types";

export const fetchGMBData = async (): Promise<GMBData> => {
  // Data updated to reflect the new CalmTooth branding for the clinic in Abuja
  return {
    name: "CalmTooth",
    address:
      "Plot 54, Poly plaza Besides AP plaza, Suite A9, 1073 Adetokunbo Ademola Cres, Wuse 2, 900288, Federal Capital Territory",
    phone: "+234 818 100 0111",
    description:
      "CalmTooth is Abuja's premier dental clinic designed for patient comfort. We specialize in providing a relaxing, anxiety-free environment while delivering state-of-the-art dental treatments, from routine scaling and polishing to complex oral surgeries and orthodontics.",
    averageRating: 5.0,
    hours: [
      { day: "Monday", open: "8:00 AM", close: "6:00 PM" },
      { day: "Tuesday", open: "8:00 AM", close: "6:00 PM" },
      { day: "Wednesday", open: "8:00 AM", close: "6:00 PM" },
      { day: "Thursday", open: "8:00 AM", close: "6:00 PM" },
      { day: "Friday", open: "8:00 AM", close: "6:00 PM" },
      { day: "Saturday", open: "9:00 AM", close: "4:00 PM" },
      { day: "Sunday", open: "Closed", close: "Closed", isClosed: true },
    ],
    services: [
      "Painless Scaling and Polishing",
      "Calm Orthodontics (Braces & Invisalign)",
      "Premium Teeth Whitening",
      "Advanced Dental Implants",
      "Gentle Root Canal Therapy",
      "Aesthetic Crowns and Bridges",
      "Professional Oral Surgery",
      "Child-Friendly Pediatric Dentistry",
      "Other (Please specify)",
    ],
    images: {
      logo: "/logo/calm tooth letter logo.png",
      cover: "/images/2025-12-31 (1).webp", // Largest file, good for cover
      interior: [
        "/images/2025-11-28.webp",
        "/images/2025-12-08.webp",
        "/images/2024-08-19.webp",
      ],
      exterior: ["/images/2025-10-02.webp"],
      staff: [
        "/images/2024-08-19 (1).webp", // Portrait placeholder
        "/images/2024-08-19 (1).webp", // Index 1 (Used by Home.tsx) - Maroon Cap Portrait
      ],
      clinicalResults: [
        "/images/2025-11-28.webp", // Peace sign patient
        "/images/2025-12-08.webp", // Thumbs up patient with doctor
      ],
    },
    reviews: [
      {
        id: "p1",
        author: "Onyinyechi E.",
        rating: 5,
        text: "CalmTooth really lives up to its name! It's the most professional and clean environment I've seen in Abuja. The dentists are incredibly patient and made me feel so calm during my procedure.",
        date: "2 days ago",
        profilePhoto:
          "https://ui-avatars.com/api/?name=Onyinyechi+E&background=00898F&color=fff",
      },
      {
        id: "p2",
        author: "Yusuf Abdullahi",
        rating: 5,
        text: "Easily the best dental experience in Abuja. The staff at CalmTooth are efficient and friendly. The teeth whitening results are fantastic.",
        date: "5 days ago",
        profilePhoto:
          "https://ui-avatars.com/api/?name=Yusuf+A&background=0369A1&color=fff",
      },
      {
        id: "p3",
        author: "Fatima B.",
        rating: 5,
        text: "Excellent service at CalmTooth. I'm getting my braces here and I love the attention to detail. Definitely the place to go for orthodontics in Nigeria.",
        date: "1 week ago",
        profilePhoto:
          "https://ui-avatars.com/api/?name=Fatima+B&background=BE123C&color=fff",
      },
      {
        id: "p4",
        author: "Chinedu Okafor",
        rating: 4.8,
        text: "Extremely calm and professional. I had a complex root canal at CalmTooth and it was completely painless. This is top-tier dentistry.",
        date: "1 week ago",
        profilePhoto:
          "https://ui-avatars.com/api/?name=Chinedu+O&background=1E293B&color=fff",
      },
      {
        id: "p5",
        author: "Amaka J.",
        rating: 5,
        text: "World-class facility! CalmTooth feels more like a spa than a dentist. Pristine surgery rooms and amazing patient care.",
        date: "2 weeks ago",
        profilePhoto:
          "https://ui-avatars.com/api/?name=Amaka+J&background=7E22CE&color=fff",
      },
      {
        id: "p6",
        author: "Ibrahim K.",
        rating: 5,
        text: "Highly recommend CalmTooth for dental implants. Smooth procedure and great follow-up. They really care about their patients' comfort.",
        date: "3 weeks ago",
        profilePhoto:
          "https://ui-avatars.com/api/?name=Ibrahim+K&background=15803D&color=fff",
      },
    ],
    socialLinks: {
      facebook: "https://facebook.com/calmtooth",
      instagram: "https://instagram.com/calmtooth",
      googleMaps: "https://maps.app.goo.gl/h69xwiapaZlblqHWp", // Validated from file
    },
  };
};
