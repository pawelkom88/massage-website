import { fetchArticle } from "@/contentful/getArticles";
import MassageTreatment from "@/components/massage-treatment/Treatment";

export default async function Treatment({ params }: { params: { slug: string } }) {
  const article: any = await fetchArticle({
    preview: false,
    slug: params.slug,
    content_type: "massageTreatment",
  });

  return <MassageTreatment article={article} />;
}
