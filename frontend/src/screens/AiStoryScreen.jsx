import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import axios from "axios";

const AiStoryScreen = () => {
  const [story, setStory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchStory = async () => {
      const data = await axios.get(`/api/ai-stories/${id}`);
      setStory(data.data[0]);
    };
    fetchStory();
  }, [id]);

  return (
    <>
      <Row className="text-center p-3" style={{ backgroundColor: "#FBF8F5" }}>
        <Col md={6}>
          <Image fluid src={story.photo} />
        </Col>
        <Col md={6} className="my-auto p-3">
          <h4 style={{ color: "#58849B" }}>{story.name}</h4>
          <p>{story.disease}</p>
          <p>From: {story.diagnosedOn}</p>
          <p>
            Location: {story.city}, {story.country}
          </p>
        </Col>
      </Row>
      <Row className="text-center m-3">
        <p>{story.about}</p>
      </Row>
      <Row className="text-center m-3">
        <h4 style={{ color: "#FBA474" }}>My Autoimmune Story</h4>
        {story.story}
      </Row>
      <Row className="text-center m-3">
        <h4 style={{ color: "#FBA474" }}>How I reduced symptoms ?</h4>
        {story.cure}
      </Row>
      <Row className="text-center m-3">
        <h4 style={{ color: "#FBA474" }}>
          How has having an Autoimmune disorder changed my life ?
        </h4>
        {story.impact}
      </Row>
    </>
  );
};

export default AiStoryScreen;
