import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image1 from "../Images/community-events/Coaching-Cafe.png";
import image2 from "../Images/community-events/Book-Readers-Club.png";
import ESMimage from "../Images/experimental-learning-programs/dai-esm/dai-esm.png";
import video1 from "../Images/esm-participant-videos/chandru-learnings.mp4";
import video2 from "../Images/esm-participant-videos/anish-learnings.mp4";
import video3 from "../Images/esm-participant-videos/arjun-learnings.mp4";
import TopMenubar from "./TopMenubar";
import Footer from "./Footer";
import Helmet from "react-helmet";

const CommunityEvents = () => {

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
        <title> Comunity Events | DAI</title>
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
                <h2 className="text-center text-white">Community Events</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Community Events
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
                  <Col md={8}>
                      <div className="">
                          <h2 className="text-primary">COACHING CAFE</h2>
                          <p>Being a Coach is a lifelong journey and no amount of practice can guarantee perfection. However, with consistent practice in pursuit of perfection, we might end up achieving excellence. Coaching plays a significant role in our effectiveness of being an Agile Coach and our ability to help individuals, teams and organizations transform successfully. </p>

                          <p>We have launched an Agile Coaching Café to help us consistently practice our coaching competencies to enhance our effectiveness of being a coach. </p>

                          <p>Whether you are a Scrum Master, An Agile Coach, Change Agent or a Transformation Leader, you can join these sessions to practice your coaching skills and get coached on any specific topics that you are looking to get addressed.  </p>

                          <p>If you have already mastered the art & science of coaching, do JOIN US to share your expertise and contribute your bit to the community. </p>

                          <p>We look forward to you joining us in our collective pursuit of achieving Coaching Excellence. </p>

                          <p><b>Our Schedule</b></p>
                          <p className="text-uppercase">EVERY FRIDAY, 8 PM IST</p>

                          <a href="https://www.google.com/url?q=https://us02web.zoom.us/j/85057504377?pwd%3DM3ZnN0l0a1BkV083TSswTTB4eTdhUT09&sa=D&source=calendar&usd=2&usg=AOvVaw1aJYNfv3RQkQww90yB2JZO" rel="noopener noreferrer" target="_blank" title="" className="btn btn-primary">Join Zoom Meeting</a>

                          <p className="mb-0 mt-3">Metting ID: 850 5750 4377</p>
                          <p>Passcode: 542318</p>
                      </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                      <div className="text-center">
                        <Image src={image1} alt="" className="img-fluid" />                        
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row>
            <Col md={4} className="align-self-center">
              <Image src={image2} alt="" className="img-fluid" />
            </Col>
            <Col md={8}>
              <div className="">
                  <h2 className="text-primary">THE BOOK READERS CLUB</h2>
                  <p>Being Agile is also about continuous learning and evolution. In order to help the community with their learning journey, we launched “SEEKERS - The Book Readers Club”. This club provides an opportunity for anyone in the community to present their learnings from the books that resonate with them, their reflections, and experiences of having applied the learnings in their daily lives or ideas on how they would apply in their context in future.  </p>

                  <p>If you wish you watch our earlier book reviews, you can look up to our YouTube Channel</p>

                  <a href="https://www.youtube.com/nivartijayaram" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Click here to Join</a>

                  <p><b>Our Schedule</b></p>
                          <p className="text-uppercase">EVERY Alternate Wednesday, 8 PM IST </p>

                          <a
                    href="https://www.facebook.com/digitalagilityinstitute"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/digitalagilityinstitute/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>

                          


                          <p>If you wish to be part of the WhatsApp Community, then you can  <a href="https://chat.whatsapp.com/GUfrRscERkkBzoF7z42iDn" className="btn btn-primary" title="" rel="nofollow" target="_blank">click here to join.</a></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="align-self-center">
              <div className="">
                <h2 className="text-primary pt-2 pb-2">Expert Scrum Master</h2>
                <p className="">
                  A complete hands-on experiential learning program intended to
                  build competencies of Scrum Masters to establish themselves
                  and their role within organizations.
                </p>

                <div className="text-center text-md-start">
                  <Image
                    src={ESMimage}
                    alt=""
                    className="img-fluid img-thumbnail"
                    height="300"
                    width="300"
                  />
                </div>

                <p>
                  The program is being run using five themes, each consisting of
                  two iterations with specific goals and acceptance criteria to
                  be met by each member of the team. A mentor is assigned to
                  each team to coach, guide & mentor the team members on their
                  journey through the program.
                </p>

                <p>
                  This program is being run by volunteers who are acting as
                  mentors for the participants and validating the acceptance
                  criteria as having been met in each iteration. Participants
                  who successfully complete all the 10 iterations would be
                  awarded "Expert Scrum Master" Certification from Digital
                  Agility Institute as a recognition of their expertise
                </p>
                <p>
                  Want to know more about the program, watch the video here:{" "}
                  <a
                    href="https://youtu.be/i3F28_o2f1g"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://youtu.be/i3F28_o
                  </a>
                </p>

                <div className="">
                  <p>
                    Course Name: <strong>DAI - ESM</strong>
                  </p>
                  <p>Free Community Learning Program</p>

                  {/* <div className="mt-3 mb-3">
                    <ExperientialPopup
                      title="Hello1"
                      hello="https://google.com"
                      coursename="DAI - ESM"
                    />
                  </div> */}
                </div>
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="">
                <div className="ratio ratio-1x1">
                  <iframe
                    src="https://designrr.page?id=146856&token=2216463541&type=FP&h=2745"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="mb-5 mb-md-0">
                <div className="ratio ratio-1x1">
                  <iframe
                    src="https://designrr.page?id=153171&token=1151081232&type=FP&h=2679"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
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

export default CommunityEvents;
