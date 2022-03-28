import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";

const DaiEsm = () => {
  const [formStatus, setformStatus] = useState("");
  const [Timing, setSchedule] = useState([]);
  const CourseActualPrice = 4000;
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    schedule: "",
  };

  const onSubmit = (values) => {
    const Price = 4000;
    const data = values;

    axios
      .get(
        "https://digitalagilityinstitute.com/agility.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone +
          "&schedule=" +
          data.schedule 
      )
      .then(function (response) {
        // console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        // console.log(error);
        setformStatus(error.data);
      });

    displayRazorpay(Price, data.name, data.email, data.phone);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, username, useremail, userphone) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline..");
      return;
    }

    const options = {
      key: "rzp_test_YPt7F9CZJqkwGO",
      currency: "INR",
      amount: amount * 100,
      contact: userphone,
      email: useremail,
      name: username,
      description: "Payment for Course",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Success payment Done.");
      },
      prefill: {
        name: username,
        contact: userphone,
        email: useremail,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  useEffect(() => {
    axios
      .get(
        "http://digitalagilityinstitute.com/Api/course-schedule/getschedule.php"
      )
      .then((response) => {
        // // console.log(response.data);
        setSchedule(response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);


  return (
    <>
    <TopMenubar />
      <div
        id="ic-agile-flipbook"
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">DAI - ESM</h2>
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
                    <li className="breadcrumb-item">DAI - ESM</li>
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
            <Col md={8}>
              <Row className="justify-content-center">
                <Col md={12} className="align-self-center">
                  <div className="">
                    <h2 className="text-primary pt-2 pb-2">
                      Expert Scrum Master
                    </h2>
                    <p className="">
                      A complete hands-on experiential learning program intended
                      to build competencies of Scrum Masters to establish
                      themselves and their role within organizations.
                    </p>

                    <p>
                      The program is being run using five themes, each
                      consisting of two iterations with specific goals and
                      acceptance criteria to be met by each member of the team.
                      A mentor is assigned to each team to coach, guide & mentor
                      the team members on their journey through the program.
                    </p>

                    <p>
                      This program is being run by volunteers who are acting as
                      mentors for the participants and validating the acceptance
                      criteria as having been met in each iteration.
                      Participants who successfully complete all the 10
                      iterations would be awarded "Expert Scrum Master"
                      Certification from Digital Agility Institute as a
                      recognition of their expertise
                    </p>
                     <p>
                      Want to know more about the program, watch the video here:{" "}
                      <a
                        href="https://youtu.be/i3F28_o2f1g"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://youtu.be/i3F28_o
                      </a>
                    </p>

                    <div className="mt-3 mb-3">
                      <a
                        href="/contact-us"
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="">
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://designrr.page?id=146856&token=2216463541&type=FP&h=2745"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col md={4} className="">
              <div className="text-center pt-3 pb-3 bg-primary">
                 {/* <video height="300" width="300" controls autoPlay>
                //   <source src={video1} type="video/mp4"></source>
                // </video> */}
              </div>

              <div className="shadow p-3">
                <h3 className="text-primary">Schedule Your Course</h3>
                <p>
                  Course Name: <strong>DAI - ESM</strong>
                </p>
                <p>
                  Course Price: ${CourseActualPrice}
                </p>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="name" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <Field
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="email" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone No
                          </label>
                          <Field
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="phone" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="channel" className="form-label">
                            Schedule
                          </label>
                          <Field
                            as="select"
                            className="form-control"
                            id="schedule"
                            name="schedule"
                          >
                            <option value="-- Select --">-- Select --</option>
                            {Timing.map((item) => (
                              <option key={item.id} value={item.coursetiming}>
                                {item.coursetiming}
                              </option>
                            ))}
                          </Field>
                          <small className="text-danger">
                            <ErrorMessage name="schedule" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        {formStatus ? (
                          <div className="alert alert-success p-3 text-center">
                            {formStatus}
                          </div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="">
                          <Button className="btn btn-primary" type="submit">
                            Checkout
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DaiEsm;
