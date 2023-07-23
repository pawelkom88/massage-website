"use client";

import React, { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo-healthy-muscles.svg";
import logo2 from "@/public/images/EJ_MSG_SLATE.svg";
import { linksLeft, linksRight } from "./data";
import { subLinks1, subLinks2 } from "./drop-down-menu/DropDownLinks";
import { SubLink } from "./drop-down-menu/data";
import GoBackIcon from "@/public/icons/GoBackIcon";

const genericHamburgerLine = `h-[3px] w-8 my-[2px] bg-white transition ease transform duration-300`;
const menuStyles =
  "flex flex-col justify-center items-center fixed inset-0 w-full h-full bg-white border-4 border-primary-clr";

interface MenuProps {
  links: {
    id: number;
    name: string;
    href: string;
    hasDropDown: boolean;
  }[];
  currentRoute: string;
  setToggleMenu: (toggle: boolean) => void;
  setSubPage: (page: number | null) => void;
}

const MenuList: React.FC<MenuProps> = ({ links, currentRoute, setToggleMenu, setSubPage }) => {
  return (
    <ul className="text-center space-y-4 uppercase text-xl">
      {links.map(link => (
        <Fragment key={link.id}>
          {link.hasDropDown ? (
            <button onClick={() => setSubPage(link.id)} className="block mx-auto uppercase">
              {link.name}
            </button>
          ) : (
            <li>
              <Link
                className={`${
                  currentRoute === link.href ? "text-primary-clr font-bold" : ""
                } block mx-auto uppercase`}
                onClick={() => setToggleMenu(false)}
                href={link.href}>
                {link.name}
              </Link>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

interface SubMenuProps {
  subLinks: SubLink[];
  currentRoute: string;
  setToggleMenu: (toggle: boolean) => void;
  setSubPage: (page: number | null) => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ subLinks, currentRoute, setToggleMenu, setSubPage }) => {
  return (
    <ul className={`${menuStyles} z-60 text-center space-y-6 uppercase text-xl p-4`}>
      {subLinks.map(link => (
        <li key={link.id}>
          <Link
            className={`${
              currentRoute === link.href ? "text-primary-clr font-bold" : ""
            } block mx-auto uppercase`}
            onClick={() => {
              setToggleMenu(false);
            }}
            href={link.href}>
            {link.name}
          </Link>
        </li>
      ))}
      <br />
      <button className="w-8 h-8" onClick={() => setSubPage(null)}>
        <GoBackIcon />
      </button>
    </ul>
  );
};

const MobileNavigation: React.FC = () => {
  const currentRoute = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSubPage, setSubPage] = useState<null | number>(null);
  const isElementVisible = useWindowSize(0.3);
  const isElementVisibleBottom = useWindowSize(0.75);

  let subLinks: SubLink[] = [];

  switch (showSubPage) {
    case 1:
      subLinks = subLinks1;
      break;
    case 8:
      subLinks = subLinks2;
      break;
  }

  return (
    <div className="lg:hidden">
      {isElementVisible && (
        <>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            type="button"
            aria-label="Open Menu"
            aria-controls="menuItems"
            aria-expanded={toggleMenu ? "true" : "false"}
            title="Open Menu"
            className={`fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 flex-col items-center justify-center rounded-full pt-2 z-[100]
                ${isElementVisibleBottom ? "bg-primary-clr" : "bg-teriary-clr"}`}>
            <div
              className={`${genericHamburgerLine} ${
                toggleMenu && "translate-y-[8.5px] rotate-45 opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                toggleMenu && "-translate-y-[-1px] -rotate-45 opacity-100"
              }`}
            />
            <small
              className={`${
                toggleMenu ? "opacity-0" : "opacity-100"
              } text-white transition-opacity duration-200 ease-in-out`}>
              menu
            </small>
          </button>
        </>
      )}

      {toggleMenu && (
        <>
          <div className={`${menuStyles} z-50`}>
            <Image
              className="absolute top-0 z-50 p-4"
              src={logo}
              width={logo.width}
              height={logo.width}
              alt="healthy-muscles-logo"
            />
            <MenuList
              links={[...linksLeft, ...linksRight]}
              currentRoute={currentRoute}
              setToggleMenu={setToggleMenu}
              setSubPage={setSubPage}
            />
            {showSubPage && (
              <SubMenu
                subLinks={subLinks}
                currentRoute={currentRoute}
                setToggleMenu={setToggleMenu}
                setSubPage={setSubPage}
              />
            )}
            <Image
              className="absolute w-3/4 mx-auto bottom-[15vh] z-50"
              src={logo2}
              width={logo2.width}
              height={logo2.width}
              alt="healthy-muscles-logo-secondary"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNavigation;
