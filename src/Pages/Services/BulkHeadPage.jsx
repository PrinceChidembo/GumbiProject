import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import BulkheadFitting from "../../components/servicesComponents/BulkHead";

function BulkHeadPage() {
  return (
    <div className="Home">
      <NavbarComponent />
      <BulkheadFitting />
      <Footer />
    </div>
  );
}

export default BulkHeadPage;
