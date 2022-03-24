import React from "react";
import { Container, Card } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from "../Images/mentoring/9.png";
import img2 from "../Images/mentoring/10.png";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



const MentoringDetails = () => {
  const initialData = [
    {
      id: 11,
      imageurl: img1,
      alt: "",
      link:"/mentoring",
    },
    {
      id: 21,
      imageurl: img2,
      alt: "",
      link:"/mentoring",
    },
  ];

  const [Association, Setassociation] = useState(initialData);
  

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

  async function GetData() {
    try {
      const response = await axios.get("coachingdata");
      // console.log("getdata", response.data.data[0]);
      Setassociation([...Association, response.data.data[0]]);
      // console.log("Total", Association)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    GetData();
  }, [Setassociation])

  // console.log(Association)

  return (
    <div>
      <div>
        <Container>
          <OwlCarousel options={options}>
            {Association.map((item) => (
              <div className="text-center m-1" key={item.id}>
                <Card className="shadow-sm" as={Link} to={item.link}>
                  <Card.Img variant="top" src={item.imageurl} />
                </Card>
              </div>
            ))}
          </OwlCarousel>
        </Container>
      </div>
    </div>
  );
};

export default MentoringDetails;
