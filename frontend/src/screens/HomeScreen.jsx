import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <Row className="text-center">
        <Col md={6}>
          <Image
            fluid
            height={900}
            width={900}
            src="/images/homepage/peep-ill.svg"
          />
        </Col>
        <Col md={6} className="my-auto">
          <h2 className="mt-5" style={{ color: "#58849B", fontSize: "2rem" }}>
            Welcome To Autoimmune Circle!
          </h2>
          <p className="mt-3 mb-5">
            We are an army of superheroes combating{" "}
            <strong>
              <em>Autoimmune Disorders</em>
            </strong>
            . Fly into our safe space & join a community that runs on your
            stories and support!
          </p>
          <Link to={`/signup`}>
            <Button style={{ backgroundColor: "#FBA474" }}>
              Join Us Today
            </Button>
          </Link>
        </Col>
      </Row>

      <Row
        className="text-center mt-5 p-5"
        style={{ backgroundColor: "#FBF8F5" }}
      >
        <Col md={6}>
          <h4 style={{ color: "#58849B" }}>Autoimmune Diseases</h4>
          <p className="mt-3">
            'Autoimmune' represents a category of at least a hundred diseases.
            An Autoimmune problem develops when our bodies make too many killer
            T cells or antibodies and then fails to turn it off so the immune
            reaction doesn't stop. It also happens when the immune cells are
            attacking your body's own tissues when they should only be attacking
            outsiders. Put all these problems together and the result is
            inflammation and damage to cells & organs.
          </p>
          <Link to="/about-ai">
            <Button style={{ backgroundColor: "#FBF8F5", color: "#58849B" }}>
              Learn More
            </Button>
          </Link>
        </Col>
        <Col md={6}>
          <div style={{ border: " 0.1rem solid #FBA474", padding: "2rem" }}>
            <h4>Do you know ?</h4>
            <p style={{ fontSize: "2rem" }}>4%</p>
            <p>of the world’s population is affected by one of more than</p>
            <p style={{ fontSize: "1.5rem" }}>
              80 different Autoimmune Diseases!
            </p>
          </div>
        </Col>
      </Row>

      <Row className="text-center my-5">
        <h4 style={{ color: "#58849B" }} className="mt-5 mb-3">
          What we do ?
        </h4>
        <p className="mb-5">
          With this online community, we intend to connect with everyone going
          through an Autoimmune disease. By joining us, you'll be able to ask
          questions candidly, share your experiences and make some amazing
          friends!
        </p>
        <Col md={4} sm={4}>
          <Row>
            <Image
              height={70}
              width={70}
              src="/images/homepage/resources.svg"
              cursor
            />
          </Row>
          <Row>
            <p>Resources</p>
          </Row>
        </Col>
        <Col md={4} sm={4}>
          <Row>
            <Image
              height={70}
              width={70}
              src="/images/homepage/community.svg"
            />
          </Row>
          <Row>
            <p>Community</p>
          </Row>
        </Col>
        <Col md={4} sm={4}>
          <Row>
            <Image
              height={70}
              width={70}
              src="/images/homepage/support-icon.svg"
            />
          </Row>
          <Row>
            <p>Support</p>
          </Row>
        </Col>
      </Row>

      <Row className="text-center">
        <div style={{ border: " 0.1rem solid #FBA474", padding: "2rem" }}>
          <p>
            Do you need someone to amuse or vent out your feelings? Let's be
            friends!
          </p>
          <Link to={`/signup`}>
            <Image
              className="mb-3"
              height={70}
              width={70}
              src="/images/homepage/stamp.svg"
            />
          </Link>
          <p>Go on! its completely free</p>
        </div>
      </Row>
    </>
  );
};

export default HomeScreen;
