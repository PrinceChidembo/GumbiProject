import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import Bootstrap icon for checkmarks
import ceilingFittingImage from "../../assets/images/servicegrid/ceiling.jpeg"; // Replace with the image path for ceiling fitting

const CeilingFitting = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8c6e46", color: "#ffffff" }}
    >
      {/* Hero Section with Background Image */}
      <div
        className="ceiling-fitting-hero text-center mb-4"
        style={{
          backgroundImage: `url(${ceilingFittingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "15px",
          marginRight: "15px",
          padding: "3rem 0",
          borderRadius: "10px",
        }}
      >
        <h1 className="ceiling-fitting-hero-heading display-4">
          Ceiling Fitting Services at Gumbi
        </h1>
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, our ceiling fitting services
                are designed to enhance the structure, aesthetics, and acoustics
                of your space. We ensure that each installation is both
                functional and visually appealing.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Ceiling Fitting</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Space Assessment & Design Planning
                </h5>
                <p>
                  We begin by evaluating your space and creating a detailed plan
                  that matches your architectural and design needs.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Material Selection & Preparation
                </h5>
                <p>
                  We guide you in choosing the best materials, including gypsum,
                  acoustic panels, and decorative finishes, to ensure durability
                  and style.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Professional Installation
                </h5>
                <p>
                  Our expert team installs ceilings with precision, taking care
                  to achieve perfect alignment and secure fittings for lasting
                  stability.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Finishing & Detailing
                </h5>
                <p>
                  We add final touches and detailed work to ensure your ceiling
                  not only functions well but also complements the overall
                  design of the space.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Quality Assurance & Maintenance
                </h5>
                <p>
                  After installation, we perform quality checks and provide tips
                  for maintenance to keep your ceiling looking its best for
                  years to come.
                </p>
              </div>

              <p className="lead">
                Trust <strong>Gumbi Projects</strong> for ceiling fitting
                services that bring both comfort and elegance to your home or
                office.
              </p>

              {/* Call-to-action Button */}
              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button variant="light" size="lg" className="text-dark">
                    Contact Us for Your Ceiling Fitting Needs
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

export default CeilingFitting;
