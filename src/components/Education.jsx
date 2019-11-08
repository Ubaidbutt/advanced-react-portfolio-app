import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  UncontrolledTooltip
} from "reactstrap";

import Bounce from "react-reveal/Bounce";

function Education(props) {
  return (
    <div className="section section-typo section-padding-20" id="education">
      <div className="squares square3" />
      <div className="squares square7" />

      <Container>
        <Bounce left>
          <h1 className="title">Education</h1>
        </Bounce>
        <hr className="line-info" style={{ width: "170px" }} />
        <div className="space-50" />
        <div>
          <Row>
            <Col md="12">
              <Bounce right>
                <Card className="card-rounded card-background card-shadow-10">
                  <Bounce top>
                    <CardTitle className="content-center">
                      <div className="space-30 " />
                      <a href="http://qau.edu.pk/">
                        <div class="d-flex justify-content-center">
                          <img
                            alt="Quaid-e-Azam University, Islamabad"
                            className="d-block content-center"
                            src={require("../assets/img/qau-logo.jpg")}
                            style={{ width: "200px" }}
                            id="nuces"
                          />
                          <UncontrolledTooltip
                            placement="top"
                            target="nuces"
                            delay={0}
                          >
                            QUAID-E-AZAM UNIVERSITY, ISLAMABAD
                          </UncontrolledTooltip>
                        </div>
                      </a>
                    </CardTitle>
                  </Bounce>
                  <CardBody>
                    <Row>
                      <Col className="text-justify" md="12">
                        <span>University</span>
                        <h4>QUAID-E-AZAM UNIVERSITY, ISLAMABAD</h4>
                        <span>Degree</span>
                        <h4>Bachelors in Information Technology</h4>
                        <span>Time Period</span>
                        <h4>09/2014 - 10/2018</h4>
                        <span>CGPA</span>
                        <h4>3.67 / 4.0</h4>
                        <span>Achievements</span>
                        <h4>
                          <ul>
                            <li>
                              {" "}
                              Secured semester scholarship for consecutive 5
                              semesters{" "}
                            </li>
                            <li>
                              {" "}
                              Actively particpated and won speed programming
                              competetions for my department{" "}
                            </li>
                            <li>
                              {" "}
                              Took the initiative to invite senior alumni for
                              educating students on software industry
                            </li>
                          </ul>
                        </h4>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Bounce>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Education;
