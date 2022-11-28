import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const SignupScreen = () => {
  const [item, setItem] = useState({ pg: "", gender: "" });
  const { pg, gender } = item;

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
            <Form.Group controlId="pg">
              <Form.Check
                value="patient"
                type="radio"
                aria-label="Patient"
                label="Patient"
                checked={pg === "patient"}
              />
              <Form.Check
                value="guardian"
                type="radio"
                aria-label="Guardian"
                label="Guardian"
                checked={pg === "guardian"}
              />
            </Form.Group>
            <br />

            <h4 style={{ color: "#FBA474" }}>Patient Info</h4>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Full Name *" required />
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Check
                value="female"
                type="radio"
                aria-label="Female"
                label="Female"
                checked={gender === "female"}
              />
              <Form.Check
                value="male"
                type="radio"
                aria-label="Male"
                label="Male"
                checked={gender === "male"}
              />
              <Form.Check
                value="other"
                type="radio"
                aria-label="Other"
                label="Other"
                checked={gender === "other"}
              />
            </Form.Group>
            <br />

            <Form.Group className="mb-3">
              <Form.Label>Date of Birth *</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="City" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Country" />
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
