import massageRoomImg from "@/public/images/massage-room.jpg";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="my-24 lg:mt-48 lg:mb-12 max-w-readable mx-auto px-4 lg:px-0 lg:text-lg">
      <span className="text-primary-clr block font-semibold text-center">Recovery</span>
      <h2 className="text-heading2 text-center my-4 lg:my-8">Home Massage Studio in Newport City Center</h2>
      <br />

      <Image
        src={massageRoomImg}
        width={massageRoomImg.width}
        height={massageRoomImg.height}
        alt="Massage Room"
        className="rounded-lg shadow-lg aspect-video"
      />

      <br />
      <p className="indent-2 text-justify">
        If like me you recently become a gardener/human-digger, DIY-er or painter and if you are
        trying to keep a bored and shouty toddler quiet so you or someone in your home can work or
        you are just simply tired and stressed with a whole new set of rules to follow wherever you
        go I invite you for a massage to take some of that stress away from your shoulders.
      </p>
      <br />
      <p className="indent-2 text-justify">
        If you are nervous about booking an appointment read this update to help me reassure you, I
        will do everything I possibly can to keep you safe and relaxed at my treatment. The
        advantage of my industry, over many others, is that because I do work in close proximity to
        my clients I have covered training in health & safety requirements and infection control.{" "}
        <span className="underline">
          Good hygiene practices always have been and always will be a natural part of all
          treatments I offer
        </span>
      </p>
      <br />
      <p className="indent-2 text-justify">
        Recently I have updated my risk assessment, completed extra training and added extra
        precautions to ensure I am following the Welsh Government’s guidance for my industry. I am
        self-employed and my business is small, so it is easier to keep clean and maintain social
        distancing. I am the one conducting risk assessments and the one responsible for cleaning
        and disinfection, and the only one using the room so it is easier to make sure everything is
        clean and safe for you.
      </p>
      <br />
      <p className="indent-2 text-justify">
        Naturally few things will have to change. I won&apos;t be able to accommodate as many
        clients as before because I need longer gaps to ensure all necessary cleaning and
        disinfection is complete before each appointment. At the moment I can only offer 5pm and 7
        pm and occasionally 1pm appointments Monday to Friday and 10am and 12.00noon on Saturdays.
      </p>
    </section>
  );
}
