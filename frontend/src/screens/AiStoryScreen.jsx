import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listStoryDetails } from "../actions/storyActions";
import { useNavigate } from "react-router-dom";

const AiStoryScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <Button
            onClick={() => navigate(-1)}
            style={{ backgroundColor: "#FBA474", margin: "2rem 2rem 2rem 0" }}
          >
            Go Back
          </Button>

          <Row
            style={{
              backgroundColor: "#FBF8F5",
              padding: "2rem",
            }}
            className="mt-3 mb-5"
          >
            <Col md={4} sm={12} className="my-auto">
              <Image height={300} fluid src={story.photo} />
            </Col>

            <Col className="my-auto" md={8} sm={12}>
              <h4 style={{ color: "#58849B" }} className="my-3">
                {story.name}
              </h4>
              <p>
                <span className="fw-bold">Type</span> : {story.disease} <br />
                <span className="fw-bold">Diagnosed On</span> :{" "}
                {story.diagnosedOn} <br />
                <span className="fw-bold">From</span> : {story.city},{" "}
                {story.country}
              </p>
              <p>{story.about}</p>
            </Col>
          </Row>

          <Row className="my-5">
            <h4 style={{ color: "#FBA474" }}>My Autoimmune Story</h4>
            <p>{story.story}</p>
          </Row>
          <Row className="mb-5">
            <h4 style={{ color: "#FBA474" }}>How I reduced symptoms ?</h4>
            <p>{story.cure}</p>
          </Row>
          <Row className="mb-5">
            <h4 style={{ color: "#FBA474" }}>
              How has having an Autoimmune disorder changed my life ?
            </h4>
            <p>{story.impact}</p>
          </Row>
        </>
      )}
    </>
  );
};

export default AiStoryScreen;
