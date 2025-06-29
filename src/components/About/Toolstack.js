import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiNetlify,
  SiGithub,
  SiAdobeacrobatreader,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify title="Netlify" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeacrobatreader title="Adobe Acrobat" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos title="macOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows" />
      </Col>
    </Row>
  );
}

export default Toolstack;
