import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Form, Field, ErrorMessage, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const ExperientialFormik = (props) => {
  const [formStatus, setformStatus] = useState("");
//   const [Download, SetDownload] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const onSubmit = (values) => {
    const Price = props.price;
    // console.log(Price);
    const data = values;
    // console.log(data);

    axios
      .get(
        "https://digitalagilityinstitute.com/email-payment-form.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone
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
      currency: "USD",
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

        // // console.log(Values);

        axios
          .post(
            "https://digitalagilityinstitute.com/Api/Payment/payment.php",
            Values
          )
          .then(function (response) {
            // // console.log(response);
            // setformStatus(response.data);
          })
          .catch(function (error) {
            // console.log(error);
            // setformStatus(error.data);
          });

        // alert(props.link);

        // SetDownload(true);

        // localStorage.setItem("download", "true");
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
                type="text"
                className="form-control"
                id="schedule"
                name="schedule"
              >
                <option>-- Select --</option>
                {props.Timing.map((option) => (
                  <option key={option.id} value={option.coursetiming}>
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
            <div className="">
              <Button className="btn btn-primary mx-3" type="submit">
                Checkout
              </Button>

              {/* {Download ? (
                <a className="btn btn-primary mx-3" href={props.hello}>
                  Download
                </a>
              ) : null} */}
            </div>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
};

export default ExperientialFormik;
