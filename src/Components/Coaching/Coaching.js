import React, { useState } from "react";
import { Col, Container, Row, Image, Modal, Button } from "react-bootstrap";
import img1 from "../Images/coaching/top-image.png";
import img2 from "../Images/coaching/09.png";
import imgurl from "../Images/coaching/11.png";
import imgurl1 from "../Images/coaching/11.png";
import MentoringModel from "../Mentoring/MentoringModel";

const Coaching = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <h2 className="text-center text-white">Coaching</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">Coaching</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5 text-center">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <Image src={img1} alt="" className="img-fluid" />
              </div>
              <p>International Coaching Federation defines coaching as</p>
              <p>
                "Partnering with clients in a thought-provoking and creative
                process that inspires them to maximize their personal and
                professional potential. The process of coaching often unlocks
                previously untapped sources of imagination, productivity and
                leadership".{" "}
              </p>
              <p>
                We strongly believe that every individual has all the resources
                they need to fulfil their aspirations in life. What they need is
                the ability to visualize them when they need and be able to use
                them to their advantage. This most of the times gets constrained
                by the limitations they build around themselves. To realize our
                full potential, we need to not just make the best of our
                strengths but also overcome our limitations.{" "}
              </p>

              <div className="text-center pb-2">
                <Image src={img2} alt="" className="img-fluid" />
              </div>

              <p>
                We use our Coaching Model “DREAMS” to partner with the clients
                and help them in successfully accomplishing their Goals &
                Aspirations in their own unique way. We have the experience of
                having coached Start-Up CEOs, Senior Executives, Leaders at all
                levels and enhancing their success in life.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="align-self-center">
              <div>
                <h2 className="text-center text-primary pt-2 pb-2">
                  Executive Coaching
                </h2>
                <p className="">
                  If you are looking to further your career and move from
                  Leadership into Executive Roles or make the best out of your
                  Business or even contemplating setting up something afresh,
                  then we are best placed to help you reach your goals.
                </p>

                <p className="text-center text-primary fw-bold">
                  Price: $500/hr
                </p>

                <div className="text-center">
                  <MentoringModel
                    title="Executive Coaching"
                    price="500"
                    hello=""
                  />
                </div>

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

                {/* <div className="text-center mt-3">
                  <a
                    href="/contact-us"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Register Now
                  </a>
                </div> */}
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
                  Coaching Teams
                </h2>
                <p className="">
                  We provide Coaching Services for individuals and, are into
                  Systemic Team Coaching which helps the Executive and
                  Leadership Teams to create shared objectives and accomplish
                  collective goals through developing “ONE TEAM ONE GOAL”
                  spirit.
                </p>

                <p className="text-center text-primary fw-bold">
                  Price: $1500/hr
                </p>

                <div className="text-center mt-3">
                  <Button
                     variant="primary" onClick={handleShow}
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Coaching;
