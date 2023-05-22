import Link from "next/link";
import { Link as LinkType } from "../navigation/types";

export default function Links({ links }: { links: LinkType[] }) {
  return (
    <ul className="items-stretch hidden space-x-3 md:flex capitalize text-lg">
      {links.map(({ id, name, href }) => {
        return (
          <li key={id} className="flex">
            <Link href={href} className="flex items-center px-4">
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
