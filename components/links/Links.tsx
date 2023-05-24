import Link from "next/link";
import { Link as LinkType } from "../navigation/types";

export default function Links({ links }: { links: LinkType[] }) {
  return (
    <ul className="items-stretch hidden space-x-3 md:flex capitalize text-lg">
      {links.map(({ id, name, href }) => {
        return (
          <li key={id} className="flex">
            <Link
              href={href}
              className="group flex items-center px-4 hover:text-secondary-clr transition">
              <span className="bg-left-bottom bg-gradient-to-r from-primary-clr to-accent-clr bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
