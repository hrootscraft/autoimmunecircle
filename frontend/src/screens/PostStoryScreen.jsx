import React, { useEffect, useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postStory } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostStoryScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [about, setAbout] = useState("");
  const [story, setStory] = useState("");
  const [cure, setCure] = useState("");
  const [impact, setImpact] = useState("");
  const [photo, setPhoto] = useState("");
  const [gramId, setGramId] = useState("");
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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postStory({ id, story, about, cure, impact, gramId, photo }));
    navigate("/ai-stories");
  };

  return (
    <>
      <Row
        style={{ backgroundColor: "#FBF8F5" }}
        className="text-center p-3 mb-2"
      >
        <p>
          We like to think of 'Autoimmune Community' as a storybook; a
          storybook, that is bound with the threads of support and
          encouragement. Your story is no less than a saga itself. It is
          important to us and hence we will always await it. You are now, just a
          few clicks away from being someone's reason to face another day with a
          smile!
        </p>
      </Row>

      {userInfo && userInfo.hasPostedStory ? (
        <Row className="text-center">
          <Message>
            {" "}
            <p>You have already posted a story.</p>{" "}
            <p>
              Look out for it to get featured on our stories page or our
              instagram handle.
            </p>{" "}
          </Message>
        </Row>
      ) : (
        <Row
          style={{
            border: " 0.1rem solid #FBA474",
            padding: "2rem",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Can you tell us a bit about yourself ? *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Family, location, work etc."
                required
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
                required
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Tell us about some things that have helped you reduce symptoms *
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Lifestyle changes (diet or fitness or meditation), other remedies"
                required
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
                required
                value={impact}
                onChange={(e) => setImpact(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload your 1:1 image</Form.Label>
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

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                required
                label="I permit AUTOIMMUNECIRCLE to share this information on their
                social media pages and/or on their website www.autoimmunecircle.org .               
                I also understand that Autoimmune Circle holds the right to modify specific information provided by me which may 
                be inappropriate for the website/social media."
              />
            </Form.Group>

            <Button style={{ backgroundColor: "#FBA474" }} type="submit">
              SUBMIT
            </Button>
          </Form>
        </Row>
      )}
    </>
  );
};

export default PostStoryScreen;
