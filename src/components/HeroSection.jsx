import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";

const HeroSection = () => {
  // Sample carousel items - replace image paths with your actual images
  const carouselItems = [
    {
      image: "/carpentry1.jpg", // Replace with your image path
      title: "Best Carpenter & Craftsman",
      subtitle: "WELCOME TO WOODY",
      description:
        "Expert carpentry services with attention to detail and quality craftsmanship.",
    },
    {
      image: "/carpentry2.jpg", // Replace with your image path
      title: "Custom Woodworking Solutions",
      subtitle: "PROFESSIONAL SERVICES",
      description:
        "Specialized in custom furniture and architectural woodwork.",
    },
    {
      image: "/carpentry3.jpg", // Replace with your image path
      title: "Home Renovation Experts",
      subtitle: "QUALITY GUARANTEED",
      description:
        "Transform your space with our professional renovation services.",
    },
    {
      image: "/carpentry4.jpg", // Replace with your image path
      title: "Commercial & Residential",
      subtitle: "TRUSTED CRAFTSMEN",
      description:
        "Serving both commercial and residential clients with excellence.",
    },
  ];

  return (
    <Carousel
      fade
      controls={true}
      indicators={true}
      interval={5000}
      pause="hover"
    >
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <div
            className="position-relative"
            style={{ height: "100vh", minHeight: "600px" }}
          >
            {/* Dark overlay */}
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

            {/* Content */}
            <Container
              className="position-relative h-100"
              style={{ zIndex: 2 }}
            >
              <div
                className="position-absolute text-white text-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  maxWidth: "800px",
                }}
              >
                <h5
                  className="text-uppercase mb-3"
                  style={{ letterSpacing: "2px" }}
                >
                  {item.subtitle}
                </h5>
                <h1
                  className="display-4 fw-bold mb-4"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                >
                  {item.title}
                </h1>
                <p className="lead mb-4">{item.description}</p>
                <div className="d-flex justify-content-center gap-3">
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
              </div>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;
