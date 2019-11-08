import React from "react";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import Bounce from "react-reveal/Bounce";

function Projects(props) {
  return (
    <div className="section section-typo section-padding-20" id="project">
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6 shadow-10" />

      <img
        alt="..."
        className="path"
        src={require("../assets/img/path3.png")}
      />
      <Container>
        <Bounce left>
          <h1 className="title">Projects</h1>
        </Bounce>
        <hr className="line-info" style={{ width: "140px" }} />
        <div className="space-50" />
        <Row>
          <Col md="4">
            <Bounce left>
              <Card className="card-coin card-background shadow-10 card-min-height">
                <CardTitle className="content-center text-center">
                  <div className="space-30" />
                  <h2>Server Health Checker</h2>
                  <h3> University Project</h3>
                  <h4>September, 2017 - September, 2018</h4>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    We three fellows worked on this problem of server failures
                    in a shared hosting environment and created an application
                    that ran as a daemon process (Window service) 24/7. The app
                    monitors all the processes running in the system. It keeps a
                    check on the resource utilization of each process and
                    generate alert through email and mobile messages. <br />{" "}
                    <br />
                    <b>Tools: </b> C++, Win API's, MFC (Microsoft foundation
                    classes), Python
                  </h5>
                </CardBody>
              </Card>
            </Bounce>
          </Col>

          <Col md="4">
            <Bounce left>
              <Card className="card-coin card-background shadow-10 card-min-height">
                <CardTitle className="content-center text-center">
                  <div className="space-30" />
                  <h2>Crime predictor</h2>
                  <h3> University Project</h3>
                  <h4>Feb, 2018</h4>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    As a semester project, I trained a supervised machine
                    learning model on the open-source dataset of San Francisco
                    crimes. The model predicted the category of crime with 87%
                    accuracy based on different features of the crime. <br />{" "}
                    <br />
                    <b>Tools: </b> Python, Sci-kit learn, Rapid Minor Studio
                  </h5>
                </CardBody>
              </Card>
            </Bounce>
          </Col>

          <Col md="4">
            <Bounce top>
              <Card className="card-coin card-background shadow-10 card-min-height">
                <CardTitle className="content-center text-center">
                  <div className="space-30" />
                  <h2 className="text-center">E-Vote Android Application</h2>
                  <h3> University Project</h3>
                  <h4>December, 2017</h4>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    I developed an android application as a semester project to
                    automate the electoral process of departmental society. The
                    students can register, login, vote and nominate for
                    different categories. The application provided an admin
                    portal to control the nominations and election time. <br />{" "}
                    <br />
                    <b>Tools: </b> Java, Android studio, SQLite
                  </h5>
                </CardBody>
              </Card>
            </Bounce>
          </Col>

          <Col md="4">
            <Bounce right>
              <Card className="card-coin card-background shadow-10 card-min-height">
                <CardTitle className="content-center text-center">
                  <div className="space-30" />
                  <h2 className="text-center">Chatroom for discussion</h2>
                  <h3> Personal project</h3>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    While I was learning about NodeJS, I got interested in real
                    time communication between client and server. Since Node is
                    heavily used for real time applications, I started learning
                    about socket communiction with Node. I build this project
                    that let's anyone join a chatroom and talk to other people
                    in the same room. <br /> <br />
                    <b>Tools: </b> NodeJS, Socket.IO, ES-6
                  </h5>
                </CardBody>
              </Card>
            </Bounce>
          </Col>

          <Col md="4">
            <Bounce left>
              <Card className="card-coin card-background shadow-10 card-min-height">
                <CardTitle className="content-center text-center">
                  <div className="space-30" />
                  <h2>Portfolio Application in React</h2>
                  <h3> Personal Project </h3>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    I build a simple portfolio application using React to
                    understand concepts such as Components, State & Props,
                    Component Life cycle, etc. This application you are viewing
                    is not entirely my work, it's taken from the open source &
                    customized for my own portfolio. <br /> <br />
                    <b>Tools: </b> ReactJS, ES-6
                  </h5>
                </CardBody>
              </Card>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
