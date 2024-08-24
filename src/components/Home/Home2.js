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
              Growing up in the mountains of <b className="purple">Guizhou</b> as a member of the <b className="purple">Miao ethnic minority</b>, 
              I was immersed in the rich cultural heritage of my community, such as Miao batik and embroidery. 
              Observing efforts to promote our culture through English signs and maps, 
              I realized that more could be done to make <b className="purple">Miao culture</b> accessible to a broader audience. 
              This realization inspired me to explore how <b className="purple">technology</b> could <b className="purple">bridge cultural gaps</b> and <b className="purple">share our heritage with the world</b>.
              <br />
              <br />
              Driven by my deep-rooted interest in cultural exchange and language, I focused on understanding diverse cultures and their expressions.
              I transitioned from a Bachelor of Arts in English and a minor in Finance to pursuing a Master of Science in Computer Science at Northeastern University.
              My academic journey has provided me with a <b className="purple">multidisciplinary perspective</b>, enriching my approach to problem-solving in the tech industry. 
              Currently, I am focusing on building my expertise in software development and am <b className="purple">actively seeking opportunities for a 2025 summer/fall internship in software development or related fields</b>, where I can contribute to innovative and impactful projects.
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
