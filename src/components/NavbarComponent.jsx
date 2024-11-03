import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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

            {/* Services Dropdown Menu */}
            <NavDropdown
              title="SERVICES"
              id="services-dropdown"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
              menuVariant="dark"
            >
              <NavDropdown.Item
                as={Link}
                to="/services/painting"
                style={{ backgroundColor: "#8c6e46", color: "white" }}
              >
                <span style={{ marginRight: "8px" }}>➤</span> Painting
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/plumbing"
                style={{ backgroundColor: "#8c6e46", color: "white" }}
              >
                <span style={{ marginRight: "8px" }}>➤</span> Plumbing
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/waterproofing"
                style={{ backgroundColor: "#8c6e46", color: "white" }}
              >
                <span style={{ marginRight: "8px" }}>➤</span> Waterproofing
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/door-hanging"
                style={{ backgroundColor: "#8c6e46", color: "white" }}
              >
                <span style={{ marginRight: "8px" }}>➤</span> Door Hanging
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/partitioning"
                style={{ backgroundColor: "#8c6e46", color: "white" }}
              >
                <span style={{ marginRight: "8px" }}>➤</span> Partitioning
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/ceilings"
                style={{ backgroundColor: "#8c6e46", color: "white" }}
              >
                <span style={{ marginRight: "8px" }}>➤</span> Ceilings
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/bulkheads"
                style={{ backgroundColor: "#8c6e46", color: "white" }}
              >
                <span style={{ marginRight: "8px" }}>➤</span> Bulkheads
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/bulkheads"
                style={{ backgroundColor: "#8c6e46", color: "white" }}
              >
                <span style={{ marginRight: "8px" }}>➤</span> Hand-man e.t.c
                Jobs
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/contact"
              className="me-lg-4 py-2 px-3 fw-medium"
              style={{ color: "#8c6e46" }}
            >
              CONTACT
            </Nav.Link>
          </Nav>

          {/* Get A Quote Button */}
          <Nav className="ms-lg-2">
            <Nav.Link
              as={Link}
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
