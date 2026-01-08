import Image from "next/image";
import React from "react";
import insurance from "@/public/images/babtac-logo.png";
import { courses as defaultCourses } from "./data";
import Others from "./Others";

interface QualificationsProps {
  heading?: string;
  qualifications?: string[];
}

export default function Qualifications({ heading, qualifications }: QualificationsProps) {
  // Convert string array to the format expected by Others component
  const coursesData = qualifications?.length
    ? qualifications.map((title, index) => ({ id: index + 1, title }))
    : defaultCourses;

  return (
    <section>
      <span className="mt-12 lg:mt-24 text-center text-secondary-clr mb-2 block text-lg font-semibold">
        Qualifications
      </span>
      <h2 className="text-center text-heading2 mt-4">
        {heading || "My achievements as a massage therapist"}
      </h2>
      <br />
      <br />
      <Others styles={{ margin: "0 auto", marginTop: "-4rem" }} data={coursesData} />
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
