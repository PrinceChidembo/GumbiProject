import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import Painting from "../../components/servicesComponents/Painting";

function PaintingPage() {
  return (
    <div className="Home">
      <NavbarComponent />
      <Painting />
      <Footer />
    </div>
  );
}

export default PaintingPage;
