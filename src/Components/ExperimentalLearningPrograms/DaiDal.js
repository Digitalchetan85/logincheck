import { Col, Container, Row } from "react-bootstrap";
import Helmet from "react-helmet";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";

const DaiDal = () => {
  
  return (
    <>
    <Helmet>
        <title> DAI DAL | DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
    <TopMenubar />
      <div
        id="ic-agile-flipbook"
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">DAI - DAL</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a
                        href="/experiential-learning-programs"
                        className="custom"
                      >
                        Experiential Learning Programs
                      </a>
                    </li>
                    <li className="breadcrumb-item">DAI - DAL</li>
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
            <Col md={12}>
              <div className="text-center">
                <h2 className="text-primary">Coming Soon....</h2>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col md={8}>
              <div className="">
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://designrr.page?id=149596&token=4003258846&type=FP&h=3861"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div>

              <div className="pt-2 pb-2">
                <Row>
                  <Col md={6}>
                    <div className="text-center pt-3 pb-3">
                      <h2 className="text-white"></h2>
                      <video height="400" width="400" controls>
                        <source src={video2} type="video/mp4"></source>
                      </video>
                    </div>
                  </Col>
                  <Col md={6}></Col>
                </Row>
              </div>
            </Col>
            <Col md={4} className="">
              <div className="text-center pt-3 pb-3 bg-primary">
                <h2 className="text-white"></h2>
                <video height="300" width="300" controls autoPlay>
                  <source src={video1} type="video/mp4"></source>
                </video>
              </div>

              <div className="shadow p-3">
                <h3 className="text-primary">Schedule Your Course</h3>
                <p>Course Info</p>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className=""
                >
                  <Row>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetName(e.target.value);
                          }}
                          value={Name}
                          type="text"
                          placeholder="Name*"
                        />
                        {Object.keys(NameErr).map((key, index) => {
                          return (
                            <Form.Control.Feedback type="invalid" key={index}>
                              {NameErr[key]}
                            </Form.Control.Feedback>
                          );
                        })}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetEmail(e.target.value);
                          }}
                          value={Email}
                          type="email"
                          placeholder="Email*"
                        />
                        {Object.keys(EmailErr).map((key, index) => {
                          return (
                            <Form.Control.Feedback type="invalid" key={index}>
                              {EmailErr[key]}
                            </Form.Control.Feedback>
                          );
                        })}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetPhone(e.target.value);
                          }}
                          state={Phone}
                          type="text"
                          placeholder="Phone*"
                        />
                        {Object.keys(PhoneErr).map((key, index) => {
                          return (
                            <Form.Control.Feedback type="invalid" key={index}>
                              {PhoneErr[key]}
                            </Form.Control.Feedback>
                          );
                        })}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetSubject(e.target.value);
                          }}
                          value={Subject}
                          type="text"
                          placeholder="Subject*"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group
                        className="pb-5"
                        controlId="exampleForm.ControlTextarea1 "
                      >
                        <Form.Control
                          as="textarea"
                          onChange={(e) => {
                            SetMessage(e.target.value);
                          }}
                          required
                          value={Message}
                          placeholder="Message*"
                          rows={4}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div id="mail-status">
                        {mailStatus ? (
                          <p className={ErrClass}>{mailStatus} </p>
                        ) : null}
                      </div>
                      <div className="">
                        {checkout ? (
                          <PayPal />
                        ) : (
                          <Button
                            variant="primary"
                            onClick={() => {
                              setCheckout(true);
                            }}
                          >
                            Checkout
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DaiDal;
