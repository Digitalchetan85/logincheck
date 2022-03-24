import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import img1 from "../Images/blogs/blog-1.png";
import img2 from "../Images/blogs/blog-2.png";
import img3 from "../Images/blogs/blog-3.png";
import img4 from "../Images/blogs/blog-4.png";
import img5 from "../Images/blogs/blog-5.png";
import img6 from "../Images/blogs/blog-6.png";
import img7 from "../Images/blogs/blog-7.png";
import img8 from "../Images/blogs/blog-8.png";
import img9 from "../Images/blogs/blog-9.png";
import img10 from "../Images/blogs/blog-10.png";
import img11 from "../Images/blogs/blog-11.png";
import img12 from "../Images/blogs/blog-12.png";
import img13 from "../Images/blogs/blog-13.png";
import img14 from "../Images/blogs/blog-14.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
      title: "Agile Transformation! – A bloom or a doom",
      description:
        "Why do most agile transformations fail including those in big enterprises? Are you one of those who have this question in mind or one who has been asked? Then you are not alone as this is the most asked question in Agile conferences. I thought of drilling deep down into this question to validate my thoughts and observations.",
      link: "/agile-transformation-a-bloo-or-a-dom",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
      title: "Lessons in Leadership - succession planning",
      description:
        "Known devil is much better than the unknown is the phrase that we all have heard and somewhat believed in growing up in life. This also influences our decision making process when we are in crunch situations. Let us now look at how this is applied in the context of succession planning",
      link: "/lessons-in-leadership-succession-planning",
    },
    {
      id: 3,
      imgurl: img3,
      alt: "",
      title: "2019 – Extending the horizons: A year of many hits and a few misses",
      description:
        "Reflecting back at the year gone by, it has been another eventful year in both professional as well as personal life where I looked to extend my horizons through some firsts in life, overcoming limiting beliefs, few unlearnings and understanding myself little more than the years before. It also included few things that I couldn’t succeed in and unfinished objectives which I look to carry forward to 2020.",
      link: "/2019-extending-the-horizons",
    },
    {
      id: 4,
      imgurl: img4,
      alt: "",
      title: "How to A’s your limiting beliefs?",
      description:
        "I can’t speak in a public forum, I am not as good as my colleague, I am not a creative person, I can’t run a Marathon, or I am too old to shift my career etc.",
      link: "/how-to-As-your-limiting-benefits",
    },
    {
      id: 5,
      imgurl: img5,
      alt: "",
      title: "Why Unlearning Studio MeetUp?",
      description:
        "Transformation is the buzzword whether it’s organizational or personal. There is enormous focus on transformation across the industry sectors with Digital, Agile, DevOps, Cloud transformation etc. at organizational level. This demands continuous upskilling and exhibiting behaviors with growth mindset at personal level to adapt & excel.",
      link: "/why-unlearning-studio-meetup",
    },
    {
      id: 6,
      imgurl: img6,
      alt: "",
      title: "Self-Reflection – Most underutilized yet powerful tool",
      description:
        "Hey, what happened to you? You don’t look like the way you used to be. You seem to have changed or you are not the same bubbling energetic person. Has someone asked you these questions or made these statements recently!!! If yes, then it’s time for Self-reflection.",
      link: "/self-reflection",
    },
    {
      id: 7,
      imgurl: img7,
      alt: "",
      title: "Unlearning – a challenge or an opportunity??",
      description:
        "There are lot of frameworks available to impart learning. It is also easier to learn new competencies & behaviors than to unlearn. This is because unlearning is an internal process to oneself. How can we unlearn? This is the big question that most of us have.",
      link: "/unlearning-is-a-challenge-or-opportunity",
    },
    {
      id: 8,
      imgurl: img8,
      alt: "",
      title: "Self-Coaching – help yourself to overcome limiting beliefs",
      description:
        "Can I be my own Coach? Has this thought ever crossed your mind? For me, it had. The answer was “Yes” to a great extent. It needs for one to be highly focused and motivated to coach himself. There are limitations though that I have found on the extent to which I can coach myself.",
      link: "/self-coaching",
    },
    {
      id: 9,
      imgurl: img9,
      alt: "",
      title: "Why do I need a Coach?",
      description:
        "I am successful, understand my strengths & weaknesses and am able to work around these. Then, why do I need a coach? Do you have this question in mind too!!! The general perception is that one needs to look out for a coach when you hit a hurdle that you are struggling to overcome or completely lost in your journey of life",
      link: "/why-do-i-need-a-coach",
    },
    {
      id: 10,
      imgurl: img10,
      alt: "",
      title: "“Disruption”, the new way of life – How to continue to excel?",
      description:
        "Business disruption is a hot commodity for some time now and is the new way of life. What causes disruption? Disruption can be caused by change in hardware / software technologies, driven by design and / or business models.",
      link: "/disruption",
    },
    {
      id: 11,
      imgurl: img11,
      alt: "",
      title: "Active Questioning – Tool for transforming minds",
      description:
        "Cultural transformation makes or breaks an Organizational Change initiative. Organizations that realize and look for ways to effectively manage cultural aspects would not just succeed but excel in their transformation journey.",
      link: "/active-questioning",
    },
    {
      id: 12,
      imgurl: img12,
      alt: "",
      title: "Self-Assessment – Continuous evaluation is key to excellence",
      description:
        "Self-assessment is the process of looking at oneself in order to assess aspects that are important to one's identity. It is one of the motives that drive self-evaluation, along with self-verification and self-enhancement (from Wikipedia).",
      link: "/self-assessment-contionous",
    },
    {
      id: 13,
      imgurl: img13,
      alt: "",
      title: "Feed back to Feed forward – It’s time to look ahead",
      description:
        "Traditionally performance management of resources in most organizations is based on stakeholder feedback which primarily is focused on resource efforts aligned to the defined KRAs. Career progression and personal development of the employees is always looked at as a subset of performance management.",
      link: "/feed-back-to-feed-forward",
    },
    {
      id: 14,
      imgurl: img14,
      alt: "",
      title: "Agile to Agility – Role of a Coach",
      description:
        "With most of the organizations looking up to adopt Agile practices to improve customer experience, ability to adopt to dynamic market conditions, hi-speed technological advances the organizational transformation journeys continuous & ongoing. In the context, the role of an Agile Coach is being looked at training resources (talking Agile),",
      link: "/agile-to-agility",
    },
  ];

  return (
    <div>
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Blogs</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blogs
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {blogs.map((item, index) => (
              <Col md={4} key={index}>
                <div className="text-center m-1">
                  <Card className="shadow-sm">
                    <Card.Img variant="top" src={item.imgurl} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Button variant="primary" as={Link} to={item.link}>Read More</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blogs;
