import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import Partitioning from "../../components/servicesComponents/Partitioning";

function PartitioningPage() {
  return (
    <div className="Home">
      <NavbarComponent />
      <Partitioning />
      <Footer />
    </div>
  );
}

export default PartitioningPage;
