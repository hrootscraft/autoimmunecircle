import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <h3
        style={{
          color: "#FBA474",
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "2rem",
        }}
      >
        WELCOME BACK!
      </h3>
      <Form
        style={{
          border: " 0.1rem solid #FBA474",
          padding: "2rem",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password *</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Button style={{ backgroundColor: "#FBA474" }} type="submit">
          LOGIN
        </Button>
      </Form>

      <Row className="text-center mt-5">
        <h4>NEW HERE ?</h4>
        <p>
          We welcome you with open arms! Sign up to join our free exclusive
          member group
        </p>
        <Link to={"/signup"}>
          <Button
            style={{ fontSize: "1.5rem", color: "#58849B" }}
            variant="link"
          >
            SIGN UP
          </Button>
        </Link>
      </Row>
    </>
  );
};

export default LoginScreen;
