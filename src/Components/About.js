import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Miland from "./Images/about/miland.png";
import anu from "./Images/about/anu.png";
import maheswari from "./Images/about/nagamaheshwari.png";
import jayaram from "./Images/about/jayaram.png";
import Mahesh from "./Images/about/mahesh.png";
import jayramCertifications from "./Images/about/jayarm-certifications.png";
import anuCertifications from "./Images/about/anu-certifications.png";

const About = () => {
  return (
    <div>
      <div id="about-us" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">About</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About
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
            <Col md={12}>
              <p>
                Digital Agility Institute was formed with a clear vision to
                serve the community to help us be the best version of ourselves
                which can result in accomplishing our “DREAMS”. We have a great
                team of experts who strongly believe in our purpose and mission
                and value contributing to their bit to the community.
              </p>
            </Col>
            {/* <Col md={4} className="align-self-center">
              <Image
                src={Slide1}
                alt="Slide 1"
                className="img-fluid rounded shadow-sm"
              />
            </Col> */}
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <Row>
                  <Col md={6} className="align-self-center">
                    <div className="">
                      <h2 className="pb-2 text-center text-primary">
                        Nivarti Jayaram
                      </h2>
                      <div className="text-center">
                        <img
                          className="rounded-circle img-fluid"
                          src={jayaram}
                          alt="jayaram"
                        />
                      </div>
                      <p className="pt-2 text-center">
                        Executive Coach, Author, Transformation Leader, Speaker
                        & Mentor
                      </p>
                    </div>
                    <Row className="pt-3 pb-3 pt-md-3 pb-md-3 justify-content-center text-center">
                      <Col md={6}>
                        <div className="ms-2">
                          <h6 className="text-primary">
                            <u>Contact details:</u>
                          </h6>
                          <p className="mb-0">
                            <a
                              href="tel:9686409060"
                              className="text-decoration-none text-dark"
                            >
                              <i className="fa fa-phone text-primary"></i>+91
                              9686409060
                            </a>
                          </p>
                          <p className="mb-0">
                            <i className="fas fa-envelope text-primary"></i>
                            <a
                              href="nivarti638@gmail.com"
                              className="text-decoration-none text-dark"
                            >
                              {" "}
                              nivarti638@gmail.com
                            </a>
                          </p>
                          <p className="mb-0">
                            <a
                              href="www.nivartijayaram.com"
                              className="text-decoration-none text-dark"
                            >
                              <i className="fa fa-globe text-primary"></i>
                              www.nivartijayaram.com
                            </a>
                          </p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div>
                          <h6 className="text-primary">
                            <u>Social Media:</u>
                          </h6>
                          <a href="https://www.linkedin.com/in/nivartijayaram">
                            {" "}
                            <i className="fab fa-linkedin fs-3 text-primary mx-2"></i>
                          </a>
                          <a href="https://www.youtube.com/nivartijayaram">
                            <i className="fab fa-youtube fs-3 text-danger mx-2"></i>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row className="justified-content-center">
                      <Col md={12}>
                        <div className="text-center">
                          <Image
                            src={jayramCertifications}
                            alt="Certifications"
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <div className="">
                      {/* <div className="ratio ratio-1x1">
                        <iframe
                          src="https://designrr.page?id=152330&token=742669168&type=FP&h=6713"
                          title="IC Agile FlipBook"
                        ></iframe>
                      </div> */}
                      <h4 className="text-primary">Personal Profile</h4>
                      <p>
                        “Challenge the status quo and continuous self-discovery
                        through Unlearning” is what I strongly believe in and it
                        helps me in extending my horizons. I have published a
                        book on Unlearning that outlines the various aspects of
                        Unlearning and it’s significance in personal or
                        organizational transformation journey.
                      </p>
                      <h4 className="text-primary">Training Experience</h4>
                      <ul>
                        <li>
                          DASA DevOps Coach - Trained more than 50 People across
                          the globe on DevOps Coach Program
                        </li>
                        <li>
                          ICAgile Training Programs - Trained more than 100
                          People across the globe on various IC Agile
                          Certifications
                        </li>
                        <li>
                          PMI Certification Programs - Trained more than 100
                          People across the globe on various PMI Certifications
                        </li>
                        <li>
                          Scaled Agile Certification Programs - Trained more
                          than 100 People across the globe on various SAFe
                          Certifications
                        </li>
                        <li>
                          Devised and curated Experiential learning Programs for
                          Scrum Masters & Agile Coaches
                        </li>
                        <li>
                          Leadership Training Programs - Trained more than 100
                          Senior Leaders & Executives on "Leader as a Coach"
                          program
                        </li>
                      </ul>
                      <h4 className="text-primary">Skills & Abilities</h4>
                      <ul>
                        <li>
                          Enterprise Transformation expertise (Agile, DevOps,
                          Cloud, BPM, OPM, Payments etc)
                        </li>
                        <li>Training from Back of the Room</li>
                        <li>Executive Coaching</li>
                        <li>Leadership Development</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <h2 className="pb-2 text-center text-primary">
                  K Nagamaheswari
                </h2>
                <div className="text-center">
                  <img
                    className="rounded-circle img-fluid"
                    src={maheswari}
                    alt="maheshwari"
                  />
                </div>
                <p className="pt-2 text-center">
                  Founder <br /> &nbsp;
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <h2 className="pb-2 text-center text-primary">
                  Mahesh Varadharajan{" "}
                </h2>
                <div className="text-center">
                  <img
                    className="rounded-circle img-fluid"
                    src={Mahesh}
                    alt="Mahesh"
                  />
                </div>
                <p className="pt-2 text-center">
                  SPCT Candidate, Enterprise Agile Coach, Speaker, Mentor
                </p>
              </div>
            </Col>
            <Col md={12}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <Row>
                  <Col md={6} className="align-self-center">
                    <div className="">
                      <h2 className="pb-2 text-center text-primary">
                        Anu Ravi
                      </h2>
                      <div className="text-center">
                        <img
                          className="rounded-circle img-fluid"
                          src={anu}
                          alt="Anu Ravi"
                        />
                      </div>
                      <p className="pt-2 text-center">
                        NLP Coach, Enterprise Agile Coach, Transformation
                        Leader, Speaker & Mentor
                      </p>
                      <h6 className="text-center text-primary">
                        "DREAMS COME TRUE THROUGH SMART WORK, Focus, Hard work,
                        and Persistence."
                      </h6>
                    </div>

                    <Row className="pt-3 pb-3 pt-md-3 pb-md-3 justify-content-center text-center">
                      <Col md={6}>
                        <div className="ms-2">
                          <h6 className="text-primary">
                            <u>Contact details:</u>
                          </h6>
                          <p className="mb-0">
                            <a
                              href="tel:7259882396"
                              className="text-decoration-none text-dark"
                            >
                              <i className="fa fa-phone text-primary"></i>+91
                              7259882396
                            </a>
                          </p>
                          <p className="mb-0">
                            <i className="fas fa-envelope text-primary"></i>
                            <a
                              href="anuravi625@gmail.com"
                              className="text-decoration-none text-dark"
                            >
                              {" "}
                              anuravi625@gmail.com
                            </a>
                          </p>
                          <p className="mb-0">
                            {/* <a
                              href="www.nivartijayaram.com"
                              className="text-decoration-none text-dark"
                            >
                              <i className="fa fa-globe text-primary"></i>
                              www.nivartijayaram.com
                            </a> */}
                          </p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div>
                          <h6 className="text-primary">
                            <u>Social Media:</u>
                          </h6>
                          <a href="https://www.linkedin.com/in/nivartijayaram">
                            {" "}
                            <i className="fab fa-linkedin fs-3 text-primary mx-2"></i>
                          </a>
                          <a href="https://www.youtube.com/nivartijayaram">
                            <i className="fab fa-youtube fs-3 text-danger mx-2"></i>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col md={12}>
                         <div className="text-center">
                           <Image src={anuCertifications} alt="certifcations" className="img-fluid" />
                           </div>   
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <div className="">
                      {/* <div className="ratio ratio-1x1">
                        <iframe
                          src="https://designrr.page?id=156312&token=2621835926&type=FP&h=4433"
                          title="IC Agile FlipBook"
                        ></iframe>
                      </div> */}
                      <h4 className="text-primary">Personal Profile</h4>
                      <p>
                        "I believe every individual has immense talent and when
                        channelized and nurtured, it will result in great
                        outcomes for the individuals and the organizations they
                        are associated with. I have co-contributed to scrum
                        guide V3.0."
                      </p>
                      <h4 className="text-primary">Training Experience</h4>
                      <ul>
                        <li>
                          Agility Health Facilitator - Facilitated 50 squad
                          health surveys, Role based assessments (PO/SM/Coaches)
                          for tribes, growth conversations for continuous
                          improvement for squads/people across geographies.
                        </li>
                        <li>
                          Adoption of New Ways of working - Trained more than
                          500 People across the globe to adopt to New ways of
                          working and Remote ways of working
                        </li>
                        <li>
                          Learning Assessment Programs - Designed learning
                          assessment criterion to categorize people based on
                          their maturity and impart targeted training programs
                          to uplift squads
                        </li>
                        <li>
                          Software Trainer - Taught software programing
                          languages to 20 M.Tech Students from IIT KGP and 50
                          BCA students from Hijli College
                        </li>
                        <li>
                          Curated Experiential learning Program with other
                          mentors for Scrum Masters & Agile Coaches
                        </li>
                        <li>
                          Leadership Training Programs - Trained more than 30
                          Leaders on "New ways of Leading" program
                        </li>
                      </ul>
                      <h4 className="text-primary">Skills & Abilities</h4>
                      <ul>
                        <li>Agile Transformation</li>
                        <li>Digital Transformation </li>
                        <li>Business Transformation</li>
                        <li>Training </li>
                        <li>Facilitating</li>
                        <li>Leadership Development</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <Row>
                  <Col md={6} className="align-self-center">
                    <div className="">
                      <h2 className="pb-2 text-center text-primary">
                        Milind Kanbur
                      </h2>
                      <div className="text-center">
                        <img
                          className="rounded-circle img-fluid"
                          src={Miland}
                          alt="Miland Kanbur"
                        />
                      </div>
                      <p className="pt-2 text-center">
                        Enterprise Agile Coach, OKR Coach, Jury Member-Global
                        PMO Awards
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="">
                      <div className="ratio ratio-1x1">
                        <iframe
                          src="https://designrr.page?id=152361&token=1971138060&type=FP&h=4689"
                          title="IC Agile FlipBook"
                        ></iframe>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
