import React, { useState, useEffect} from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Form, Field, ErrorMessage, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const MentoringFormik = (props) => {
  let navigate = useNavigate();
  const [formStatus, setformStatus] = useState("");
  const [Timing, setSchedule] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const onSubmit = (values) => {
    const Price = props.price;
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
          coursename: props.title,
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
      .get("/api/course-schedule-by-coursename/Excecutive - Coaching")
      .then((response) => {
        // console.log(response);
        setSchedule(response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
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
                      <option key={item.id} value={item.coursetimings}>
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
                <Button className="btn btn-primary form-control" type="submit">
                  Checkout
                </Button>
              </div>
            ) : (
              <div className="">
                <a className="btn btn-primary form-control" href="/login">
                  Login to Checkout
                </a>
              </div>
            )}
          </Col>
        </Row>
      </Form>
    </Formik>
  );
};

export default MentoringFormik;
