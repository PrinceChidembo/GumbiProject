import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="Home">
      <NavbarComponent />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;
