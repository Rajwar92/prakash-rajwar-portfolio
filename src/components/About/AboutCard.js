import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Prakash Rajwar</span> from 
            <span className="purple"> Bangalore, India</span>.
            <br />
            I work as a Senior Technical Writer and Documentation Specialist with over 10 years of experience.
            <br />
            My background spans SaaS, automotive, and aviation industries; focusing on developer-friendly docs, APIs, and scalable content systems.
            <br />
            <br />
            Outside of work, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Long road trips
            </li>
            <li className="about-activity">
              <ImPointRight /> Capturing moments through photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1rem" }}>
            “Documentation is not just about writing; it's about clarity, structure, and empathy for the reader.”
          </p>
          <footer className="blockquote-footer">Prakash Rajwar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
