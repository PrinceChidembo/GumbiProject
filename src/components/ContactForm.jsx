// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { MapPin, Phone, Mail } from "lucide-react";

// const ContactForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <Container className="py-5">
//       {/* Map Section */}
//       <Row className="mb-5">
//         <Col>
//           <div className="w-full h-96 bg-gray-200">
//             {/* Replace this div with your Google Maps component */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d27.9334!3d-26.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957526a5f7c4e9%3A0x5b7fa8c4b5f7c4e9!2sCosmo%20City%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1625147200000!5m2!1sen!2sza"
//               className="w-full h-full border-0"
//               allowFullScreen=""
//               loading="lazy"
//               title="Location Map"
//             />
//           </div>
//         </Col>
//       </Row>

//       <Row>
//         {/* Contact Info Section */}
//         <Col md={6} className="mb-4 mb-md-0">
//           <div className="mb-4">
//             <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
//           </div>

//           <div className="flex items-center mb-4">
//             <MapPin className="text-cyan-500 mr-3" size={24} />
//             <p className="m-0">
//               5886 61 Bangui St, Cosmo City
//               <br />
//               Johannesburg, South Africa
//             </p>
//           </div>

//           <div className="flex items-center mb-4">
//             <Phone className="text-cyan-500 mr-3" size={24} />
//             <p className="m-0">
//               +27730095280<br></br>+27839580930
//             </p>
//           </div>

//           <div className="flex items-center mb-4">
//             <Mail className="text-cyan-500 mr-3" size={24} />
//             <p className="m-0">Fungaimusvipa3@gmail.com</p>
//           </div>
//         </Col>

//         {/* Form Section */}
//         <Col md={6}>
//           <div className="mb-4">
//             <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
//           </div>

//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder="Your Name*"
//                 className="p-3 rounded-0"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="email"
//                 placeholder="Your Email*"
//                 className="p-3 rounded-0"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="tel"
//                 placeholder="Your Number*"
//                 className="p-3 rounded-0"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 placeholder="Your Message*"
//                 className="p-3 rounded-0"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Check
//                 type="checkbox"
//                 label="I give permission to collect the data above and use it to contact me."
//                 required
//               />
//             </Form.Group>

//             <Button
//               type="submit"
//               className="bg-cyan-500 border-0 rounded-0 px-4 py-2 text-white font-semibold hover:bg-cyan-600"
//             >
//               SEND
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactForm;
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data (basic example)
    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !formData.message
    ) {
      setAlert({ type: "danger", message: "All fields are required." });
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_o3vfozs", // Replace with your EmailJS service ID
        "template_osdol5w", // Replace with your EmailJS template ID
        e.target,
        "YMsNb8EjrHRZG-cxHP" // Replace with your EmailJS user ID (found in EmailJS dashboard)
      )
      .then(
        (result) => {
          setAlert({ type: "success", message: "Message sent successfully!" });
          setFormData({ name: "", email: "", number: "", message: "" });
        },
        (error) => {
          setAlert({
            type: "danger",
            message: "Failed to send the message. Please try again.",
          });
        }
      );
  };

  return (
    <Container className="py-5">
      {/* Map Section */}
      <Row className="mb-5">
        <Col>
          <div className="w-full h-96 bg-gray-200">
            {/* Replace this div with your Google Maps component */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d27.9334!3d-26.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957526a5f7c4e9%3A0x5b7fa8c4b5f7c4e9!2sCosmo%20City%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1625147200000!5m2!1sen!2sza"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            />
          </div>
        </Col>
      </Row>

      <Row>
        {/* Contact Info Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          </div>

          <div className="flex items-center mb-4">
            <MapPin className="text-cyan-500 mr-3" size={24} />
            <p className="m-0">
              5886 61 Bangui St, Cosmo City
              <br />
              Johannesburg, South Africa
            </p>
          </div>

          <div className="flex items-center mb-4">
            <Phone className="text-cyan-500 mr-3" size={24} />
            <p className="m-0">
              +27730095280<br></br>+27839580930
            </p>
          </div>

          <div className="flex items-center mb-4">
            <Mail className="text-cyan-500 mr-3" size={24} />
            <p className="m-0">Fungaimusvipa3@gmail.com</p>
          </div>
        </Col>

        {/* Form Section */}
        <Col md={6}>
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          </div>

          {alert && (
            <Alert
              variant={alert.type}
              onClose={() => setAlert(null)}
              dismissible
            >
              {alert.message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Your Name*"
                className="p-3 rounded-0"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Your Email*"
                className="p-3 rounded-0"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                placeholder="Your Number*"
                className="p-3 rounded-0"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message*"
                className="p-3 rounded-0"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="I give permission to collect the data above and use it to contact me."
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="bg-cyan-500 border-0 rounded-0 px-4 py-2 text-white font-semibold hover:bg-cyan-600"
            >
              SEND
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
