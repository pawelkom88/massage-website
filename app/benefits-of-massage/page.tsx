import Others from "@/components/qualifications/Others";
import React from "react";
import { benefits } from "./data";
import DashIcon from "@/public/icons/DashIcon";

const BenefitsOfMassage = () => {
  return (
    <section className="px-4 max-w-readable mx-auto">
      <Others
        title="Benefits of Massage"
        data={benefits}
        icon={<DashIcon />}
        styles={{ width: "100%" }}
      />
    </section>
  );
};

export default BenefitsOfMassage;
