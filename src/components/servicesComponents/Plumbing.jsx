import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import Bootstrap icon for checkmarks
import "../../assets/css/servicesCss/Plumbing.css"; // Correct CSS import

const Plumbing = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8C6E46", color: "#ffffff" }}
    >
      {/* Hero Section with Background Image */}
      <div
        className="plumbing-hero text-center mb-4"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <h1 className="plumbing-hero-heading display-4">
          Plumbing Services at Gumbi
        </h1>
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, our plumbing services are
                built on expertise, precision, and attention to detail. We
                understand that effective plumbing requires more than just
                installation – it demands planning, quality materials, and
                professional techniques to ensure reliable, long-lasting
                systems.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Plumbing</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Assessment & Planning
                </h5>
                <p>
                  Every project begins with a thorough inspection and needs
                  assessment. We evaluate your property’s unique requirements,
                  potential issues, and system layout to develop a customized
                  plan.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Material Selection
                </h5>
                <p>
                  We prioritize high-quality, durable materials for all plumbing
                  components, ensuring the installations meet industry standards
                  and withstand long-term usage.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Installation & Execution
                </h5>
                <p>
                  With careful attention to detail, our skilled plumbers execute
                  installations, repairs, and upgrades to achieve maximum
                  efficiency and minimal disruption. We are equipped to handle
                  everything from basic fixture fittings to complex system
                  installations.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Quality Testing
                </h5>
                <p>
                  Once the installation or repair work is completed, we perform
                  rigorous testing to confirm the system’s functionality, detect
                  leaks, and ensure everything operates smoothly.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Aftercare & Support
                </h5>
                <p>
                  Gumbi Projects values customer satisfaction and offers
                  aftercare support to address any questions or follow-up needs.
                  Our team is dedicated to ensuring that your plumbing systems
                  are not only working efficiently but are also backed by our
                  commitment to quality.
                </p>
              </div>

              <p className="lead">
                Our comprehensive plumbing services at{" "}
                <strong>Gumbi Projects</strong> cover everything from piping and
                drainage systems to fixture installations and leak repairs,
                making sure your property’s plumbing is efficient, safe, and up
                to standard.
              </p>

              {/* Call-to-action Button */}
              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button variant="light" size="lg" className="text-dark">
                    Contact Us for Your Plumbing Needs
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

export default Plumbing;
