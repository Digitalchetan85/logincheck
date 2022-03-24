import React, { useState } from "react";
import { Row, Col, Button, Container, Alert } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [Errors, SetErrors] = useState([]);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    // console.log(values);
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/login`, values)
        .then((res) => {
          //   console.log(res);
          if (res.data.status === 200) {
              localStorage.setItem("auth_token", res.data.token);
              localStorage.setItem("auth_name", res.data.username);
              swal("Success", res.data.message,"success");
              navigate('/agility')
          } else if (res.data.status === 401) {
            SetErrors({ ...Errors, ErrorMessage: res.data.message });
            setShow(true);
          } else {
            SetErrors(res.data.validation_errors);
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
                  <h4 className="text-primary text-center">Login Form</h4>
                  {show ? (
                    <Alert
                      variant="danger"
                      onClose={() => setShow(false)}
                      dismissible
                    >
                      <Alert.Heading className="text-center">
                        {Errors.ErrorMessage ? Errors.ErrorMessage : null}
                      </Alert.Heading>
                    </Alert>
                  ) : null}
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
                        <label htmlFor="name" className="form-label" >
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
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="">
                        <Button className="btn btn-primary" type="submit">
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

export default Login;
