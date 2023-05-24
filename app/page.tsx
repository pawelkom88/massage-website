import Banner from "@/components/banner/Banner";
import Hero from "@/components/hero/Hero";
import Navigation from "@/components/navigation/Navigation";
import Popup from "@/components/popup/Popup";
import Intro from "@/components/intro/Intro";
import Pricing from "@/components/pricing/Pricing";
import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/testimonials/Testimonials";

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
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
