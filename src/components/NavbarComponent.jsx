import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import gumbiLogo from "../assets/images/gumbilogo.jpg";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="shadow-sm py-3" bg="white" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={gumbiLogo}
            alt="Gumbi Projects Logo"
            className="d-inline-block align-top"
            width="50"
            height="50"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 shadow-none"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              as={Link}
              to="/"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
            >
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav className="ms-lg-2">
            <Nav.Link
              as={Link} // Change to navigate to the contact page
              to="/contact"
              className="btn text-white px-4 py-2 mt-3 mt-lg-0"
              style={{
                backgroundColor: "#8c6e46",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#5a3e21")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#8c6e46")}
            >
              Get A Quote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
