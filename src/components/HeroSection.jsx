import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";

const HeroSection = () => {
  // Array of images and dynamic content for each slide
  const carouselItems = [
    {
      image: require("../assets/images/gumbi1.jpg"),
      title: "Precision Craftsmanship",
      subtitle: "EXPERIENCED ARTISANS",
      description:
        "Delivering quality craftsmanship with an eye for detail in every project.",
    },
    {
      image: require("../assets/images/gumbi2.jpg"),
      title: "Sustainable Solutions",
      subtitle: "ECO-FRIENDLY APPROACH",
      description:
        "Building with materials and practices that respect the environment.",
    },
    {
      image: require("../assets/images/gumbi3.jpg"),
      title: "Customized Construction",
      subtitle: "TAILORED TO YOUR NEEDS",
      description:
        "Personalized construction solutions to bring your vision to life.",
    },
    {
      image: require("../assets/images/gumbi4.jpg"),
      title: "Residential Excellence",
      subtitle: "CREATING HOMES",
      description:
        "Transforming residential spaces with modern, functional designs.",
    },
    {
      image: require("../assets/images/gumbi5.jpg"),
      title: "Commercial Projects",
      subtitle: "RELIABILITY & PROFESSIONALISM",
      description:
        "Building strong foundations for businesses and commercial spaces.",
    },
    {
      image: require("../assets/images/gumbi6.jpg"),
      title: "Interior Renovations",
      subtitle: "REVITALIZE YOUR SPACE",
      description: "Expert renovations that combine style with practicality.",
    },
    {
      image: require("../assets/images/gumbi7.jpg"),
      title: "Exterior Renovations",
      subtitle: "ENHANCE YOUR PROPERTY",
      description: "Boost curb appeal with high-quality exterior renovations.",
    },
    {
      image: require("../assets/images/gumbi8.jpg"),
      title: "Safety & Durability",
      subtitle: "BUILT TO LAST",
      description:
        "Structures designed for safety, durability, and peace of mind.",
    },
    {
      image: require("../assets/images/gumbi9.jpg"),
      title: "Modern Aesthetics",
      subtitle: "STYLE MEETS FUNCTION",
      description: "Blending contemporary designs with functional layouts.",
    },
    {
      image: require("../assets/images/gumbi10.jpg"),
      title: "Affordable Quality",
      subtitle: "VALUE-DRIVEN SERVICES",
      description: "Providing quality services that are budget-friendly.",
    },
    {
      image: require("../assets/images/gumbi11.jpg"),
      title: "Trusted by Clients",
      subtitle: "REPUTATION FOR EXCELLENCE",
      description: "Building trust through transparency and excellence.",
    },
    {
      image: require("../assets/images/gumbi12.jpg"),
      title: "Innovative Techniques",
      subtitle: "ADVANCING THE FUTURE",
      description: "Incorporating the latest technologies for optimal results.",
    },
  ];

  return (
    <Carousel
      fade
      controls={false} // Remove navigation arrows
      indicators
      interval={5000} // Slide every 5 seconds
      pause="hover"
    >
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <div
            className="position-relative"
            style={{ height: "100vh", minHeight: "600px" }}
          >
            {/* Dark overlay for readability */}
            <div
              className="position-absolute w-100 h-100"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            {/* Background image */}
            <div
              className="w-100 h-100"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
              }}
            />

            {/* Carousel Content */}
            <Container
              className="position-relative h-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
              style={{ zIndex: 2 }}
            >
              <h5
                className="text-uppercase mb-2"
                style={{ letterSpacing: "2px" }}
              >
                {item.subtitle}
              </h5>
              <h1
                className="display-4 fw-bold mb-3"
                style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
              >
                {item.title}
              </h1>
              <p className="lead mb-4" style={{ maxWidth: "600px" }}>
                {item.description}
              </p>
              <div className="d-flex gap-3">
                <Button
                  variant="primary"
                  className="px-4 py-2"
                  style={{
                    backgroundColor: "#8c6e46",
                    border: "none",
                  }}
                >
                  Read More
                </Button>
                <Button variant="outline-light" className="px-4 py-2">
                  Free Quote
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;
