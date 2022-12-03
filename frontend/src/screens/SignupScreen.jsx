import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  const diseasesArray = [
    "Achalasia",
    "Addison's Disease +",
    "Adult Onset Still's Disease ^",
    "Alopecia Areata",
    "Amyloidosis +",
    "Ankylosing Spondylitis (AS)",
    "Antiphospholipid Syndrome (APS)",
    "Aplastic Anemia",
    "Autoimmune Autonomic Ganglionopathy (AAG)",
    "Autoimmune Encephalitis",
    "Autoimmune Hemolytic Anemia +",
    "Autoimmune Hepatitis",
    "Autoimmune Inner Ear Disease (AIED) +",
    "Autoimmune Myocarditis",
    "Autoimmune Neutropenia +",
    "Autoimmune Oophoritis",
    "Autoimmune Pancreatitis",
    "Autoimmune Polyglandular Syndrome +",
    "Autoimmune Progesterone Dermatitis (APD) +",
    "Autoimmune Retinopathy",
    "Autoimmune Urticaria",
    "Axonal Neuropathy (AMAN)",
    "Behcet Syndrome +",
    "Berger’s Disease",
    "Bullous Pemphigoid",
    "Castleman Disease (CD) +",
    "Celiac Disease",
    "Chagas Disease ^",
    "Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)",
    "Chronic Recurrent Multifocal Osteomyelitis (CRMO)",
    "Cicatricial Pemphigoid +",
    "Cogan's Syndrome +",
    "Cold Agglutinin Disease (CAD)",
    "Coxsackie Virus ^",
    "Coxsackie Virus in Adults ^",
    "CREST Syndrome +",
    "Crohn's Disease",
    "Dermatitis Herpetiformis (DH)",
    "Dermatomyositis",
    "Discoid Lupus",
    "Dressler Syndrome (Pericarditis)",
    "Dressler’s syndrome",
    "Eosinophilic Esophagitis (EoE) +",
    "Eosinophilic Fasciitis +",
    "Eosinophilic Granulomatosis Polyangiitis (EGPA)",
    "Epstein Barr Virus ^",
    "Evans Syndrome +",
    "Fibromyalgia ^",
    "Giant Cell Arteritis",
    "Glomerulonephritis +",
    "Goodpasture Syndrome +",
    "Graves' Disease",
    "Guillain-Barre Syndrome +",
    "Hashimoto's Thyroiditis",
    "Helicobacter Pylori Disease ^",
    "Henoch-Schonlein Purpura (HSP)",
    "Hidradenitis Suppurativa ^",
    "Immune Thrombocytopenic Purpura +",
    "Inclusion Body Myositis",
    "Interstitial Cystitis (IC) ^",
    "Juvenile Dermatomyositis +",
    "Juvenile Diabetes",
    "Juvenile Idiopathic Arthritis (JIA)",
    "Juvenile Rheumatoid Arthritis (JRA)",
    "Kawasaki Disease +",
    "Lambert Eaton Syndrome +",
    "Leukocytoclastic Vasculitis ^",
    "Lichen Planus",
    "Lipedema ^",
    "Lupus",
    "Lyme Disease Chronic",
    "Membranous Nephropathy",
    "Mixed Connective Tissue Disease (MCTD) +",
    "MTHFR Gene Mutations: C677T and A1298C ^",
    "Multiple Sclerosis (MS)",
    "Myasthenia Gravis (MG)",
    "Myositis",
    "Narcolepsy",
    "Neonatal Lupus +",
    "Neuromyelitis Optica Spectrum Disorder (NMOSD)",
    "Norovirus ^",
    "Ocular Cicatricial Pemphigoid +",
    "Optic Neuritis ^",
    "Palindromic Rheumatism ^",
    "PANDAS Disease",
    "Pemphigus Vulgaris",
    "Pernicious Anemia (PA) +",
    "POEMS Syndrome ^",
    "Polyarteritis Nodosa +",
    "Polymyalgia Rheumatica (PMR)",
    "Polymyositis",
    "POTS Disease ^",
    "Primary Biliary Cholangitis (PBC)",
    "Primary Biliary Cirrhosis (PBC)",
    "Primary Sclerosing Cholangitis ^",
    "Psoriasis Autoimmune",
    "Psoriatic Arthritis",
    "Pure Red Cell Aplasia (PRCA) +",
    "Raynaud's Disease ^",
    "Reactive Arthritis",
    "Relapsing Polychondritis +",
    "Rheumatic Fever",
    "Rheumatoid Arthritis (RA)",
    "Scleroderma +",
    "Sjögrens Disease",
    "Spondyloarthropathy Seronegative",
    "Stiff Person's Syndrome (SPS)",
    "Streptococcal Infection ^",
    "Subacute Bacterial Endocarditis (SBE) ^",
    "Susac Syndrome +",
    "Sympathetic Ophthalmia (SO) +",
    "Transverse Myelitis",
    "Type 1 Diabetes",
    "Ulcerative Colitis",
    "Undifferentiated Connective Tissue Disease (UCTD)",
    "Uveitis",
    "Vasculitis +",
    "Vitiligo",
  ];

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
            <h4 style={{ color: "#FBA474" }}>Are you a </h4>
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
              <Form.Label>
                Select AI Disease *
                <p>
                  ^ autoimmune-related disease or virus <br /> + rare autoimmune
                  disease
                </p>
              </Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="AI Disease *"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                required
              /> */}
              <Form.Control
                as="select"
                value={disease}
                placeholder="AI Disease *"
                onChange={(e) => setDisease(e.target.value)}
                required
              >
                {diseasesArray.map((disease) => (
                  <option value={disease}>{disease}</option>
                ))}
              </Form.Control>
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
              <Form.Label>
                Password should be atleast 8 characters long with atleast 1
                uppercase, 1 lowercase alphabet, 1 special character and 1 digit
              </Form.Label>
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
