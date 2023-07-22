export default function Treatment({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug || "none"}</div>;
}
