import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import icons

const Partitioning = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8c6e46", color: "#ffffff" }}
    >
      {/* Hero Section */}
      <div
        className="partitioning-hero text-center mb-4"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <h1 className="partitioning-hero-heading display-4">
          Partitioning Services at Gumbi
        </h1>
        <img
          src="../../assets/images/services/gumbi11.jpg" // Replace with the path to your image
          alt="Partitioning Services"
          style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
        />
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, our partitioning services
                transform spaces with a focus on functionality, privacy, and
                design. We provide tailored solutions that enhance the layout
                and usability of your space.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Partitioning</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Consultation & Planning
                </h5>
                <p>
                  We collaborate closely with clients to understand their space
                  requirements and provide solutions that align with their
                  vision and needs.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Material Selection
                </h5>
                <p>
                  We use high-quality, durable materials that complement your
                  existing interior design while ensuring practicality and
                  soundproofing where needed.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Expert Installation
                </h5>
                <p>
                  Our skilled team meticulously installs partitions, maintaining
                  precise alignment and stability to create defined and
                  attractive spaces.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Customization & Finishing
                </h5>
                <p>
                  We offer customizable partitioning options to meet aesthetic
                  and functional requirements, from glass and aluminum to gypsum
                  and wooden partitions.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Post-installation Support
                </h5>
                <p>
                  Gumbi Projects ensures seamless follow-up services and support
                  for adjustments or additional requirements.
                </p>
              </div>

              <p className="lead">
                Trust <strong>Gumbi Projects</strong> for partitioning solutions
                that maximize space utilization while providing privacy and
                elegance for your home or office.
              </p>

              {/* Call-to-action Button */}
              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button variant="light" size="lg" className="text-dark">
                    Contact Us for Your Partitioning Needs
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

export default Partitioning;
