import featureImg1 from "@/public/assets/images/beige-living-room-in-a-modern-house.webp";
import featureImg4 from "@/public/assets/images/modern-bathroom.webp";
import featureImg2 from "@/public/assets/images/modern-kitchen.webp";
import featureImg3 from "@/public/assets/images/office-full-of-chairs-and-table-in-the-middle.webp";

import brushIcon from "@/public/assets/icons/brush-icon.png";
import cleaningSpray from "@/public/assets/icons/cleaning-spray.png";
import house from "@/public/assets/icons/house-icon.png";
import car from "@/public/assets/icons/riding-car-icon-with-cloud-in-a-background.png";
import company1 from "@/public/assets/images/customers-logos/pit-gym-logo.webp";
import company2 from "@/public/assets/images/customers-logos/scoop-wholefoods-logo.png";
import company3 from "@/public/assets/images/customers-logos/sharps-logo.png";
import company4 from "@/public/assets/images/customers-logos/strawberry-agency-logo.webp";
import company5 from "@/public/assets/images/customers-logos/willow-chiropractors-logo.png";

import { StaticImageData } from "next/image";

interface FeaturesImage {
  id: number;
  src: StaticImageData;
  alt: string;
  name: string;
}

export const featuresImages: FeaturesImage[] = [
  { id: 1, src: featureImg1, name: "Living Areas", alt: "beige living room in a modern house" },
  { id: 2, src: featureImg2, name: "Kitchens", alt: "modern-clean-kitchen" },
  {
    id: 3,
    src: featureImg3,
    name: "Offices",
    alt: "office full of chairs and table in the-middle",
  },
  { id: 4, src: featureImg4, name: "Bathrooms", alt: "office hall in a corporation building" },
];

interface Stats {
  id: number;
  src: StaticImageData;
  alt: string;
  link: string;
}

type ServiceOfferImage = Omit<Stats, "link">;

export interface ServiceOfferContent extends ServiceOfferImage {
  heading: string;
  content: string;
  price?: string;
}

export const stats: Stats[] = [
  { id: 1, src: company1, alt: "pit gym logo", link: "" },
  { id: 2, src: company2, alt: "scoop wholefoods logo", link: "" },
  { id: 3, src: company3, alt: "sharps logo", link: "" },
  { id: 4, src: company4, alt: "strawberry agency logo", link: "" },
  { id: 5, src: company5, alt: "willow chiropractors logo", link: "" },
];

export const serviceOfferImages: ServiceOfferContent[] = [
  {
    id: 1,
    heading: "One-Time Cleaning Services",
    content:
      "Customizable one-time cleaning programs tailored to your needs - proudly offered by us.",
    price: "From £50",
    src: brushIcon,
    alt: "brush icon",
  },
  {
    id: 2,
    heading: "Regular Home Cleaning Services",
    content:
      "Enjoy a clean and tidy home with our regular visits. Our top-notch cleaning services ensures that you always come back to a spotless home.",
    price: "From £52.50",
    src: cleaningSpray,
    alt: "cleaning spray icon",
  },
  {
    id: 3,
    heading: "House Cleaning & Sanitizing ",
    content:
      "With our thorough house cleaning services, you can trust that we never miss the little details in your space.",
    src: house,
    alt: "house icon",
  },
  {
    id: 4,
    heading: "Move In / Move Out Cleaning",
    content:
      "Moving can be messy, but our cleaning professionals will leave you feeling refreshed and ready to start your new chapter.",
    src: car,
    alt: "car icon",
  },
];
