import Image from "next/image";
import React from "react";
import insurance from "@/public/images/babtac-logo.png";
import { courses } from "./data";
import Others from "./Others";

export default function Qualifications() {
  return (
    <section>
      <span className="mt-12 lg:mt-24 text-center text-secondary-clr mb-2 block text-lg font-semibold">
        Qualifications
      </span>
      <h2 className="text-center text-heading2 mt-4">My achievements as a massage therapist</h2>
      {/* <div className="relative items-center w-full lg:py-8 mx-auto max-w-7xl"> */}
      {/* <div className="grid items-center grid-cols-1 gap-4 text-left  lg:grid-cols-3"> */}
      {/* <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <ul
              role="list"
              className="grid md:grid-cols-2 gap-4 list-none grid-cols-1 lg:grid-cols-1 lg:gap-6">
              {qualificationsLeft.map(({ id, content, image }) => {
                return (
                  <li key={id} className="text-center">
                    <p className="mt-5 text-lg font-medium leading-6 mb-4">{content}</p>
                    <Image
                      src={image}
                      width={image.width}
                      height={image.height}
                      alt={content}
                      className="w-3/4 lg:w-1/2 mx-auto"
                    />
                  </li>
                );
              })}
            </ul>
          </div> */}
      {/* <div className="mx-auto block order-first lg:w-full mt-12 object-cover lg:mt-0 lg:mb-0">
            <p className="mt-5 text-lg font-medium leading-6 mb-4 text-center">
              Member of BABTAC - British Association of Beauty Therapy and Cosmetology
            </p>
            <Image
              src={certificate}
              width={certificate.width}
              height={certificate.height}
              className="object-cover object-center lg:w-full lg:h-full mx-auto lg:ml-auto rounded shadow-xl mt-4 w-3/4 h-5/6"
              alt="certificate"
            />
          </div> */}
      {/* <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <div className="mx-auto lg:max-w-7xl">
              <ul
                role="list"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6">
                {qualificationsRight.map(({ id, content, image }) => {
                  return (
                    <li key={id} className="text-center">
                      <p className="mt-5 text-lg font-medium leading-6 mb-4">{content}</p>
                      <Image
                        src={image}
                        width={image.width}
                        height={image.height}
                        alt={content}
                        className="w-3/4 lg:w-1/2 mx-auto"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}
      <br />
      <br />

      <Others styles={{ margin: "0 auto", marginTop: "-4rem" }} data={courses} />
      <br />
      <Image
        className="mx-auto"
        src={insurance}
        width={200}
        height={150}
        alt="BABTAC insurance logo"
      />
      <br />
      <p className="text-center">Valid insurance accredited by BABTAC.</p>
    </section>
  );
}
