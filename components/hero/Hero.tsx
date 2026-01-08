import CallToAction from "@/components/cta/CallToAction";
import { fetchContent, parseContentfulHeroContent } from "@/contentful/fetchContent";
import Image from "next/image";
import { draftMode } from "next/headers";
import { ContentfulImage } from "../massage-treatment/Treatment";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/contentful/helpers";

interface Hero {
  heading: string;
  content: any;
  image: ContentfulImage;
}

export default async function Hero() {
  const draft = await draftMode();
  const hero: Hero[] = await fetchContent(
    { preview: draft.isEnabled },
    "hero",
    parseContentfulHeroContent
  );
  
  const { heading, content, image } = hero[0] || {};

  return (
    <section className="lg:mt-24 max-w-[85rem] mx-auto lg:px-8 2xl:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Image
          width={image?.width}
          height={image?.height}
          className="w-full lg:h-5/6 object-cover lg:order-2 lg:rounded-lg lg:shadow-xl place-self-center"
          src={image?.src}
          alt={image?.alt}
        />
        <div>
          <h1 className="text-heading leading-[1.20] lg:leading-[1.40] uppercase px-4 lg:px-0 mt-4 lg:mt-8 mb-4">
            {heading}
          </h1>
          <div className="px-4">{documentToReactComponents(content, options)}</div>
          <br />
          <div className="grid gap-3 w-full sm:inline-flex px-4">
            <CallToAction>Call to book</CallToAction>
          </div>
        </div>
      </div>
    </section>
  );
}
