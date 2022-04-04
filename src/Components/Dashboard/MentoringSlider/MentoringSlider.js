import React, { useState, useEffect } from "react";
import "../assets/js/scripts";
import DashboardFooter from "../Includes/DashboardFooter";
import DashboardNavabar from "../Includes/DashboardNavabar";
import Dashboardsidebar from "../Includes/Dashboardsidebar";
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const MentoringSlider = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    axios.get(`/api/mentoring-slider`).then((response) => {
      // console.log(response)
      if (response.data.status === 200) {
        SetData(response.data.data);
      } else if (response.data.status === 404) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }, []);

  const DeleteImage = id => {
    //   console.log('Delete', id);
    axios.post('/api/delete-mentoring-slider-image', {id: id}).then((result) => {
        // console.log('Response', response)
        if (result.data.status === 200 ) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: result.data.message,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }

  return (
    <div className="sb-nav-fixed">
      <DashboardNavabar />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Dashboardsidebar />
        </div>

        <div id="layoutSidenav_content">
          <main className="mb-5">
            <div id="table" className="py-3">
              <Container>
                <div className="">
                  <h2 className="py-2 text-primary">Mentoring Images</h2>
                  <div className="text-end py-2">
                    <Link
                      to="/dashboard/mentoring-slider-image"
                      className="btn btn-primary"
                    >
                      Add Mentoring Slider Image
                    </Link>
                  </div>
                </div>
                <Row className="justify-content-center">
                  <Col md={12}>
                    <div className="">
                      <Table striped bordered hover>
                        <thead>
                          <tr className="bg-primary text-white">
                            <th>ID</th>
                            <th>Image</th>
                            <th>Image URL</th>
                            <th>Alternative Text</th>
                            <th>Custom Link</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data
                            ? Data.map((data) => (
                                <tr key={data.id}>
                                  <td>{data.id}</td>
                                  <td><Image src={data.imageurl} alt="" className="img-fluid" width="150px"></Image> </td>
                                  <td>{data.imageurl}</td>
                                  <td>{data.alt}</td>
                                  <td>{data.link}</td>
                                  <td>
                                    <div className="">
                                      <Link
                                        to={`/dashboard/edit-mentoringslider-image/${data.id}`}
                                        className="btn-sm btn-primary m-1 text-decoration-none"
                                      >
                                        <i className="fa fa-edit"></i>
                                      </Link>
                                      <Button
                                        className="btn-sm btn-danger m-1"
                                        onClick={() => DeleteImage(data.id)}
                                      >
                                        <i className="fa fa-trash"></i> 
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            : "No Records found."}
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </main>

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default MentoringSlider;
