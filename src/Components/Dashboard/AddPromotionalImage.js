import React, { useEffect, useState } from "react";
import DashboardFooter from "./Includes/DashboardFooter";
import DashboardNavabar from "./Includes/DashboardNavabar";
import Dashboardsidebar from "./Includes/Dashboardsidebar";
import "./assets/js/scripts";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  Form,
} from "react-bootstrap";
import axios from "axios";
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";

const AddPromotionalImage = () => {

  const [coursename, Setcoursename] = useState("");
  const [imageurl, SetImgurl] = useState("");
  const [alt, Setalt] = useState("");
  const [link, Setlink] = useState("");

  const [Errors, SetErrors] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const values = { coursename, imageurl, alt, link };
    // console.log(values);

    axios
      .post("/api/add-promotional-image", values)
      .then((res) => {
        // console.log(res.data.validation_errors);
        if (res.data.status === 401) {
          SetErrors(res.data.validation_errors);
          // console.log(Errors.coursename)
        } else {
          SetErrors({ ...Errors, SuccessMessage: res.data.message });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    values = {};
  };

  return (
  
    <div className="sb-nav-fixed">
      <DashboardNavabar />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Dashboardsidebar />
        </div>

        <div id="layoutSidenav_content">
          <main className="py-2">
            <Container>
              <Row className="justify-content-center">
                <Col md={12}>
                  <Card>
                    <Card.Header className="text-center bg-primary text-white">
                      Add New Promotional Image
                    </Card.Header>
                    <Card.Body>
                      <Form onSubmit={submit}>
                        <Form.Group className="mb-3">
                          <Form.Label>Select Course Name</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            name="coursename"
                            value={coursename}
                            onChange={(e) => Setcoursename(e.target.value)}
                          >
                            <option>Open this select menu</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                          </Form.Select>
                          <small className="text-danger">
                            {Errors.coursename}
                          </small>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Image URL</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="imageurl"
                            value={imageurl}
                            onChange={(e) => SetImgurl(e.target.value)}
                          />
                          <small className="text-danger">
                            {Errors.imageurl}
                          </small>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Alternative Text</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="alt"
                            value={alt}
                            onChange={(e) => Setalt(e.target.value)}
                          />
                          <small className="text-danger">{Errors.alt}</small>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Custom Page Link</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="link"
                            value={link}
                            onChange={(e) => Setlink(e.target.value)}
                          />
                          <small className="text-danger">{Errors.link}</small>
                          {Errors.SuccessMessage ? (
                            <div
                              className="alert alert-success alert-dismissible fade show mt-3"
                              role="alert"
                            >
                              <strong>
                                {Errors.SuccessMessage
                                  ? Errors.SuccessMessage
                                  : ""}
                              </strong>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                              ></button>
                            </div>
                          ) : (
                            ""
                          )}
                          <Button
                            variant="primary"
                            type="submit"
                            className="form-control mt-3"
                          >
                            Submit
                          </Button>
                        </Form.Group>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </main>

          <DashboardFooter />
        </div>
      </div>
    </div>
  
  );
};

export default AddPromotionalImage;
