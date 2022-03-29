import React, { useEffect, useState } from "react";
import DashboardFooter from "../Includes/DashboardFooter";
import DashboardNavabar from "../Includes/DashboardNavabar";
import Dashboardsidebar from "../Includes/Dashboardsidebar";
import "../assets/js/scripts";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const AddPopSlider = () => {
  const [coursename, Setcoursename] = useState("");
  const [imageurl, SetImgurl] = useState("");
  const [alt, Setalt] = useState("");
  const [link, Setlink] = useState("");
  const navigate = useNavigate();

  const [Errors, SetErrors] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const values = { coursename, imageurl, alt, link };
    // console.log(values);

    axios
      .post("/api/add-popup-image", values)
      .then((res) => {
        // console.log(res.data.validation_errors);
        if (res.data.status === 401) {
          SetErrors(res.data.validation_errors);
          // console.log(Errors.coursename)
        } else {
          //   SetErrors({ ...Errors, SuccessMessage: res.data.message });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/popup-slider')
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
                      Add New Home Slider Image
                    </Card.Header>
                    <Card.Body>
                      <Form onSubmit={submit}>
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

export default AddPopSlider;
