import Image from "next/image";
import covid1 from "../../public/images/COVID-19.webp";
import covid2 from "../../public/images/prevent-COVID.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Safety Matters - Newport Massage Therapy Appointments",
  description:
    "Your well-being is our priority. Discover how we prioritize safety through health & safety training, infection control, and hygiene practices. Book your massage therapy appointment with confidence.",
  alternates: {
    canonical: "covid-measures",
  },
};

const Covid = () => {
  return (
    <section className="px-4 max-w-readable mx-auto">
      <br />
      <h1 className="text-center text-heading2 mt-4 uppercase">COVID</h1>
      <br />
      <p className="mt-3 lg:text-lg">
        If you are nervous about booking an appointment, please read this update to help me reassure
        you. I will do everything I possibly can to keep you safe and relaxed at your treatment.
      </p>
      <br />
      <p className="mt-3 lg:text-lg">
        The advantage of my industry, over many others, is that because I do work in close proximity
        to my clients, I have covered training in health & safety requirements and infection control
        when I first qualified. Good hygiene practices always have been and always will be a natural
        part of all treatments I offer. When COVID appeared in our lives I updated my risk
        assessment, completed extra training and added extra precautions to ensure I am following
        the Welsh Government’s guidance for my industry.  I am self-employed and my business is
        small, so it is easier to manage cleaning and hygiene.  I am the one conducting risk
        assessments and the one responsible for cleaning and disinfection, and the only one using
        the room so it is easier to make sure everything is clean and safe for you. 
      </p>
      <br />
      <p className="mt-3 lg:text-lg">
        Although our lives have returned to a relative ‘normality’ again and COVID restrictions are
        lifted I am happy to wear a mask if it makes you feel more comfortable. Please ask when you
        book your treatment, or when you arrive.
      </p>
      <br />
      <p className="mt-3 lg:text-lg">
        I have attended two online courses about prevention of spreading COVID-19, one of which was
        a certified and accredited qualification by the Federation of Holistic Therapies (FHT). I am
        also in the process of completing a &apos;Mental Health and Wellbeing&apos; course to be
        able to support my clients more and help us face the situation; we all struggled with
        lockdown one way or another.
      </p>
      <br />
      <br />
      <div>
        <Image
          width={covid1.width}
          height={covid1.height}
          src={covid1.src}
          blurDataURL={covid1.blurDataURL}
          placeholder="blur"
          alt="certificates proudly displaying COVID-19 prevention training from reputable sources"
          className="border"
        />
        <br />
        <br />
        <br />
        <Image
          width={covid2.width}
          height={covid2.height}
          src={covid2.src}
          blurDataURL={covid2.blurDataURL}
          placeholder="blur"
          alt="Certificates of training and qualification in health & safety and infection control - COVID-19"
          className="border"
        />
      </div>
      <br />
    </section>
  );
};

export default Covid;
