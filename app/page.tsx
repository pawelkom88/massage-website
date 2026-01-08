import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";
import Promotion from "@/components/promotion/Promotion";

export default function Home() {
  return (
    <>
      {/* @ts-ignore */}
      <Hero />
      <main>
        {/* @ts-ignore */}
        <Promotion />
        <Testimonials />
      </main>
    </>
  );
}
