import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Helmet from "react-helmet";
import BlogImage from "../Images/blogs/blog-14.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const Blog14= () => {
  return (
    <div>
      <Helmet>
        <title>Blog - Agile to Agility | DAI</title>
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
                <h2 className="text-center text-white">Agile to Agility – Role of a Coach</h2>
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
                    Agile to Agility – Role of a Coach
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
              <p>With most of the organizations looking up to adopt Agile practices to improve customer experience, ability to adopt to dynamic market conditions, hi-speed technological advances the organizational transformation journeys continuous & ongoing. In the context, the role of an Agile Coach is being looked at training resources (talking Agile), analyzing team function & advising on relevant framework to be adopted and enabling the various segments both Business / Technology to adopt Agile practices (implementing Agile). While all of this is indeed an Agile Coach would contribute in an Organization’s Agile Transformation journey, the significant contribution expected from an Agile Coach should be furthering a team / organization to move ahead from implementing Agile to achieving Organizational Agility (Being Agile).</p>
              
              <p>Many organizations tend to fail to accomplish what they set out to achieve as they consider adopting agile way of working (Doing Agile or implementing Agile) as the only means to agile transformation. As I understand, an agile transformation journey has three stages – Talking Agile, Doing Agile & Being Agile. To go from Doing Agile to Being Agile, It involves a cultural transformation journey to change the traditional Mindset of people from being direction oriented to being Self-organized / managed which brings a shift in ownership for both success / failures from a Manager to the team itself.</p>

              <p>While Agile Coach has a role to play in helping organizations adopt Agile ways of working, it grows bigger in significance in helping them move to reach a state of “Being Agile” by helping the teams mature in the new ways of working, facilitate & encourage decision making, problem solving, taking ownership for delivery etc which is a change in Mindset.</p>

              <p>As per Simon Powers, Agile Mindset is defined by just three beliefs:</p>
              <ul>
                  <li> The complexity belief</li>
                  <li> The people belief</li>
                  <li> The proactive belief</li>
              </ul>
              <p>You can read more on what is Agile Mindset here.</p>

              <p>For organizations to achieve true agility by adopting Agile, they would need their underlying Infrastructure to be either cloud based or fully containerized which would provide dynamic environment provisioning required for teams to kick off their development efforts. Also, contributing would be the use of API based micro services for integration across platforms / applications. However, most organizations currently operate with converged infrastructure (combination of Public or Virtual Private Cloud, Utility Computing & Physical hardware) to accommodate for legacy applications / platforms, customer data protection as well as regulatory needs. This does put lot of constraints on the ability of the organizations in realizing the benefits that otherwise would be possible through adoption of Agile frameworks.</p>

              <p>This is where an agile coach through the understanding of agile Mindset should be able to help a coachee achieve personal agility which could extrapolate into team / enterprise agility. I would look for below qualities in an individual who intends to achieve personal agility:</p>

              <ul>
                  <li> A - Adaptability</li>
                  <li> G - Growth Mindset</li>
                  <li> I - Innovative</li>
                  <li> L - Leveraging</li>
                  <li> I - Inquisitive</li>
                  <li> T - Transformative</li>
                  <li> Y - focused on WHY</li>
              </ul>

              <p>An individual who has attained personal agility would be able to work through the organizational constraints to bring in maximum possible agility into delivering outcomes faster. This would be only possible if one embraces the essence of agile principles, values & beliefs and is able to apply</p>

              <p>beyond agile framework boundaries and for this to happen, you need to believe that agile is truly agnostic and not restricted to software development.</p>

              <h3>To lead change, don’t just behave differently — think differently.</h3>

              <p>The general trend in organizations is to have external consultants experienced in coaching / transformation to help them through the transformation journey. While it is very much needed to have experienced enterprise coaches to be guiding through the initial phases of agile transformation, it is equally important to develop internal coaching capability to be able to sustain the agility levels achieved during the transformation journey and progress further. It’s prudent to identify individuals that fit across different layers of coaching capability in an agile organization (scrum coaches, Team level coaches & Enterprise level coaches) and have them coached / mentored through the external consultants to mature through the transformation journey. Merits of the case can be further read in the white paper.</p>

              <p>An agile coach should help an individual / team to progress through the maturity levels of being able to adopt agile, be agile and go beyond agile to help achieve intended personal / team agility within the purview of available organizational architecture. Sooner than later this becomes contagious once other teams realize the benefits of achieving state of agility & selflessness resulting in improved overall organizational agility.</p>

              <p>What else do you thing can help an organization move from adopting agile to achieving agility???</p>



              
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog14;
