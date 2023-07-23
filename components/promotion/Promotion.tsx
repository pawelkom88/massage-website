import GoogleIcon from "../icons/GoogleIcon";
import Star from "../icons/Star";

const Promotion = () => {
  return (
    <section className="mt-12 mb-6 lg:mt-24 max-w-readable mx-auto px-4 lg:px-0 lg:text-lg">
      <span className="text-secondary-clr block font-semibold text-center">
        Prioritizing wellness empowers us to be more productive and achieve our goals.
      </span>
      <h2 className="text-heading2 leading-[3rem] text-center my-4 lg:my-8">
        Three Years of Excellence: Newport&apos;s Top-Rated Massage Therapist
      </h2>

      <p className="indent-2 text-justify">
        Thank you very much for visiting my website, hope you find all the information you need, if
        not don&apos;t hesitate to give me a call on my mobile{" "}
        <a className="font-bold" href="tel:07525431743">
          07525431743
        </a>
        .
      </p>

      <br />
      <p className="indent-2 text-justify">
        I&apos;m thrilled and honored to celebrate three years of excellence as one of
        Newport&apos;s top-rated massage therapists, as recognized by ThreeBest Rated. This
        prestigious award highlights my dedication to providing exceptional service and bringing
        relaxation, comfort, and relief to my valued clients. To view my business profile on
        ThreeBest Rated, click here:{" "}
        <a
          className="font-bold"
          href="https://threebestrated.co.uk/massage-therapists-in-newport"
          target="_blank"
          rel="noreferrer">
          Thre Best Rated.
        </a>
      </p>
      <br />
      <p className="indent-2 text-justify">
        I extend my heartfelt gratitude to all my clients who have been part of this incredible
        journey. Your support and positive reviews have motivated me to continuously strive for
        excellence. My passion for massage therapy drives me to ensure your well-being remains my
        top priority.
      </p>
      <br />
      <p className="indent-2 text-justify">
        Book your appointment today and experience the difference with my award-winning massage
        therapy in Newport, South Wales. I look forward to welcoming you and helping you find
        relaxation and rejuvenation.
      </p>
      <br />
      <p className="indent-2 text-justify">
        If you haven&apos;t left a review yet, you can do so below and save £5 off your next 60 min
        treatment. It will inspire others to use my services and help me grow my business. Simply
        leave a review on my Google Business Account &apos;Healthy Muscles - Massage Therapy in
        Newport&apos; by clicking on google icon below.
      </p>
      <br />
      <div className="grid grid-cols-2 gap-x-5 lg:px-0">
        <div className="py-5">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <Star key={idx} />
            ))}
          </div>
          <p className="mt-3 text-sm">
            <span className="font-bold">4.9</span> / 5 - Don&apos;t just take my word for it. See
            what our customers say
          </p>
          <div className="mt-4">
            <a
              className="cursor-pointer"
              href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noreferrer">
              <span className="sr-only">Google reviews</span>
              <GoogleIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
