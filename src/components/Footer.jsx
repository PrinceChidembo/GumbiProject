// Footer.js
import React from "react";
import "../assets/css/Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#ffffff", color: "#8c6e46" }}
    >
      <div className="footer-container">
        <div className="footer-links">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="/about" style={{ color: "#8c6e46" }}>
                Our Story
              </a>
            </li>
            <li>
              <a href="/team" style={{ color: "#8c6e46" }}>
                Team
              </a>
            </li>
            <li>
              <a href="/careers" style={{ color: "#8c6e46" }}>
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/services/plumbing" style={{ color: "#8c6e46" }}>
                Plumbing
              </a>
            </li>
            <li>
              <a href="/services/ceiling-fixing" style={{ color: "#8c6e46" }}>
                Ceiling Fixing
              </a>
            </li>
            <li>
              <a href="/services/waterproofing" style={{ color: "#8c6e46" }}>
                Waterproofing
              </a>
            </li>
            <li>
              <a href="/services/door-hanging" style={{ color: "#8c6e46" }}>
                Door Hanging
              </a>
            </li>
            <li>
              <a href="/services/partitioning" style={{ color: "#8c6e46" }}>
                Partitioning
              </a>
            </li>
            <li>
              <a href="/services/painting" style={{ color: "#8c6e46" }}>
                Painting
              </a>
            </li>
            <li>
              <a href="/services/bulkheads" style={{ color: "#8c6e46" }}>
                Bulkheads Fitting
              </a>
            </li>
            <li>
              <a
                href="/services/suspended-ceiling"
                style={{ color: "#8c6e46" }}
              >
                Suspended Ceiling Fixing
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:lchitokomere9@gmail.com"
              style={{ color: "#8c6e46" }}
            >
              lchitokomere9@gmail.com
            </a>
            <br />
            <a
              href="mailto:fungaimusvipa3@gmail.com"
              style={{ color: "#8c6e46" }}
            >
              fungaimusvipa3@gmail.com
            </a>
          </p>
          <p>
            Phone: <br></br>
            <a href="tel:+27839580930" style={{ color: "#8c6e46" }}>
              +27839580930
            </a>{" "}
            <br></br>
            <a href="tel:+27730095280" style={{ color: "#8c6e46" }}>
              +27730095280
            </a>
          </p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <a
            href="https://www.facebook.com/IQwhales"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8c6e46", marginRight: "10px" }}
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com/IQwhales"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8c6e46", marginRight: "10px" }}
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/iqwhales"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8c6e46" }}
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} GumbiProject. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
