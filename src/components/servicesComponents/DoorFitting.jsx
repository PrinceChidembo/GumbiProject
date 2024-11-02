import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import Bootstrap icon for checkmarks
import doorFittingImage from "../../assets/images/door-fitting.jpg"; // Import the image

const DoorFitting = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8C6E46", color: "#ffffff" }}
    >
      {/* Hero Section with Background Image */}
      <div
        className="door-fitting-hero text-center mb-4"
        style={{
          backgroundImage: `url(${doorFittingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "15px",
          marginRight: "15px",
          padding: "3rem 0",
          borderRadius: "10px",
        }}
      >
        <h1 className="door-fitting-hero-heading display-4">
          Door Fitting Services at Gumbi
        </h1>
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, our door fitting services
                focus on precision, quality, and functionality. We ensure that
                each door is installed securely, operates smoothly, and enhances
                the aesthetics of your space.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Door Fitting</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Assessment & Measurement
                </h5>
                <p>
                  We start with precise measurements and an assessment of your
                  space to determine the right fit and alignment for your door.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Material Selection & Preparation
                </h5>
                <p>
                  We help select high-quality materials and prepare the door
                  frame to ensure it meets both functionality and aesthetic
                  standards.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Installation & Finishing
                </h5>
                <p>
                  Our skilled team carefully installs the door, ensuring it
                  aligns perfectly, opens and closes smoothly, and includes
                  secure fittings for long-term use.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Quality Checks & Adjustments
                </h5>
                <p>
                  After installation, we conduct quality checks and any
                  necessary adjustments to guarantee optimal performance.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Customer Support & Maintenance
                </h5>
                <p>
                  Gumbi Projects offers ongoing support and guidance to keep
                  your doors functioning at their best.
                </p>
              </div>

              <p className="lead">
                Trust <strong>Gumbi Projects</strong> to provide expert door
                fitting services that enhance the comfort and elegance of your
                space.
              </p>

              {/* Call-to-action Button */}
              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button variant="light" size="lg" className="text-dark">
                    Contact Us for Your Door Fitting Needs
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

export default DoorFitting;
