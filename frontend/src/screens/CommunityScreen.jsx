import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

const CommunityScreen = () => {
  return (
    <>
      <Row className="text-center my-3">
        <Col md={6}>
          <Image fluid src="/images/Homepage/online-world-cuate.svg" />
        </Col>
        <Col md={6} className="my-auto">
          <h4 style={{ color: "#58849B", marginTop: "3rem" }}>Coming Soon</h4>
          <p>
            The chats and discussions forum is built built and will be launched
            very soon. Sign Up to be notified as soon as we go live!
          </p>
          <Button variant="link">Sign Up</Button>
        </Col>
      </Row>

      <Row className="text-center py-5" style={{ backgroundColor: "#FBF8F5" }}>
        <Row>
          <h4 style={{ color: "#58849B" }}>What to expect</h4>
          <p>By signing up you will be able to,</p>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <h4 style={{ color: "#FBA474" }}>Chat Freely</h4>
            <p>
              Sometimes all you need is someone to talk to. This is a safe place
              for you to vent your thoughts and feelings. Remember we are all in
              this together.
            </p>
          </Col>
          <Col md={4}>
            <h4 style={{ color: "#FBA474" }}>Get your doubts answered</h4>
            <p>
              AI Diseases are comparitively rare and may have different symptoms
              Get your doubts easily answered by others on the forum
            </p>
          </Col>
          <Col md={4}>
            <h4 style={{ color: "#FBA474" }}>Share Your Story</h4>
            <p>
              Sometimes all you need is someone to talk to. This is a safe place
              for you to vent your thoughts and feelings. Remember we are all in
              this together.
            </p>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default CommunityScreen;
