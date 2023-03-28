import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoryCarousel from "../components/StoryCarousel";

const HomeScreen = () => {
  return (
    <>
      <Row className="">
        <Col md={6}>
          <Image
            loading="lazy"
            fluid
            height={900}
            width={900}
            src="/images/homepage/peep-ill.svg"
          />
        </Col>
        <Col md={6} className="my-auto">
          <p className="mt-5" style={{ color: "#58849B", fontSize: "2rem" }}>
            Welcome To Autoimmune Circle!
          </p>
          <p className="mt-3 mb-5">
            We are an army of superheroes combating{" "}
            <strong>
              <em>Autoimmune Disorders</em>
            </strong>
            . Fly into our safe space & join a community that runs on your
            stories and support!
          </p>
          <Link to={`/signup`}>
            <Image loading="lazy" src="/images/buttons/join-us.svg" />
          </Link>
        </Col>
      </Row>

      <Row
        className="text-center mt-5 p-5"
        style={{ backgroundColor: "#FBF8F5" }}
      >
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

        <Col md={6}>
          <h4 style={{ color: "#58849B", marginTop: "2rem" }}>
            Autoimmune Diseases
          </h4>
          <p className="mt-3">
            An autoimmune disease is a condition arising from an abnormal immune
            response to a functioning body part. Nearly any body part can be
            involved. Autoimmune disease happens when the body's natural defense
            system can't tell the difference between your own cells and foreign
            cells, causing the body to mistakenly attack normal cells.
          </p>
          <Link to="/about-ai">
            <Image loading="lazy" src="/images/buttons/learn-more.svg" />
          </Link>
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
        <div style={{ backgroundColor: "#FBF8F5", padding: "2rem" }}>
          <p>
            Do you need someone to amuse or vent out your feelings? Let's be
            friends!
          </p>
          <Link to={`/signup`}>
            <Image
              loading="lazy"
              className="mb-3"
              src="/images/buttons/join-us.svg"
            />
          </Link>
          <p>Go on! its completely free</p>
        </div>
      </Row>

      <Row className="text-center mt-5">
        <h3 style={{ color: "#58849B" }} className="mt-5 mb-3">
          Autoimmune Stories
        </h3>
        <p>
          We hope that these stories remind you that you are not alone in the
          bad bits of your journey, nor in the good ones!
        </p>
      </Row>
      <StoryCarousel />
    </>
  );
};

export default HomeScreen;
