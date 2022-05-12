import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";
import imgurl from "../Images/e-learning-programs/14.png";

const AgileCoachingFundamentals = () => {
  return (
    <div>
      <Helmet>
        <title> E-Learning Programs - Agile Coaching Fundamentals | DAI</title>
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
                <h2 className="text-center text-white">
                  Agile Coaching Fundamentals
                </h2>
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
                      Agile Coaching Fundamentals
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-light">
        <Container>
        <h2 className="text-center text-primary pt-2 pb-2">Agile CoachingFundamentals</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="">
                <p className="">
                  Agile Coaching is one of the most demanded competencies in the
                  coaching industry due to the VUCA world the business are
                  operating in and the compelling need for them to be agile in
                  order to thrive and excel. If you are looking for a course to
                  help you build your foundations on Agile Coaching and then
                  decide if you want to jump in, then this course is for you.
                </p>

                <p>In this course, you will learn the below topics:</p>

                <Row>
                  <Col md={6}>
                    <ul>
                      <li>Why Agile Coaching is needed?</li>
                      <li>What is Agile Coaching? </li>
                      <li>Team vs Tribe/BU vs Enterprise Agile Coach </li>
                      <li>07 Stances of an Enterprise Agile Coach </li>
                      <li>Professional Coaching </li>
                      <li>ICF Coaching Core Competencies </li>
                      <li>Team Coaching</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul>
                      <li>ICF Team Coaching Competencies </li>
                      <li>Coaching Process </li>
                      <li>Coaching Agreement</li>
                      <li>Coaching Frameworks</li>
                      <li>Feedback vs Feedforward </li>
                      <li>Leadership Engagement </li>
                    </ul>
                  </Col>
                </Row>

                <p>
                  It would be preferable if you have understanding of what Agile
                  is, before you take up this course. If you don't have it, You
                  can always look at our Agile Fundamentals course to complete
                  before you take this up.
                </p>

                <div className="text-center mt-3">
                  <a
                    href="https://agilecoaching.digitalagilityinstitute.com/course/141772"
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

export default AgileCoachingFundamentals;
