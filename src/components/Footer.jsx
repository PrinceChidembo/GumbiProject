import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  GeoAlt,
  Telephone,
  Envelope,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <Container>
        <Row className="mb-8">
          {/* Address Section */}
          <Col lg={3} md={6} className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Address</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <GeoAlt size={16} />
                <span className="text-gray-300">123 Street, New York, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Telephone size={16} />
                <span className="text-gray-300">+012 345 67890</span>
              </div>
              <div className="flex items-center gap-2">
                <Envelope size={16} />
                <span className="text-gray-300">info@example.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>
          </Col>

          {/* Services Section */}
          <Col lg={3} md={6} className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-300 hover:text-white">
                General Carpentry
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Furniture Remodeling
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Wooden Floor
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Wooden Furniture
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Custom Carpentry
              </a>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col lg={3} md={6} className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Our Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Terms & Condition
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Support
              </a>
            </div>
          </Col>

          {/* Newsletter Section */}
          <Col lg={3} md={6}>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <Form className="flex gap-2">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="bg-gray-700 border-gray-600 text-white"
              />
              <Button
                variant="primary"
                className="bg-amber-700 hover:bg-amber-600 border-0 px-4"
              >
                SignUp
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="mt-8 pt-8 border-t border-gray-700">
          <Col md={6} className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-gray-300">
              © Your Site Name, All Right Reserved.
            </span>
          </Col>
          <Col md={6} className="text-center md:text-right">
            <span className="text-gray-300">
              Designed By{" "}
              <a href="#" className="text-white hover:underline">
                HTML Codex
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
