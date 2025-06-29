import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { SiMarkdown, SiVisualstudiocode, SiOxygen, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { FaGithub, FaRegFilePdf } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMarkdown title="Markdown" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOxygen title="Oxygen XML Editor" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRegFilePdf title="PDF Tools (Adobe, PDF-XChange)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript title="JavaScript (basic understanding)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs title="Next.js (for docs sites)" />
      </Col>
    </Row>
  );
}

export default Techstack;
