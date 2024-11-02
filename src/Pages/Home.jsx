import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import VisionMission from "../components/VissionMission";
import ServicesGrid from "../components/ServicesGrid";
import GetSocialNav from "../components/GetSocialNav";

function Home() {
  return (
    <div className="Home">
      <GetSocialNav />
      <NavbarComponent />
      <HeroSection />
      <VisionMission />
      <ServicesGrid />
      <Footer />
    </div>
  );
}

export default Home;
