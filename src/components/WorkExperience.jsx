import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  UncontrolledTooltip
} from "reactstrap";

import Bounce from "react-reveal/Bounce";

function WorkExperience(props) {
  return (
    <div
      className="section section-typo section-padding-20"
      id="workexperience"
    >
      <div className="squares square3" />
      <div className="squares square-7" />
      <div className="squares square5" />
      <div className="squares square6 shadow-10" />

      <Container>
        <Bounce left>
          <h1 className="title">Work Experience</h1>
        </Bounce>
        <hr className="line-info" style={{ width: "284px" }} />
        <div className="space-50" />
        <div>
          <Row>
            <Col md="12">
              <Bounce right>
                <Card className="card-rounded card-shadow-10 card-background">
                  <CardTitle className="content-center">
                    <div className="space-30 " />
                    <div class="d-flex justify-content-center">
                      <img
                        alt="Incline Artificial Intelligence"
                        className="d-block content-center"
                        src={require("../assets/img/ab-logo.png")}
                        style={{ width: "150px" }}
                        id="iai"
                      />
                      <UncontrolledTooltip
                        placement="top"
                        target="iai"
                        delay={0}
                      >
                        ALPHABOLD - MICROSOFT GOLD PARTNERS
                      </UncontrolledTooltip>
                    </div>
                  </CardTitle>

                  <CardBody>
                    <span>Position</span>
                    <h4>Software Engineer (AI & IoT team) </h4>
                    <h4>September, 2018 - Present</h4>
                    <span>Details</span>
                    <h5>
                      <ul>
                        <li>Did XYZ</li>
                        <li>Did XYZ</li>
                        <li>Did XYZ</li>
                        <li>Did XYZ</li>
                        <li>Did XYZ</li>
                        <li>Did XYZ</li>
                      </ul>
                    </h5>
                  </CardBody>

                  <CardFooter className="text-center">
                    <Button
                      className="btn-info btn-round btn-sm"
                      color="primary"
                      href="https://alphabold.com/"
                      id="w1"
                    >
                      <i class="fas fa-globe project-icon" />
                    </Button>
                    <UncontrolledTooltip placement="top" target="w1" delay={0}>
                      View Website
                    </UncontrolledTooltip>
                    <Button
                      className="btn-info btn-round btn-sm"
                      color="primary"
                      href="https://www.linkedin.com/company/alphabold/"
                      id="li1"
                    >
                      <i className="fab fa-linkedin project-icon" />
                    </Button>
                    <UncontrolledTooltip placement="top" target="li1" delay={0}>
                      View on LinkedIn
                    </UncontrolledTooltip>
                    <Button
                      className="btn-info btn-round btn-sm"
                      color="primary"
                      href="https://web.facebook.com/alphabold"
                      id="fb1"
                    >
                      <i className="fab fa-facebook-square project-icon" />
                    </Button>
                    <UncontrolledTooltip placement="top" target="fb1" delay={0}>
                      View on Facebook
                    </UncontrolledTooltip>
                  </CardFooter>
                </Card>
              </Bounce>
            </Col>

            <Col md="12">
              <Bounce left>
                <Card className="card-rounded card-shadow-10 card-background">
                  <CardTitle className="content-center">
                    <div className="space-30 " />
                    <div class="d-flex justify-content-center">
                      <img
                        alt="Automotive Artificial Intelligence"
                        className="d-block content-center"
                        src={require("../assets/img/advcom-logo.png")}
                        style={{ width: "300px" }}
                        id="aai"
                      />
                      <UncontrolledTooltip
                        placement="top"
                        target="aai"
                        delay={0}
                      >
                        Advanced Communications
                      </UncontrolledTooltip>
                    </div>
                  </CardTitle>

                  <CardBody>
                    <Row>
                      <Col className="text-justify" md="12">
                        <span>Position</span>
                        <h4>Software Engineer Intern</h4>
                        <h4>October, 2017 - September, 2018</h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-justify" md="12">
                        <span>Details</span>
                        <h5>
                          <ul>
                            <li>Did XYZ</li>
                            <li>Did XYZ</li>
                            <li>Did XYZ</li>
                            <li>Did XYZ</li>
                            <li>Did XYZ</li>
                            <li>Did XYZ</li>
                          </ul>
                        </h5>
                      </Col>
                    </Row>
                  </CardBody>

                  <CardFooter className="text-center">
                    <Button
                      className="btn-info btn-round btn-sm"
                      color="primary"
                      href="http://advcomm.net/"
                      id="w2"
                    >
                      <i class="fas fa-globe project-icon" />
                    </Button>
                    <UncontrolledTooltip placement="top" target="w2" delay={0}>
                      View Website
                    </UncontrolledTooltip>
                  </CardFooter>
                </Card>
              </Bounce>
            </Col>
          </Row>

          <img
            alt="..."
            className="path"
            src={require("../assets/img/path5.png")}
            style={{ width: "900px" }}
          />
        </div>
        {/* <div className="space-50" /> */}
      </Container>
    </div>
  );
}

export default WorkExperience;
