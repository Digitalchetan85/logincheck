import React, { useState } from "react";
import { Col, Container, Row, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";
import Helmet from "react-helmet";

const Assessments = () => {
  const courses = [
    {
      id: 1,
      // imgurl: img1,
      alt: "",
      title: "Assessment 1",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 1999,
      ActualPrice: 599,
      to: "/agility-team-assessments",
    },
    {
      id: 2,
      // imgurl: img2,
      alt: "",
      title: "Assessment 2",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 1499,
      ActualPrice: 679,
      to: "/agile-coach-assessment",
    },
    {
      id: 3,
      // imgurl: img3,
      alt: "",
      title: "Assessment 3",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 1799,
      ActualPrice: 699,
      to: "/sample-assessment-test",
    },
  ];
  return (
    <div>
      <Helmet>
        <title> Assessments | DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
      <TopMenubar />
      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">Assessments</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">Assessments</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="g-3">
            {courses.map((course, index) => (
              <Col md={4} key={index}>
                <Card className="shadow m-2 text-center bg-white">
                  <Card.Body>
                    <Card.Title className="text-primary">
                      {course.title}
                    </Card.Title>
                    <div className="text-center p-2">
                      <Image
                        className="img-fluid"
                        src={course.imgurl}
                        height="225"
                        width="225"
                      />
                    </div>
                    <Card.Text className="text-center">{course.desc}</Card.Text>
                    <Card.Title className="text-primary">
                      <del>$ {course.price}</del> $ {course.ActualPrice}
                    </Card.Title>
                    <div className="">
                      <Button
                        variant="primary"
                        as={Link}
                        to={course.to}
                      >
                        Start Assessment
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Assessments;
