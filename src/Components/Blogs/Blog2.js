import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Helmet from "react-helmet";
import BlogImage from "../Images/blogs/blog-2.png";
import innerimage from "../Images/blogs/blog-21.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const Blog2 = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - Lessons in Leadership | DAI</title>
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
                  Lessons in Leadership - succession planning
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
                      Lessons in Leadership - succession planning
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
                  "Known devil is much better than the unknown" is the phrase
                  that we all have heard and somewhat believed in growing up in
                  life. This also influences our decision making process when we
                  are in crunch situations. Let us now look at how this is
                  applied in the context of succession planning!!
                </p>

                <p>
                  As we grow up the hierarchy, we would like this phrase to be
                  followed by our higher ups in letter and spirit. In essence,
                  it means that we would like our bosses to look at what all we
                  have accomplished and what strengths we can bring in to the
                  target role that we are being positioned for and how our
                  strengths can help us to perform better in the role. However,
                  when it comes to people succeeding us in the teams at the next
                  level or the levels beyond, the story takes another turn.
                </p>

                <p>
                  The focus when we are trying to identify our successors is
                  always to focus on what are the gaps in the next level of
                  leadership we have in the hierarchy as against focusing on the
                  strengths. We forget that for every position there is a
                  learning curve and we should look to position people for the
                  learning attitude and the skills gap can then be addressed as
                  a natural progression while performing the role.
                </p>

                <p>
                  This essentially means that if we create a 2x2 matrix for
                  succession planning, the representation of how we like
                  ourselves to be visualized vis-a-vis our successors would be
                  as below:
                </p>

                <div className="text-center">
                  <Image src={innerimage} alt="" className="img-fluid" />
                </div>

                <p>
                  We always would position ourselves in the top two quadrants
                  (known knowns & Known unknowns) focusing more on our strengths
                  and not gaps. However, when it comes to the succession
                  planning the focus would still be on the three quadrants but
                  concentration being on the gaps that need to filled as against
                  strengths they could bring in and also the blind-spots that
                  others have identified.
                </p>

                <p>
                  This leads us to be not in a better place to position and
                  establish our next level to be our successors and look for
                  people outside the system to replace us (may be internally or
                  externally).
                </p>

                <p>
                  What influences the decision to look outside is the focus on
                  known negative aspects of our next level as against their
                  accomplishments and strengths. The same is in complete
                  contrast when we are looking at people outside the system as
                  the focus is more on what value they could bring-in through
                  their strengths and is mostly what they could accomplish for
                  the organization. In simple terms, it's the past issues for
                  people internally vs the future value proposition for
                  outsiders.
                </p>

                <p>
                  Most of the successful leadership coaches advise us to focus
                  on furthering our strengths and not looking to remediate our
                  weakness, but how much of it helps is a question that still
                  needs to answered.
                </p>

                <p>
                  What do you focus on when identifying your successors? how do
                  you establish them to succeed you? looking forward to hear
                  your thoughts and experiences
                </p>

                <p>
                  PS: The thoughts and experiences published here are solely my
                  own and do not reflect the policies of the organizations that
                  I have been part of.
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

export default Blog2;
