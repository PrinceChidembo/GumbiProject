import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import gumbiLogo from "../assets/images/gumbilogo.jpg";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="shadow-sm py-3" bg="white" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={gumbiLogo} // Make sure gumbiLogo is imported at the top
            alt="Gumbi Projects Logo"
            className="d-inline-block align-top"
            width="50"
            height="50"
          />
        </Navbar.Brand>

        {/* Rest of the navbar code remains the same */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 shadow-none"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              href="#home"
              className="me-lg-4 py-2 px-3 fw-medium text-brown"
              style={{ color: "#8c6e46" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
            >
              SERVICE
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
            >
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav className="ms-lg-2">
            <Nav.Link
              href="#get-a-quote"
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
