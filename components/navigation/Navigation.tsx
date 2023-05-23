import Image from "next/image";
import logo from "@/public/images/logo-muscle-mending.png";
import Links from "../links/Links";
import { linksLeft, linksRight } from "./data";

export default function Navigation() {
  return (
    <header className="p-4 lg:mt-4">
      <div className="container flex justify-between h-12 mx-auto md:justify-center md:space-x-8">
        <Links links={linksLeft} />
        <a
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2">
          <Image width={110} height={109} src={logo} alt="" className="w-[80px] lg:w-[110px]" />
        </a>
        <Links links={linksRight} />
      </div>
    </header>
  );
}
