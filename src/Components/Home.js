import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import MainSlider from "./Includes/MainSlider";
import Mentoring from "./Includes/MentoringDetails";
import Coaching from "./Includes/CoachingDetails";
import Training from "./Includes/TrainingDetails";
import Slide1 from "./Images/temp1.png";
import YouTubeVideos from "./Includes/YouTubeVideos";
import { Link, Navigate } from "react-router-dom";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import HomeTestimonials from "./Includes/HomeTestimonials";
import HomeAssessments from "./Includes/HomeAssessments";
import HomeDIY from "./Includes/HomeDIY";

const Home = () => {
  return (
    <>
      <MainSlider />
      <div id="about" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="text-center">
                <h2 className="pt-2 pb-2 text-primary">
                  "Digital Agility Institute"
                </h2>
                <p>
                  Despite so many certifications flourishing in the markets
                  across the globe, the success rate is transforming
                  organizations to be Agile is much smaller.
                </p>
              </div>
              <div className="text-center p-2 bg-white shadow">
                <h4 className="pt-2 pb-2 text-primary">Our Mission</h4>
                <p>
                  "To help you and your organizations to successfully transform
                  and navigate the extreme disruptions, for you to continue to
                  thrive & excel through continuous evolution & high value
                  creation".
                </p>
                <p>
                  We intend to accomplish this by helping Agile Coaches, Change
                  Agents & Organizational Leaders and Executives integrate Agile
                  Values & Principles into their mindset thereby influencing
                  their behaviors and habits that help them inspire whoever they
                  interact with.
                </p>
                <p>
                  We ensure this by using experiential learning & coaching
                  mindset in our programs rather than teaching. We run the
                  highest quality programs at a price you feel valued to invest.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="about" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8} className="align-self-center">
              <h2 className="pt-2 pb-2 text-primary">
                Digital Agility Framework
              </h2>
              <p>
                “Digital Agility is the ability of an organization to digitalize
                their spectrum of products and services with a goal of achieving
                enterprise agility being the flag bearer which helps them derive
                better customer centricity, employee engagement, culture of
                collaboration, continuous improvement and innovation to thrive &
                excel in accomplishing their business vision & strategies”.
              </p>
              <p>
                It requires proactively looking out for global challenges that
                are driven by both people & the environment around them and the
                opportunities they present, developing new technologies,
                products, practices and behaviors to resolve them considering
                the emerging business, political and people landscape for
                economic, social and environmental risks.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <Image
                src={Slide1}
                alt="Slide 1"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-primary">Our Services</h2>
          <p className="text-center"></p>
          <Services />
        </Container>
      </div> */}
      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-primary">Training</h2>
          <p className="text-center">
            We specialize in imparting experiential learning for people on
            ICAgile Courses, Scaled Agile (SAFe), DevOps Courses (DASA) and
            Project Management (PMI) apart from our own flagship programs. We
            have experts who are accredited for these courses and have trained
            people from across the globe to excel and enhance their skillsets.
          </p>
          <Training />
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-primary">Mentoring</h2>
          <p className="text-center">
            Mentoring is all about giving people broader outlooks, more things
            to consider. People want to be around people who are exceptional and
            those who can provide an opportunity for them to apprise situations
            and cultivate their own ways. You mentor by advice, by your wisdom.
            We mentor people through stories of what we and others we have
            worked with, have done in situations like the associates, make them
            learn from, to gain insights. As a mentor, we work closely with the
            people to develop new abilities and interests in the areas they are
            keen to explore.
          </p>
          <p className="text-center">
            We have expertise in the field of Executive / Leadership Coaching,
            Transforming Organizations to accomplish Digital Agility by adopt
            new ways of working & leading. We provide mentoring services to
            Agile Coaches, Scrum Masters, Senior Leaders & Change Agents to
            enhance their skill sets.
          </p>
          <Mentoring />
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-primary">Coaching</h2>
          <p className="text-center">
            Coaching is a process of working with a client to explore and
            resolve personal and professional challenges. For executives,
            coaching is often used as a tool to help accelerate the development
            of leadership skills.
          </p>
          <Coaching />
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-primary">Assessments</h2>
          <HomeAssessments />
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-primary">Resources</h2>
          <HomeDIY />
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <YouTubeVideos />
          <div className="text-center">
            <Button className="btn btn-primary" as={Link} to="/youtube-videos">
              View More Videos
            </Button>
          </div>
        </Container>
      </div>

      <HomeTestimonials />
    </>
  );
};

export default Home;
