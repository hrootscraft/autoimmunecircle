import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Person = ({ person }) => {
  return (
    <Card key={person._id} className="my-3 p-3">
      <Link to={`/ai-stories/${person._id}`}>
        <Card.Img height={300} width={300} src={person.photo} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/ai-stories/${person._id}`}>
          <Card.Title as="h4">{person.name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <div>{person.disease}</div>
          <div>
            {person.city}
            {", "}
            {person.country}
          </div>
          <div>{person.diagnosedOn}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Person;
