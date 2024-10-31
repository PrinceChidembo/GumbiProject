import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="Home">
      <NavbarComponent />
      <h1>Contact us </h1>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
