import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CommunityScreen = () => {
  return (
    <>
      <Row className="text-center my-3 mb-4">
        <Col md={6}>
          <Image fluid src="/images/homepage/online-world-cuate.svg" />
        </Col>
        <Col md={6} className="my-auto">
          <h2 style={{ color: "#58849B", marginTop: "3rem" }}>Coming Soon</h2>
          <p>
            The chats and discussions forum is built built and will be launched
            very soon. Sign Up to be notified as soon as we go live!
          </p>
          <Link to={`/signup`}>
            <Button style={{ backgroundColor: "#FBA474" }}>SIGN UP</Button>
          </Link>
        </Col>
      </Row>

      <Row
        className="text-center p-5 mt-4"
        style={{ backgroundColor: "#FBF8F5" }}
      >
        <Row className="mb-5">
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
            <h4 style={{ color: "#FBA474" }}>Ask your Doubts </h4>
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
