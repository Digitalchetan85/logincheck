import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";

const CourseTimingUpdate = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    course: "",
    coursetiming: "",
  };

  const onSubmit = (values) => {
    const data = values;

    // console.log(data);

    axios
      .get(
        "https://digitalagilityinstitute.com/Api/course-schedule/course-schedule.php?sendto=" +
          data.course +
          "&coursetiming=" +
          data.coursetiming
      )
      .then(function (response) {
        // console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        // console.log(error);
        setformStatus(error.data);
      });
  };

  const validationSchema = Yup.object({
    course: Yup.string().required("Required").min(3),
    coursetiming: Yup.string().required("required").min(3),
  });
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className=" border rounded border-primary p-3">
                <h3 className="text-primary text-center">Course Information</h3>
                <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="channel" className="form-label">
                          Course Name
                          </label>
                          <Field
                            as="select"
                            className="form-control"
                            id="course"
                            name="course"
                          >
                            <option value="-- Select --">-- Select --</option>
                            <option value="ICP - ACC">ICP - ACC</option>
                            <option value="ICP - CAT">ICP - CAT</option>
                            <option value="ICP - ORG">ICP - ORG</option>
                            <option value="ICP - ATF">ICP - ATF</option>
                            <option value="ICP - ENT">ICP - ENT</option>
                            <option value="ICP - PDV">ICP - PDV</option>
                            <option value="SAFe5 - SA">SAFe5 - SA</option>
                            <option value="SAFe5 - SSM">SAFe5 - SSM</option>
                            <option value="SAFe5 - SASM">SAFe5 - SASM</option>
                            <option value="SAFe5 - POPM">SAFe5 - POPM</option>
                            <option value="SAFe5 - LPM">SAFe5 - LPM</option>
                          </Field>
                          <small className="text-danger">
                            <ErrorMessage name="course" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="mb-3">
                      <label htmlFor="channel" className="form-label">
                        Course Timing
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="coursetiming"
                        name="coursetiming"
                      />
                      <small className="text-danger">
                        <ErrorMessage name="coursetiming" />
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
                    <div className="text-center">
                      <Button className="btn btn-primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseTimingUpdate;
