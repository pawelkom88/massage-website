import React from "react";
import { aboutMe } from "./data";
import Image from "next/image";
import massage1 from "@/public/images/Edyta-performing-massage.webp";
import massage2 from "@/public/images/client-lying-on-bed-during-massage.JPG.webp";
import Qualifications from "@/components/qualifications/Qualifications";

export default function AboutMe() {
  return (
    <section className="max-w-[85rem] px-4 mx-auto overflow-hidden pt-8 lg:pt-20 pb-12 mb-12">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center justify-around">
          <div className="w-full px-3 xl:w-1/2 order-2 lg:order-1">
            <div className="py-3 sm:py-4">
              <Image
                width={massage1.width}
                height={massage1.height}
                src={massage1}
                blurDataURL={massage1.blurDataURL}
                placeholder="blur"
                alt="Edyta performing massage"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          <div className="w-full px-4 xl:w-5/12">
            <div className="mt-4 lg:mt-0">
              <span className="text-secondary-clr mb-2 block text-lg font-semibold text-center lg:text-left">
                About me
              </span>
              <h2 className="mt-2 mb-4 text-heading2">Welcome!</h2>
              {aboutMe.map(({ id, content }) => {
                return (
                  <p key={id} className="indent-2 text-justify text-lg mb-4">
                    {content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Qualifications/>
    </section>
  );
}
