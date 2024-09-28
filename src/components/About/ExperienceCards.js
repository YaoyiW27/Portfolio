import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCards(props) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <div className="experience-card-header">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.company}
            className="company-logo"
          />
          <Card.Title className="experience-card-title">
            {props.company}
          </Card.Title>
        </div>
        <Card.Subtitle className="experience-card-subtitle">
          {props.title}
        </Card.Subtitle>
        <Card.Text className="experience-card-description">
          {props.duration}
        </Card.Text>
        <ul className="experience-card-description">
          {props.description.map((item, index) => (
            <li key={index}>{item}</li>  // Convert description to bullet point
          ))}
        </ul>
        <Card.Text className="experience-card-skills">
          <strong>Skills: </strong> {props.skills}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCards;