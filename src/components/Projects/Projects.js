import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nasa from "../../Assets/Projects/nasa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="Cosmic Explorer"
              description="This web application leverages NASA's Open APIs to bring space exploration and astronomical wonders closer to the public. This platform will captivate users with the Astronomy Picture of the Day, offering images, explanations, and dates, while also providing a Daily Earth Photos Gallery for immersive exploration. 
              Users can search for specific Astronomy Pictures, and experience the oddity of earth through the View Natural Event feature."
              ghLink="https://github.com/YaoyiW27/CS5001"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
