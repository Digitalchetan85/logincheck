import React from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";

const YouTubeVideos = () => {
  const videosLink = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/videoseries?list=PLdy1hC79YdyqO0_ZUxeRtTFhsY2sIt7NV",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/videoseries?list=PLdy1hC79YdyqLkXudgkR2YGRwT5X5c04M",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/videoseries?list=PLdy1hC79Ydyqwd2nl-Fa-bqYD3c93j6iL",
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/videoseries?list=PLdy1hC79YdyoLY9RVA6o5BcCDIJs0Sxmv",
    },
    {
      id: 5,
      link: "https://www.youtube.com/embed/videoseries?list=PLdy1hC79YdypvPN2hPnJNwJH4X_LTIJXp",
    },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: false,
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
    <div>
      <Container>
        <h2 className="pt-2 pb-2 text-center text-primary">YouTube Videos</h2>
        <OwlCarousel options={options}>
          {videosLink.map((video) => (
            <div className="text-center m-2 ratio ratio-16x9" key={video.id}>
              <iframe
                src={video.link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default YouTubeVideos;
