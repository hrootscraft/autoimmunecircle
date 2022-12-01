import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listStoryDetails } from "../actions/storyActions";

const AiStoryScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const storyDetails = useSelector((state) => state.storyDetails);
  const { loading, error, story } = storyDetails;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate("/login");
  //   } else {
  //     dispatch(listStoryDetails(id));
  //   }
  // }, [userInfo, navigate, dispatch, id]);

  useEffect(() => {
    dispatch(listStoryDetails(id));
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Row>
                <h4 style={{ color: "#58849B" }}>{story.name}</h4>
                <p>
                  {story.disease} <br />
                  Diagnosed On: {story.diagnosedOn} <br />
                  Location: {story.city}, {story.country}
                </p>
              </Row>
              <Row>
                <h4 style={{ color: "#FBA474" }}>About Me</h4>
                <p>{story.about}</p>
              </Row>
              <Row>
                <Image className="mb-5" fluid src={story.photo} />
              </Row>
            </Col>

            <Col md={6}>
              <Row>
                <h4 style={{ color: "#FBA474" }}>My Autoimmune Story</h4>
                <p>{story.story}</p>
              </Row>
              <Row>
                <h4 style={{ color: "#FBA474" }}>How I reduced symptoms ?</h4>
                <p>{story.cure}</p>
              </Row>
              <Row>
                <h4 style={{ color: "#FBA474" }}>
                  How has having an Autoimmune disorder changed my life ?
                </h4>
                <p>{story.impact}</p>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default AiStoryScreen;
