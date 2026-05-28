import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Identification from "./components/Identification";
import Authority from "./components/Authority";
import MentalHealth from "./components/MentalHealth";
import MindMetabolism from "./components/MindMetabolism";
import Weight from "./components/Weight";
import DoctorBio from "./components/DoctorBio";
import Process from "./components/Process";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="bg-cream text-sage font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Identification />
      <Authority />
      <MentalHealth />
      <MindMetabolism />
      <Weight />
      <DoctorBio />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
}
