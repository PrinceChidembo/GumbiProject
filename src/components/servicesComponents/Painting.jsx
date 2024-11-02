import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import Bootstrap icon for checkmarks
import paintingImage from "../../assets/images/servicegrid/painting.jpg"; // Replace with the image path for painting services

const PaintingServices = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8c6e46", color: "#ffffff" }}
    >
      {/* Hero Section with Background Image */}
      <div
        className="painting-hero text-center mb-4"
        style={{
          backgroundImage: `url(${paintingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "15px",
          marginRight: "15px",
          padding: "3rem 0",
          borderRadius: "10px",
        }}
      >
        <h1 className="painting-hero-heading display-4">
          Painting Services at Gumbi
        </h1>
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, our painting services blend
                quality craftsmanship with artistic finesse to transform your
                spaces. Our commitment to precision and durability ensures
                beautiful, lasting results.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Painting</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Consultation & Color Selection
                </h5>
                <p>
                  We start by understanding your vision and preferences, helping
                  you choose the perfect color palette to bring your space to
                  life.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Surface Preparation
                </h5>
                <p>
                  Our team ensures all surfaces are properly prepared through
                  cleaning, patching, and priming to achieve a flawless finish.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Professional Application
                </h5>
                <p>
                  We use high-quality paints and precise techniques to provide
                  smooth, even coats that stand the test of time.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Quality Assurance
                </h5>
                <p>
                  We perform thorough inspections and touch-ups to ensure every
                  detail meets our high standards of excellence.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Post-Painting Care & Maintenance
                </h5>
                <p>
                  We provide tips and guidance on how to maintain the look and
                  quality of your newly painted space for years to come.
                </p>
              </div>

              <p className="lead">
                Trust <strong>Gumbi Projects</strong> to deliver impeccable
                painting services that add beauty and value to your home or
                office.
              </p>

              {/* Call-to-action Button */}
              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button variant="light" size="lg" className="text-dark">
                    Contact Us for Your Painting Needs
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaintingServices;
