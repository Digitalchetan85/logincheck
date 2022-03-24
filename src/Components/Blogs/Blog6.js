import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BlogImage from "../Images/blogs/blog-6.png";

const Blog6 = () => {
  return (
    <div>
      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">
                  Self-Reflection – Most underutilized yet powerful tool
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
                      Self-Reflection – Most underutilized yet powerful tool
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
                Hey, what happened to you? You don’t look like the way you used
                to be. You seem to have changed or you are not the same bubbling
                energetic person. Has someone asked you these questions or made
                these statements recently!!! If yes, then it’s time for
                Self-reflection.
              </p>

              <p>
                Shifting jobs is never easy. I was busy for most of January
                handing over my responsibilities and again February & this month
                settling myself in the new organization. I was attending a
                coaching cohort last weekend during which my colleagues whom I
                have been interacting with over the last six months observed a
                significant change in my energy levels. They also offered to
                help me to understand what has changed through the period which
                has changed my outlook overall.
              </p>

              <div className="pt-1 pb-1 pt-md-2 pb-md-2">
                <Row className="justify-content-center">
                  <Col md={8}>
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p className="fw-bold fst-italic">
                          “Self-Reflection entails asking yourself questions
                          about your values, assessing your strengths and
                          failures, thinking about your perceptions and
                          interaction with others, and imagining where you want
                          to take your life in future”
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">Robert L Rosen.</cite>
                      </figcaption>
                    </figure>
                  </Col>
                </Row>

                <p>
                  We are always busy with our lives focusing on targets at work,
                  career progress, employment shift, achieving work-life
                  balance, worrying about family etc. Result! we don’t find time
                  for the most important person in our lives, “YOU”.
                </p>

                <p>
                  Being an advocate for Self-Coaching, I decided to reflect on
                  what I was earlier to what I was today to understand what has
                  changed. I used Mindfulness Mediation as well as Yoga Nidra to
                  calm my mind so I can start self-reflecting.
                </p>

                <p>
                  To my surprise, I found that the most that was bothering me
                  was my change in schedule and the resulting extra time spent
                  in travel. That had changed my perspective & positive outlook.
                  Every place I faced a traffic jam (and generally there are
                  quite a few everyday), the negativity was compounding
                  impacting my energy levels and my recovery time. I was trying
                  to manage my time better than focussing on the most important
                  aspect, my mindset.
                </p>

                <p>
                  The moment this realization set in, I experienced a big shift
                  in energy having been made aware of the negativity that had
                  crept into my thoughts. I tried not to let those thoughts /
                  negativeness into my mind during my journey but that made it
                  even worse. That’s when I remembered a scene from the film
                  “Kung Fu Panda 3” where the Dragon Warrior is shown trying to
                  control his thoughts around his childhood and the Soothsayer
                  says “Don’t fight the thoughts, it only causes more pain, let
                  them flow” and only then “PO” the character attains inner
                  peace.
                </p>

                <Row className="justify-content-center">
                  <Col md={8}>
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p className="fw-bold fst-italic">
                          “Everything in your life is a reflection of the choice
                          you have made, if you want a different result make a
                          different choice”
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">Unknown.</cite>
                      </figcaption>
                    </figure>
                  </Col>
                </Row>

                <p>
                  To break the negative mindset and not be still occupied with
                  the thoughts, I had to find a way to let my thoughts flow. I
                  started journaling my travel experience every day after I get
                  back home. This really helped in getting over the negative
                  energy built during the day giving me much needed fresh mind
                  to start focusing on my goals.
                </p>

                <p>
                  That brings me to the first element of my Self-coaching
                  framework, creating self- awareness using tools such as
                  Self-reflection, Mindfulness mediation, Yoga Nidra &
                  Journaling. Sounds pretty simple isn’t it !!!
                </p>

                <p>
                  I would like to thank Ananth Krishnan, Deepak Gururaja &
                  Banumathy for coming forward to highlight my state and also
                  their kind gesture in offering help.
                </p>

                <p>
                  Have you used Self-reflection in any situation in your life
                  and have benefitted from it?? Would love to hear your
                  experience using this powerful yet rarely used tool (freely
                  available when and where you need😊).
                </p>

                <p>
                  If you think you are in need of some help and are looking for
                  a coach, I would be happy to partner with you to help
                  yourself. Reach out to me on nivarti638@gmail.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog6;
