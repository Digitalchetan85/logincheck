import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// import Slide1 from "../Images/slider/Slide1.png";
import axios from "axios";

const MainSlider = () => {
  const [slides, SetSlides] = useState([]);
  // const slides = [
  //   { id: 1, src: Slide1, alt: "" },
  // { id: 2, src: Slide2, alt: "" },
  // { id: 3, src: Slide3, alt: "" },
  // ];

  useEffect(() => {
    (async () => {
      await axios
        .get("/api/getdata")
        .then((response) => {
          // console.log(response.data.data);
          SetSlides(response.data.data);
          // // console.log(Slide2);
        })
        .catch((err) => {
          // console.log(err);
        });
    })();
  }, []);

  return (
    <div>
      <Carousel>
        {slides.map((item) => (
          <Carousel.Item key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={item.imageurl}
                alt={item.alt}
              />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;
