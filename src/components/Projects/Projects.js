import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nasa from "../../Assets/Projects/nasa.png";
import homebnb from "../../Assets/Projects/homebnb.png";

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
              imgPath={homebnb}
              isBlog={false}
              title="Homebnb"
              description="This full-stack web application, Homebnb, offers a platform for users to explore, book, and manage vacation rentals. 
              Built with Next.js and TypeScript, the application provides a responsive and user-friendly interface, enabling users to browse property listings, view detailed descriptions, and select their preferred dates for booking. 
              Integrated with Stripe for secure payments, Homebnb ensures a smooth transaction process. 
              The platform also includes a comprehensive booking management system, where users can view, modify, or cancel their reservations. 
              Homebnb is designed to make vacation planning effortless and enjoyable."
              ghLink="https://github.com/YaoyiW27/Homebnb"
              demoLink="https://youtu.be/snUfxT_pMYM" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="Cosmic Explorer"
              description="This web application leverages NASA's Open APIs to bring space exploration and astronomical wonders closer to the public. This platform will captivate users with the Astronomy Picture of the Day, offering images, explanations, and dates, while also providing a Daily Earth Photos Gallery for immersive exploration. 
              Users can search for specific Astronomy Pictures, and experience the oddity of earth through the View Natural Event feature."
              ghLink="https://github.com/YaoyiW27/CS5001"
              demoLink="https://youtu.be/FZcuDyRFKnQ" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;