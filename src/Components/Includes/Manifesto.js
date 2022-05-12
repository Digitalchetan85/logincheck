import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Helmet from "react-helmet";
import image1 from "../Images/manifesto/Manifesto.png";
import image2 from "../Images/manifesto/Principles.png";
import Footer from "./Footer";
import TopMenubar from "./TopMenubar";

const Manifesto = () => {
  return (
    <div>
      <Helmet>
        <title> Manifesto | DAI</title>
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
                <h2 className="text-center text-white">Manifesto</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Manifesto
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
            <Col md={8} className="align-self-center">
              <div className="">
                <p>
                  Agile Manifesto and Principles were defined more than two
                  decades back and with specific focus to improve software
                  development and delivery. However, with the disruptive
                  business environment that every industry is now operating in,
                  Being Agile has become a mandate for every business that wants
                  to thrive and excel. Agile & Agility are no longer proprietary
                  to software development or Information Technology industry.
                </p>
                <p>
                  We strongly believe that there is a need to review the
                  existing Manifesto and Principles to cater for all industries
                  while still retaining the essence of what we started off with.
                  Below is our attempt to review and revise the existing
                  manifesto and principles that were originally defined way back
                  in early 2000s.
                </p>
              </div>
              {/* <div className="text-center">
                <Image src={image1} alt="" className="img-fluid" />
              </div> */}
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image src={image1} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center g-3 my-3">
            <Col md={8} className="align-self-center">
              <div className="">
                <p>
                  <strong>Engaged Teams & Co-created Objectives</strong> over
                  Processes & Tools{" "}
                </p>
                <p>
                  <strong>Value Delivery</strong> over Comprehensive
                  Documentation{" "}
                </p>
                <p>
                  <strong>Customer Partnership</strong> over Contract
                  Negotiation{" "}
                </p>
                <p>
                  <strong>Preempting the change</strong>, over following a plan{" "}
                </p>
                <p>
                  <strong>Distributed Leadership</strong> over Hierarchical
                  Authority{" "}
                </p>
                <p>
                  As earlier, we value the items on the left more than those on
                  the right.{" "}
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image src={image2} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center g-3 my-3">
              <Col md={12}>
                <h3 className="text-primary">Agile Principles</h3>
                <div className="">
                  <ul className="list-unstyled">
                    <li className="py-1">Our highest priority is to satisfy the customer through early and continuous delivery of customer value. </li>

                    <li className="py-1">Deliver customer value frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale. </li>

                    <li className="py-1">Business Teams, Delivery Teams and Support Functions must work together daily across the enterprise focusing on consistent delivery of customer value. </li>

                    <li className="py-1">Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage. </li>

                    <li className="py-1">Build Organizations around highly engaged teams. Enable and equip them to make decisions and trust them to get the job done. </li>

                    <li className="py-1">The most efficient and effective method of defining strategies & objectives for, and within an enterprise is through synergizing top-down and bottom-up. </li>

                    <li className="py-1">Customer Value delivered is the primary measure of progress. </li>

                    <li className="py-1">Agile processes promote sustainable delivery of customer value. The sponsors, developers, and users should be able to maintain a constant pace indefinitely. </li>

                    <li className="py-1">Continuous attention to technical excellence, good design, and leadership at all levels enhances agility. </li>

                    <li className="py-1">The best architectures, requirements, and designs emerge from self-organizing teams. </li>

                    <li className="py-1">Partnering with customers by giving them a seat at the table to move from customer oriented to customer defined approach. </li>

                    <li className="py-1">At regular intervals, the team reflects on how to become more preemptive, then tunes and enhances its analytical skills & creative thinking accordingly. </li>
                  </ul>
                </div>  
              </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Manifesto;
