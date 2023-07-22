export interface SubLink {
  id: number;
  name: string;
  href: string;
}

export function generateLinkFromName(name: string) {
  const cleanedName = name.trim().replace(/[ ,]+/g, "-");

  return cleanedName.toLowerCase();
}

export const names = [
  "Sport, Remedial and Injury Rehabilitation Massage",
  "Myofascial Cupping Therapy",
  "Relaxing Swedish Massage",
  "Indian Head Massage",
  "Hot Stone Massage",
  "Anti-cellulite Cupping Massage",
];
