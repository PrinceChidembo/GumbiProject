import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import VisionMission from "../components/VissionMission";

function Home() {
  return (
    <div className="Home">
      <NavbarComponent />
      <HeroSection />
      <VisionMission />

      <Footer />
    </div>
  );
}

export default Home;
