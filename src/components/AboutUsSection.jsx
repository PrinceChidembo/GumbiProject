import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutSection = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#8C6E46", color: "#ffffff", padding: "2rem" }}
    >
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>About Gumbi Projects</h2>
          <p>
            Gumbi Projects, established on March 12, 2014, by founders Owen and
            Luke, is a trusted name in the construction industry, committed to
            quality and professionalism. With a decade of experience, we
            specialize in a variety of services including waterproofing, ceiling
            fitting, door hanging, plumbing, partitioning, painting, bulkhead
            fitting, and suspended ceiling fixing. Our team takes pride in
            delivering reliable and expertly executed projects tailored to meet
            our clients' unique needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
