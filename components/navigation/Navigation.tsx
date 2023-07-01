"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo-muscle-mending.png";
import Links from "../links/Links";
import { linksLeft, linksRight } from "./data";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";

export default function Navigation() {
  const [showDropDown, setShowDropDown] = useState<number>(0);

  return (
    <header className="p-4 lg:mt-4">
      <div className="container flex justify-between h-12 mx-auto md:justify-center md:space-x-8">
        <Links links={linksLeft} showDropDown={showDropDown} onShowDropDown={setShowDropDown} />
        <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
          <Image
            width={110}
            height={109}
            src={logo}
            alt="muscle mending logo"
            className="w-[80px] lg:w-[110px]"
          />
        </Link>
        <Links links={linksRight} showDropDown={showDropDown} onShowDropDown={setShowDropDown} />
        <MobileNavigation />
      </div>
    </header>
  );
}
