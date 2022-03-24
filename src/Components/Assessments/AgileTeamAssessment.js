import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AgileTeamAssessment = () => {
  return (
    <div>
      <div
        id="ic-agile-flipbook"
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">
                  Agile Team Assessment
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a href="/" className="custom">
                        Assessment
                      </a>
                    </li>
                    <li className="breadcrumb-item">Agile Team Assessment</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5 text-center">
          <h3 className="mt-5 mb-5">Coming Soon</h3>
      </div>
    </div>
  );
};

export default AgileTeamAssessment;
