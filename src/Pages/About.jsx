import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import VissionMission from "../components/VissionMission";

function About() {
  return (
    <div className="Home">
      <NavbarComponent />
      <VissionMission />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default About;
