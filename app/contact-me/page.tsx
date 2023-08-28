import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch - Contact Healthy Muscles Massage Therapy in Newport",
  description:
    "Ready to book your massage therapy session or have questions? Contact Healthy Muscles in Newport today. We're here to assist you and provide the relaxation and well-being you deserve. Reach out to us via phone or email.",
  alternates: {
    canonical: "contact-me",
  },
};

const Contact = () => {
  return (
    <section className="px-4 max-w-readable mx-auto">
      <br />
      <h1 className="text-center text-heading2 mt-4 uppercase">Contact</h1>
      <br />
      <form
        // action="https://api.web3forms.com/submit"
        method="POST"
        id="form"
        className="mx-auto lg:w-2/3 space-y-6 my-12">
        <input required type="hidden" name="redirect" value="success page here !!!!!!" />
        <input type="hidden" name="subject" value="New message from your website" />
        <input type="hidden" name="apikey" value="API key here!" />

        <input id="checkbox" type="checkbox" name="botcheck" style={{ display: "none" }} />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div className="flex flex-col">
          <label className="mb-1 font-bold uppercase" htmlFor="name">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="mt-1 w-full border-2 border-x-0 border-t-0  border-gray-200 px-4 py-2 focus:border-[color:var(--secondary-clr)]"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold uppercase" htmlFor="email">
            Email Address
          </label>
          <input
            required
            type="text"
            name="email"
            id="email"
            className="mt-1 w-full border-2 border-x-0 border-t-0  border-gray-200 px-4 py-2 focus:border-[color:var(--secondary-clr)]"
            placeholder="john@doe.com"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-bold uppercase" htmlFor="message">
            Message
          </label>
          <textarea
            rows={8}
            name="message"
            id="message"
            className="mt-1 w-full border-2 border-x-0 border-t-0  border-gray-200 px-4 py-2 focus:border-[color:var(--secondary-clr)]"
            placeholder="What can we help you with ?"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="border border-[color:var(--primary-clr)]  bg-[color:var(--primary-clr)] px-12 py-3 font-bold uppercase text-white hover:border hover:bg-transparent hover:text-[color:var(--primary-clr)] ">
            Send
          </button>
        </div>
      </form>
      <br />
      <br />
    </section>
  );
};

export default Contact;
