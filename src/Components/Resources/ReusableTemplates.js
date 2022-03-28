import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ToolkitImage from "../Images/workbooks/agile-coaching-toolkit.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";
import Workbook199Model from "./Workbook199Model";

const ReusableTemplates = () => {
  return (
    <div>
      <TopMenubar />
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Reusable Templates</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Reusable Templates
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-primary pt-2 pb-2">
                  Agile Coaching Toolkit
                </h2>

                <p>
                  Coaching is an essential part of the Agile process, which many
                  people believe to be more effective than traditional planning.
                  However, coaching is not a simple task and requires the right
                  tools. Most Agile coaches use a set of collaborative tools to
                  facilitate the coaching process.{" "}
                </p>
              </div>

              <div className="">
                <Row className="">
                  <Col md={8} className="align-self-center">
                    <div className="">
                      <p>
                        Agile coaches use a variety of tools to facilitate the
                        following:{" "}
                      </p>

                      <ul>
                          <li>Leveraging the strengths, talents, and knowledge of individuals and teams </li>
                          <li>Communicating effectively </li>
                          <li>Facilitating change </li>
                          <li>Challenging norms</li>
                          <li>Empowering others.</li>
                          <li>Adopting Agile Practices & Mindset </li>
                          <li>Workshops to define objectives</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <Image src={ToolkitImage} alt="" className="img-fluid" />
                  </Col>
                </Row>
              </div>

              <div className="">
                  <p>The Agile Coaching Toolkit was created to help organizations implementing agile coaching get started. With the Toolkit, you will make the right decisions and get your team members engaged in the transformation exercise. You will also get a reliable indicator of progress that you can use to report back to your stakeholders.  </p>

                  <p>The Agile Coaching Toolkit provides access to Ready to Use Templates including videos on how to use them. The kit also contains guidelines on how to use each template. This toolkit saves you lot of time which you can use to help your teams with your creative abilities rather than spending time on reinventing the wheel. </p>
                  <p className="fw-bold">Buy 20 Reusable Templates @ just $19. </p>
              </div>

              <div className="">
                  <Workbook199Model title="Reusable Templates" price="19" hello="https://google.com"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ReusableTemplates;
