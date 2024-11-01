import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import VissionMission from "../components/VissionMission";
import AboutSection from "../components/AboutUsSection";

function About() {
  return (
    <div className="Home">
      <NavbarComponent />
      <AboutSection />
      <VissionMission />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default About;
