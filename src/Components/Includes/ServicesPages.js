import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from "../Images/coaching/14.png";
import img2 from "../Images/mentoring/2.png";
import img3 from "../Images/assessments/5.png";
import img4 from "../Images/training/3.png";
import img5 from "../Images/dyi-templates/4.png";

const ServicesPages = () => {
  const associations = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
      title: "Coaching",
      desc: "We are passionate about people and strongly believe in helping them realize their full potential through our “DREAMS” Coaching Model. For more information Contact us.",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
      title: "Mentoring",
      desc: "We have expertise in the field of Executive / Leadership Coaching, Transforming Organizations to accomplish Digital Agility by adopt new ways of working & leading. ",
    },
    {
      id: 3,
      imgurl: img4,
      alt: "",
      title: "Trainings",
      desc: "We specialize in imparting experiential learning for people on ICAgile Courses, Scaled Agile (SAFe), DevOps Courses (DASA) and Project Management (PMI) apart from our own flagship programs.",
    },
    {
      id: 4,
      imgurl: img3,
      alt: "",
      title: "Assessment",
      desc: "We have built our own assessments for measuring Team Agility, Leadership Agility, Agile Coach & Scrum Master Competencies that would help people understand where they are in their Agility Journey.",
    },
    {
      id: 5,
      imgurl: img5,
      alt: "",
      title: "DIY Templates",
      desc: "With our collective experience of transforming organizations, teams & people within, we have created a host of Do It Yourself (DIY) Templates to cater for all needs of Agile Coaches, Scrum Masters, ",
    },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div>
      <div>
        <Container>
          <OwlCarousel options={options}>
            {associations.map((item, index) => (
              <div className="text-center m-1" key={index}>
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={item.imgurl} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.desc}
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </OwlCarousel>
        </Container>
      </div>
    </div>
  );
};

export default ServicesPages;
