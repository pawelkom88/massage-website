import Others from "@/components/qualifications/Others";
import React from "react";
import { benefits } from "./data";

const BenefitsOfMassage = () => {
  return (
    <section className="px-4 max-w-readable mx-auto">
      <Others
        title="Benefits of Massage"
        data={benefits}
        styles={{ width: "100%" }}
      />
    </section>
  );
};

export default BenefitsOfMassage;
