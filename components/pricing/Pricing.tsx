import CallToAction from "../cta/CallToAction";
import Card from "./Card";
import React from "react";

export default function Pricing() {
  return (
    <section className="lg:text-lg">
      <span className="text-secondary-clr mb-4 block text-lg font-semibold text-center">
        The Key to a Healthier You
      </span>
      <h1 className="text-heading text-center my-4">Massage Pricing</h1>
      <br />
      <p className="max-w-readable mx-auto text-justify">
        The cost of treatment largely depends on the amount of time you book. Prices start from as
        little as £25 for a 30 minutes for a massage of your choice. The only difference is with the
        Hot Stone Therapy - it is more expensive as it takes time to sanitize and warm up the
        stones.
      </p>
      <br />

      <div className="max-w-readable mx-auto">
        <strong>A guide for clients:</strong>
        <ul role="list" className="flex flex-col order-last mt-4 gap-y-3">
          {/* MAP */}
          <li className="flex items-center">
            <svg
              width={25}
              fill="#32584d"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 40 40"
              id="tick">
              <path d="M15.48 28.62a1 1 0 0 1-.71-.29l-7.54-7.54a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l6.83 6.83L32.12 9.57a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L16.18 28.33a1 1 0 0 1-.7.29Z"></path>
            </svg>
            <span className="ml-4"> Connect 1 websites </span>
          </li>
        </ul>
      </div>

      <h2 className="text-heading2 text-center my-12">Ways to save money off next treatment</h2>
      <p className="max-w-readable mx-auto">
        Enjoy a £5 discount on your next 60-minute treatment. All you have to do is leave a review
        on my Google account{" "}
        <a
          href={process.env.NEXT_PUBLIC_ADD_REVIEW_LINK}
          className="underline hover:text-secondary-clr">
          ES Professional Massage Therapy
        </a>
        .
      </p>

      <div className="max-w-[85rem] mx-auto px-4 py-12">
        <div className="flex items-center justify-center flex-wrap gap-y-10 sm:mx-auto  xl:gap-x-4">
          {/* MAP DATA */}
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <CallToAction>Book now</CallToAction>
      </div>
    </section>
  );
}
