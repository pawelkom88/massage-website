import Others from "@/components/qualifications/Others";
import React from "react";
import { benefits } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage Benefits - Enhance Your Well-being with Newport Massage",
  description:
    "Discover the extensive benefits of massage therapy in Healthy Muscle. From pain relief and improved circulation to reduced stress and enhanced joint flexibility, massage offers a wide range of advantages.",
  alternates: {
    canonical: "benefits-of-massage",
  },
};

const BenefitsOfMassage = () => {
  return (
    <section className="px-4 max-w-readable mx-auto">
      <br />
      <h1 className="text-center text-heading2 mt-4">BENEFITS OF MASSAGE</h1>
      <br />
      <p className="mt-3 lg:text-lg">
        Massage can help to release chronic muscular tension and pain, improve circulation, increase
        joint flexibility, reduce mental and physical fatigue and stress, promote the faster healing
        of injured muscular tissue, improve posture, and reduce blood pressure. Massage is also
        known to promote better sleep, improve concentration, reduce anxiety and create an overall
        sense of well-being.
      </p>
      <Others title="" data={benefits} styles={{ width: "100%" }} />
    </section>
  );
};

export default BenefitsOfMassage;
