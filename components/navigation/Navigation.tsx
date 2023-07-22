"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo-edyta-james.webp";
import Links from "./links/Links";
import { linksLeft, linksRight } from "./data";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";
import { subLinks1, subLinks2 } from "./drop-down-menu/DropDownLinks";

export default function Navigation() {
  const [showDropDown, setShowDropDown] = useState<number>(0);

  return (
    <header className="p-4 lg:mt-4">
      <div className="container flex justify-between h-12 mx-auto lg:justify-center md:space-x-8">
        <Links numberDropDownOfLinks={subLinks2.length} links={linksLeft} showDropDown={showDropDown} onShowDropDown={setShowDropDown} />
        <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
          <Image
            width={210}
            height={109}
            src={logo}
            alt="healthy mending logo"
            className="w-[150px]"
          />
        </Link>
        <Links numberDropDownOfLinks={subLinks1.length} links={linksRight} showDropDown={showDropDown} onShowDropDown={setShowDropDown} />
        <MobileNavigation />
      </div>
    </header>
  );
}
