import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Helmet from "react-helmet";
import BlogImage from "../Images/blogs/blog-12.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const Blog12= () => {
  return (
    <div>
      <Helmet>
        <title>Blog - Self-Assessment | DAI</title>
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
                Self-Assessment – Continuous evaluation is key to excellence
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
                    Self-Assessment – Continuous evaluation is key to excellence
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
              <p>Self-assessment is the process of looking at oneself in order to assess aspects that are important to one's identity. It is one of the motives that drive self-evaluation, along with self-verification and self-enhancement (from Wikipedia).</p>
              <p>
              Self-assessment is essential for individuals / teams and even organizations to be able to achieve excellence. However, this is just a first step and not the last. The next phase entails options that may involve self-learning / seeking a coach’s help, self-evaluation & enhancement which when continuously iterated leads to excellence. 
              </p>

              <p>
              Bloom’s Taxonomy was developed in 1956 by Benjamin Bloom to classify levels of intellectual behavior important in learning. The original taxonomy was organized into three domains: Cognitive, Affective, and Psycho-motor. In 2001, another team of scholars—led by Lorin Anderson, a former student of Bloom’s, and David Krathwohl, published “Revised Bloom’s Taxonomy,” as it is commonly called.
              </p>
              <p>I have found this framework to be quite useful in facilitating Agile Teams to understand where they are in the transformation journey and customize interactions to help them in their quest to achieve excellence resulting in Organizational agility.</p>
              <p>To arrive at an understanding of where in the framework the Coachee / Team/ Organizational maturity level stands one could use effective powerful questioning with the help of “Five Ws and H”. Who? What? Where? When? Why? & How? This is fundamental concept when examining any new learning situation.</p>

              <h4>Level I: Knowledge</h4>
              <p> - Exhibits memory of Agile manifesto, principles and relevant frameworks, terminology, ceremonies etc.</p>
              <p>Questions:</p>
              <ul>
                <li> What is Agile? What is Scrum? What is Kanban? What are various ceremonies?</li>
                <li>Who owns Product backlog? </li>
                <li>How would you write user stories? </li>
                <li>How do you estimate?</li>
                <li>When does the sprint review happen?</li>
                <li>When do we conduct sprint retrospective?</li>
              </ul>
              <p>The above two levels would form part of first phase of Agile Transformation where teams are trained on Agile methodologies and relevant frameworks in an Organization.</p>
              <h4>Level II: Comprehension</h4>
              <p>- Demonstrate understanding of Agile methodologies and underlying frameworks, principles, manifesto, comparing, interpreting and giving descriptors.</p>
              <p>Questions:</p>
              <ul>
                <li>How would you compare Scrum & Kanban? </li>
                <li>Will you state or interpret Agile principles in your own words? </li>
                <li>How would you define an Epic?</li>
                <li>What is the main idea of implementing Agile in organizations?</li>
                <li>Can you explain what happens in a retrospective?</li>
              </ul>
              <p>The above two levels would form part of first phase of Agile Transformation where teams are trained on Agile methodologies and relevant frameworks in an Organization.</p>
              <h4>Level III: Application</h4>
              <p> - Solve complex business problems by applying acquired Agile knowledge, techniques and principles using relevant frameworks focusing on delivering value faster.</p>
              <p>Questions:</p>
              <ul>
                <li>How would you solve complex business problems using Agile?</li>
                <li>How would you self-organize as a team? </li>
                <li>What approach would you use to estimate user stories? </li>
                <li>Who would you approach to get your impediments resolved?</li>
                <li>What other way would you arrive at sprint goal?</li>
              </ul>
              <h4>Level IV: Analysis</h4>
              <p>Examine the effectiveness of agile implementation, ability to deliver value faster, improvement in customer satisfaction, validate metrics (like velocity / throughput) etc. Make inferences and find evidence to support generalizations.</p>
              <p>Questions:</p>
              <ul>
                <li>How is team velocity / throughput? </li>
                <li>Why do you think is agile is effective?</li>
                <li>What conclusions can you draw on ability to self-organize?</li>
                <li>Who can provide evidence of level of achievement of objectives?</li>
              </ul>
              <p>The above form part of “Implementing Agile or Doing Agile” stage of where teams are able to apply agile frameworks and are its effectiveness.</p>

              <h4>Level V: Synthesis</h4>
              <p>- Compile information that comes out of the analysis to understand if all practices that are being followed are effective, if there is a need to look at alternative frameworks or combine best practices from more than one frameworks. This is the phase where we can actually understand if the team / organization has acquired the agile Mindset.</p>
              <p>Questions:</p>
              <ul>
                <li>What aspects of the framework are helpful? </li>
                <li>How would you improve?</li>
                <li>What would happen if we combine certain aspects of corresponding framework?</li>
                <li>ow can we customize the framework to suit our team /organization?</li>
                <li>Why do you think you need to customize?</li>
              </ul>

              <h4>Level VI: Evaluation</h4>
              <p>- Present and defend changes by validating ideas or need for change based on a set of criteria and value add the change is likely to bring in.</p>
              <p>Questions:</p>
              <ul>
                <li>How would you prove the value or importance of the proposed change?</li>
                <li> Why do you think we need to choose this option?</li>
                <li>What would you recommend…? </li>
                <li>How would you evaluate? • How could you determine…? </li>
                <li>What choice would you have made…?</li>
                <li>What data was used to make the conclusion…?</li>
              </ul>
              <p>The above form part of “Being Agile” stage of where teams are able to validate the practices used, identify the need & level of customization using creative thinking to achieve excellence in their transformation journey.</p>

              <h4>Level VII: Creativity</h4>
              <p>- Extend the use of agile Mindset by imbibing the principles, values to go beyond agile and helping organizations achieve intended true business agility within the operating constraints / limitations</p>
              <p>Questions:</p>
              <ul>
                <li>Where do you think you can apply aspects of agile either in part or full?</li>
                <li>How can you implement?</li>
                <li>Why would you recommend the option?</li>
                <li>How would you think it will help deliver value faster?</li>
              </ul>
              <p>It is very much important for each and everyone to self-assess if you are looking to progress personally and /or professionally and vice versa to be able to identify gaps, seek help where and when needed in order to achieve excellence.</p>
              <p>Would you agree? what other methods would you suggest?</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog12;
