import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import Bootstrap icon for checkmarks
import bulkheadImage from "../../assets/images/servicegrid/bulkhead.jpg"; // Replace with the image path for bulkhead fitting

const BulkheadFitting = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8c6e46", color: "#ffffff" }}
    >
      {/* Hero Section with Background Image */}
      <div
        className="bulkhead-hero text-center mb-4"
        style={{
          backgroundImage: `url(${bulkheadImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "15px",
          marginRight: "15px",
          padding: "3rem 0",
          borderRadius: "10px",
        }}
      >
        <h1 className="bulkhead-hero-heading display-4">
          Bulkhead Fitting Services at Gumbi
        </h1>
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, our bulkhead fitting
                services are tailored to create visually appealing and
                functional ceiling features. We focus on seamless installations
                that enhance the look and feel of your space.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Bulkhead Fitting</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Design & Planning
                </h5>
                <p>
                  We collaborate with you to understand your design preferences
                  and space requirements, ensuring a customized bulkhead
                  installation plan.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Material Selection & Preparation
                </h5>
                <p>
                  We guide you in selecting high-quality materials that align
                  with the aesthetic and structural needs of your project.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Expert Installation
                </h5>
                <p>
                  Our skilled team performs precise installations, ensuring that
                  bulkheads are securely fitted and seamlessly integrated into
                  the existing ceiling structure.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Quality Assurance & Adjustments
                </h5>
                <p>
                  Post-installation, we carry out detailed quality checks and
                  make any adjustments needed for a flawless finish.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Maintenance & Support
                </h5>
                <p>
                  Gumbi Projects provides ongoing support and maintenance tips
                  to preserve the appearance and stability of your bulkhead.
                </p>
              </div>

              <p className="lead">
                Choose <strong>Gumbi Projects</strong> for professional bulkhead
                fitting services that enhance the elegance and practicality of
                your interiors.
              </p>

              {/* Call-to-action Button */}
              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button variant="light" size="lg" className="text-dark">
                    Contact Us for Your Bulkhead Fitting Needs
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

export default BulkheadFitting;
