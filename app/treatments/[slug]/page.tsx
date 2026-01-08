import { fetchArticle, fetchContent, parseContentfulTreatmentNotes } from "@/contentful/fetchContent";
import MassageTreatment from "@/components/massage-treatment/Treatment";
import { draftMode } from "next/headers";

function convertString(string: string) {
  const result = string.replace(/-/g, " ");

  return result.charAt(0).toUpperCase() + result.slice(1);
}

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const title = `${convertString(slug)}`;

  return {
    title: `${title}`,
    description: ` "Experience the benefits of ${title} in Newport. Discover relief from pain and stress`,
    alternates: {
      canonical: `${slug}`,
    },
  };
};

export default async function Treatment({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const draft = await draftMode();
  const preview = draft.isEnabled;

  const [article, treatmentNotes] = await Promise.all([
    fetchArticle({
      preview,
      slug: slug,
      content_type: "massageTreatment",
    }),
    fetchContent({ preview }, "treatmentNotes", parseContentfulTreatmentNotes),
  ]);

  return <MassageTreatment article={article as any} treatmentNotes={treatmentNotes[0]} />;
}
