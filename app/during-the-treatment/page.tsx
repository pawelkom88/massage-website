import Others from "@/components/qualifications/Others";
import React from "react";
import { dietAdvice, lifestyleAdvice, massageExpectations } from "./data";

const BeforeAndDuringTreatment = () => {
  return (
    <section className="px-4 max-w-readable mx-auto">
      <br />
      <h1 className="text-center text-heading2 mt-4 uppercase">Before and during treatment</h1>
      <br />
      <Others
        hasHeading="What to expect after massage?"
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
      <br />
    </section>
  );
};

export default BeforeAndDuringTreatment;
