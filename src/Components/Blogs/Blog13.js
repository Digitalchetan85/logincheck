import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BlogImage from "../Images/blogs/blog-13.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const Blog13= () => {
  return (
    <div>
      <TopMenubar />
      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">Feed back to Feed forward - It's time to look ahead</h2>
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
                    Feed back to Feed forward - It's time to look ahead
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
              <p>Traditionally performance management of resources in most organizations is based on stakeholder feedback which primarily is focused on resource efforts aligned to the defined KRAs. Career progression and personal development of the employees is always looked at as a subset of performance management.</p>
              <p>Feedback mechanism is more about validating employee performance over a period of time (half yearly or annual) based on appraisal cycle of the organisation directly tied to compensation. Feedback is a regression management mechanism always looking at what went well or otherwise and how aligned the employee is towards organizational objectives & values.</p>

              <p>While it is important to always look back at history and take the lessons, it is important to focus more on future prospects / opportunities which is a progressive way than emphasizing on negative past. Feedback based performance appraisals were driven primarily by the organizational need to fulfill the bell curve styled framework to arrive at remuneration increases and performance grading.</p>
              <p> Feed forward focuses on employee goals & objectives and looks at aligning them to organizational objectives and is a continuous monitoring and improvement process as against periodical feedback. This process is always prospective and highlights the notion of being employee first. However, this does demand a significant shift in Mindset of the managers to move away from traditional management practices to coaching employees for their performance.</p>
              <p>According to DR Marshall Goldsmith, there are eleven reasons given below to try Feed Forward as against feedback to successfully coach for performance improvement and excellence.</p>
              <ol>
                  <li>We can change the future. We can't change the past. Feed forward helps people envision and focus on a positive future, not a failed past.</li>
                  <li> It can be more productive to help people learn to be “right,” than prove they were “wrong.” Negative feedback often becomes an exercise in “let me prove you were wrong.”</li>
                  <li> Feed forward is especially suited to successful people. Successful people like getting ideas that are aimed at helping them achieve their goals. They tend to resist negative judgment. I have observed many successful executives respond to (and even enjoy) feed forward. I am not sure that these same people would have had such a positive reaction to feedback.</li>
                  <li>Feed forward can come from anyone who knows about the task. It does not require personal experience with the individual. Feedback requires knowing about the person. Feed forward just requires having good ideas for achieving the task.</li>
                  <li> People do not take feed forward as personally as feedback. In theory, constructive feedback is supposed to “focus on the performance, not the person”. Feed forward cannot involve a personal critique, since it is discussing something that has not yet happened! Positive suggestions tend to be seen as objective advice - personal critiques are often viewed as personal attacks.</li>
                  <li>Feedback can reinforce personal stereotyping and negative self-fulfilling prophecies. Feed forward can reinforce the possibility of change. Feedback can reinforce the feeling of failure. Feed forward is based on the assumption that the receiver of suggestions can make positive changes in the future.</li>
                  <li>Face it! Most of us hate getting negative feedback, and we don't like to give it.</li>
                  <li>Feed forward can cover almost all of the same “material” as feedback. Imagine that you have just made a terrible presentation in front of the executive committee. Rather than make you “relive” this humiliating experience, your manager might help you prepare for future presentations by giving you suggestions for the future.</li>
                  <li>Feed forward tends to be much faster and more efficient than feedback. An excellent technique for giving ideas to successful people is to say, “Here are four ideas for the future. Please accept these in the positive spirit that they are given. If you can only use two of the ideas, you are still two ahead.</li>
                  <li>Feed forward can be a useful tool to apply with managers, peers, and team members. Rightly or wrongly, feedback is associated with judgment. This can lead to very negative - or even career-limiting - unintended consequences when applied to managers or peers. Feed forward does not imply superiority of judgment. It is more focused on being a helpful “fellow traveller” than an “expert”.</li>
                  <li>People tend to listen more attentively to feed forward than feedback. One participant is the feed forward exercise noted, “I think that I listened more effectively in this exercise than I ever do at work!” When asked why, he responded, “Normally, when others are speaking, I am so busy composing a reply that will make sure that I sound smart - that I am not fully listening to what the other person is saying I am just composing my response. In feed forward the only reply that I am allowed to make is 'thank you'. Since I don't have to worry about composing a clever reply - I can focus all of my energy on listening to the other person!”</li>
              </ol>
              <p>Feed forward also puts onus on managers to get buy-in from senior leadership to the career aspirations of the employees and also the need for them to guide, coach, mentor employees on the skillsets required to achieve their aspirations as well as the roadmap to progress.</p>
              <p>Applying Feed forward technique as against feedback mechanism results in greater sense of belongingness of employees towards the organization, improved employee engagement, increased performance excellence, graduation of managers from management to coaching ultimately improving organizational performance and achievement of its objectives. This also helps managers practice servant leadership and facilitate employee professional as well as personal growth that is mapped to organizational objectives / direction.</p>
              <p>What else do you think an organization can be benefited from providing feed forward against feedback??</p>

              
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog13;
