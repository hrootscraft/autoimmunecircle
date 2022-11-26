import React from "react";
import { Card } from "react-bootstrap";

const Person = ({ person }) => {
  return (
    <Card className="my-3 p-3">
      <a href={`/ai-stories/${person._id}`}>
        <Card.Img src={person.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/ai-stories/${person._id}`}>
        <Card.Title as="h4">
            {person.name}
        </Card.Title>
        </a>
        <Card.Text as="div">
            <div>
                {person.aiDisease}
            </div>
            <div>
                {person.city}{", "}{person.country}
            </div>
            <div>
                {person.diagnosedOn}
            </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Person;
