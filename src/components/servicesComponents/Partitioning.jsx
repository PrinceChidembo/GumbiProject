import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BsCheckCircle } from "react-icons/bs"; // Import Bootstrap icon for checkmarks
import partitioningImage from "../../assets/images/servicegrid/partitioning.jpg"; // Replace with the image path for partitioning services

const PartitioningServices = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#8c6e46", color: "#ffffff" }}
    >
      {/* Hero Section with Background Image */}
      <div
        className="partitioning-hero text-center mb-4"
        style={{
          backgroundImage: `url(${partitioningImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "15px",
          marginRight: "15px",
          padding: "3rem 0",
          borderRadius: "10px",
        }}
      >
        <h1 className="partitioning-hero-heading display-4">
          Partitioning Services at Gumbi
        </h1>
      </div>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="bg-transparent border-0 mb-4">
            <Card.Body>
              <p className="lead">
                At <strong>Gumbi Projects</strong>, we offer expert partitioning
                solutions designed to optimize space and enhance functionality.
                Our approach ensures seamless integration of partitions that
                blend style and practicality.
              </p>

              <h4 className="mt-4 mb-3">Our Approach to Partitioning</h4>

              {/* Step Details with Icons */}
              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Space Assessment & Planning
                </h5>
                <p>
                  We conduct a thorough assessment to understand your space and
                  create a partition plan that meets your specific requirements.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Material Selection & Design
                </h5>
                <p>
                  Our team helps you choose high-quality materials and custom
                  designs to ensure the partitions suit both the aesthetics and
                  function of the area.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Precision Installation
                </h5>
                <p>
                  With meticulous attention to detail, we install partitions
                  that are durable, stable, and perfectly aligned.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  Customization & Adjustments
                </h5>
                <p>
                  We tailor the installation to match your preferences and
                  provide any necessary adjustments for optimal results.
                </p>
              </div>

              <div className="mb-3">
                <h5>
                  <BsCheckCircle className="me-2" />
                  After-Service Support
                </h5>
                <p>
                  Our commitment to quality extends beyond installation. We
                  offer after-service support and maintenance tips to keep your
                  partitions in perfect condition.
                </p>
              </div>

              <p className="lead">
                With <strong>Gumbi Projects</strong>, you can rely on innovative
                partitioning solutions that transform your space to suit your
                needs and style.
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

export default PartitioningServices;
