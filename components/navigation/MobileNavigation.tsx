"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { linksLeft, linksRight } from "./data";
import Image from "next/image";
import logo from "@/public/images/logo-edyta-james.webp";
import { usePathname } from "next/navigation";
import { subLinks1, subLinks2 } from "./drop-down-menu/DropDownLinks";
import { SubLink } from "./drop-down-menu/data";

const menuStyles =
  "flex flex-col justify-center items-center fixed inset-0 w-full h-full bg-white border-4 border-primary-clr";

let subLinks: SubLink[] = [];

export default function MobileNavigation() {
  const currentRoute = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSubPage, setSubPage] = useState<null | number>(null);

  switch (showSubPage) {
    case 1:
      subLinks = subLinks1;
      break;
    case 8:
      subLinks = subLinks2;
      break;
    default:
      0;

      return (
        <>
          <button
            onClick={() => setToggleMenu(true)}
            title="Button"
            type="button"
            className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {toggleMenu && (
            <>
              <Image
                className="absolute top-0 z-50"
                src={logo}
                width={logo.width}
                height={logo.width}
                alt="healthy-muscles-logo"
              />
              <div className={`${menuStyles} z-50`}>
                <ul className="text-center space-y-4 uppercase text-xl">
                  {[...linksLeft, ...linksRight].map(link => {
                    console.log(link);

                    return (
                      <Fragment key={link.id}>
                        {link.hasDropDown ? (
                          <button
                            onClick={() => setSubPage(link.id)}
                            className="border-2 block mx-auto uppercase">
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
                    );
                  })}
                </ul>
                {showSubPage && (
                  <ul className={`${menuStyles} z-60 text-center space-y-4 uppercase text-xl p-4`}>
                    {subLinks.map(link => {
                      return (
                        <li key={link.id}>
                          <Link
                            className={`${
                              currentRoute === link.href ? "text-primary-clr font-bold" : ""
                            } block mx-auto uppercase`}
                            onClick={() => {
                              setToggleMenu(false);
                              // setSubPage(link.id);
                            }}
                            href={link.href}>
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                    <button onClick={() => setSubPage(null)}>back</button>
                  </ul>
                )}
              </div>
            </>
          )}
        </>
      );
  }
}
