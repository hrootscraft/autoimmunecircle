import React, { useState, useEffect } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  // if userInfo exists, we don't wanna go to the login screen
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo && userInfo._id) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

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
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form
        style={{
          border: " 0.1rem solid #FBA474",
          padding: "2rem",
        }}
        onSubmit={submitHandler}
      >
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
        <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup"}>
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
