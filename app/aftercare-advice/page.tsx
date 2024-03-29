import React from "react";
import { Metadata } from "next";
import { dietAdvice, lifestyleAdvice, massageExpectations } from "../aftercare-advice/data";

export const metadata: Metadata = {
  title: "Massage Care Tips - Before, During, and After Treatment",
  description:
    "Learn what to expect before, during, and after your massage therapy session. Discover post-massage care tips to enhance your relaxation and well-being.",
  alternates: {
    canonical: "during-the-treatment",
  },
};

const AfterCareAdvice = () => {
  return (
    <section className="px-4 max-w-readable mx-auto py-8">
      <br />
      <h1 className="text-heading2 text-center px-4 my-8 uppercase">Massage - what to expect</h1>
      <br />
      <h2 className="text-center lg:text-heading3">What to expect after massage?</h2>
      <br />
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

export default AfterCareAdvice;
