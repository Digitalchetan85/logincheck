import React, { useEffect, useState } from "react";
import { Image, Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import video1 from "../Images/videos/ICP-ACC.mp4";
import video2 from "../Images/testimonial-videos/Ian-Feedback-final.mp4";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import icpAcc from "../Images/capability-building-programs/icp-acc.png";
import agile from "../Images/agile-visa.png";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";
import swal from "sweetalert";
import Helmet from "react-helmet";

const IcAgileIcpAcc = () => {
  let history = useNavigate();
  const [formStatus, setformStatus] = useState("");
  const [Timing, setSchedule] = useState([]);
  const CoursePrice = 599;
  const CourseActualPrice = 1999;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    schedule: "",
  };

  const onSubmit = (values) => {
    const Price = 45256;
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

  const displayRazorpay = async (
    amount,
    username,
    useremail,
    userphone,
    schedule
  ) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline..");
      return;
    }

    const options = {
      key: "rzp_live_1SmU1PuRbz53st",
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
        };

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
      .get("/api/course-schedule-by-coursename/ICP - ACC")
      .then((response) => {
        // console.log(response);
        setSchedule(response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <>
    <Helmet>
        <title>IC Agile ACC | DAI</title>
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
                <h2 className="text-center text-white">ICP - ACC</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a
                        href="/capability-building-programs/ic-agile"
                        className="custom"
                      >
                        IC - Agile
                      </a>
                    </li>
                    <li className="breadcrumb-item">ICP - ACC</li>
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
                  <Image src={icpAcc} alt="" className="img-fluid" />
                  <h5 className="text-center py-1">In collaboration with</h5>
                  <Image src={agile} alt="" className="img-fluid" />
                </Col>
                <Col md={9} className="">
                  <h2 className="text-primary py-3 ">
                    About This Certification
                  </h2>
                  <p className="text-align-justify">
                    ICP-ACC is the one of the Knowledge-based certifications on
                    the Agile Coaching track. The certification focuses
                    primarily on Coaching Mindset, various Roles played by an
                    Agile Coach, and their responsibilities while transforming
                    teams. After finishing the certification, participant will
                    be able to differentiate between Professional Coaching,
                    Mentoring, Teaching, and Team Coaching. The participants
                    will also be able to build their skills & competencies tp
                    create a psychologically safe environment and healthy
                    conflict resolution which helps in building high performance
                    teams.
                  </p>
                </Col>
              </Row>
              <Row className="py-2">
                <Col md={6} className="">
                  <h4 className="text-primary py-2">
                    Featured Learning Outcomes
                  </h4>
                  <ul>
                    <li>Conducting the Coaching Conversation</li>
                    <li>
                      Contrasting Mentoring with Coaching Helping Team Members
                    </li>
                    <li>Experience the Agile Mindset Shifts</li>
                    <li>Leadership Engagement</li>
                    <li>Delivering Experimental Learning Programs</li>
                  </ul>
                </Col>
                <Col md={6} className="">
                  <h4 className="text-primary py-2">What you will receive</h4>
                  <ul>
                    <li>Access to eLearning Portal</li>
                    <li>Course material & Work Book</li>
                    <li>Export of Miro Board</li>
                    <li>
                      Icp - Acc certificate from IC Agile (valid for lifetime)
                    </li>
                    <li>Connect to Digital Agility Institute Community</li>
                  </ul>
                </Col>
                <p>
                  Our training is designed by certified & practicing
                  professional coaches, Training from the back of the room
                  practitioners specialising in delivering experiential learning
                  programs.
                </p>
                <p>
                  This masterclass is delivered by practicing professional
                  coaches Trainer with diverse experience of transforming teams
                  & organizations.
                </p>
              </Row>

              <Row>
                <Col md={6} className="pb-3 pt-md-2 pb-md-2">
                  <h4 className="text-primary py-2">Who Should attend :</h4>
                  <ul>
                    <li>Agile team leaders or aspiring team leaders</li>
                    <li>Agile Coaches and aspiring Coaches</li>
                    <li>Scrum Masters, Agile Project Managers</li>
                    <li>Product Owners, Business Analysts,</li>
                    <li>
                      And anyone with the desire to explore the power of
                      coaching
                    </li>
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
                      framework
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
                  Course Name: <strong>IC - Agile (ICP - ACC)</strong>
                </p>
                <p>
                  Course Price: <del>$ {CourseActualPrice} </del>
                  <strong> $ {CoursePrice}</strong>
                </p>
                <p>
                  Course Price: <del> (INR 151030/-) </del>{" "}
                  <strong> (INR 45256/-)</strong>
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
                            {Timing
                              ? Timing.map((item) => (
                                  <option
                                    key={item.id}
                                    value={item.coursetimings}
                                  >
                                    {item.coursetimings}
                                  </option>
                                ))
                              : null}
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

export default IcAgileIcpAcc;
