import React from "react";
import { useState } from "react";
import { Row, Form, Col, Container, Button, Modal } from "react-bootstrap";
import Helmet from "react-helmet";
import UseForm from "../Components/ContactFrom/UseForm";
import Validation from "../Components/ContactFrom/Validation";
import Footer from "./Includes/Footer";
import TopMenubar from "./Includes/TopMenubar";

const Contact = () => {
  const [FormDisplayClass, SetFormDisplayClass] = useState("d-none");

  const DisplayForm = () => {
    SetFormDisplayClass("d-block mt-5");
  };

  const { handleChange, values, handleSubmit, errors, mailStatus } =
    UseForm(Validation);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Helmet>
        <title>Contact Us | DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
      <TopMenubar />
      <div id="about-us" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Contact us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact us
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={7}>
              <h3 className="text-primary">Have any question?</h3>
              <p>
                If you have any query or want to leave a comment about our
                products & services, drop a message or book a free consultation
                with us.
              </p>

              {/* <a
                className="btn btn-primary me-4"
                href="https://github.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Book Free Consultation
              </a> */}

              <Button variant="primary" onClick={handleShow} className="me-4">
              Book Free Consultation
              </Button>

              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <div className="ratio ratio-4x3">
                    <iframe
                      src="https://dai.trafft.com"
                      title="IC Agile FlipBook"
                    ></iframe>
                  </div>
                </Modal.Body>
              </Modal>

              <Button variant="primary" onClick={DisplayForm}>
                Send a Message
              </Button>
              {/* <div className="ratio ratio-1x1">
                  <iframe
                    src="https://dai.trafft.com/booking-embedded"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div> */}

              <Form onSubmit={handleSubmit} className={FormDisplayClass}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="pb-5">
                      <Form.Control
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Name*"
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="pb-5" controlId="formBasicEmail">
                      <Form.Control
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email*"
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="pb-5" controlId="formBasicEmail">
                      <Form.Control
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="Phone*"
                      />
                      {errors.phone && (
                        <small className="text-danger">{errors.phone}</small>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="pb-5" controlId="formBasicEmail">
                      <Form.Control
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        type="text"
                        placeholder="Subject*"
                      />
                      {errors.subject && (
                        <small className="text-danger">{errors.subject}</small>
                      )}
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
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        as="textarea"
                        placeholder="Message*"
                        rows={8}
                      />
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div id="mail-status">
                      {mailStatus ? (
                        <p className="alert alert-success p-3 text-center">
                          {mailStatus}{" "}
                        </p>
                      ) : null}
                    </div>
                    <div className="">
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={5} className="align-self-center">
              <div className="bg-primary rounded text-white">
                <div className="p-3 pt-md-5 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="fas fa-map-marker-alt text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Our Address</h3>
                      <p className="lh-base">
                        #010, RAMS Lakeview Vinayak Nagar,
                        <br /> 4th Main Rd, Bangalore - 560063
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="p-3 pt-md-0 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="far fa-clock text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Office Hours</h3>
                      <p className="lh-base">
                        MON - FRIDAY : 8 to 9 PM
                        <br /> SAT - SUN : 10 to 8 PM
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="p-3 pt-md-0 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="fas fa-mobile-alt text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Contact</h3>
                      <p className="lh-base">
                        Phone: +91 96864 09060 <br /> Phone: +91 96322 48163
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
