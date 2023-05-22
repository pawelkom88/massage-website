import Banner from "@/components/banner/Banner";
import Hero from "@/components/hero/Hero";
import Navigation from "@/components/navigation/Navigation";
import Popup from "@/components/popup/Popup";
import Intro from "@/components/intro/Intro";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
  return (
    <>
      <Banner />
      <Navigation />
      <Hero />
      <Popup />
      <main>
        <Intro />
        {/* <Pricing /> */}
      </main>
    </>
  );
}
