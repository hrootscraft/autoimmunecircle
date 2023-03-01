import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const AboutUsScreen = () => {
  const [founder, setFounder] = useState({});

  useEffect(() => {
    const fetchFounder = async () => {
      const data = await axios.get(`/api/founder`);
      setFounder(data.data);
    };
    fetchFounder();
  }, []);

  return (
    <>
      <Row className="m-5 pt-3 text-center">
        <p>
          If you’re here, you probably are acquainted with our common friend -
          an Autoimmune condition! I have known it for over 7 years now and can
          understand exactly what you’re going through. I know it’s not easy
          but, over these years I realized that a lot of differences could be
          made just by having a person to talk to and exchange experiences with.
          Inspired by this thought, I decided to take one step forward, reach
          out and build a strong online community. This is a step towards
          creating a safe and supportive platform for people with an Autoimmune
          condition who, in spite of their hardships, want to connect and
          inspire. Let's be friends!
        </p>
      </Row>

      <Row className="text-center mt-5">
        <h3 style={{ color: "#58849B" }}>ABOUT THE FOUNDER</h3>
      </Row>

      <Row
        style={{
          border: " 0.1rem solid #FBA474",
          padding: "2rem",
        }}
        className="mt-3"
      >
        <Col md={4} sm={12} className="my-auto">
          <Image height={300} fluid src={founder.photo} />
        </Col>

        <Col className="my-auto" md={8} sm={12}>
          <h4 className="my-3">{founder.name}</h4>
          <p>
            <span className="fw-bold">Type</span> : {founder.disease} <br />
            <span className="fw-bold">Diagnosed On</span> : {founder.diagnosedOn}{" "}
            <br />
            <span className="fw-bold">From</span> : {founder.city}, {" "}
            {founder.country}
          </p>
          <p>{founder.about}</p>
          <Link to={`/ai-stories/${founder._id}`}>
            <Button style={{ backgroundColor: "#FBA474" }}>
              Read Story
            </Button>
          </Link>
        </Col>
      </Row>

      <Row
        style={{ backgroundColor: "#FBF8F5" }}
        className="mt-5 text-center py-5"
      >
        <h4 style={{ color: "#919191" }}>WHO CAN JOIN THE COMMUNITY ?</h4>
        <p>
          Anyone who is going through or has been through an autoimmune
          condition.
        </p>
        <p>
          Meet similar people, share thoughts, find insightful resources by
          joining our online community. We promise you, it's free! All your
          shared data is private and wont be used for any purposes without your
          consent. We understand that this is a very sensitive and private topic
          and we respect that. So don't worry we've got your back!
        </p>
        <Link to={`/signup`}>
          <Image className="mt-2" src="/images/buttons/join-us.svg" />
        </Link>
      </Row>

      <Row className="text-center m-5">
        <Col className="my-auto" md={3}>
          <Image
            className="mx-3"
            width={30}
            height={30}
            src="/images/homepage/heart.svg"
          />
          <Image
            className="mx-3"
            width={30}
            height={30}
            src="/images/homepage/heart.svg"
          />
        </Col>
        <Col md={6}>
          <p className="mt-2">
            We would like to shoutout each and everyone who are battling with
            any kind of Autoimmune Condition. Going through it ourselves, we
            understand what you truly feel and just know that you are doing
            great! For those of you who might be new to this, take one day at a
            time. Everything's going to be alright, just have faith in yourself.
            Our body is a miraculous thing, so don't hate on what it's doing,
            instead give it the love it deserves. Stay Healthy, stay safe and
            take care !
          </p>
        </Col>
        <Col className="my-auto" md={3}>
          <Image
            className="mx-3"
            width={30}
            height={30}
            src="/images/homepage/heart.svg"
          />
          <Image
            className="mx-3"
            width={30}
            height={30}
            src="/images/homepage/heart.svg"
          />
        </Col>
      </Row>

      <Row
        style={{ backgroundColor: "#FBF8F5" }}
        className="mt-4 text-center py-5"
      >
        <h4 style={{ color: "#58849B" }}>CONTACT US</h4>
        <p>
          We would love to hear from you! Have any ideas in mind, want to
          request any improvements?
        </p>
        <p>Simply drop us a mail or dm on gram and we'll get back to you.</p>
        <div style={{ marginTop: "3rem" }}>
          <h6>
            Instagram Id: @autoimmune_circle <br />
            <br /> Mail Id: autoimmunecircle@gmail.com
          </h6>
        </div>
      </Row>
    </>
  );
};

export default AboutUsScreen;
