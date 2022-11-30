import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Image, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";
import { STORY_UPDATE_RESET } from "../constants/storyConstants";
import { Link } from "react-router-dom";
import { updateStory } from "../actions/storyActions";

const UserStoryEditScreen = () => {
  const params = useParams();
  const userId = params.id;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [about, setAbout] = useState("");
  const [story, setStory] = useState("");
  const [cure, setCure] = useState("");
  const [impact, setImpact] = useState("");
  const [isApproved, setIsApproved] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateStory({ _id: userId, about, story, cure, impact, isApproved })
    );
  };

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const storyUpdate = useSelector((state) => state.storyUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = storyUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: STORY_UPDATE_RESET });
      navigate("/admin/");
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setAbout(user.about);
        setStory(user.story);
        setCure(user.cure);
        setImpact(user.impact);
        setIsApproved(user.isApproved);
      }
    }
  }, [dispatch, navigate, userId, user, successUpdate]);
  return (
    <>
      <Link to="/admin" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row
        style={{
          border: " 0.1rem solid #FBA474",
          padding: "2rem",
        }}
      >
        <h3>EDIT STORY</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              <Col md={6} className="p-2">
                <Image fluid src={user.photo} alt="User Image"></Image>
              </Col>
              <Col md={6} className="p-2">
                <h5>Name: {user.name}</h5>
                <h5>DOB: {user.dob}</h5>
                <h5>Email: {user.email}</h5>
                <h5>Gender: {user.gender}</h5>
                <h5>Disease: {user.disease}</h5>
                <h5>Diagnosed On: {user.diagnosedOn}</h5>
                <h5>City: {user.city}</h5>
                <h5>State: {user.state}</h5>
                <h5>Country: {user.country}</h5>
              </Col>
            </Row>
            <Row className="mt-3">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Can you tell us a bit about yourself ? *
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Family, location, work etc."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tell us about your autoimmune story *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Symptoms, diagnosis, type, doctors, treatments etc."
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    Tell us about some things that have helped you reduce
                    symptoms *
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Lifestyle changes (diet or fitness or meditation), other remedies"
                    value={cure}
                    onChange={(e) => setCure(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    How has having an autoimmune disease affected your life,
                    positively and negatively ? *
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Share your highs and lows, and encouraging quotes that keep you going"
                    value={impact}
                    onChange={(e) => setImpact(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="isadmin">
                  <Form.Check
                    type="checkbox"
                    label="Approve Story"
                    checked={isApproved}
                    onChange={(e) => setIsApproved(e.target.checked)}
                  ></Form.Check>
                </Form.Group>

                {/* <Form.Group className="mb-3">
              <Form.Label>Upload your picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/x-png,image/jpg"
                onChange={uploadFileHandler}
                custom
              />
              {uploading && <Loader />}
            </Form.Group> */}

                <Button style={{ backgroundColor: "#FBA474" }} type="submit">
                  UPDATE
                </Button>
              </Form>
            </Row>
          </>
        )}
      </Row>
    </>
  );
};

export default UserStoryEditScreen;
