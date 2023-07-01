import Link from "next/link";
import { LinksProps } from "../navigation/types";
import DropDownMenu from "../navigation/drop-down-menu/DropDownMenu";

export default function Links({ links, onShowDropDown, showDropDown }: LinksProps) {
  return (
    <ul className="items-stretch hidden space-x-3 md:flex capitalize text-lg">
      {links.map(({ id, name, href, hasDropDown }) => {
        return (
          <li key={id} className="flex">
            <Link
              href={href}
              onClick={hasDropDown ? () => onShowDropDown(id) : () => onShowDropDown(0)}
              className="text-[1rem] group flex items-center px-4 hover:text-secondary-clr transition hover:underline">
              {name}
              <DropDownMenu key={id} id={id} showDropDown={showDropDown} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
