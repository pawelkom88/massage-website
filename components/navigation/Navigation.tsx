"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo-healthy-muscles.webp";
import Links from "./links/Links";
import { linksLeft, linksRight } from "./data";
import Link from "next/link";
import { subLinks1, subLinks2 } from "./drop-down-menu/DropDownLinks";

export default function Navigation() {
  const [showDropDown, setShowDropDown] = useState<number>(0);

  return (
    <header className=" p-10 lg:p-6 bg-teriary-clr text-white">
      <div className="container flex h-12 mx-auto justify-center md:space-x-8">
        <Links
          numberDropDownOfLinks={subLinks2.length}
          links={linksLeft}
          showDropDown={showDropDown}
          onShowDropDown={setShowDropDown}
        />
        <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
          <Image
            width={800}
            height={300}
            src={logo}
            alt="healthy muscle logo"
            className="w-[250px]"
          />
        </Link>
        <Links
          numberDropDownOfLinks={subLinks1.length}
          links={linksRight}
          showDropDown={showDropDown}
          onShowDropDown={setShowDropDown}
        />
      </div>
    </header>
  );
}
