import Others from "@/components/qualifications/Others";
import React from "react";
import { dietAdvice, lifestyleAdvice, massageExpectations } from "./data";

const BeforeAndDuringTreatment = () => {
  return (
    <section className="px-4 max-w-readable mx-auto">
      <br />
      <Others
        hasHeading="What to expect after massage?"
        title="Before and during treatment"
        data={massageExpectations}
        styles={{ width: "100%", listStyle: "none" }}
      />
      <Others
        hasHeading="Diet advice after treatment:"
        data={dietAdvice}
        styles={{ width: "100%", listStyle: "none" }}
      />
      <Others
        hasHeading="What to expect after massage?"
        data={lifestyleAdvice}
        styles={{ width: "100%", listStyle: "none" }}
      />
    </section>
  );
};

export default BeforeAndDuringTreatment;
