import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Helmet from "react-helmet";
import BlogImage from "../Images/blogs/blog-7.png";
import innerimage from "../Images/blogs/blog-71.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const Blog7 = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs - Unlearning | DAI</title>
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
                <h2 className="text-center text-white">
                  Unlearning – a challenge or an opportunity??
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a href="/blogs" className="custom">
                        Blogs
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      Unlearning – a challenge or an opportunity??
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
            <Col md={8}>
              <div className="text-center">
                <Image src={BlogImage} alt="" className="img-fluid" />
              </div>

              <p>
                There are lot of frameworks available to impart learning. It is
                also easier to learn new competencies & behaviors than to
                unlearn. This is because unlearning is an internal process to
                oneself. How can we unlearn? This is the big question that most
                of us have.
              </p>

              <p>
                I have been delivering business outcomes through projects &
                programs over past many years. Few unconscious behaviors that
                had crept in because of long term association with the trade
                are:
              </p>

              <ul className="list-unstyled">
                <li>
                  Ø Driving conversations towards a desired or predetermined
                  outcome
                </li>

                <li>Ø Adhering to plan, processes & documentation</li>

                <li>Ø Being directive etc</li>
              </ul>

              <p>
                I started coaching in parallel with my current role since last
                couple of years. Initially it was quite difficult as my
                unconscious behaviors always used to be that of a Project
                Manager. I felt the need to be conscious about my behavioral
                shift during coaching conversations. I also need to retain the
                existing behaviors of being a project manager as being mandated
                by my role. Precedence is given to consciously validate if it
                can be a coaching conversation first.
              </p>

              <div className="pt-1 pb-1 pt-md-2 pb-md-2">
                <Row className="justify-content-center">
                  <Col md={8}>
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p className="fw-bold fst-italic">
                          “Before people can begin something new, they have to
                          end what used to be and unlearn the old way.”
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">William Bridges</cite>
                      </figcaption>
                    </figure>
                  </Col>
                </Row>

                <p>
                  What we need to be clear is about what is that we are looking
                  to unlearn? Skills or competencies or behaviors!!! All of
                  these or some of these. Let’s first establish clarity around
                  how these are related.
                </p>

                <p>
                  Skill is an ability and capacity acquired through deliberate,
                  systematic, and sustained effort to smoothly and adaptively
                  carryout complex activities or job functions involving ideas
                  (cognitive skills), things (technical skills), and/or people
                  (interpersonal skills). – Wikipedia
                </p>

                <p>
                  Competency is the ability to do something successfully or
                  efficiently
                </p>

                <p>
                  We build our skills attending training, watching videos,
                  reading books etc. We build our competencies through
                  application of skills consistently. Competencies practiced
                  over a period of time along with beliefs & values drives our
                  behaviors. As advised by Sir John Whitmore in “Coaching for
                  performance”, we build our competencies & behaviors through
                  the below cycle.
                </p>

                <div className="text-center">
                  <Image src={innerimage} alt="" className="img-fluid" />
                </div>

                <p>
                  We build conscious competence & behaviours associated based on
                  the demands of the roles & responsibilities we perform on day
                  to day basis. These when consistently practiced over a long
                  term become our unconscious competencies.
                </p>

                <p>
                  Learning & unlearning processes run in parallel. The Learning
                  process is moving from Unconscious incompetence to Unconscious
                  Competence while Unlearning happens the other way round. The
                  first step in the unlearning process as outlined below:
                </p>

                <h3>
                  <u>Unconscious Competence to Conscious Competence:</u>
                </h3>

                <p>
                  <strong>Need:</strong> One should be clear on the need for
                  unlearning (Always start with WHY). Why do you want to
                  unlearn? What is it that you are looking to accomplish? How
                  determined you are to unlearn?
                </p>

                <p>
                  <strong>Analysis & Acknowledgement:</strong> One needs to
                  analyse on the specific behaviours that you are required to
                  unlearn and acknowledge. This involves identifying the desired
                  and undesired traits & behaviours to map to WHY. Once
                  identified, acknowledge those that need to be unlearned.
                </p>

                <p>
                  You could use SWOT (Strengths, Weakness, Opportunities, and
                  Threats) analysis to come up with the current behaviours you
                  have. Use gap analysis to identify the behaviours that need to
                  be unlearned and those to be learned.
                </p>

                <p>
                  <strong>Consciousness:</strong> Be conscious about the
                  undesired behaviours that need to be avoided in a given role /
                  scenario.
                </p>

                <p>
                  By following above steps, one would have moved the undesired
                  traits from Unconscious competence to Conscious Competence.
                  You would have accomplished the first step towards unlearning.
                  Also, the new behaviours that you are learning would be moving
                  from Unconscious Incompetence to Conscious Competence.
                </p>

                <Row className="justify-content-center">
                  <Col md={8}>
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p className="fw-bold fst-italic">
                          “Every mile you go in the wrong direction is really a
                          two mile error. Unlearning is twice as hard as
                          learning.”
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">Unknown</cite>
                      </figcaption>
                    </figure>
                  </Col>
                </Row>

                <h3>
                  <u>Conscious Competence to Conscious Incompetence</u>
                </h3>

                <p>
                  <strong>Prioritizing:</strong> Next is to move the undesired
                  behaviours from conscious competence to unconscious
                  incompetence. This can be achieved by prioritizing &
                  practicing the newly desired behaviours consistently and
                  making them part of our Unconscious Competence. By
                  continuously establishing & showcasing the newly desired
                  traits one loses conscious of the undesired.
                </p>

                <h3>
                  <u>Unconscious Competence to Unconscious Incompetence</u>
                </h3>

                <p>
                  Undesired behaviours that are not focused on and practiced
                  over a long period will most likely be forgotten. Thereby
                  those behaviours move from Unconscious Competence to
                  Unconscious Incompetence. Skills once inherited would remain
                  with us and we will need to put them into practice when we
                  look to build competency.
                </p>

                <h3>Barriers</h3>

                <p>
                  The reason why many look at Unlearning as a challenge is
                  because of the barriers. These can be Internal as well as
                  external. Listed below are few of many that you could face:
                </p>

                <p>
                  <strong>Ø I can adapt:</strong> This is one the barriers most
                  of us would face. Having gone through different life
                  experiences, we always feel we could adapt our behavior to any
                  given role or scenario. If you have not identified the
                  undesired traits, this is more than likely fail you. The
                  reason being that the natural behaviours (Unconscious
                  Competence) takes over when you are faced with pressure,
                  demanding and stressful situations.
                </p>

                <p>
                  <strong>Ø It takes too long:</strong> Building new behaviours
                  does need consistent, conscious effort over a considerable
                  period of time. Being aware of this, motivated enough and
                  continuous self-reflection on your progress is the key to
                  success.
                </p>

                <p>
                  <strong>Ø I am already doing it:</strong> This is the most
                  comforting of the barriers. Thinking about those rare
                  situations where we might have used some of the behaviours
                  makes us believe we have naturalized them. Which in fact is
                  definitely not true.
                </p>

                <p>
                  <strong>Ø What would people think:</strong> This barrier is
                  driven by social expectations. We all have established a
                  certain impression among our peers, friends & family through
                  our existing behaviours. The tendency is to fear about the
                  reactions of those close to you when you look to adapt an
                  entirely different behaviours as against what has been
                  established. We can turn this to our advantage instead of
                  looking at this negatively. Be open about why you are looking
                  to change and what you are trying to accomplish with those
                  around you. It also helps in garnering their reflections and
                  feedback on your progress.
                </p>

                <p>
                  To conclude, we need to focus on unlearning the behaviours and
                  the competencies would wane on their own. Unlearning should
                  always be looked at as an opportunity as it will help you in
                  learning new behaviours.
                </p>

                <p>
                  With the rapid changing Technology, leadership styles and next
                  generation thought process, it is imperative that we all learn
                  the way to unlearn. This is needed to not just progress in
                  your professional career and life but even to stay relevant.
                </p>

                <p>
                  If you are looking for help in understanding what you need to
                  unlearn as you move into a new role or taking up a new
                  responsibility, give me a shout @
                  https://nivarthijayaram.youcanbook.me
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog7;
