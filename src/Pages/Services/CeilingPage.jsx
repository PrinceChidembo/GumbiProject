import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import CeilingFitting from "../../components/servicesComponents/Ceiling";

function CeilingPage() {
  return (
    <div className="Home">
      <NavbarComponent />
      <CeilingFitting />
      <Footer />
    </div>
  );
}

export default CeilingPage;
