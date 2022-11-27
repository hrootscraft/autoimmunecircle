import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

const diseasesScreen = () => {
  return (
    <>
      <Row className="mt-5 text-center">
        <h4 style={{ color: "#58849B" }}>What are Autoimmune Diseases ?</h4>
        <p>
          'Autoimmune' represents a category of at least a hundred diseases. An
          Autoimmune problem develops when our bodies make too many killer T
          cells or antibodies and then fails to turn it off so the immune
          reaction doesn't stop. It also happens when the immune cells are
          attacking your body's own tissues when they should only be attacking
          outsiders. Put all these problems together and the result is
          inflammation and damage to cells & organs.
        </p>
        <p>
          Many of the Autoimmune conditions have similar characteristics. They
          are all serious chronic diseases with an underlying problem in the
          immune system. The main difference between each type is that the
          immune cells target and attack tissues in different parts of the body.
          Many autoimmune diseases are set of by similar triggers such as
          gluten, heavy metals, toxins, infections, stress.
        </p>
      </Row>

      <Row
        className="text-center py-3 my-3"
        style={{ backgroundColor: "#FBF8F5" }}
      >
        <h4 style={{ color: "#58849B" }}>Common Types</h4>

        <Row>
          <Col md={3} sm={6} xs={6}>
            <Row>
              <Image
                className="my-2 mx-2"
                height={100}
                width={100}
                src="/images/diseases/celliac-disease.svg"
              />
              <Row>
                <em>Celliac Disease</em>
              </Row>
            </Row>
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Row>
              <Image
                className="my-2 mx-2"
                height={100}
                width={100}
                src="/images/diseases/graves-disease.svg"
              />
              <Row>
                <em>Graves Disease</em>
              </Row>
            </Row>
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Row>
              <Image
                className="my-2 mx-2"
                height={100}
                width={100}
                src="/images/diseases/hashimotos-thyroiditis.svg"
              />
              <Row>
                <em>Hashimoto's Thyroiditis</em>
              </Row>
            </Row>
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Row>
              <Image
                className="my-2 mx-2"
                height={100}
                width={100}
                src="/images/diseases/lupus.svg"
              />
              <Row>
                <em>Lupus</em>
              </Row>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={3} sm={6} xs={6}>
            <Row>
              <Image
                className="my-2 mx-2"
                height={100}
                width={100}
                src="/images/diseases/multiple-sclerosis.svg"
              />
              <Row>
                <em>Multiple Sclerosis</em>
              </Row>
            </Row>
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Row>
              <Image
                className="my-2 mx-2"
                height={100}
                width={100}
                src="/images/diseases/rheumatoid-artheristis.svg"
              />
              <Row>
                <em>Rheumatoid Artheristis</em>
              </Row>
            </Row>
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Row>
              <Image
                className="my-2 mx-2"
                height={100}
                width={100}
                src="/images/diseases/sjogrens-syndrome.svg"
              />
              <Row>
                <em>Sjogren's Syndrome</em>
              </Row>
            </Row>
          </Col>

          <Col md={3} sm={6} xs={6}>
            <Row>
              <Image
                className="my-2 mx-2"
                height={100}
                width={100}
                src="/images/diseases/myasthesia-gravis.svg"
              />
              <Row>
                <em>Myasthesia Gravis</em>
              </Row>
            </Row>
          </Col>
        </Row>

        <p className="mt-5">
          There are more than 80 types of autoimmune diseases that attack all
          parts of the body and some of them have similar symptoms. Here, we
          have listed some of the common types.
        </p>
      </Row>

      <Row className="text-center mt-5">
        <Col md={6}>
          <h4 style={{ color: "#58849B" }}>
            Which doctor treats Ai Diseases ?
          </h4>
          <p>
            There is no one doctor who treats Autoimmune diseases. Which doctor
            you need depends on which body systems are affected by your
            particular autoimmune disease. In some cases, you may need to see a
            variety of different health care professionals to help manage your
            symptoms and slow the progression of your disease.
          </p>
        </Col>

        <Col md={6}>
          <h4 style={{ color: "#FBA474" }}>NEED DOCTOR RECOMMENDATIONS ?</h4>
          <p>
            By joining our community, you'll be able to talk and get first-hand
            recommendations of doctors from people going through the same
            Autoimmune condition as yours.
          </p>
          <Button variant="link">Ask Right Away</Button>
        </Col>
      </Row>

      <Row
        className="text-center py-3 my-3"
        style={{ backgroundColor: "#D9F6FD" }}
      >
        <h4 style={{ color: "#58849B" }}>How long do treatments last ?</h4>
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
