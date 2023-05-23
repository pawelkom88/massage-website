import SocialMedia from "@/components/social-media/SocialMedia";
import Image from "next/image";
import logo from "@/public/images/logo-muscle-mending.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-clr-opacity lg:grid lg:grid-cols-4 max-w-[85rem] mx-auto px-4 lg:px-8 place-items-center mb-8 lg:gap-24">
      <div className="w-full relative block lg:col-span-2 h-96">
        <iframe
          title="google map"
          className="h-full w-full border-none"
          width="400"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=51.59190,-3.00961`}></iframe>
      </div>

      <div className="ml-auto py-16 lg:col-span-2">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h4 className="text-heading3 mb-2">Get in touch</h4>

            <a
              href="tel:07525431743"
              className="block text-2xl font-medium  hover:opacity-75 sm:text-3xl">
              07525431743
            </a>
            <a href="mailto:" className="block text-2xl font-medium  hover:opacity-75 sm:text-3xl">
              email here
            </a>

            <br />

            <SocialMedia />
          </div>

          <div>
            <h4 className="text-heading3 mb-2">Working Hours:</h4>
            <ul className="mt-4 space-y-1">
              <li>Mondays 10am - 2pm & 5pm - 8pm</li>
              <li>Tuesdays 5pm - 8pm</li>
              <li>Wednesdays 10am - 2pm & 5pm - 8pm</li>
              <li>Thursdays 5pm - 8pm</li>
              <li>Friday 5pm - 8pm</li>
              <li>Saturday 9.30am - 1pm</li>
            </ul>
          </div>
          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 justify-items-end">
            <div>
            <p className="font-medium ">Company</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
        </div>

        <div className="pt-12 mt-12 border-t border-gray-100">
          <div className="sm:flex sm:items-center sm:justify-between">
            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Privacy Policy
                  </a>
                </li>

                {/* <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Cookies
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
