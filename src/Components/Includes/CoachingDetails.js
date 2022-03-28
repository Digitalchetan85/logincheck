import React from "react";
import { Container, Card} from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from "../Images/coaching/11.png";
import img2 from "../Images/coaching/12.png";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const initialData = [
  { id: 1, imageurl: img1, alt: "", link: "/coaching" },
  { id: 2, imageurl: img2, alt: "", link: "/coaching" },
];

const CoachingDetails = () => {

  const [Association, Setassociation] = useState(initialData)

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
      const response = await axios.get("/api/mentoringdata");
      // console.log("getdata", response.data.data);
      Setassociation([...Association, response.data.data]);
      // console.log("Total", Association)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    GetData();
  }, [Setassociation])

  return (
    <div>
      <div>
        <Container>
          <OwlCarousel options={options}>
            {Association.map((item, index) => (
              <div className="text-center m-1" key={index}>
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

export default CoachingDetails;
