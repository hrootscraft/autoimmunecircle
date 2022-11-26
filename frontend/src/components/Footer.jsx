import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#58849B", color: "#FBF8F5" }}>
      <Container className="mt-3 pt-3">
        <Row>
          <Col md={4} className="text-center py-3">
            <Row>
              <Button style={{color: "#FBF8F5"}} variant="link">Join Us</Button>
            </Row>
            <Row>
              <Col>
                <Image fluid src="/images/Homepage/insta-icon.svg"></Image>
              </Col>
              <Col>
                <Image fluid src="/images/Homepage/facebook-icon.svg"></Image>
              </Col>
              <Col>
                <Image fluid src="/images/Homepage/mail-icon.svg"></Image>
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
            <Button
              style={{ color: "#FBF8F5" }}
              href={`/about-ai`}
              variant="link"
            >
              ABOUT AI
            </Button>
            <Button
              style={{ color: "#FBF8F5" }}
              href={`/ai-stories`}
              variant="link"
            >
              AI STORIES
            </Button>
            <Button
              style={{ color: "#FBF8F5" }}
              href={`/about-us`}
              variant="link"
            >
              ABOUT US
            </Button>
            <Button
              style={{ color: "#FBF8F5" }}
              href={`/community`}
              variant="link"
            >
              COMMUNITY
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
