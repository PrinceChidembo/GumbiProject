import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import Plumbing from "../../components/servicesComponents/Plumbing";

function PlumbingPage() {
  return (
    <div className="Home">
      <NavbarComponent />
      <Plumbing />
      <Footer />
    </div>
  );
}

export default PlumbingPage;
