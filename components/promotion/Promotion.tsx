import CallToAction from "../cta/CallToAction";

const Promotion = () => {
  return (
    <section className="my-24 max-w-readable mx-auto px-4 lg:px-0 lg:text-lg">
      <h2 className="text-heading2 leading-[3rem] text-center">
        Three Years of Excellence: Newport&apos;s Top-Rated Massage Therapist
      </h2>
      <br />
      <p className="indent-2 text-justify">
        I&apos;m thrilled and honoured to celebrate three years as one of Newport&apos;s top-rated
        massage therapists, as recognized by{" "}
        <a
          className="font-bold"
          href="https://threebestrated.co.uk/massage-therapists-in-newport"
          target="_blank"
          rel="noreferrer">
          Thre Best Rated.
        </a>
        This award highlights my dedication to providing exceptional service. To view my business
        profile on ThreeBest Rated, click here: Thre Best Rated.
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
        If you haven&apos;t left a review yet, you can do so below and save £5 off your next 60 min
        treatment. It will inspire others to use my services and help me grow my business. Simply
        leave a review on my Google Business Account &apos;Healthy Muscles - Massage Therapy in
        Newport&apos; by clicking button below.
      </p>
      <br />
      <div className="flex items-center justify-center gap-8 flex-wrap mt-4">
        <a
          href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_LINK}
          target="_blank"
          rel="noreferrer"
          className="text-center bg-teriary-clr text-white font-semibold py-3 px-4 rounded-md hover:bg-primary-clr lg:border-0 border-2 border-teriary-clr hover:border-primary-clr transition-all">
          Leave your review
        </a>
        <CallToAction>Call to book</CallToAction>
      </div>
    </section>
  );
};

export default Promotion;
