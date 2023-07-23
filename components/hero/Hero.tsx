import CallToAction from "@/components/cta/CallToAction";
import GoogleIcon from "@/components/icons/GoogleIcon";
import Star from "@/components/icons/Star";
import Image from "next/image";
import Button from "../button/Button";
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
            {/* <span className="text-secondary-clr underline-effect">massage therapy</span> in Newport */}
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
            {/* <Button
              href="/treatments/sport-remedial-and-injury-rehabilitation-massage"
              isButton={false}
              type="secondary">
              Find out more about my offer
            </Button> */}
          </div>
          <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5 px-4">
            <div className="py-5">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((_, idx) => (
                  <Star key={idx} />
                ))}
              </div>
              <p className="mt-3 text-sm">
                <span className="font-bold">4.9</span> / 5 - Don&apos;t just take my word for it.
                See what our customers say
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
        </div>
      </div>
    </section>
  );
}
