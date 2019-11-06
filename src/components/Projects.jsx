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
                  <h2 className="text-center">Q/A Chatbot</h2>
                  <h3> AlphaBOLD project</h3>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    As part of my job, I took the intiative to explore the
                    chatbot development frameworks such as Microsoft Bot
                    framework, Google Dialogflow and RASA. Created an
                    opportunity for a chatbot with one of our clients, developed
                    the chatbot for their FAQ (Frequently asked questions) and
                    integrated with their wordpress site. <br /> <br />
                    <b>Tools: </b> Microsoft Bot Framework, QnA maker, Cognitive
                    services, Wordpress
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
                  <h2>Machine learning based Disease Classifier</h2>
                  <h3> AlphaBOLD Project </h3>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    I identified a manual process of data cleansing of one of
                    the clients related to heart diseases. Prepared the dataset
                    using webscrapping in Python and trained a Machine learning
                    model to predict disease names given raw text as input.
                    Deployed the model as web service in cloud and integrated
                    that with the ERP system (Dynamics CRM). <br /> <br />
                    <b>Tools: </b> Python, Pandas, Sci-kit learn, NLTK, Azure
                    Machine learning studio
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
                  <h2>Neural Network to predict RUL</h2>
                  <h3> AlphaBOLD Project </h3>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    Trained a neural network to predict the Remaining useful
                    life (RUL) of industrial motors. The model was trained on
                    historical data collected from IOT devices. Data features
                    included RMS values for currents, temperature, & vibration
                    telemetries. The feature engineering also included
                    converting the time signals into fourier domain to feed in
                    the neural network.
                    <br /> <br />
                    <b>Tools: </b> Python, Pandas, Sci-kit learn, Keras,
                    AzureMachine learning studio
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
                  <h2>Bold Archival service</h2>
                  <h3> AlphaBOLD Project </h3>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    Bold archival service is a back-end utility for integrating
                    two ERP systems: Microsoft Dynamics CRM and SharePoint. The
                    application runs on schedule and fetct attachments from CRM
                    through REST calls. It stores those attachments in
                    SharePoint specified folders. The folders and file uploading
                    is done through SharePoint Rest API. The application saves
                    cloud storage cost. <br /> <br />
                    <b>Tools: </b> NodeJS, ES-6, SharePoint & Dynamics CRM API's
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
                  <h2 className="text-center">IOT Gateway</h2>
                  <h3> AlphaBOLD project </h3>
                  <div className="space-30" />
                </CardTitle>
                <CardBody>
                  <span>Details</span>
                  <h5>
                    Designed and developed an IOT gateway to receive telemetry
                    data from IoT devices at a rate of 4 messages per
                    millisecond. The gateway supported two common IOT protocols
                    (AMQP & MQTT) & stored the data in a MongoDB database.{" "}
                    <br /> <br />
                    <b>Tools: </b> NodeJS, MongoDB, Mongoose, AMQP, MQTT
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
