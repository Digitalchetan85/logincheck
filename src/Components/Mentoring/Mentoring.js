import React, { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import topImage from "../Images/mentoring/top-image.png";
import imgurl from "../Images/mentoring/9.png";
import imgurl1 from "../Images/mentoring/10.png";
import MentoringModel from "./MentoringModel";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";
import Helmet from "react-helmet";

const Mentoring = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Helmet>
        <title>Mentoring | DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
      <TopMenubar />
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Mentoring</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Mentoring
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
              <div className="text-center">
                <Image src={topImage} alt="" className="img-fluid" />
              </div>
              <div className="pt-3">
                <p>
                  'Mentoring is to support and encourage people to manage their
                  own learning in order that they may maximize their potential,
                  develop their skills, improve their performance and become the
                  person they want to be.' - University of Reading{" "}
                </p>

                <p>
                  We strongly believe that every individual has the potential to
                  accomplish what they are looking for in life. We provide all
                  the support needed for them to do it in their own unique way.{" "}
                </p>

                <p>
                  Our mentoring model reflects our beliefs and serves the
                  clients in developing their skills, competencies and enhance
                  their performance to be the best version of themselves.{" "}
                </p>

                <p>
                  We have the experience of having mentored Enterprise Agile
                  Coaches, Scrum Masters, Senior Leaders to upskill and reskill
                  themselves to achieve their career goals and realize their
                  growth potential.{" "}
                </p>

                <p>
                  The mentoring program has been designed by our experts who
                  have been successfully transforming large enterprises across
                  diverse industry domains for over 15+ years. Our mentoring
                  program has been designed to provide an experiential learning
                  experience for the Coaches through constant reflection, role
                  plays and real-life case studies.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="align-self-center">
              <div>
                <h2 className="text-center text-primary pt-2 pb-2">
                  Mentoring for Agile Coaches
                </h2>
                <p className="">
                  Engaging Executives & Senior Leadership and coaching them on
                  enhancing their leadership agility levels is a must for us to
                  transforming enterprises and help them accomplish Enterprise
                  Agility. This is a skill that most Agile Coaches are looking
                  to build.
                </p>

                <div className="text-center p-2">
                  <Image className="img-fluid" src={imgurl} />
                </div>

                <p>
                  This 3 Months mentoring program will provide all the skills
                  and competencies needed for you as an Agile Coach and equip
                  you with enough tools and techniques to better engage
                  Executives and Leaders in your transformation initiatives and
                  get better outcomes for you personally and professionally.{" "}
                </p>

                <p className="text-center text-primary fw-bold">
                  Cost $1500 per person
                </p>

                <div className="text-center mt-3">
                  {/* <Button variant="primary" onClick={handleShow}>
                    Register Now
                  </Button> */}

                  <MentoringModel 
                  title="Mentoring for Agile Coaches"
                  price="1500"
                  hello=""/>

                  <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <div className="ratio ratio-4x3">
                        <iframe
                          src="https://dai.trafft.com"
                          title="IC Agile FlipBook"
                        ></iframe>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/* <a
                    href="/contact-us"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Register Now
                  </a> */}
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="mb-5 mb-md-0">
                <div className="ratio ratio-1x1">
                  <iframe
                    src="https://designrr.page?id=156342&token=429857759&type=FP&h=6955"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <div className="text-center p-2">
                <Image className="img-fluid" src={imgurl1} />
              </div>
            </Col>
            <Col md={8} className="align-self-center">
              <div className="">
                <h2 className="text-center text-primary pt-2 pb-2">
                  Problem Solving
                </h2>
                <p className="">A problem well defined is half solved.</p>
                <p>
                  We as Agile Coaches keep facing challenges that are unique to
                  the situations, we are involved in. Most of the times we
                  struggle in defining the actual problem and keep spending time
                  on addressing everything except the problem itself.{" "}
                </p>

                <p>
                  We offer mentoring services to help you clearly define,
                  overcome those problems through sharing our experiences & best
                  practices and work with you to develop remedial actions to
                  eliminate the root causes of those problems.{" "}
                </p>

                <p className="text-center text-primary fw-bold">
                  Price: $250/hr
                </p>

                <div className="text-center mt-3">
                  <Button variant="primary" onClick={handleShow}>
                    Register Now
                  </Button>
                  {/* <a href="/" className="btn btn-primary" target="_blank">
                    Register Now
                  </a> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Mentoring;
