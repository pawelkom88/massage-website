import Image from "next/image";
import React from "react";
import diploma from "@/public/images/hand-holding-diploma.webp";
import { qualificationsLeft, qualificationsRight } from "./data";

export default function Qualifications() {
  return (
    <section>
      <span className="mt-12 lg:mt-32 text-center text-secondary-clr mb-2 block text-lg font-semibold">
        Qualifications
      </span>
      <h2 className="text-center text-heading2 mt-4">My achievements as a massage therapist</h2>
      <div className="relative items-center w-full px-5 lg:py-16 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 text-left lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* component */}
          <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <div className="mx-auto lg:max-w-7xl">
              <ul
                role="list"
                className="grid md:grid-cols-2 gap-4 list-none grid-cols-1 lg:grid-cols-1 lg:gap-6">
                {/* component */}
                {qualificationsLeft.map(({ id, content, image }) => {
                  return (
                    <li key={id} className="text-center">
                      <p className="mt-5 text-lg font-medium leading-6 mb-4">{content}</p>
                      <Image
                        src={image}
                        width={100}
                        height={200}
                        alt="profile"
                        className="mx-auto"
                      />
                    </li>
                  );
                })}
                {/* component */}
              </ul>
            </div>
          </div>
          {/* component */}

          <div className="hidden lg:block order-first w-full mt-12 h-full object-cover lg:mt-0 mb-4 lg:mb-0">
            <Image
              src={diploma}
              width={diploma.width}
              height={diploma.height}
              className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded shadow-xl"
              alt="profile"
            />
          </div>

          <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <div className="mx-auto lg:max-w-7xl">
              <ul
                role="list"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6">
                {/* component */}

                {qualificationsRight.map(({ id, content, image }) => {
                  return (
                    <li key={id} className="text-center">
                      <p className="mt-5 text-lg font-medium leading-6 mb-4">{content}</p>
                      <Image
                        src={image}
                        width={100}
                        height={200}
                        alt="profile"
                        className="mx-auto"
                      />
                    </li>
                  );
                })}
                {/* component */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
