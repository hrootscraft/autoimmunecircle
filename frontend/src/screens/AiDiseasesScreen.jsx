import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const diseasesScreen = () => {
  return (
    <>
      <Row className="mt-5 text-center">
        <h4 style={{ color: "#58849B", marginBottom: "2rem" }}>
          What are Autoimmune Diseases ?
        </h4>
        <p>
          An autoimmune disease is a condition arising from an abnormal immune
          response to a functioning body part. Nearly any body part can be
          involved. Autoimmune disease happens when the body's natural defense
          system can't tell the difference between your own cells and foreign
          cells, causing the body to mistakenly attack normal cells. When the
          body senses danger from a virus or infection, the immune system kicks
          into gear and attacks it. This is called an immune response.
          Sometimes, healthy cells and tissues are caught up in this response,
          resulting into autoimmunity. <br /> There are more than 80 types of
          autoimmune diseases that affect a wide range of body parts. The
          symptoms depend on the organ/tissue it affects to. Many autoimmune
          diseases are set of by similar triggers both genetic and environmental
          such as gluten, heavy metals, toxins, infections, stress etc.
        </p>
      </Row>

      <Row
        className="text-center py-5 my-5"
        style={{ backgroundColor: "#FBF8F5" }}
      >
        <h4 style={{ color: "#58849B", marginBottom: "3rem" }}>Common Types</h4>

        <p className="mt-5">
          There are more than 80 types of autoimmune diseases that attack all
          parts of the body and some of them have similar symptoms. <br />
          Here, we have listed some of the common types.
        </p>

        <Row>
          <Col md={3} sm={6} xs={6}>
            <Image
              loading="lazy"
              className="my-2 mx-2"
              height={150}
              width={150}
              src="/images/diseases/celliac-disease.svg"
            />
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Image
              loading="lazy"
              className="my-2 mx-2"
              height={150}
              width={150}
              src="/images/diseases/graves-disease.svg"
            />
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Image
              loading="lazy"
              className="my-2 mx-2"
              height={150}
              width={150}
              src="/images/diseases/hashimotos-thyroiditis.svg"
            />
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Image
              loading="lazy"
              className="my-2 mx-2"
              height={150}
              width={150}
              src="/images/diseases/lupus.svg"
            />
          </Col>
        </Row>

        <Row>
          <Col md={3} sm={6} xs={6}>
            <Image
              loading="lazy"
              className="my-2 mx-2"
              height={150}
              width={150}
              src="/images/diseases/multiple-sclerosis.svg"
            />
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Image
              loading="lazy"
              className="my-2 mx-2"
              height={150}
              width={150}
              src="/images/diseases/rheumatoid-artheristis.svg"
            />
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Image
              loading="lazy"
              className="my-2 mx-2"
              height={150}
              width={150}
              src="/images/diseases/sjogrens.svg"
            />
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Image
              loading="lazy"
              className="my-2 mx-2"
              height={150}
              width={150}
              src="/images/diseases/myasthesia.svg"
            />
          </Col>
        </Row>
      </Row>

      <Row className="text-center m-4">
        <h4 style={{ color: "#58849B", marginBottom: "2rem" }}>
          Which doctor treats Ai Diseases ?
        </h4>
        <p>
          There is no one doctor who treats Autoimmune diseases. Which doctor
          you need depends on which body systems are affected by your particular
          autoimmune disease. In some cases, you may need to see a variety of
          different health care professionals to help manage your symptoms and
          slow the progression of your disease.
        </p>
      </Row>

      <Row
        className="text-center m-4 py-5"
        style={{ backgroundColor: "#FBF8F5" }}
      >
        <h4 style={{ color: "#58849B", marginBottom: "2rem" }}>
          NEED DOCTOR RECOMMENDATIONS ?
        </h4>
        <p>
          By joining our community, you'll be able to talk and get first-hand
          recommendations of <br /> doctors from people going through the same
          Autoimmune condition as yours.
        </p>
        <Row className="text-center m-4">
          <Link to={`/signup`}>
            <Image loading="lazy" src="/images/buttons/join-us.svg" />
          </Link>
        </Row>
      </Row>

      <Row className="text-center py-3 my-3">
        <h4 style={{ color: "#58849B", marginBottom: "2rem" }}>
          How long do treatments last ?
        </h4>
        <p>
          The main treatment for autoimmune diseases is with medications that
          bring down inflammation and calm the overactive immune response.
          Treatments can also help relieve symptoms. Treatments can last from a
          few months to few years depending on your body's reaction
        </p>
      </Row>
    </>
  );
};

export default diseasesScreen;
