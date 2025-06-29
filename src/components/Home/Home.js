import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileIllustration from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section id="home">
      <Container fluid className="home-section">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading mb-3">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I’M <strong className="main-name">PRAKASH RAJWAR</strong>
              </h1>

              <div className="typewriter-box">
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-img-col">
              <img
                src={profileIllustration}
                alt="Prakash Illustration"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
