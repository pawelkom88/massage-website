import Image from "next/image";
import { socialMediaLinks } from "./data";

export default function SocialMedia({}) {
  return (
    <ul className="flex gap-6 mt-4">
      {socialMediaLinks.map(link => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75">
              <span className="sr-only">{link.name}</span>
              <Image src={link.icon} alt={link.name} width={link.size} height={30} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
