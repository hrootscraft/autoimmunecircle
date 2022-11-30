import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  const [currentPgRadioValue, setCurrentPgRadioValue] = useState("");
  const handlePgRadioChange = (e) => {
    setCurrentPgRadioValue(e.target.value);
  };

  const [currentGenRadioValue, setCurrentGenRadioValue] = useState("");
  const handleGenRadioChange = (e) => {
    setCurrentGenRadioValue(e.target.value);
  };

  const [currentDob, setCurrentDob] = useState("");
  const [diagnosedDate, setDiagnosedDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [disease, setDisease] = useState("");
  const [message, setMessage] = useState("");

  const registerData = {
    name,
    email,
    password,
    confirmPassword,
    phone,
    dob: currentDob,
    city,
    country,
    state,
    disease,
    diagnosedOn: diagnosedDate,
    isPatient: currentPgRadioValue,
    gender: currentGenRadioValue,
  };

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo && userInfo._id) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
    } else {
      dispatch(register(registerData));
    }
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Form
            style={{
              border: " 0.1rem solid #FBA474",
              padding: "2rem",
            }}
            onSubmit={handleSubmit}
          >
            <Form.Group required>
              <Form.Check
                value="patient"
                type="radio"
                aria-label="Patient"
                label="Patient"
                checked={currentPgRadioValue === "patient"}
                onChange={handlePgRadioChange}
                name="pg"
              />
              <Form.Check
                value="guardian"
                type="radio"
                aria-label="Guardian"
                label="Guardian"
                checked={currentPgRadioValue === "guardian"}
                onChange={handlePgRadioChange}
                name="pg"
              />
            </Form.Group>
            <br />

            <h4 style={{ color: "#FBA474" }}>Patient Info</h4>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group required>
              <Form.Check
                value="female"
                type="radio"
                label="Female"
                checked={currentGenRadioValue === "female"}
                onChange={handleGenRadioChange}
                name="gender"
              />
              <Form.Check
                value="male"
                type="radio"
                label="Male"
                checked={currentGenRadioValue === "male"}
                onChange={handleGenRadioChange}
                name="gender"
              />
              <Form.Check
                value="other"
                type="radio"
                label="Other"
                checked={currentGenRadioValue === "other"}
                onChange={handleGenRadioChange}
                name="gender"
              />
            </Form.Group>
            <br />

            <Form.Group className="mb-3">
              <Form.Label>Date of Birth *</Form.Label>
              <Form.Control
                type="date"
                value={currentDob}
                onChange={(e) => setCurrentDob(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="City *"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="State *"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Country *"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="AI Disease *"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Diagnosed On *</Form.Label>
              <Form.Control
                type="date"
                value={diagnosedDate}
                onChange={(e) => setDiagnosedDate(e.currentTarget.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Confirm Password *"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button style={{ backgroundColor: "#FBA474" }} type="submit">
              SIGN UP
            </Button>
          </Form>
          {message && <Message variant="danger">{message}</Message>}{" "}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
        </Col>
        <Col
          style={{
            padding: "2rem",
            backgroundColor: "#FBF8F5",
          }}
          md={6}
          className="mb-auto"
        >
          <Row>
            <h4 style={{ color: "#FBA474" }}>Chat Freely</h4>
            <p style={{ color: "#58849B" }}>
              Sometimes all you need is someone to talk to. This is a safe place
              for you to vent your thoughts and feelings. Remember we are all in
              this together.
            </p>
          </Row>
          <Row>
            <h4 style={{ color: "#FBA474" }}>Get your doubts answered</h4>
            <p style={{ color: "#58849B" }}>
              AI Diseases are comparitively rare and may have different symptoms
              Get your doubts easily answered by others on the forum
            </p>
          </Row>
          <Row>
            <h4 style={{ color: "#FBA474" }}>No hidden charges</h4>
            <p style={{ color: "#58849B" }}>
              This website has been created solely for the purpose of connecting
              people. There are no hidden charges involved
            </p>
          </Row>
          <Row className="py-3">
            <Col>
              <p>Have an account already ?</p>
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                <Button style={{ backgroundColor: "#FBA474" }}>Login</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SignupScreen;
