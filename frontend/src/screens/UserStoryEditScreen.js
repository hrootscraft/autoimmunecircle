import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Image, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";
import { STORY_UPDATE_RESET } from "../constants/storyConstants";
import { updateStory } from "../actions/storyActions";
import axios from "axios";

const UserStoryEditScreen = () => {
  const params = useParams();
  const userId = params.id;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [about, setAbout] = useState("");
  const [story, setStory] = useState("");
  const [cure, setCure] = useState("");
  const [impact, setImpact] = useState("");
  const [photo, setPhoto] = useState("");
  const [gramId, setGramId] = useState("");
  const [isApproved, setIsApproved] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = async (e) => {
    //here, we upload only a single image so select from the array (sized 1 here) first element
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setPhoto(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateStory({
        _id: userId,
        about,
        story,
        cure,
        impact,
        isApproved,
        photo,
        gramId,
      })
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
      navigate("/admin/page/1");
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setAbout(user.about);
        setStory(user.story);
        setCure(user.cure);
        setImpact(user.impact);
        setPhoto(user.photo);
        setGramId(user.gramId);
        setIsApproved(user.isApproved);
      }
    }
  }, [dispatch, navigate, userId, user, successUpdate]);
  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        style={{ backgroundColor: "#FBA474", margin: "2rem 2rem 2rem 0" }}
      >
        Go Back
      </Button>
      <Row
        style={{
          border: " 0.1rem solid #FBA474",
          padding: "2rem",
        }}
      >
        <h5>EDIT STORY</h5>
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
                <p>
                  Name: {user.name} <br />
                  DOB: {user.dob} <br />
                  Email: {user.email} <br />
                  Gender: {user.gender} <br />
                  Disease: {user.disease} <br />
                  Diagnosed On: {user.diagnosedOn} <br />
                  City: {user.city} <br />
                  State: {user.state} <br />
                  Country: {user.country}
                </p>
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

                <Form.Group className="mb-3">
                  <Form.Label>Upload your picture</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/x-png,image/jpg, image/jpeg"
                    onChange={uploadFileHandler}
                    custom
                  />
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Instagram Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="@johndoe"
                    value={gramId}
                    onChange={(e) => setGramId(e.target.value)}
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
