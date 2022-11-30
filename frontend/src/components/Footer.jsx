import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#58849B", color: "#FBF8F5", padding: "2rem" }}
    >
      <Container className="mt-3 pt-3">
        <Row>
          <Col md={4} className="text-center py-3 my-auto">
            <Link to={"/signup"}>
              <Image height="50" src="/images/buttons/footer-join-us.svg" />
            </Link>
            <Row className="p-2 mt-3">
              <Col className="ms-5">
                <a href="https://www.instagram.com/autoimmune_circle">
                  <Image fluid src="/images/homepage/insta-icon.svg" />
                </a>
              </Col>

              <Col>
                <a href="https://www.facebook.com/profile.php?id=100088269910785">
                  <Image fluid src="/images/homepage/facebook-icon.svg" />
                </a>
              </Col>

              <Col className="me-5">
                <a href="mailto:autoimmunecircle@gmail.com">
                  <Image fluid src="/images/homepage/mail-icon.svg" />
                </a>
              </Col>
            </Row>
          </Col>

          <Col md={4} className="text-center py-3">
            <h4 style={{ color: "#FBF8F5" }}>DISCLAIMER</h4>
            <p>
              The main treatment for autoimmune diseases is with medications
              that bring down inflammation and calm the overactive immune
              response. Treatments can also help relieve symptoms. Treatments
              can last from a few months to few years depending on your body's
              reaction{" "}
            </p>
          </Col>

          <Col md={4} className="text-center py-3 my-auto">
            <Link style={{textDecoration: "none"}} to={"/about-ai"}>
              <p style={{ color: "#FBF8F5", fontWeight: "1.2rem" }}>ABOUT AI</p>
            </Link>

            <Link style={{textDecoration: "none"}} to={"/ai-stories/page/1"}>
              <p style={{ color: "#FBF8F5", fontWeight: "1.2rem" }}>AI STORIES</p>
            </Link>

            <Link style={{textDecoration: "none"}} to={"/about-us"}>
              <p style={{ color: "#FBF8F5", fontWeight: "1.2rem" }}>ABOUT US</p>
            </Link>

            <Link style={{textDecoration: "none"}} to={"/community"}>
              <p style={{ color: "#FBF8F5", fontWeight: "1.2rem" }}>COMMUNITY</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
