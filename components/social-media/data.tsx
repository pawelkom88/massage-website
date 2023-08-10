import { StaticImageData } from "next/image";
import freeIndexLogo from "@/public/images/free-index-logo.png";
import facebookIcon from "@/public/images/facebook-icon.svg";
import linkedinIcon from "@/public/images/linkedin-icon.svg";

interface SocialMedia {
  id: number;
  href: string;
  name: string;
  icon: StaticImageData;
  size: number;
}

export const socialMediaLinks: SocialMedia[] = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com/pages/,Profesional-Massage-Therapy-by-Edyta-Szabaciuk/812587632109399?ref=hl",
    icon: facebookIcon,
    size: 25,
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://uk.linkedin.com/pub/edyta-szabaciuk/a7/35a/296",
    icon: linkedinIcon,
    size: 24,
  },
  {
    id: 3,
    name: "FreeIndex",
    href: "http://www.freeindex.co.uk/,profile%28professional-massage-therapy-by-edyta-szabaciuk%29_612728.htm",
    icon: freeIndexLogo,
    size: 25,
  },
];
