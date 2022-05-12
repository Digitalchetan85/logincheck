import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Helmet from "react-helmet";
import BlogImage from "../Images/blogs/blog-10.png";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const Blog10 = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - Disruption | DAI</title>
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
                “Disruption”, the new way of life – How to continue to excel?
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
                    “Disruption”, the new way of life – How to continue to excel?
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

              <p>Business disruption is a hot commodity for some time now and is the new way of life. What causes disruption?</p>
              <p>Disruption can be caused by change in hardware / software technologies, driven by design and / or business models. "The major cause of digital disruption is the rapid advancement of technology and globalization, which allows new business models to be introduced at an ever-increasing rate and with rapidly declining costs." In order to stay relevant, Organizations are forced to transform their technologies, systems, the way they work inside.</p>
              <p>This has a cascading impact on the lives of the workforce as the technical skillsets, competencies that one has developed over the years would no longer stand good in the new world. The quantum of disruption increases based on how current you are with the developing technology trends and practices. How do we manage this disruption and continue to excel?   </p>
              <div className="pt-1 pb-1 pt-md-2 pb-md-2">
                <Row className="justify-content-center">
                  <Col md={8}>
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p className="fw-bold fst-italic">
                        “What makes disruption positive or negative is how we react to it” 
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">#LSCon</cite>
                      </figcaption>
                    </figure>
                  </Col>
                </Row>
                </div>
              <p>Joshua S. Gans in his article “Keep calm & manage disruption” lists three possible strategies to manage business disruption. Two of those I felt could be in principle applied to successfully not just manage the disruption but grow through it. Let’s try and discuss both.</p>
              <ul className="list-unstyled">
                  <p>Beat the disruption: This is a more proactive strategy where you can undertake below actions to be able to be a step ahead and look at disruption as an opportunity to grow.</p>
                  <li>Ø Follow the industry trends: Keeping a track of what other organizations similar to your line of business are moving towards/ strategies employed successfully, new practices, technologies employed etc, one would get a good level of understanding of where your organization might be headed. This also gives you an opportunity to validate the relevance of your skillsets (technical as well as soft skills) and the gaps that need to be addressed.</li>
                  <li>Ø Follow technology advancements: Be alive to the technology advancement in your area of responsibility, and also new upcoming technologies that have potential to replace the one you have expertise in. Once you identify the target technology that maps to your core competencies, you can get required training to acquire new skills needed.</li>
                  <li>Ø Identify alternate technology domains, roles & responsibilities: If the technology/role  you have expertise in is likely getting obsolete, it is important to identify a new technology /role that maps to your strengths, helps you to still make use of the experience you gained and build your competency around that technology / role.</li>
                  <li>Ø Validate Marketability: Being active in the job market is another way to identify the gaps that one needs to bridge. Looking at job definitions, skill-sets demanded and continuously assessing your employability is a great way to continue to excel.</li>
              </ul>
              
               <div className="pt-1 pb-1 pt-md-2 pb-md-2">
                <Row className="justify-content-center">
                  <Col md={8}>
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p className="fw-bold fst-italic">
                        “The joy of disruption comes from accepting that we all live in a temporal state.” 
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title"> Jay Samit</cite>
                      </figcaption>
                    </figure>
                  </Col>
                </Row>
                </div>
                <ul className="list-unstyled">
                    <p>Join the disruption: This is more a reactive strategy and is initiated once one gets a clear direction on where the organization is headed and would involve below actions:</p>
                <li>Ø Wait and see: Wait for the disruption to occur, understand the transformation taking shape, validate if your skills / competencies compliment what is needed.</li>
                <li>Ø Just in time training: Understand the target technologies / domains / roles and go through relevant trainings mapped to those in need.</li>
                 </ul>

              <p>The major disadvantage of being reactive I believe is that one loses out on being able to take advantage of the disruption and would be limited to prove himself to be relevant.</p>
              <p>The last resort if you don’t want to beat or join the disruption is to look for alternate career options outside the organization. This may be due to the fear of change or the fixed mind set.</p>
              <p>    I for one personally believe in being progressive and beat the disruption as over the years in military I have learnt that the “more you sweat in peace the less you bleed in war”. The more you work on keeping your skills up to date the less you need to worry about what & how disruption would impact you which helps you to look at taking advantage of it and excel.</p>
              <p>This also gives me an opportunity to help others in the organization manage the disruption better through knowledge transfer, training, mentoring & coaching for them to be successful.</p>
              <p>Are you facing disruption? How are you handling it? Would love to hear your thoughts.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog10;
