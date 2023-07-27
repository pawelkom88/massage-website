import CallToAction from "@/components/cta/CallToAction";
import Star from "@/components/icons/Star";
import Image from "next/image";
import massageRoomImg from "@/public/images/massage-room.jpg";

export default function Hero() {
  return (
    <section className="lg:mt-24 max-w-[85rem] mx-auto lg:px-8 2xl:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Image
          width={massageRoomImg.width}
          height={massageRoomImg.height}
          blurDataURL={massageRoomImg.blurDataURL}
          placeholder="blur"
          className="w-full lg:h-5/6 object-cover lg:order-2 lg:rounded-lg lg:shadow-xl place-self-center"
          src={massageRoomImg}
          alt="Massage bed in a room full of candles and relaxing atmosphere"
        />
        <div>
          <h1 className="text-heading leading-[1.20] lg:leading-[1.40] uppercase px-4 mt-6 mb-4">
            Professional massage therapy in Newport
          </h1>
          <p className="mt-3 lg:text-lg px-4">
            Whether you need a <span className="font-bold">sports massage</span> to enhance your
            performance, remedial treatment when you are stuck at a desk all day or{" "}
            <span className="font-bold">relaxation massage</span> to soothe your stress, look no
            further. I offer high-quality and customised massages that will restore balance and
            health to your muscles. Relax and let me take care of you.
          </p>
          <br />
          <p className="mt-3 lg:text-lg px-4">
            Thank you very much for visiting my website, hope you find all the information you need,
            if not don&apos;t hesitate to give me a call on my mobile{" "}
            <a className="hidden lg:block font-bold" href="tel:07525431743">
              07525431743
            </a>
          </p>
          <br />
          <div className="grid gap-3 w-full sm:inline-flex px-4">
            <CallToAction>Call to book</CallToAction>
          </div>
        </div>
      </div>
    </section>
  );
}
