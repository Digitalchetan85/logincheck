import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";
import imgurl from "../Images/e-learning-programs/13.png";

const AgileFundamentals = () => {
  return (
    <div>
      <Helmet>
        <title> E-Learning Programs| DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
      {/* <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Agile Fundamentals</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a href="/e-learning-programs" className="custom">
                        E-Learning Programs
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Agile Fundamentals
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <div className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="">
                <p className="">
                  Agile is the flavor of the world for quite a while now.
                  Irrespective of the Industry domain you belong to,
                  understanding of Agile and Agility is mandatory as most
                  organizations are moving towards being agile to thrive and
                  excel.
                </p>

                <p>
                  In this Course, we will help you learn Agile Fundamentals
                  covering:{" "}
                </p>

                <Row>
                  <Col md={6}>
                    <ul>
                      <li>Why & What of Agile Agile</li>
                      <li>Values & Principles </li>
                      <li>Agile Frameworks </li>
                      <li>Scrum</li>
                      <li>Kanban </li>
                      <li>Enterprise Agility vs Business Agility</li>
                      <li> Scaling & Descaling</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul>
                      <li>Backlog Refinement</li>
                      <li>Epics Features</li>
                      <li>User Story Writing</li>
                      <li>Definition of Ready </li>
                      <li>Definition of Done</li>
                      <li>Estimation Techniques </li>
                      <li>Burndown / Burnup Charts</li>
                      <li>Agile Metrics</li>
                    </ul>
                  </Col>
                </Row>

                <div className="text-center mt-3">
                  <a
                    href="https://agilecoaching.digitalagilityinstitute.com/course/141754"
                    className="btn btn-primary"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-2">
                <Image className="img-fluid" src={imgurl} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AgileFundamentals;
