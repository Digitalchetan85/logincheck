import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from "../Images/testimonials/image-1.png";
import img2 from "../Images/testimonials/image-2.png";
import img3 from "../Images/testimonials/image-3.png";
import img4 from "../Images/testimonials/image-4.png";
import img5 from "../Images/testimonials/image-5.png";
import img6 from "../Images/testimonials/image-6.png";
import img7 from "../Images/testimonials/image-7.png";
import img8 from "../Images/testimonials/image-8.png";
import img9 from "../Images/testimonials/image-9.png";

const HomeTestimonials = () => {
  const associations = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
      name: "Banumathy Duraiswamy",
      content:
        "It’s my pleasure to share a feedback about my Coach –Nivarti Jayaram. Nivarti is a wonderful Action oriented Coach and highly focuses on my inner strength and goes deeper in to the ‘Who Part of me’ which truly brings the best in me. His profound questioning skills with a positive approach enabled me to reflect and instil confidence to take tough calls as an Entrepreneur. With his humble level of Listening skills empowers me to commit to Learn and energizes me to resolve issues in a whole new dimension. This certainly unlocks my own potential with a great sense of awareness. Thank you Nivarti for the fantastic coaching sessions, I completely enjoyed this experience and created my own ripples of change to achieve my goals.",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
      name: "Sai Ramya Arikera",
      content:
        "It’s my pleasure to share a feedback about my Coach –Nivarti Jayaram. Nivarti is a wonderful Action oriented Coach and highly focuses on my inner strength and goes deeper in to the ‘Who Part of me’ which truly brings the best in me. His profound questioning skills with a positive approach enabled me to reflect and instil confidence to take tough calls as an Entrepreneur. With his humble level of Listening skills empowers me to commit to Learn and energizes me to resolve issues in a whole new dimension. This certainly unlocks my own potential with a great sense of awareness. Thank you Nivarti for the fantastic coaching sessions, I completely enjoyed this experience and created my own ripples of change to achieve my goals.",
    },
    {
      id: 3,
      imgurl: img3,
      alt: "",
      name: "Muralikrishna Ayyagar",
      content:
        "t is a privilege to be writing to you and to reaffirm the deeply positive and healing impact, your presence as a mentor, a coach, a guide and yes, a role model, has made to my own personal thought process and professional outlook. We have closely worked together in the bank for over five years, and I have reached-out to you many a time to gain a different perspective to an issue/challenge at hand. Many issues that appeared insurmountable, and those that had many options - You always were calm and you always put me in the drivers seat- 'What would I DO to get this problem done away with. Was that a problem or an opportunity, or just a perspective?' You always had answers- but you never shared them with me. ",
    },
    {
      id: 4,
      imgurl: img4,
      alt: "",
      name: "Elmo Nathaniel",
      content:
        "Nivarti is a true professional and a resourceful change leader who can deliver on great outcomes. His ability to simplify complex technical and business issues, and to solution a cost effective and timely deliverable is simply outstanding. Nivarti possesses an outstanding ability to communicate effectively with stakeholders at all levels in business and technology, and process & people aspects of change with great maturity and discipline using fit for purpose frameworks. He his highly motivated, always ready willing and able to take on challenging tasks with minimum supervision. He is also considered by me and my colleagues as a trusted adviser to draw upon with his diverse experience and skill to lead complex change for the Bank in the future."
    },
    {
      id: 5,
      imgurl: img5,
      alt: "",
      name: "Sai Ramya Arikera",
      content:
        "Nivarti is a Great, passionate LEADER. He always sets ambitious, yet achievable goals to himself and his team. He has a clear vision, with a good foresight into the future and he plans out meticulously to accomplish the goals. He has this knack to think beyond the horizon. He is an encyclopaedia in the management space - he has been a mentor to numerous budding managers and I was one of those privileged ones. Among his diversified management skills, I would rate his Stakeholder Management and Issue/Risk Management capabilities as his top notch. And, his exceptional communication skills is his greatest asset. He is a very likeable team manager - stands up for the team at ALL times. He is a nice human being, who extends a helping hand to anyone in need, be it professional or otherwise."
    },
    {
      id: 6,
      imgurl: img6,
      alt: "",
      name: "Badrinath Apporvakumar",
      content:
        "I had attended the PgMP Boot Camp with vCare Project Management Pty Ltd. and found the same excellent. The delivery of the course by Mr.Nivarti Jayaram was very lively and his agility to clarify doubts with clear application examples was superb. Thank you Mr.Nivarti Jayaram for the same. Wishing you continued success. I would recommend the vCare's PgMP Boot Camp to all PgMP aspirants.",
    },
    {
      id: 7,
      imgurl: img7,
      alt: "",
      name: "Dr. Dipak Jadhav",
      content:
        "Mr. Nivarti Jayaram is a great coach in the area of PgMP. He was able to relate every theory part to the great Industry experience he has. He was also able to derive relevant points from my experience and use it effectively during the coaching sessions. Best thing is that he did not stop at just delivering the workshop for PgMP but is providing great handholding and is providing guidance through my Application process.",
    },
    {
      id: 8,
      imgurl: img8,
      alt: "",
      name: "Ramesh Bala",
      content:
        "Jayaram’s passion for sharing knowledge and openness makes him a person whom you can approach easily. He has a clear understanding of Project and Program management. He guides and supports you throughout the journey of the certification and is accessible all the time. He has actively participated in all the discussions and gave me important inputs with real time examples. He is supporting me in my journey of PgMP certification. I shall recommend Jayaram as an excellent mentor , coach , guide to anyone who is pursuing PMP or PGMP certification. You can bank on him for his unstinted support during your journey for certification.",
    },
    {
      id: 9,
      imgurl: img9,
      alt: "",
      name: "Sai Ramya Arikera",
      content:
        "I know Nivarthi since my PgMP bootcamp in Bangalore. He has a passion for sharing the knowledge and this makes him standout among others. He holds extensive Program and Project management practical experience which was clearly visible through his excellent coaching along with the instructor during the course. He actively participated in all the discussions by providing the real world examples. He is very professional and knowledgeable in his field. He supported me with my PMI-PgMP application process and also reviewed my application by providing valuable feedback. I highly recommend Nivarthi as efficient and excellent mentor to any organization or individuals willing to take up the PgMP or PMP certification. One can count on his support until they achieve the certification. I wish him all the success."
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
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
        loop: false,
      },
    },
  };
  return (
    <div id="testimonial-slider" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <Container>
        <h2 className="pt-2 pb-2 text-center text-primary">Testimonials</h2>
        <OwlCarousel options={options}>
          {associations.map((item, index) => (
            <div className="border border-primary m-2 p-3 rounded" key={index}>
              <Row>
                <Col md={12}>
                  <div className="text-center">
                    <Image
                      src={item.imgurl}
                      alt={item.alt}
                      className="img-fluid rounded-circle"
                      width="200"
                      height="200"
                    />
                  </div>
                  <blockquote className="blockquote mb-0">
                    <p className="pt-3">{item.content}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">{item.name}</cite>
                    </footer>
                  </blockquote>
                </Col>
              </Row>
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default HomeTestimonials;
