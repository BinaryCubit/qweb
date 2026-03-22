import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import GrowthPathway from "@/components/GrowthPathway";
import Programs from "@/components/Programs";
import Outcomes from "@/components/Outcomes";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <GrowthPathway />
        <Programs />
        <Outcomes />
        <Guarantee />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
