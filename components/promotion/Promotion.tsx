import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CallToAction from "../cta/CallToAction";
import { options } from "@/contentful/helpers";
import { fetchContent, parseContentfulPromotion } from "@/contentful/fetchContent";
import { draftMode } from "next/headers";

interface Promotion {
  heading: string;
  content: any;
}

const Promotion = async () => {
  const promotiom: Promotion[] = await fetchContent(
    { preview: draftMode().isEnabled },
    "intro",
    parseContentfulPromotion
  );

  const { heading, content } = promotiom[0];

  return (
    <section className="my-24 max-w-readable mx-auto px-4 lg:px-0 text-lg">
      <h2 className="text-heading2 leading-[3rem] text-center">{heading}</h2>
      <br />
      {documentToReactComponents(content, options)}
      <br />
      <div className="flex items-center justify-center gap-8 flex-wrap mt-4">
        <a
          href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_LINK}
          target="_blank"
          rel="noreferrer"
          className="text-center bg-teriary-clr text-white font-semibold py-3 px-4 rounded-md hover:bg-primary-clr lg:border-0 border-2 border-teriary-clr hover:border-primary-clr transition-all">
          Leave your review
        </a>
        <CallToAction>Call to book</CallToAction>
      </div>
    </section>
  );
};

export default Promotion;
