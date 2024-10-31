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

function OurServices() {
  const services = [
    {
      name: "Painting",
      image: paintingImage,
      description:
        "High-quality painting services for both interior and exterior.",
    },
    {
      name: "Plumbing",
      image: plumbingImage,
      description:
        "Expert plumbing solutions for residential and commercial needs.",
    },
    {
      name: "Waterproofing",
      image: waterproofingImage,
      description:
        "Reliable waterproofing to protect your property from water damage.",
    },
    {
      name: "Door Hanging",
      image: doorHangingImage,
      description:
        "Professional installation of doors for improved security and aesthetics.",
    },
    {
      name: "Partitioning",
      image: partitioningImage,
      description:
        "Custom partitioning solutions for effective space utilization.",
    },
    {
      name: "Ceilings",
      image: ceilingsImage,
      description: "Beautiful ceiling designs to enhance your interiors.",
    },
    {
      name: "Bulkheads",
      image: bulkheadsImage,
      description: "Sturdy bulkheads for added structural integrity.",
    },
    {
      name: "Fix Suspended Ceilings",
      image: fixSuspendedCeilingsImage,
      description: "Expert repair services for suspended ceilings.",
    },
  ];

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#8c6e46" }}>
      <h2 className="text-center py-4 text-white">Our Services</h2>
      <div className="row no-gutters">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 p-0">
            <div className="position-relative" style={{ height: "350px" }}>
              <img
                src={service.image}
                className="w-100"
                alt={service.name}
                style={{ height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                className="position-absolute bottom-0 w-100 text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h5 className="text-white m-0 py-2">{service.name}</h5>
                <p className="text-white m-0 px-2">{service.description}</p>
                <button className="btn btn-outline-light btn-sm mt-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
