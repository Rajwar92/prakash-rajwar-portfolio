import React from "react";
import Tree from "react-d3-tree";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import blumeLogo from "../../Assets/Companies/blume.png";
import nexteerLogo from "../../Assets/Companies/nexteer.png";
import thoughtfocusLogo from "../../Assets/Companies/thoughtfocus.png";
import p3Logo from "../../Assets/Companies/p3.png";

function Experience() {
  const experienceTreeData = {
    name: "Professional Experience",
    children: [
      {
        name: "Blume Global (2021–Present)",
        attributes: {
          Role: "Sr. Specialist – Technical & Product Documentation",
          Description:
            "Lead end-user content including user guides, release notes, and API docs. Mentored team members and collaborated with Product Managers and Developers.",
          Link: "https://www.blumeglobal.com",
        },
      },
      {
        name: "Nexteer Automotive (2020–2021)",
        attributes: {
          Role: "Senior Technical Writer",
          Description:
            "Created documentation using IBM JAZZ, DOORS, and Rational Change. Focused on version control, requirement traceability, and procedural documentation.",
          Link: "https://www.nexteer.com",
        },
      },
      {
        name: "ThoughtFocus (2019–2020)",
        attributes: {
          Role: "Senior Engineer – Tech Docs",
          Description:
            "Authored STE-based IFE software manuals and led SME interviews, quality reviews, and structured documentation sets for aviation.",
          Link: "https://www.thoughtfocus.com",
        },
      },
      {
        name: "P3 Consulting & Engineering (2014–2019)",
        attributes: {
          Role: "Tech Pub Engineer",
          Description:
            "Led a documentation team. Managed ATA documentation (iSpec2200) for Lufthansa Technik and worked onsite in Hamburg, using Arbortext Editor and Oxygen XML.",
          Link: "https://www.p3-group.com",
        },
      },
    ],
  };

  return (
    <Container fluid className="Experience-section">
      <Particle />
      <Container>
        <div style={{ width: "100%", height: "600px" }}>
          <h1 className="Experience-heading">
            Professional <strong className="purple">Experience</strong>
          </h1>
          <p style={{ color: "white" }}>
            A snapshot of the roles and responsibilities I've held across industries.
          </p>
          <Tree data={experienceTreeData} orientation="vertical" />
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
