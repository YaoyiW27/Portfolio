import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi, I am <span className="purple">Yaoyi Wang </span>
            from <span className="purple"> Guiyang, Guizhou, China.</span>
            <br />
            <br />
            A MS in Computer Science student at Northeastern University with prior academic background including English Literature, Anthropology, and Finance.
            I have hands-on experience working with full-stack development, API design, and database management. 
            Currently, I am expanding my skills in Kotlin, Agile methodologies, Azure, and Spring Boot, driving my passion for building scalable applications and delivering innovative solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling & Hiking
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
