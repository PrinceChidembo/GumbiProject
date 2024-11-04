import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaFacebook, FaWhatsapp } from "react-icons/fa"; // Importing icons

const GetSocialNav = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-2">
      <Nav className="ms-auto d-flex align-items-center">
        <Nav.Link
          href="https://www.facebook.com/www.gumbiprojects.co.za" // Replace with your Facebook page link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white me-3"
        >
          <FaFacebook size={24} className="me-1" />
          Facebook
        </Nav.Link>

        <Nav.Link
          href="https://wa.me/+27 73 009 5280" // Replace with your WhatsApp number, formatted like ?phone=15551234567
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaWhatsapp size={24} className="me-1" />
          WhatsApp
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default GetSocialNav;
