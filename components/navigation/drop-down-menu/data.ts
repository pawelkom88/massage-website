export interface SubLink {
  id: number;
  name: string;
  href: string;
}

export function generateLinkFromName(name: string) {
  const cleanedName = name.trim().replace(/[ ,]+/g, "-");

  return cleanedName.toLowerCase();
}

export const linkNames = [
  "Sport, Remedial and Injury Rehabilitation Massage",
  "Myofascial Cupping Therapy",
  "Relaxing Swedish Massage",
  "Indian Head Massage",
  "Hot Stone Massage",
  "Anti-cellulite Cupping Massage",
];

export const routes: string[] = [
  "about-me",
  "aftercare-advice",
  "during-the-treatment",
  "benefits-of-massage",
  "contact-me",
  "during-the-treatment",
  "massage-pricing",
];
