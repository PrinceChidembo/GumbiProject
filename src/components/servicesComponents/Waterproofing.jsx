import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import Bootstrap icon for checkmarks
import waterproofingImage from "../../assets/images/servicegrid/waterproofing.jpg"; // Replace with the image path for waterproofing

const Waterproofing = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8c6e46", color: "#ffffff" }}
    >
      {/* Hero Section with Background Image */}
      <div
        className="waterproofing-hero text-center mb-4"
        style={{
          backgroundImage: `url(${waterproofingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "15px",
          marginRight: "15px",
          padding: "3rem 0",
          borderRadius: "10px",
        }}
      >
        <h1 className="waterproofing-hero-heading display-4">
          Waterproofing Services at Gumbi
        </h1>
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, we offer comprehensive
                waterproofing services to protect your property from water
                damage, ensuring its longevity and safety. Our expertise helps
                prevent leaks and moisture problems that could compromise your
                structure.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Waterproofing</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Site Inspection & Assessment
                </h5>
                <p>
                  We start with a thorough inspection to identify areas
                  vulnerable to water penetration and evaluate the most
                  effective solutions.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Customized Waterproofing Solutions
                </h5>
                <p>
                  Based on the assessment, we offer tailored waterproofing
                  solutions, from liquid membranes to sealants, to suit your
                  property’s needs.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Professional Application
                </h5>
                <p>
                  Our skilled team applies waterproofing solutions with
                  precision, ensuring thorough coverage and maximum protection.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Quality Assurance & Testing
                </h5>
                <p>
                  After application, we conduct rigorous testing to ensure the
                  waterproofing is effective and meets our high standards.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Maintenance & Support
                </h5>
                <p>
                  Gumbi Projects offers ongoing support and maintenance tips to
                  help extend the life of your waterproofing solution.
                </p>
              </div>

              <p className="lead">
                Protect your property with expert waterproofing services from{" "}
                <strong>Gumbi Projects</strong>, ensuring a safe and
                water-resistant environment.
              </p>

              {/* Call-to-action Button */}
              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button variant="light" size="lg" className="text-dark">
                    Contact Us for Your Waterproofing Needs
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

export default Waterproofing;
