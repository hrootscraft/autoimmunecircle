import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Button, Card, Image, ListGroup } from "react-bootstrap";
import people from "../people";

const AiStoryScreen = () => {
  const { id } = useParams();
  const person = people.find((p) => p._id === id);
  return <>{person.name}</>;
};

export default AiStoryScreen;
