import { currentYear } from "@/constants/constants";
import Link from "next/link";
import { footerLinks } from "./data";

export default function FooterLinks() {
  return (
    <div className="pt-4 mt-12 border-t border-gray-50">
      <div className="flex sm:items-center justify-center">
        <nav>
          <ul className="flex flex-wrap gap-4">
            {footerLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <Link
                    href={link}
                    className="text-white text-sm transition hover:text-secondary-clr">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <br />
      <small className="text-gray-100 text-center text-xs block">
        © Copyright {currentYear} Healthy Mending. All rights reserved.
      </small>
    </div>
  );
}
