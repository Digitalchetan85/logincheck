import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import axios from "axios";
// import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";

const Register = () => {
  let navigate = useNavigate();
  const [Errors, SetErrors] = useState([]);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    // console.log(values);
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/register`, values)
        .then((response) => {
          console.log(response);
          if (response.data.status === 200) {
            // swal("Success",response.data.message,"success")
            SetErrors({ ...Errors, SuccessMessage: response.data.message });
            // navigate("/");
          } else {
            SetErrors(response.data.validation_errors);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  return (
    <>
      <TopMenubar />
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="p-3 bg-light shadow-sm my-5">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                  <h5 className="text-primary text-center">Register Form</h5>
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
                        <small className="text-danger">{Errors.name}</small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Email
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                        <small className="text-danger">{Errors.email}</small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Password
                        </label>
                        <Field
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                        />
                        <small className="text-danger">{Errors.password}</small>
                      </div>
                    </Col>
                  </Row>
                  
                  {Errors.SuccessMessage ? <div class="alert alert-success" role="alert">{Errors.SuccessMessage}</div> : ""}

                  
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="text-center">
                        <Button className="btn btn-primary mx-1" type="submit">
                          Register
                        </Button>
                        <Link className="btn btn-primary mx-1" to="/login">
                          Login
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
