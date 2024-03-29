import Card from "./Card";
import { testimonialData } from "./data";

export default function Testimonials() {
  return (
    <section className="bg-white mb-8">
      <div className="mx-auto max-w-[85rem] px-4 py-8">
        <h2 className="text-center text-heading2 tracking-tight">
          Read trusted reviews from my customers
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {testimonialData.map(review => {
            return <Card key={review.id} name={review.name} content={review.content} />;
          })}
        </div>
        <br />
        <a
          target="_blank"
          rel="noreferrer"
          className="block text-right underline"
          href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS}>
          more reviews
        </a>
      </div>
    </section>
  );
}
