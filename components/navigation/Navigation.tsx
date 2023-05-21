import Image from "next/image";
import logo from "@/public/images/logo-edyta-james.png";

export default function Navigation() {
  return (
    <header className="p-4 lg:mt-4">
      <div className="container flex justify-between h-12 mx-auto md:justify-center md:space-x-8">
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4">
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4">
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4">
              Link
            </a>
          </li>
        </ul>
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2">
          <Image width={120} height={109} src={logo} alt="" className="w-[80px] lg:w-[120px]" />
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4">
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4">
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4">
              Link
            </a>
          </li>
        </ul>
        <button title="Button" type="button" className="p-4 md:hidden">
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
      </div>
    </header>
  );
}
