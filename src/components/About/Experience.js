import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import ddc from "../../Assets/Experience/ddc.jpg";
import swarovski from "../../Assets/Experience/swarovski.jpg";
import voyager from "../../Assets/Experience/voyager.jpg";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the places where I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={swarovski}
              company="SWAROVSKI"
              title="Sales Associate (Seasonal)"
              duration="Nov 2023 – Dec 2023"
              description={[
                "Collaborated with product and development teams to integrate selling solutions, enhancing the customer shopping experience and driving sales.",
                "Delivered exceptional customer service by assisting with purchases, inquiries, and handling returns."
              ]}
              skills="Customer Service, Sales, Product Knowledge, Problem Solving, Retail Operations"
            />
          </Col>
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={voyager}
              company="Voyager Global"
              title="Overseas Operation and Data Analyst (Internship)"
              duration="Mar 2023 – Aug 2023"
              description={[
                "Collaborated with project and development teams to integrate operational solutions, utilizing Tableau for data visualization.",
                "Managed SCIFIDEA's community using a custom CRM system and optimized workflows using SQL databases."
              ]}
              skills="Data Visualization (Tableau), SQL, CRM, Project Management, Community Management"
            />
          </Col>
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={ddc}
              company="DDC Academy"
              title="Teaching Assistant (Internship)"
              duration="Aug 2021 – Sep 2021"
              description={[
                "Assisted in grading assignments and providing constructive feedback, resulting in improved academic performance.",
                "Served as a video editor for online course content archiving."
              ]}
              skills="Grading, Feedback, Video Editing, Academic Improvement, Time Management"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;