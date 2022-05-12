import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { Form, ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Helmet from "react-helmet";

const PromotionalVideoUpload = () => {
  const [formStatus, setformStatus] = useState("");
  const [Details, setDetails] = useState([]);

  const initialValues = {
    image: "",
    alt: "",
    link: "",
  };

  const onSubmit = (values) => {
    const data = values;

    axios
      .get(
        "https://digitalagilityinstitute.com/Api/promotion/coaching.php?image=" +
          data.image +
          "&alt=" +
          data.alt +
          "&link=" +
          data.link
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
    image: Yup.string().required("Required"),
    alt: Yup.string().required("Required"),
    link: Yup.string().required("Required"),
  });

  const handleDeleteClick = (id) => {
    // // console.log("delete");
    axios
      .get("https://digitalagilityinstitute.com/Api/coaching-promotion/delete.php?id=" + id)
      .then((response) => {
        // console.log("Response", response);
        GetData();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const GetData = () => {
    axios
      .get("https://digitalagilityinstitute.com/Api/coaching-promotion/coaching-getdata.php")
      .then((response) => {
        // console.log("getdata", response.data);
        setDetails(response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    GetData();
  }, []);
  
  return (
    <div>
      <Helmet>
        <title> Promotional Video Upload | DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">
                  Promotional Image Upload
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Promotional Image Upload
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="shadow p-3">
                <h3 className="text-primary text-center">
                  <u>Upload Images</u>
                </h3>
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
                            Image
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="image"
                            name="image"
                          />
                          <div>
                            <small>
                              https://digitalagilityinstitute.com/Api/images/coaching-promotion/image-name.png
                            </small>
                          </div>
                          <small className="text-danger">
                            <ErrorMessage name="image" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">
                            Alternative Text for Image
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="alt"
                            name="alt"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="alt" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">
                            Link
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="link"
                            name="link"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="link" />
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              {Details.map((item) => (
                <div className="text-center" key={item.id}>
                  <Image src={item.imageurl} alt="" className="img-fluid" />
                  <p>{item.link}</p>
                  <Button
                    variant="primary"
                    onClick={() => handleDeleteClick(item.id)}
                    className="mt-3 mb-3"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PromotionalVideoUpload;
