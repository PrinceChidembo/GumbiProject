import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import Waterproofing from "../../components/servicesComponents/Waterproofing";

function WaterProofingPage() {
  return (
    <div className="Home">
      <NavbarComponent />
      <Waterproofing />
      <Footer />
    </div>
  );
}

export default WaterProofingPage;
