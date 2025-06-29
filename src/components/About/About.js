import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png"; // Adjust path as per your actual image

function About() {
  return (
    <section id="about">
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row className="justify-content-center py-4">
            <Col md={7} className="pt-4 pb-5">
              <h1 className="section-title">
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <AboutCard />
            </Col>

            <Col md={5} className="about-img pt-5 pb-4">
              <img src={laptopImg} alt="About Illustration" className="img-fluid" />
            </Col>
          </Row>

          <h2 className="project-heading mt-4">
            Professional <strong className="purple">Skillset</strong>
          </h2>
          <Techstack />

          <h2 className="project-heading mt-5">
            <strong className="purple">Tools</strong> I use
          </h2>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </section>
  );
}

export default About;
