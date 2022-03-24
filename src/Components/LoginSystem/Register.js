import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

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
              swal("Success",response.data.message,"success")
              navigate('/agility');
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
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="p-3 bg-light shadow-sm my-5">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                          type="text"
                          className="form-control"
                          id="password"
                          name="password"
                        />
                        <small className="text-danger">{Errors.password}</small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="text-center">
                        <Button className="btn btn-primary mx-1" type="submit">
                          Register 
                        </Button>
                        <Button className="btn btn-primary mx-1" type="submit">
                          Login
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
    </>
  );
};

export default Register;
