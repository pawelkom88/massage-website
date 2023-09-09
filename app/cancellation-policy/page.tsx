import { options } from "@/contentful/helpers";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import { fetchContent, parseContentfulPolicy } from "@/contentful/fetchContent";

const Policy = async () => {
  const policy: any = await fetchContent(
    { preview: draftMode().isEnabled },
    "policy",
    parseContentfulPolicy
  );

  const { heading, content } = policy[0];

  return (
    <section className="px-4 max-w-readable mx-auto py-8 text-lg">
      <h1 className="text-heading2 text-center px-4 my-8 uppercase">{heading}</h1>
      <br />
      {documentToReactComponents(content, options)}
    </section>
  );
};

export default Policy;
