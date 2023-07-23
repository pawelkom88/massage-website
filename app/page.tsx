import Hero from "@/components/hero/Hero";
import Popup from "@/components/popup/Popup";
import Testimonials from "@/components/testimonials/Testimonials";
import Promotion from "@/components/promotion/Promotion";
import MobileNavigation from "@/components/navigation/MobileNavigation";

export default function Home() {
  return (
    <>
      <Hero />
      <Popup />
      <main>
        <MobileNavigation />
        <Promotion />
        <Testimonials />
      </main>
    </>
  );
}
