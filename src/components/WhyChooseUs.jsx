import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images (make sure to replace with your actual image paths)
import qualityImage from "../assets/images/whychooseus/quality.jpg"; // Example image path for quality
import reliabilityImage from "../assets/images/whychooseus/reliability.jpg"; // Example image path for reliability
import expertiseImage from "../assets/images/whychooseus/expertise.jpg"; // Example image path for expertise
import customerServiceImage from "../assets/images/whychooseus/customer-service.jpg"; // Example image path for customer service

function WhyChooseUs() {
  const reasons = [
    {
      title: "Quality Workmanship",
      image: qualityImage,
      description:
        "We pride ourselves on delivering high-quality workmanship in every project.",
    },
    {
      title: "Reliable Services",
      image: reliabilityImage,
      description:
        "Count on us for timely and reliable services that meet your expectations.",
    },
    {
      title: "Expert Team",
      image: expertiseImage,
      description:
        "Our team consists of highly skilled professionals with years of experience.",
    },
    {
      title: "Excellent Customer Service",
      image: customerServiceImage,
      description:
        "We value our customers and strive to provide exceptional customer support.",
    },
  ];

  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 className="text-center mb-4">Why Choose Us</h2>
      <div className="row">
        {reasons.map((reason, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow">
              <img
                src={reason.image}
                className="card-img-top"
                alt={reason.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{reason.title}</h5>
                <p className="card-text">{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
