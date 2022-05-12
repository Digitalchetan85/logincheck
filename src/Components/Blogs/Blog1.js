import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BlogImage from "../Images/blogs/blog-1.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";
import Helmet from "react-helmet";

const Blog1 = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - Agile Transformation | DAI</title>
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
                  Agile Transformation! – A bloom or a doom
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
                      Agile Transformation! – A bloom or a doom
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
              <div className="pt-3 pb-3 pt-md-5 pb-md-5">
                <p>
                  Why do most agile transformations fail including those in big
                  enterprises? Are you one of those who have this question in
                  mind or one who has been asked? Then you are not alone as this
                  is the most asked question in Agile conferences. I thought of
                  drilling deep down into this question to validate my thoughts
                  and observations.
                </p>

                <p>
                  The most significant of the reasons that come to my mind when
                  I think of answering this question are:
                </p>

                <p>
                  <strong>Ø Lack of clarity on the “Why”:</strong> Lot of
                  individuals and /or organizations relate to what Simon Sinek
                  advocates in principle “Start with Why” but seldom rarely put
                  it into practice. The “WHY” for most of the organizations
                  looking to transform is driven by one or more of the
                  following:
                </p>

                <ul>
                  <li>
                    The number of companies transforming in the relevant
                    industry landscape which drives the fear of being left out
                    in capitalizing the market.
                  </li>
                  <li>
                    Customer mandate to be following agile practices to enhance
                    the number of clients or sustain the existing clientele.
                  </li>
                  <li>
                    Driven by success achieved by other companies in different
                    sectors through agile transformation
                  </li>
                </ul>

                <p>
                  <strong>Ø Lack of focus on Organization Culture:</strong>{" "}
                  Organizations consist of three things, People, Processes,
                  Product and / or Service and mostly the transformation efforts
                  are focussed on these three. However, what drives success for
                  an organization not just in transformation but in its business
                  is the Culture it embodies. I am surprised by the lack of
                  significance given to transforming organization culture.
                </p>

                <p>
                  For me, Culture comes first as it is the one which takes the
                  longest to transform and the effort needed is directly
                  proportional to the age of the organization. The older the
                  organization, the longer it takes to transform culture as the
                  values & the belief system is that much stronger and deep
                  rooted.
                </p>

                <p>
                  <strong>Ø Applying a cookie cutter solution:</strong>{" "}
                  Organizations look to deploy a model that has been
                  successfully used to transform another organization, the most
                  famous one being “SPOTIFY”. There is another argument that we
                  can follow a model that some other organization in the same
                  industry has successfully used to transform, which again is
                  not correct.
                </p>

                <p>
                  One needs to understand that every organization is unique and
                  has its own business context, culture & mindset driven by
                  people it employs and the countries it operates in. Spotify,
                  ING or any other organization has gone through a maturity
                  curve to reach where they are today, while it could be useful
                  to study their transformation journey, it’s not recommended to
                  use their current state as a baseline or replicate what they
                  did and believe it guarantees success for our transformation
                  as well.
                </p>

                <p>
                  <strong>Ø Defining Transformation end state:</strong> I
                  recently saw one of the big companies announcing that they
                  would be enterprise agile by 2020, which means they have
                  already defined what the end state for them to be enterprise
                  agile is.
                </p>

                <p>
                  Organizations evolve through transformation and there is no
                  definite end state as this is a continuous and ongoing journey
                  exactly similar to our learning which continues throughout our
                  life.
                </p>

                <p>
                  Defining an end state means you are driving the transformation
                  through a fixed agenda and is actually a transition than
                  transformation.
                </p>

                <Row className="justify-content-center">
                  <Col md={8}>
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p className="fw-bold fst-italic">
                          "Just when the caterpillar thought the transformation
                          was complete, it became a butterfly"
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">#Unknown</cite>
                      </figcaption>
                    </figure>
                  </Col>
                </Row>

                <p>
                  <strong>Ø  Driven by Check List:</strong> I
                  Unlike other programs and projects that have a definite plan of action, Agile transformation cannot be run by a checklist of activities. Each organization, team and individual are unique and the transformation approach that works for one doesn’t necessarily work for other. No standard check list or play book can help transform organizations with guaranteed success.
                </p>

                <p>
                  <strong>Ø  Leadership’s unwillingness to change:</strong> Transformation is always considered to be centred around teams and middle level managers. However, for it to be really successful, there is a definite change needed in style and functioning of Senior Leaders in the organization. Unacceptance and / or unwillingness of the leadership to change their style leads to the transformation being unsustainable. This becomes further difficult if the transformation is not driven right from the top.
                </p>

                <p>
                  <strong>Ø  Lack of business buy-in:</strong> Most of the transformations today are Technology driven than business driven. This leaves a big gap in achieving the end objective of business agility which could provide accelerated value and better experience to end customers resulting in enhanced business outcomes and market. It’s imperative for us to involve business right from day one of transformation if we are really serious about it and are not running behind doing Agile as it is the current fab in the market.
                </p>

                <p>
                  <strong>Ø  Too much focus on Agile than Agility:</strong> Agile frameworks are a means to achieve agility. Putting too much focus on teams implementing these frameworks strictly than achieving the outcomes for end customers with agility can lead to compromising customer centricity and value delivery. This results in lack of support from organizational leadership as well as business stakeholders which will ultimately impact team motivation, autonomy & empowerment.
                </p>

                <p>With so much focus on Agile frameworks and practices across the globe and also so much money spent on transformational initiatives involving coaches, consultants, advisors and the number of frameworks that keep cropping up every day, it’s surprising to see so many aspects being in play that are driving transformations to fail.</p>

                <p>If you want your organization to bloom with Agile Transformation journey then it is advisable to look at the transformation anti-patterns & challenges and if you are already facing these challenges, look for possible ways to overcome these. Feel free to reach out to me if you are currently facing one or more of these and are looking for someone to have a conversation.</p>

                <p>What other aspects can you think of or have experienced that could lead organizations to fail in their transformation journey? Looking forward to hearing your thoughts & experiences!!!!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog1;
