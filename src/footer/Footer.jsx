import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <Container>
        <div className="footer-content">

          <div>
            <h3>Mohammed Zeekreya</h3>
            <p>
              Full-Stack MERN Developer passionate about building
              modern and responsive web applications.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/zeekreya"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="mailto:yourmail@gmail.com">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>

        </div>

        <hr />

        <div className="copyright">
          <p>
            © {new Date().getFullYear()} Mohammed Zeekreya. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;