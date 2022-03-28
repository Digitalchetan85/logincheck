import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterLogo from "../Images/logo.png";
import CookieConsent from "react-cookie-consent";

const Footer = () => {
  return (
    <div>
      <Container>
        <CookieConsent
          location="bottom"
          buttonText="I understand"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          id="cookie"
        >
          <Row className="justify-content-center">
            <Col md={8}>
              This website uses cookies to enhance the user experience.
              <a href="/cookies-policy" target="_blank" className="text-white">
                Cookie Policy
              </a>
            </Col>
          </Row>
        </CookieConsent>
      </Container>
      <div className="bg-dark pt-3 pt-md-5" id="footer">
        <Container>
          <Row>
            <Col md={4}>
              <div className="text-center">
                <Image
                  src={FooterLogo}
                  alt="Shanths Webz Logo"
                  className="img-fluid"
                />
                {/* <h5 className="text-uppercase text-white pt-2 pb-2">Digital Agility Institute</h5> */}

                <address className="pt-2">
                  <p className="text-white text-center">
                    <br />
                    <a href="tel:09686409060">
                      <i className="fas fa-phone-volume"></i> +91 96864 09060
                    </a>
                    <br />
                    <i className="far fa-envelope"></i>
                    <a href="mailto:collaborate@digitalagilityinstitute.com">
                      {" "}
                      collaborate@digitalagilityinstitute.com
                    </a>
                  </p>
                </address>
                <div className="social text-center">
                  <a
                    href="https://www.instagram.com/digitalagilityinstitute/"
                    target="_blank" rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/digitalagilityinstitute"
                    target="_blank" rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/digitalagilityinstitute/"
                    target="_blank" rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/nivartijayaram"
                    target="_blank" rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="">
                <h3 className="text-white pt-2 pb-2">Quick Links</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/mentoring">Mentoring</a>
                  </li>
                  <li>
                    <a href="/coaching">Coaching</a>
                  </li>
                  <li>
                    <a href="/blog">Blogs</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="">
                <h3 className="text-white pt-2 pb-2">Training</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="/capability-building-programs/ic-agile">
                      IC Agile Programs
                    </a>
                  </li>
                  <li>
                    <a href="/capability-building-programs/safe">
                      SAFe Program
                    </a>
                  </li>
                  <li>
                    <a href="/experiential-learning-programs">Experiential Learning Programs</a>
                  </li>
                  <li>
                    <a href="/e-learning-programs">E - Learning Programs</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div className="">
                <h3 className="text-white pt-2 pb-2">Policies</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/refund-policy">Refund Policy</a>
                  </li>
                  <li>
                    <a href="/terms-of-service">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center border-top mt-3 border-white pt-3 pb-3">
            <Col md={10}>
              <p className="text-center text-white">
                © Copyrights Digital Agility Institute 2022. All Rights Reserved.
                Design & Developed by{" "}
                <a
                  href="https://logodesignerbangalore.com/"
                  target="_blank" rel="noopener noreferrer"
                  className="text-white"
                >
                  LDCB
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
};

export default Footer;
