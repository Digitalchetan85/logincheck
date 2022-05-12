import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import video1 from "../Images/esm-participant-videos/chandru-learnings.mp4";
import video2 from "../Images/esm-participant-videos/anish-learnings.mp4";
import video3 from "../Images/esm-participant-videos/arjun-learnings.mp4";
import EACimage from "../Images/experimental-learning-programs/dai-eac/eac.png";
import ExperientialPopup from "./ExperientialPopup";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";
import Helmet from "react-helmet";

const ExperientialLearningPrograms = () => {
  const VideoLink = [
    {
      id: 1,
      link: video1,
    },
    {
      id: 2,
      link: video2,
    },
    {
      id: 3,
      link: video3,
    },
  ];

  return (
    <div>
      <Helmet>
        <title> Experiential Learning Programs | DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
      <TopMenubar />
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">
                  Experiential Learning Programs
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Experiential Learning Programs
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <h2 className="text-primary pt-2 pb-2 text-center text-md-start">
                Expert Agile Coaching
              </h2>
              <p>
                A complete hands-on experiential learning program intended to
                build competencies of Agile Coaches to transform organizations
                high performing and build a continuous evolution culture.{" "}
              </p>

              <p>
                The program will be run using five themes, each consisting of
                two iterations with specific goals and acceptance criteria to be
                met by each member of the team.{" "}
              </p>

              <div className="text-center text-md-start">
                <Image
                  src={EACimage}
                  alt=""
                  className="img-fluid img-thumbnail"
                  height="300"
                  width="300"
                />
              </div>

              <p>
                Participants who successfully complete all the 10 iterations
                would be awarded "Expert Agile Coach" Certification from Digital
                Agility Institute as a recognition of their expertise
              </p>

              <p>For more information, read the course book below </p>
              <p>
                Course Name: <strong>DAI - EAC</strong>
              </p>
              <p>
                Course Price: <b>$4000</b>
              </p>
              <div className="text-center text-md-start mt-3">
                <ExperientialPopup
                  title="DAI - EAC"
                  price="4000"
                  hello="https://google.com"
                  coursename="ICP - PDV"
                />
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="mb-5 mb-md-0">
                <div className="ratio ratio-1x1">
                  <iframe
                    src="https://designrr.page?id=146858&token=3903971223&type=FP&h=3053"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {VideoLink.map((item) => (
              <Col md={4} key={item.id}>
                <div className="text-center pt-3 pb-3">
                  <video height="220" width="350" controls>
                    <source src={item.link} type="video/mp4"></source>
                  </video>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default ExperientialLearningPrograms;
