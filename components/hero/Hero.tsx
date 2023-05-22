import CallToAction from "@/components/cta/CallToAction";
import GoogleIcon from "@/components/icons/GoogleIcon";
import Star from "@/components/icons/Star";
import Image from "next/image";
import heroImg from "@/public/images/massage-table-room.webp";
import Button from "../button/Button";

export default function Hero() {
  return (
    <section className="lg:mt-24 mt-8 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="text-heading leading-[1.20] lg:leading-[1.40] uppercase">
            Professional{" "}
            <span className="text-secondary-clr underline-effect">massage therapy</span> in Newport
          </h1>
          <p className="mt-3 lg:text-lg">
            Whether you need a sports massage to enhance your performance or a relaxation massage to
            soothe your stress, look no further. I offer high-quality and customized massages that
            will restore balance and healing to your body. Relax and let me take care of you.
          </p>
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <CallToAction >
            Book a massage now
            </CallToAction>
            <Button href="#" isButton={false} type="secondary">
              Find out more about my offer
            </Button>
          </div>
          <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
            <div className="py-5">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((_, idx) => (
                  <Star key={idx} />
                ))}
              </div>

              <p className="mt-3 text-sm text-gray-800 dark:text-gray-200">
                <span className="font-bold">4.9</span> / 5 - Don&apos;t just take our word for it.
                See what our customers say
              </p>

              <div className="mt-4">
                <a
                  className="cursor-pointer"
                  href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_LINK}
                  target="_blank"
                  rel="noreferrer ">
                  <span className="sr-only">Google reviews</span>
                  <GoogleIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full">
          <Image
            width={heroImg.width}
            height={heroImg.height}
            className="w-full h-full rounded-lg object-cover shadow-xl hidden md:block"
            src={heroImg}
            alt="Massage bed in a rool full of candles and relaxing atmosphere"
          />
        </div>
      </div>
    </section>
  );
}
