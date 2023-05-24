import Star from "../icons/Star";

export default function Card({ name, content }: { name: string; content: string }) {
  return (
    <blockquote className="z-10 relative rounded-lg light-primary-clr p-8 shadow-lg">
      <div className="testimonials flex items-center gap-4">
        <div>
          <div className="flex justify-start gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <Star key={idx} />
            ))}
          </div>
          <p className="mt-1 text-lg font-medium">{name}</p>
        </div>
      </div>
      <p className="line-clamp-2 sm:line-clamp-none mt-4">{content}</p>
    </blockquote>
  );
}
