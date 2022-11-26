import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#58849B", color: "#FBF8F5", padding: "2rem" }}
    >
      <Container className="mt-3 pt-3">
        <Row>
          <Col id="linksId" md={4} className="text-center py-3">
            <Row>
              <Link to={"/signup"}>
                <Button style={{ color: "#FBF8F5" }} variant="link">
                  Join Us
                </Button>
              </Link>
            </Row>
            <Row>
              <Col>
                <a href="https://instagram.com/autoimmunecircle">
                  <Image fluid src="/images/Homepage/insta-icon.svg" />
                </a>
              </Col>
              <Col>
                <a href="https://www.facebook.com/autoimmunecircle">
                  <Image fluid src="/images/Homepage/facebook-icon.svg" />
                </a>
              </Col>
              <Col>
                <a href="mailto:autoimmunecircle@gmail.com">
                  <Image fluid src="/images/Homepage/mail-icon.svg" />
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
          <Col md={4} className="text-center py-3">
            <Link to={"/about-ai"}>
              <Button style={{ color: "#FBF8F5" }} variant="link">
                ABOUT AI
              </Button>
            </Link>

            <Link to={"/ai-stories"}>
              <Button style={{ color: "#FBF8F5" }} variant="link">
                AI STORIES
              </Button>
            </Link>

            <Link to={"/about-us"}>
              <Button style={{ color: "#FBF8F5" }} variant="link">
                ABOUT US
              </Button>
            </Link>

            <Link to={"/community"}>
              <Button style={{ color: "#FBF8F5" }} variant="link">
                COMMUNITY
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
