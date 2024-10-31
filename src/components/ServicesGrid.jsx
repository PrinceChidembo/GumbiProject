import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images
import paintingImage from "../assets/images/servicegrid/painting.jpg";
import plumbingImage from "../assets/images/servicegrid/plumbing.jpg";
import waterproofingImage from "../assets/images/servicegrid/waterproofing.jpg";
import doorHangingImage from "../assets/images/servicegrid/doorhanging.jpg";
import partitioningImage from "../assets/images/servicegrid/partitioning.jpg";
import ceilingsImage from "../assets/images/servicegrid/ceiling.jpeg";
import bulkheadsImage from "../assets/images/servicegrid/bulkhead.jpg";
import fixSuspendedCeilingsImage from "../assets/images/servicegrid/suspendedceiling.jpg";

function ServicesGrid() {
  const services = [
    { name: "Painting", image: paintingImage },
    { name: "Plumbing", image: plumbingImage },
    { name: "Waterproofing", image: waterproofingImage },
    { name: "Door Hanging", image: doorHangingImage },
    { name: "Partitioning", image: partitioningImage },
    { name: "Ceilings", image: ceilingsImage },
    { name: "Bulkheads", image: bulkheadsImage },
    { name: "Fix Suspended Ceilings", image: fixSuspendedCeilingsImage },
  ];

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#8c6e46" }}>
      <h2 className="text-center py-4 text-white">Our Services</h2>
      <div className="row no-gutters">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 p-0">
            <div
              className="position-relative"
              style={{
                height: "250px", // Set a fixed height for uniform card size
              }}
            >
              <img
                src={service.image}
                className="w-100"
                alt={service.name}
                style={{
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                className="position-absolute bottom-0 w-100 text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h5 className="text-white m-0 py-2">{service.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesGrid;
