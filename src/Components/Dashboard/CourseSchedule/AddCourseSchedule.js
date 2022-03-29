import React, { useEffect, useState } from "react";
import DashboardFooter from "../Includes/DashboardFooter";
import DashboardNavabar from "../Includes/DashboardNavabar";
import Dashboardsidebar from "../Includes/Dashboardsidebar";
import "../assets/js/scripts";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddCourseSchedule = () => {
  const [coursename, SetCoursename] = useState("");
  const [coursetimings, SetCoursetimings] = useState("");
  const navigate = useNavigate();

  const [Errors, SetErrors] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    const values = { coursename, coursetimings };
    // console.log(values);

    axios
      .post("/api/add-course-schedule", values)
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
          navigate("/dashboard/course-schedule");
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
                      Add Course Timing
                    </Card.Header>
                    <Card.Body>
                      <Form onSubmit={Submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Select
                            aria-label="Default select example"
                            name="coursename"
                            onChange={(e) => SetCoursename(e.target.value)}
                          >
                            <option>{coursename}</option>
                            <option value="ICP - CAT">ICP - CAT</option>
                            <option value="ICP - ENT">ICP - ENT</option>
                            <option value="ICP - PDV">ICP - PDV</option>
                            <option value="ICP - ACC">ICP - ACC</option>
                            <option value="ICP - ATF">ICP - ATF</option>
                            <option value="ICP - ORG">ICP - ORG</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Enter Timing"
                            value={coursetimings}
                            name="coursetimings"
                            onChange={(e) => SetCoursetimings(e.target.value)}
                          />
                        </Form.Group>

                        <Button type="submit" className="btn btn-primary">
                          Save Changes
                        </Button>
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

export default AddCourseSchedule;
