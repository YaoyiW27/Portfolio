import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My Journey into <span className="purple"> Tech </span> 🖥️
            </h1>
            <p className="home-about-body">
              Transitioning from a Bachelor of Arts to the dynamic world of technology, 
              I embarked on an exciting journey at Northeastern University through the Computer Science - Align program.
              My passion for embracing new technologies has driven me forward,
              and I am actively seeking co-op/intern opportunities in software development or QA testing to apply my growing knowledge.
              <br />
              <br />
              My academic adventure began with Python and Discrete Structures(23FA).
              This semester(24SP), I'm delving into Java, C, Data Structures and Algorithms.
              Beyond the classroom, I've been independently exploring web development,
              using tools like HTML, CSS, JavaScript, jQuery, Node.js, Express.js, React, and various Web APIs to broaden my skill set.
              <br />
              <br />
              With a heart open to learning and a mind brimming with ideas, 
              I am ready to dive into the <b className="purple">Tech</b> world.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/YaoyiW27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yaoyiw20010527/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
