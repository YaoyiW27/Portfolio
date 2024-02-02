import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Yaoyi Wang </span>
            from <span className="purple"> China.</span>
            <br />
            <br />
            I enrolled in Computer Science - Align Program at Northeastern University in downtown Vancouver.
            <br />
            <br />
            I am also employed as an Overseas Operations Specialist(freelance) at Voyager Global. 
            <br />
            <br />
            Apart from coding, some other activities that I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies & Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Galleries & Museums
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life shrinks or expands in proportion with one’s courage"{" "}
          </p>
          <footer className="blockquote-footer">Anaïs Nin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
