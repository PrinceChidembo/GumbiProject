import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import icons

const Painting = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8c6e46", color: "#ffffff" }}
    >
      {/* Hero Section with Background Image */}
      <div
        className="painting-hero text-center mb-4"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <h1 className="painting-hero-heading display-4">
          Painting Services at Gumbi
        </h1>
        <img
          src="../../assets/images/services/spainting1.jpg" // Replace with the path to your image
          alt="Painting Services"
          style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
        />
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, our painting services
                showcase a blend of aesthetic appeal and lasting quality. Our
                approach is tailored to meet your expectations, ensuring
                vibrant, precise, and durable results.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Painting</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Consultation & Color Selection
                </h5>
                <p>
                  We begin with a thorough consultation to understand your
                  vision, followed by expert color guidance to bring your ideas
                  to life.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Surface Preparation
                </h5>
                <p>
                  Our team ensures that surfaces are properly prepared to
                  guarantee smooth and flawless paint application.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Professional Application
                </h5>
                <p>
                  Using high-quality tools and techniques, we achieve an even,
                  clean finish with attention to detail.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Quality Assurance
                </h5>
                <p>
                  Post-application, we inspect our work to ensure it meets our
                  high standards, giving you a space that is both visually
                  appealing and long-lasting.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Cleanup & Care
                </h5>
                <p>
                  We value your property and maintain cleanliness throughout the
                  process. Our aftercare tips help maintain the longevity of our
                  work.
                </p>
              </div>

              <p className="lead">
                From accent walls to full property makeovers, our painting
                services at <strong>Gumbi Projects</strong> ensure that your
                property stands out with a fresh, vibrant look.
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

export default Painting;
