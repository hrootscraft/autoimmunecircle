import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
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
      <Row>
        <h3
          style={{
            color: "#FBA474",
            fontSize: "1.5rem",
            marginTop: "2rem",
          }}
        >
          Welcome Back!
        </h3>
      </Row>
      <Row>
        <Col md={6}>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form
            style={{
              border: " 0.1rem solid #FBA474",
              padding: "2rem",
            }}
            className="mt-5"
            onSubmit={submitHandler}
          >
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button style={{ backgroundColor: "#FBA474" }} type="submit">
              LOGIN
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <Row className="p-5 mt-5" style={{ backgroundColor: "#FBF8F5" }}>
            <h4 style={{ color: "#FBA474" }}>NEW HERE ?</h4>
            <p style={{ color: "#58849B" }}>
              We welcome you with open arms! Sign up to join our free exclusive
              member group
            </p>
            <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup"}>
              <Button style={{ backgroundColor: "#FBA474" }}>SIGN UP</Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LoginScreen;
