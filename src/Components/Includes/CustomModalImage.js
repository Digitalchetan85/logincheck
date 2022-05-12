import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomModalImageUpload = () => {
    const [formStatus, setformStatus] = useState("");
    const [Images, SetImages] = useState([]);
  
    const initialValues = {
      image: "",
      alt: "",
    };
  
    const onSubmit = (values) => {
      const data = values;
  
      axios
        .get(
          "https://digitalagilityinstitute.com/Api/popup/slider.php?imgae=" +
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
  
    //   displayRazorpay(Price, data.name, data.email, data.phone);
    };
  
    
    const validationSchema = Yup.object({
      image: Yup.string().required("Required"),
      alt: Yup.string().required("Required"),
      link: Yup.string().required("Required"),
    });

  const handleDeleteClick = (id) => {
    // // console.log("delete");
    axios
      .get("https://digitalagilityinstitute.com/Api/popup/delete.php?id=" + id)
      .then((response) => {
        // console.log("Response",response);
        GetData();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const GetData = () => {
    axios
      .get("https://digitalagilityinstitute.com/Api/popup/getdata.php")
      .then((response) => {
        // console.log("getdata",response.data);
        SetImages(response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Popup Image Upload</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Popup Image Upload 
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="custom-slider" className="pt-2 pb-2 pt-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
            <div className="shadow p-3">
                <h3 className="text-primary text-center"><u>Schedule Your Course</u></h3>
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
                          <div classNamae="text-primary">https://digitalinstitute.com/Api/images/</div>
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
                          <label htmlFor="link" className="form-label">
                            Redirect page link
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

      <div id="slide-images">
        <Container>
          <Row>
            {Images.map((image) => (
              <Col md={6} key={image.id}>
                <div className="text-center border m-2 border-primary rounded shadow">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    className="img-fluid"
                  />
                  <Button variant="primary" onClick={() => handleDeleteClick(image.id)} className="mt-3 mb-3">Remove</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CustomModalImageUpload;
