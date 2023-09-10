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
