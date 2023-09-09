import Hero from "@/components/hero/Hero";
import Popup from "@/components/popup/Popup";
import Testimonials from "@/components/testimonials/Testimonials";
import Promotion from "@/components/promotion/Promotion";

export default function Home() {
  return (
    <>
      {/* @ts-ignore */}
      <Hero />
      <Popup />
      <main>
        <Promotion />
        <Testimonials />
      </main>
    </>
  );
}
