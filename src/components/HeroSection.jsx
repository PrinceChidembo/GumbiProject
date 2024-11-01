import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation

const HeroSection = () => {
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
    // Additional carousel items...
  ];

  return (
    <Carousel fade controls={false} indicators interval={5000} pause="hover">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <div
            className="position-relative"
            style={{ height: "100vh", minHeight: "600px" }}
          >
            <div
              className="position-absolute w-100 h-100"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            <div
              className="w-100 h-100"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
              }}
            />

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
                  as={Link} // Use Link component for navigation
                  to="/services"
                  variant="primary"
                  className="px-4 py-2"
                  style={{
                    backgroundColor: "#8c6e46",
                    border: "none",
                  }}
                >
                  Read More
                </Button>
                <Button
                  as={Link} // Use Link component for navigation
                  to="/contact"
                  variant="outline-light"
                  className="px-4 py-2"
                >
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
