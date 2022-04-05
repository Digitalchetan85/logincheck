import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image from "../Images/workbooks/objective-definition.png";
import image2 from "../Images/workbooks/self-discovery-workbook.png";
import image3 from "../Images/workbooks/prism-of-life.png";
import image4 from "../Images/workbooks/prism-of-Life-2.png";
import paimage from "../Images/workbooks/personal-agility-workbook.png";
import Workbook199Model from "./Workbook199Model";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";

const Workbook = () => {
  return (
    <div>
      <TopMenubar />
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Workbooks</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Workbooks
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
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="text-center">
                <Image src={image3} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <p className="text-center">
                PRISM OF LIFE - Be the Best You Can Be{" "}
              </p>

              <p>
                We all aspire to make the best of our strengths, want to live
                our lives to the fullest and realize our full potential. Each
                one of us sets up Goals for next year on the NEW YEAR DAY, but
                how many of us end up achieving them? There could be multiple
                reasons why this happens. Few of those are listed below:{" "}
              </p>

              <ul>
                <li>
                  Get caught up in our daily life and loose our way as well as
                  our focus.{" "}
                </li>
                <li>
                  Not sure of what our motivators are, which are driving us to
                  pursue the goals.{" "}
                </li>
                <li>
                  Not enough awareness of what is required to accomplish those
                  goals.{" "}
                </li>
                <li>We defined the goals because of social influences </li>
                <li>We do not understand our strengths and limitations </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="text-center pb-3">
                <Image src={image4} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={12}>
              <p>
                The PRISM OF LIFE is a collection of five modules designed to
                help you to become the best version of yourself. Each module
                provides an opportunity for you to reflect on who you are, build
                your level of awareness about your strengths and limitations,
                help you identify your motivations, define set of objectives you
                can relate to, devise actions to create a roadmap that is
                realistic, flexible, adaptable and helps you to accomplish key
                results to validate your progress.
              </p>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <p className="text-center">
                  5 Modules with Guided Videos <b>@ $199</b>
                </p>
                <div className="text-center">
                  <Workbook199Model
                    title="5 Modules with Guided Videos $199"
                    price="199"
                    hello="/mentoring"
                  />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <p className="text-center">5 Modules without Guided Videos @ $149</p>
                <Workbook199Model
                  title="5 Modules without Guided Videos @ $199"
                  price="149"
                  hello="/mentoring"
                />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={4}>
              <div className="text-center">
                <Image src={image2} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={8} className="align-self-center">
              <h2 className="pt-2 pb-2 text-center text-primary">
                Self-Discovery (WHO AM I?)
              </h2>
              <p>
                Life is a journey of Self-Discovery without a destination. The
                more you understand yourself, the more stronger belief systems
                become visible, and it takes that much more effort to change
                those beliefs if they are not serving you well in pursuit of
                your objectives and aspirations. This module helps you enhance
                your state of awareness about WHO YOU ARE.
              </p>
              <p className="text-center">
                Price <b>$ 39</b>
              </p>
              <div className="text-center mt-3">
                <Workbook199Model
                  title="Self-Discovery (WHO AM I?)"
                  price="39"
                  hello="/mentoring"
                />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={8} className="align-self-center">
              <h2 className="pt-2 pb-2 text-center text-primary">
                Objective Definition (WHO I WANT TO BE?)
              </h2>
              <p>
                A Journey of Defining "Who You Want to Be?" understanding your
                strengths & limitations; This module helps you defining the
                right objectives, identify the underlying desires that are
                driving and motivating you to define those objectives, what are
                the key results that will validate your progress and WHO WILL
                YOU BECOME when you accomplish those objectives.
              </p>
              <p className="text-center">
                Price <b>@ 39</b>
              </p>
              <div className="text-center mt-3">
                <Workbook199Model
                  title="Objective Definition (WHO I WANT TO BE?)"
                  price="39"
                  hello="https://google.com"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image src={image} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={4}>
              <div className="text-center">
                <Image src={image} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={8} className="align-self-center">
              <h2 className="pt-2 pb-2 text-center text-primary">
                Establish the roadmap (HOW DO I GET THERE?)
              </h2>
              <p>
                A Journey of Defining Actions that will help you maximize your
                strengths and overcome your limitations. The clearer you are
                about your strengths and limitations the better you can take
                advantage of them. This module helps you define all actions
                required to accomplish the objectives and map them to the key
                results which keep you motivated and aligned towards your end
                goals.
              </p>
              <p className="text-center">
                Price <b>@ 39</b>
              </p>
              <div className="text-center mt-3">
                <Workbook199Model
                  title="Establish the roadmap (HOW DO I GET THERE?)"
                  price="39"
                  hello="https://google.com"
                />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={8} className="align-self-center">
              <h2 className="pt-2 pb-2 text-center text-primary">
                Personal Agility (HOW CAN I ADAPT?)
              </h2>
              <p>
                The future rarely turns out to be the way we predicted it. For
                us to be successful, we need to consistently enhance our
                personal agility levels. The world we are living in will throw
                lot of challenges ahead of us in our journey and it is the
                personal agility, which can help us take on those challenges and
                overcome them finding ways that are new & not traversed so far.
                This module helps you understand the difficulties you might
                face, what actions you have tried so far, how they have served
                you and what needs to change or what new needs to be attempted
                to continue to be successful.
              </p>
              <p className="text-center">
                Price <b>@ 39</b>
              </p>
              <div className="text-center mt-3">
                <Workbook199Model
                  title="Personal Agility (HOW CAN I ADAPT?)"
                  price="39"
                  hello="https://google.com"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image src={paimage} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={4}>
              <div className="text-center">
                <Image src={image} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={8} className="align-self-center">
              <h2 className="pt-2 pb-2 text-center text-primary">
                Establish the current state (WHERE AM I?)
              </h2>
              <p>
                A Journey of understanding your current state through
                Self-reflection and Retrospection. Before you start defining
                your actions, it is important to understand the reality of where
                you are currently with reference to those objectives defined.
                This module is designed to help you identify and establish your
                current state
              </p>
              <p className="text-center">
                Price <b>@ 39</b>
              </p>
              <div className="text-center mt-3">
                <Workbook199Model
                  title="Establish the current state (WHERE AM I?)"
                  price="39"
                  hello="/mentoring"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Workbook;
