import CinematicHero from "@/components/CinematicHero";
import CinematicScene02 from "@/components/CinematicScene02";
import CinematicScene03 from "@/components/CinematicScene03";
import About from "@/components/About";
import Countries from "@/components/Countries";
import Emotional from "@/components/Emotional";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CinematicHero />
      <CinematicScene02 />
      <CinematicScene03 />
      <TrustBar />
      <About />
      <Services />
      <Countries />
      <Process />
      <Emotional />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}