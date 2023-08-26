import Others from "@/components/qualifications/Others";
import React from "react";
import { dietAdvice, lifestyleAdvice, massageExpectations } from "./data";

const BeforeAndDuringTreatment = () => {
  return (
    <section className="px-4 max-w-readable mx-auto py-8">
      <br />
      <h1 className="text-heading2 text-center px-4 my-8 uppercase">Before and during treatment</h1>
      <br />
      <h2 className="text-center lg:text-heading3">What to expect after massage?</h2>
      {massageExpectations.map(text => {
        return (
          <p key={text.id} className="mt-3 lg:text-lg">
            {text.title}
          </p>
        );
      })}
      <br />
      <br />
      <h2 className="text-center lg:text-heading3">Diet advice after treatment</h2>
      <br />
      {dietAdvice.map(text => {
        return (
          <p key={text.id} className="mt-3 lg:text-lg">
            {text.title}
          </p>
        );
      })}
      <br />
      <br />
      <h2 className="text-center lg:text-heading3">What to expect after massage?</h2>
      <br />
      {lifestyleAdvice.map(text => {
        return (
          <p key={text.id} className="mt-3 lg:text-lg">
            {text.title}
          </p>
        );
      })}
      <br />
    </section>
  );
};

export default BeforeAndDuringTreatment;
