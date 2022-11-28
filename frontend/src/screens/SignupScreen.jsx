import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const SignupScreen = () => {
  const [pgRadio, setPgRadio] = useState({
    p: "parent",
    g: "guardian",
    selectedVal: "",
  });
  const handlePgChange = (e) => {
    setPgRadio({ ...pgRadio, selectedVal: e.target.value });
    console.log(pgRadio);
  };

  const [genRadio, setGenRadio] = useState({
    f: "female",
    m: "male",
    o: "other",
    selectedVal: "",
  });
  const handleGenChange = (e) => {
    setGenRadio({ ...genRadio, selectedVal: e.target.value });
    console.log(genRadio);
  };

  return (
    <>
      <Row>
        <Col
          style={{
            padding: "2rem",
            backgroundColor: "#F3F1EA",
          }}
          md={6}
          className="my-auto"
        >
          <Row>
            <h4 style={{ color: "#58849B" }}>Chat Freely</h4>
            <p>
              Sometimes all you need is someone to talk to. This is a safe place
              for you to vent your thoughts and feelings. Remember we are all in
              this together.
            </p>
          </Row>
          <Row>
            <h4 style={{ color: "#58849B" }}>Get your doubts answered</h4>
            <p>
              AI Diseases are comparitively rare and may have different symptoms
              Get your doubts easily answered by others on the forum
            </p>
          </Row>
          <Row>
            <h4 style={{ color: "#58849B" }}>No hidden charges</h4>
            <p>
              This website has been created solely for the purpose of connecting
              people. There are no hidden charges involved
            </p>
          </Row>
        </Col>

        <Col md={6}>
          <Form
            style={{
              border: " 0.1rem solid #FBA474",
              padding: "2rem",
            }}
          >
            <Form.Group required>
              <Form.Check
                value={pgRadio.p}
                type="radio"
                aria-label="Patient"
                label="Patient"
                onChange={handlePgChange}
                name="toggle_option_1"
              />
              <Form.Check
                value={pgRadio.g}
                type="radio"
                aria-label="Guardian"
                label="Guardian"
                onChange={handlePgChange}
                name="toggle_option_1"
              />
            </Form.Group>
            <br />

            <h4 style={{ color: "#FBA474" }}>Patient Info</h4>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Full Name *" required />
            </Form.Group>

            <Form.Group required>
              <Form.Check
                value={genRadio.f}
                type="radio"
                aria-label="Female"
                label="Female"
                onChange={handleGenChange}
                name="toggle_option"
              />
              <Form.Check
                value={genRadio.m}
                type="radio"
                aria-label="Male"
                label="Male"
                onChange={handleGenChange}
                name="toggle_option"
              />
              <Form.Check
                value={genRadio.o}
                type="radio"
                aria-label="Other"
                label="Other"
                onChange={handleGenChange}
                name="toggle_option"
              />
            </Form.Group>
            <br />

            <Form.Group className="mb-3">
              <Form.Label>Date of Birth *</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="City *" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="State *" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Country *" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="AI Disease *" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Diagnosed On *</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Email *" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Password *" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Confirm Password *"
                required
              />
            </Form.Group>

            <Button style={{ backgroundColor: "#FBA474" }} type="submit">
              SIGN UP
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SignupScreen;
