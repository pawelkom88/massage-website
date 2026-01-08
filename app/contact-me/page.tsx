import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch - Contact Healthy Muscles Massage Therapy in Newport",
  description:
    "Ready to book your massage therapy session or have questions? Contact Healthy Muscles in Newport today. We're here to assist you and provide the relaxation and well-being you deserve. Reach out to us via phone or email.",
  alternates: {
    canonical: "contact-me",
  },
};

export default function Contact() {
  return (
    <section className="px-4 max-w-readable mx-auto">
      <br />
      <h1 className="text-center text-heading2 mt-4 uppercase">Contact</h1>
      <br />
      <ContactForm />
      <br />
      <br />
    </section>
  );
}
