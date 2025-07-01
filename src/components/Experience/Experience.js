import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import blumeLogo from "../../Assets/Companies/blume.png";
import nexteerLogo from "../../Assets/Companies/nexteer.png";
import thoughtfocusLogo from "../../Assets/Companies/thoughtfocus.png";
import p3Logo from "../../Assets/Companies/p3.png";

function Experience() {
  return (
    <Container fluid className="Experience-section">
      <Particle />
      <Container>
        <h1 className="Experience-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          A snapshot of the roles and responsibilities I've held across industries.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="Experience-card">
            <ExperienceCard
              imgPath={blumeLogo}
              title="Blume Global"
              description="As Sr. Specialist – Technical & Product Documentation (2021–Present), I lead end-user content including user guides, release notes, and API docs. I’ve mentored team members and collaborated closely with Product Managers and Developers."
              demoLink="https://www.blumeglobal.com"
            />
          </Col>

          <Col md={4} className="Experience-card">
            <ExperienceCard
              imgPath={nexteerLogo}
              title="Nexteer Automotive"
              description="Worked as Senior Technical Writer (2020–2021), creating documentation using IBM JAZZ, DOORS, and Rational Change. Focused on version control, requirement traceability, and procedural documentation."
              demoLink="https://www.nexteer.com"
            />
          </Col>

          <Col md={4} className="Experience-card">
            <ExperienceCard
              imgPath={thoughtfocusLogo}
              title="ThoughtFocus"
              description="Served as Senior Engineer – Tech Docs (2019–2020). Authored STE-based IFE software manuals and led SME interviews, quality reviews, and structured documentation sets for aviation."
              demoLink="https://www.thoughtfocus.com"
            />
          </Col>

          <Col md={4} className="Experience-card">
            <ExperienceCard
              imgPath={p3Logo}
              title="P3 Consulting & Engineering"
              description="From 2014 to 2019, I led a documentation team as a Tech Pub Engineer. Managed ATA documentation (iSpec2200) for Lufthansa Technik and worked onsite in Hamburg, using Arbortext Editor and Oxygen XML."
              demoLink="https://www.p3-group.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
