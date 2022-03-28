import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BlogImage from "../Images/blogs/blog-9.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const Blog9 = () => {
  return (
    <div>
      <TopMenubar />
      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">
                Why do I need a Coach?
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
                    Why do I need a Coach?
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

              <p>I am successful, understand my strengths & weaknesses and am able to work around these. Then, why do I need a coach? Do you have this question in mind too!!!</p>
              <p>The general perception is that one needs to look out for a coach when you hit a hurdle that you are struggling to overcome or completely lost in your journey of life and that a Coach needs to be better capable / accomplished than yourself. Also, there lies a fear complexion that people around you would start doubting your capabilities and this would impact your career growth prospects if you seek a coach.</p>
              <p>In my experience, I have found all these perceptions to be wrong (at least in my case they are). I have always looked out for help to progress through my career transition both within & outside Air Force. As we set out to work on a big transformation program of work, I looked out for help to understand what I need to train myself on to be able to gain technical knowledge to help my organization achieve intended benefits. Result - I started my journey towards completing System / Network Administration course covering MCSE, CCNP & RHCE.</p>
              <p>As I decided to venture into corporate world moving away from Services, I again looked out for help and found my nephew who was with IBM to understand career options / certifications that I would need to pursue. Result - I found that I wanted to pursue a career in project management, completed PMP & ITIL and kick started my caeer.</p>
              <p>As recently as a month back again I was looking for help to understand how I progress further with my career, validate whether I was on the right path, have right goals set out. I did find a coach. Now what is coaching? What does a coach do? And, how can he help you to help yourself?</p>
              <div className="pt-1 pb-1 pt-md-2 pb-md-2">
                <Row className="justify-content-center">
                  <Col md={8}>
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p className="fw-bold fst-italic">
                        “C oaching is partnering with clients in a thought-provoking and creative process that inspires them to maximize their personal and professional potential, which is particularly important in today's uncertain and complex environment”
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title"> International Coaching Federation</cite>
                      </figcaption>
                    </figure>
                  </Col>
                </Row>
                </div>
              <p>Our personal as well as professional life revolves around managing three factors (not referring to Donald Rumsfeld) that cater for Short, Medium & Long term goals & aspirations:</p>
              <p>Ø Known Knowns: These are the skill-sets, competencies strengths, weaknesses, limitations, & personality traits that we have which we know that we know and utilize in our daily life to progress personally & professionally. How can a Coach help with these?</p>
              <p>Sample Questions: "Can you define your Goal?" "How could you make this a 'SMART' Goal?" "What do you think you can STOP doing or Do LESS of? Do MORE of, or CONTINUE doing? START doing?" "What do you think you MUST do going forward?"</p>
              <p> Ø Known Unknowns: These are the skill-sets, behavior traits & competencies that we know we don't have. How can a Coach help with these?</p>
              <p>Role of a Coach: The coach will partner with you to explore the need for acquiring the skills that you need and don't have, which are required to meet your goals and find avenues to practice those skill-sets.</p>
              <p>Sample Questions: "What do you think are the skill-sets required to meet your goal?" "What do you think is the gap?"</p>
              <p>"How do you think you can acquire these? Where do you think you can put these into practice?" "What do you think you MUST do going forward?</p>
              <p>Ø Unknown Unknowns: These are the skill-sets, behavior traits & competencies that we don't know we have (sub-conscious) which do influence our ability to pursue and achieve intended goals.</p>
              <p>Role of a Coach: The coach will empathize & empower you to come up with ways to explore your traits, strengths, values & beliefs that are sub-conscious to maximize potential through active listening, powerful questioning, and direct communication.</p>
              <p>Coaches of different ages & experience have played a significant part in my journey being successful so far and I would continue to seek help where needed to further my personal and professional career. It's all about our intent to understand ourselves better through self-exploration, learn continuously to overcome our limitations, validate our beliefs to achieve our goals but with external assistance.</p>
              <p>If you think you are in need of some help and are looking for a coach, I would be happy to partner with you to help yourself. Reach out to me on nivarti638@gmail.com or https://nivarthijayaram.youcanbook.me</p> 
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog9;
