import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import AgileCoachingFundamentals from "./AgileCoachingFundamentals";
import AgileFundamentals from "./AgileFundamentals";

const ELearning = () => {
  // const programs = [
  //   {
  //     id: 1,
  //     imgurl: image1,
  //     alt: "image",
  //     title: "Agile Fundamentals",
  //     link: "/e-learning/agile-fundamentals",
  //     content:
  //       "Agile is the flavor of the world for quite a while now. Irrespective of the Industry domain you belong to, understanding of Agile and Agility is mandatory as most organizations are moving towards being agile to thrive and excel.  ",
  //   },
  //   {
  //     id: 2,
  //     imgurl: image2,
  //     alt: "image",
  //     title: "Agile Coaching Fundamentals",
  //     link: "/e-learning/agile-coaching-fundamentals",
  //     content:
  //       "Agile Coaching is one of the most demanded competencies in the coaching industry due to the VUCA world the business are operating in and the compelling need for them to be agile in order to thrive and excel.",
  //   },
  // ];
  return (
    <div>
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">E-Learning Programs</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      E-Learning Programs
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row>
            {programs.map((course, index) => (
              <Col md={4} className="align-self-center" key={index}>
                <Card className="m-2 text-center bg-transparent">
                  <div className="text-center p-2">
                    <Image className="img-fluid" src={course.imgurl} />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-primary">
                      {course.title}
                    </Card.Title>
                    <Card.Text>{course.content}</Card.Text>
                    <Button
                      variant="outline-primary"
                      as={Link}
                      to={course.link}
                    >
                      Read more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div> */}

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
        <h2 className="text-center text-primary">Agile Fundamentals</h2>
          <AgileFundamentals />
          <AgileCoachingFundamentals /> 
        </Container>
      </div>
    </div>
  );
};

export default ELearning;
