import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helmet from "react-helmet";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const YoutubeVideos = () => {
  const playlistFirstLinks = [
    {
      id: 1,
      videoLink:
        "https://www.youtube.com/embed/vXkRHf8XiA8",
    },
    {
      id: 2,
      videoLink:
        "https://www.youtube.com/embed/rBRSBtDkNrM",
    },
    {
      id: 3,
      videoLink:
        "https://www.youtube.com/embed/CvmUIbMOxgo",
    },
    {
      id: 4,
      videoLink:
        "https://www.youtube.com/embed/6gYqO2kC8MI",
    },
    {
      id: 5,
      videoLink:
        "https://www.youtube.com/embed/9FNY_M6s4MU",
    },
    {
      id: 6,
      videoLink:
        "https://www.youtube.com/embed/qRPPew6KEdQ",
    },
    {
      id: 7,
      videoLink:
        "https://www.youtube.com/embed/Jng6aUIRCMg",
    },
    {
      id: 8,
      videoLink:
        "https://www.youtube.com/embed/YAd2pczw6IM",
    },
    {
      id: 9,
      videoLink:
        "https://www.youtube.com/embed/fcKKhfM7LP8",
    },
    {
      id: 10,
      videoLink:
        "https://www.youtube.com/embed/bEAcdBR2y2A",
    },
    {
      id: 11,
      videoLink:
        "https://www.youtube.com/embed/SiZwfKDz7b8",
    },
    {
      id: 12,
      videoLink:
        "https://www.youtube.com/embed/rt0ywKGEXt4",
    },
    {
      id: 13,
      videoLink:
        "https://www.youtube.com/embed/1SfsOW2ky1Q",
    },
    {
      id: 14,
      videoLink:
        "https://www.youtube.com/embed/-9upUNqNNhs",
    },
    {
      id: 15,
      videoLink:
        "https://www.youtube.com/embed/UQOhef_-igA",
    },
    {
      id: 16,
      videoLink:
        "https://www.youtube.com/embed/hYfKHMm_jBE",
    },
    {
      id: 17,
      videoLink:
        "https://www.youtube.com/embed/8wLMiPLstf0",
    },
    {
      id: 18,
      videoLink:
        "https://www.youtube.com/embed/pXhh_Wb-xns",
    },
    {
      id: 19,
      videoLink:
        "https://www.youtube.com/embed/i3F28_o2f1g",
    },
    {
      id: 20,
      videoLink:
        "https://www.youtube.com/embed/i3KPiALGQNg",
    },
    {
      id: 21,
      videoLink:
        "https://www.youtube.com/embed/su36z1wDgSQ",
    },
    {
      id: 22,
      videoLink:
        "https://www.youtube.com/embed/NmZZQwex8mM",
    },
    {
      id: 23,
      videoLink:
        "https://www.youtube.com/embed/9yb5XwUzkRo",
    },
    {
      id: 24,
      videoLink:
        "https://www.youtube.com/embed/zXa3aNW_VbU",
    },
  ];

  const playlistSecondLinks = [
    {
      id: 1,
      videoLink:
        "https://www.youtube.com/embed/907HQmcgVI4",
    },
    {
      id: 2,
      videoLink:
        "https://www.youtube.com/embed/3IBhZ47bir8",
    },
    {
      id: 3,
      videoLink:
        "https://www.youtube.com/embed/ImIBAd_c0fA",
    },
    {
      id: 4,
      videoLink:
        "https://www.youtube.com/embed/4o3Jj2pI0Os",
    },
    {
      id: 5,
      videoLink:
        "https://www.youtube.com/embed/T2frRXLzeFs",
    },
    {
      id: 6,
      videoLink:
        "https://www.youtube.com/embed/3IBhZ47bir8",
    },
    {
      id: 7,
      videoLink:
        "https://www.youtube.com/embed/907HQmcgVI4",
    },
    {
      id: 8,
      videoLink:
        "https://www.youtube.com/embed/VctZ65zzFk0",
    },
    {
      id: 9,
      videoLink:
        "https://www.youtube.com/embed/ImIBAd_c0fA",
    },
    {
      id: 10,
      videoLink:
        "https://www.youtube.com/embed/4o3Jj2pI0Os",
    },
    {
      id: 11,
      videoLink:
        "https://www.youtube.com/embed/HwW70Ueygzs",
    },
    {
      id: 12,
      videoLink:
        "https://www.youtube.com/embed/rt0ywKGEXt4",
    },
    {
      id: 13,
      videoLink:
        "https://www.youtube.com/embed/oyEwyXQ2Xi8",
    },
    {
      id: 14,
      videoLink:
        "https://www.youtube.com/embed/qotUgWAj4rw",
    },
    {
      id: 15,
      videoLink:
        "https://www.youtube.com/embed/gBdMkWIksTE",
    },
  ];

  const playlistThirdLinks = [
    {
      id: 1,
      videoLink:
        "https://www.youtube.com/embed/epIXAxKd8Sw",
    },
    {
      id: 2,
      videoLink:
        "https://www.youtube.com/embed/_jS-afsyEkM",
    },
    {
      id: 3,
      videoLink:
        "https://www.youtube.com/embed/e369mPMOg_c",
    },
    {
      id: 4,
      videoLink:
        "https://www.youtube.com/embed/RjwplX7ObzI",
    },
    {
      id: 5,
      videoLink:
        "https://www.youtube.com/embed/DkPObFiW9xw",
    },
    {
      id: 6,
      videoLink:
        "https://www.youtube.com/embed/M33xT6H-5SA",
    },
    {
      id: 7,
      videoLink:
        "https://www.youtube.com/embed/hgcKdCSnkQA",
    },
  ];

  const playlistFourthLinks = [
    {
      id: 1,
      videoLink:
        "https://www.youtube.com/embed/CaoJy8ibvAI",
    },
    {
      id: 2,
      videoLink:
        "https://www.youtube.com/embed/TcXb9A4Qy5M",
    },
    {
      id: 3,
      videoLink:
        "https://www.youtube.com/embed/HJCz1mmfhHU",
    },
  ];

  const playlistFifthLinks = [
    {
      id: 1,
      videoLink:
        "https://www.youtube.com/embed/g9E4Bf1OXos",
    },
    {
      id: 2,
      videoLink:
        "https://www.youtube.com/embed/5UAYRlI6xDs",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Youtube Videos | DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
      <TopMenubar />
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Youtube Videos</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Youtube Videos
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
            {playlistFirstLinks.map((video) => (
              <Col md={4} key={video.id} className="ps-0 pe-0">
              <div>
                <div className="m-1 text-center">
                    <iframe
                      width="350"
                      height="315"
                      src={video.videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {playlistSecondLinks.map((video) => (
              <Col md={4} key={video.id} className="ps-0 pe-0">
              <div>
                <div className="m-1 text-center">
                    <iframe
                      width="350"
                      height="315"
                      src={video.videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {playlistThirdLinks.map((video) => (
              <Col md={4} key={video.id} className="ps-0 pe-0">
              <div>
                <div className="m-1 text-center">
                    <iframe
                      width="350"
                      height="315"
                      src={video.videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {playlistFourthLinks.map((video) => (
              <Col md={4} key={video.id} className="ps-0 pe-0">
              <div>
                <div className="m-1 text-center">
                    <iframe
                      width="350"
                      height="315"
                      src={video.videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {playlistFifthLinks.map((video) => (
              <Col md={4} key={video.id} className="ps-0 pe-0">
                <div>
                  <div className="m-1 text-center">
                    <iframe
                      width="350"
                      height="315"
                      src={video.videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />  
    </div>
  );
};

export default YoutubeVideos;
