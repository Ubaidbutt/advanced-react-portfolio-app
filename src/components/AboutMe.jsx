import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Bounce from "react-reveal/Bounce";

function AboutMe(props) {
  const isMobile = window.innerWidth < 480;
  var renderHTML;

  if (isMobile) {
    renderHTML = (
      <div>
        <Bounce bottom>
          <img
            alt="..."
            className="img-fluid rounded-circle shadow-20"
            src={require("../assets/img/Profile.jpg")}
            style={{
              width: "200px",
              display: "block",
              margin: "auto",
              marginBottom: "40px"
            }}
          />
        </Bounce>
        <div>
          <Bounce right>
            <h2
              style={{
                textAlign: "justify"
              }}
            >
              Highly determined and resourceful Software engineer, Machine
              learning enthusiast and occasional tech writer. I love the
              collaborative nature of problem solving and to develop solutions
              that can help businesses grow.
            </h2>
          </Bounce>
        </div>
      </div>
    );
  } else {
    renderHTML = (
      <Row>
        <Col xs={2} md={2}>
          <Bounce bottom>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-20"
              src={require("../assets/img/Profile.jpg")}
              style={{ width: "250px" }}
            />
          </Bounce>
        </Col>
        <Col xs={4} md={10}>
          <div className="typography-line">
            <Bounce right>
              <h2>
                Highly determined and resourceful Software engineer, Machine
                learning enthusiast and occasional tech writer. I love the
                collaborative nature of problem solving and to develop solutions
                that can help businesses grow.
              </h2>
            </Bounce>
          </div>
        </Col>
      </Row>
    );
  }

  return (
    <div className="section section-typo section-padding-20" id="aboutme">
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6 shadow-10" />
      <div className="squares square5" />

      <Container>
        <Bounce left>
          <h1 className="title">About Me</h1>
        </Bounce>
        <hr className="line-info" style={{ width: "160px" }} />
        <div className="space-50" />

        {renderHTML}
      </Container>
    </div>
  );
}

export default AboutMe;
