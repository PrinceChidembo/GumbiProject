import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import DoorFitting from "../../components/servicesComponents/DoorFitting";

function DoorHangingPage() {
  return (
    <div className="Home">
      <NavbarComponent />
      <DoorFitting />
      <Footer />
    </div>
  );
}

export default DoorHangingPage;
