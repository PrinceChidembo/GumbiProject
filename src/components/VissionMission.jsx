import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const VisionMission = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Our Vision & Mission</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center text-primary">
                Vision
              </Card.Title>
              <Card.Text>
                To be a leading force in building sustainable and innovative
                structures that shape communities, inspire progress, and foster
                a lasting positive impact on future generations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center text-success">
                Mission
              </Card.Title>
              <Card.Text>
                To deliver exceptional construction services by prioritizing
                quality, safety, and efficiency, while fostering strong client
                relationships and championing sustainable practices. We are
                committed to turning visions into reality through skilled
                craftsmanship, integrity, and a passion for excellence in every
                project.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VisionMission;
