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
            I am currently pursuing a Master of Science in Computer Science at Northeastern University. 
            My academic journey is complemented by a Bachelor of Arts in English Language and Literature with a minor in Finance in China where I honed my analytical and communication skills. 
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
