import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/servicesCss/Plumbing.css"; // Correct CSS import

const Plumbing = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#8C6E46", color: "#ffffff", padding: "2rem" }}
    >
      {/* Hero Section with Background Image */}
      <div className="plumbing-hero">
        <h1 className="plumbing-hero-heading">Plumbing Services at Gumbi</h1>
      </div>

      <Row className="justify-content-center">
        <Col md={8}>
          <p>
            At <strong>Gumbi Projects</strong>, our plumbing services are built
            on expertise, precision, and attention to detail. We understand that
            effective plumbing requires more than just installation – it demands
            planning, quality materials, and professional techniques to ensure
            reliable, long-lasting systems.
          </p>

          <h4>Our Approach to Plumbing</h4>
          <p>
            <strong>1. Assessment & Planning:</strong> Every project begins with
            a thorough inspection and needs assessment. We evaluate your
            property’s unique requirements, potential issues, and system layout
            to develop a customized plan.
          </p>
          <p>
            <strong>2. Material Selection:</strong> We prioritize high-quality,
            durable materials for all plumbing components, ensuring the
            installations meet industry standards and withstand long-term usage.
          </p>
          <p>
            <strong>3. Installation & Execution:</strong> With careful attention
            to detail, our skilled plumbers execute installations, repairs, and
            upgrades to achieve maximum efficiency and minimal disruption. We
            are equipped to handle everything from basic fixture fittings to
            complex system installations.
          </p>
          <p>
            <strong>4. Quality Testing:</strong> Once the installation or repair
            work is completed, we perform rigorous testing to confirm the
            system’s functionality, detect leaks, and ensure everything operates
            smoothly.
          </p>
          <p>
            <strong>5. Aftercare & Support:</strong> Gumbi Projects values
            customer satisfaction and offers aftercare support to address any
            questions or follow-up needs. Our team is dedicated to ensuring that
            your plumbing systems are not only working efficiently but are also
            backed by our commitment to quality.
          </p>

          <p>
            Our comprehensive plumbing services at{" "}
            <strong>Gumbi Projects</strong> cover everything from piping and
            drainage systems to fixture installations and leak repairs, making
            sure your property’s plumbing is efficient, safe, and up to
            standard.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Plumbing;
