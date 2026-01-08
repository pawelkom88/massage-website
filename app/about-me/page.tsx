import React from "react";
import { aboutMe } from "./data";
import Image from "next/image";
import massage1 from "@/public/images/Edyta-performing-massage.webp";
import Qualifications from "@/components/qualifications/Qualifications";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { fetchContent, parseContentfulAboutPage } from "@/contentful/fetchContent";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/contentful/helpers";

export const metadata: Metadata = {
  title: "About Edyta - Experienced Massage Therapist in Newport",
  description:
    "Meet Edyta, an experienced and fully qualified massage therapist in Newport.Edyta specializes in Sports Massage and Injury Rehabilitation.",
  alternates: {
    canonical: "about-me",
  },
};

interface AboutPageContent {
  heading: string;
  content: any;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null;
  qualificationsHeading: string;
  qualifications: string[];
}

export default async function AboutMe() {
  const draft = await draftMode();
  const preview = draft.isEnabled;
  console.log("[AboutMe] Draft mode enabled:", preview);

  const aboutContent = await fetchContent(
    { preview },
    "aboutPage",
    parseContentfulAboutPage
  );

  console.log("[AboutMe] Fetched content:", JSON.stringify(aboutContent, null, 2));

  const content = aboutContent[0] as AboutPageContent | undefined;
  console.log("[AboutMe] Using content:", content ? "Contentful" : "Fallback hardcoded");

  return (
    <section className="max-w-[85rem] px-4 mx-auto overflow-hidden pt-8 lg:pt-20 pb-12 mb-12">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center justify-around">
          <div className="w-full px-3 xl:w-1/2 order-2 lg:order-1">
            <div className="py-3 sm:py-4">
              {content?.image ? (
                <Image
                  src={content.image.src}
                  width={content.image.width}
                  height={content.image.height}
                  alt={content.image.alt || "About me image"}
                  className="w-full rounded-2xl"
                />
              ) : (
                <Image src={massage1} alt="Edyta performing massage" className="w-full rounded-2xl" />
              )}
            </div>
          </div>

          <div className="w-full px-4 xl:w-5/12">
            <div className="mt-4 lg:mt-0">
              <h1 className="text-secondary-clr mb-2 block text-lg font-semibold text-center lg:text-left">
                {content?.heading || "About me"}
              </h1>
              {content?.content ? (
                <div className="about-content">
                  {documentToReactComponents(content.content, options)}
                </div>
              ) : (
                aboutMe.map(({ id, content }) => {
                  return (
                    <p key={id} className="indent-2 text-justify text-lg mb-4">
                      {content}
                    </p>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <Qualifications
        heading={content?.qualificationsHeading}
        qualifications={content?.qualifications}
      />
    </section>
  );
}
