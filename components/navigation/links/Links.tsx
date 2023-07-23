import Link from "next/link";
import { LinksProps } from "../types";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import DropDownLinks from "../drop-down-menu/DropDownLinks";

const className =
  "text-[1rem] group flex items-center hover:text-primary-clr transition hover:underline";

export default function Links({ links, numberDropDownOfLinks, onShowDropDown }: LinksProps) {
  const {
    buttonProps,
    itemProps,
    isOpen: isDropDownVisible,
    setIsOpen,
  } = useDropdownMenu<HTMLDivElement>(numberDropDownOfLinks);

  return (
    <ul className="items-stretch hidden lg:flex capitalize lg:text-lg">
      {links.map(({ id, name, href, hasDropDown }) => {
        return (
          <li key={id} className="relative flex mx-2 xl:mx-4">
            {hasDropDown ? (
              <>
                <button {...(buttonProps as any)} className={className}>
                  {name}
                </button>
                {isDropDownVisible && (
                  <DropDownLinks onShowDropDown={setIsOpen} itemProps={itemProps} id={id} />
                )}
              </>
            ) : (
              <Link href={href} className={className}>
                {name}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
