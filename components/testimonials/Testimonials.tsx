import Card from "./Card";
import { testimonialData } from "./data";

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[85rem] px-4 py-16 sm:py-24">
        <h2 className="text-center text-heading2 font-bold tracking-tight">
          Read trusted reviews from my customers
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {testimonialData.map(review => {
            return <Card key={review.id} name={review.name} content={review.content} />;
          })}
        </div>
        <br />
        <a
          target="_blank"
          rel="noreferrer"
          className="block text-right underline"
          href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_LINK}>
          more reviews
        </a>
      </div>
    </section>
  );
}
