import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard({ role, company, duration, description, location }) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <Card.Title>{role}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {company} &middot; {location}
        </Card.Subtitle>
        <Card.Text>
          <strong>Duration:</strong> {duration}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
