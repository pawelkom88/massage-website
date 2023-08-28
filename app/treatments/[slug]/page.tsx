import { fetchArticle } from "@/contentful/getArticles";
import MassageTreatment from "@/components/massage-treatment/Treatment";
import { Metadata } from "next";

function convertString(string: string) {
  const result = string.replace(/-/g, " ");

  return result.charAt(0).toUpperCase() + result.slice(1);
}

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const title = `${convertString(params.slug)}`;

  return {
    title: `${title}`,
    description: ` "Experience the benefits of ${title} in Newport. Discover relief from pain and stress`,
  };
};

export default async function Treatment({ params }: { params: { slug: string } }) {

  const article: any = await fetchArticle({
    preview: false,
    slug: params.slug,
    content_type: "massageTreatment",
  });

  return <MassageTreatment article={article} />;
}
