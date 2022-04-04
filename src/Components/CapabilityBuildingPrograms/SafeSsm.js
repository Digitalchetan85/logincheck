import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import video1 from "../Images/SAFe-Course-Videos/SAFe-SM.mp4"
import video2 from "../Images/testimonial-videos/Ian-Feedback-final.mp4"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import icpSsm from "../Images/capability-building-programs/safe/ssm.png";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";
import swal from "sweetalert";

const SafeSsm = () => {
  let history = useNavigate();
  const [formStatus, setformStatus] = useState("");
  const [Timing, setSchedule] = useState([]);
  const coursePrice = 675;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    schedule: "",
  };

  const onSubmit = (values) => {
    const Price = 675;
    const data = values;

    displayRazorpay(Price, data.name, data.email, data.phone, data.schedule);
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

  const displayRazorpay = async (amount, username, useremail, userphone, schedule) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline..");
      return;
    }

    const options = {
      key: "rzp_test_ZxuPI2Sp8AA2N0",
      currency: "INR",
      amount: amount * 100,
      contact: userphone,
      email: useremail,
      name: username,
      description: "Payment for Course",

      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // // console.log(response)
        // // console.log(username)
        const paymentid = response.razorpay_payment_id;
        const Values = {
          paymentid,
          username,
          useremail,
        }

        const paymentdata = {
          name: username,
          email: useremail,
          phone: userphone,
          amount: amount,
          paymentid: paymentid,
          coursename: "ICP - ACC",
          schedule: schedule,
        };

        axios
          .post("/api/payment", paymentdata)
          .then(function (response) {
            axios
              .post("api/payment-email", paymentdata)
              .then(function (response) {
                if (response.status === 200) {
                  swal(
                    "Success",
                    "Thanks for your Registation. We will contact you soon",
                    "success"
                  );
                }
              });
          })
          .catch(function (error) {
            console.log(error);
          });
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
        "/api/course-schedule-by-coursename/SAFe5 - SSM"
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
                <h2 className="text-center text-white">SAFe5 - SSM</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a href="/capability-building-programs/safe" className="custom">
                        Capability Building Programs
                      </a>
                    </li>
                    <li className="breadcrumb-item">SAFe5 - SSM</li>
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
              <Row>
                <Col md={3} className="align-self-center">
                  <Image src={icpSsm} alt="" className="img-fluid" />
                </Col>
                <Col md={9} className="">
                  <h2 className="text-primary py-3 ">
                    About This Certification
                  </h2>
                  <p className="text-align-justify">If you want to become a certified scrum master with the skills to help leading companies succeed with Agile and scrum, the SAFe Scrum Master course is for you. Learn how scrum masters empower and lead Agile teams. Understand how to facilitate Agile events like iteration planning, stand-ups, and retrospectives. And discover how to help teams plan and complete their work.</p>
                  <p>You’ll also learn the principles of servant leadership, so you can help develop high-performing, engaged, continuously improving teams in your own organization.</p>
                </Col>
              </Row>
              <Row className="py-2">
                <Col md={6} className="">
                  <h4 className="text-primary py-2">
                    Featured Learning Outcomes
                  </h4>
                  <ul>
                    <li>How to facilitate Scrum events.</li>
                    <li>How to support PI execution.</li>
                    <li>How to coach teams to constantly improve.</li>
                    <li>How to participate successfully in critical SAFe events, such as PI Planning.</li>
                    <li>How to implement DevOps for continuous flow and delivery.</li>
                  </ul>
                </Col>
                <Col md={6} className="">
                  <h4 className="text-primary py-2">What you will receive</h4>
                  <ul>
                    <li>Course materials</li>
                    <li>Access to SAFe® Collaborate, a visual online workspace</li>
                    <li>One-year membership to the SAFe® Community Platform</li>
                    <li>SAFe SM certification exam </li>
                    <li>Connect to Digital Agility Institute Community</li>
                  </ul>
                </Col>
                <p>Our training is delivered by SAFe Program Consultants with diverse experience of transforming teams & organizations implementing SAFe successfully.</p>
                
              </Row>

              <Row>
                <Col md={6} className="pb-3 pt-md-2 pb-md-2">
                  <h4 className="text-primary py-2">Who Should attend :</h4>
                  <ul>
                    <li>First level Managers</li>
                    <li>Agile Project Managers </li>
                    <li>Scrum Masters & aspiring Scrum Masters  </li>
                    <li>Business Analysts,  </li>
                    <li>and anyone with the desire to explore the power of servant leadership.and anyone with the desire to explore the power of SAFe.</li>
                  </ul>
                </Col>
                <Col md={6} className="pb-3 pt-md-2 pb-md-2">
                  <h4 className="text-primary py-2">Prerequisites:</h4>
                  <ul>
                   
                    <li>
                      There are no conditional pre-requisites for the training
                      program
                    </li>
                    <li>
                      Participants should have exposure at least one agile
                      framework.
                    </li>
                  </ul>
                </Col>
              </Row>
              {/* <div className="">
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://designrr.page?id=149596&token=4003258846&type=FP&h=3861"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div> */}
              <div className="pt-2 pb-2">
                <Row>
                  <Col md={6}>
                    <div className="text-center pt-3 pb-3">
                      <h2 className="text-white"> </h2>
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
                <video height="300" width="300" controls autoPlay>
                  <source src={video1} type="video/mp4"></source>
                </video>
              </div>
              <div className="shadow p-3">
                <h3 className="text-primary">Schedule Your Course</h3>
                <p>
                  Course Name: <strong>SAFe5 - SSM</strong>
                </p>
                <p>
                  Course Price:
                  <strong> ${coursePrice}</strong>
                </p>             
                <p>
                  Course Price: {" "}
                  <strong> (INR 50999/-)</strong>
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
                            type="text"
                            className="form-control"
                            id="schedule"
                            name="schedule"
                          >
                            <option>-- Select --</option>
                            {Timing.map((option) => (
                              <option
                                key={option.id}
                                value={option.coursetiming}
                              >
                                {option.coursetiming}
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
                      {localStorage.getItem("auth_token") ? (
                          <div className="">
                            <Button className="btn btn-primary" type="submit">
                              Checkout
                            </Button>
                          </div>
                        ) : (
                          <div className="">
                            <a className="btn btn-primary" href="/login">
                              Login to Checkout
                            </a>
                          </div>
                        )}
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

export default SafeSsm;
