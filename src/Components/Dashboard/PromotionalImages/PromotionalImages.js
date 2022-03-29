import React, { useEffect, useState } from "react";
import DashboardFooter from "../Includes/DashboardFooter";
import DashboardNavabar from "../Includes/DashboardNavabar";
import Dashboardsidebar from "../Includes/Dashboardsidebar";
import "../assets/js/scripts";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

const PromotionalImages = () => {
  const [Data, SetData] = useState();

  const DeleteImage = id => {
      // console.log('Delete', id);
    axios.post('/api/delete-promotional-image', {id: id}).then((response) => {
        // console.log('Response', response)
        if (response.data.status === 200 ) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }

  useEffect(() => {
    axios
      .get("/api/promotional-images")
      .then((response) => {
        SetData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="sb-nav-fixed">
      <DashboardNavabar />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Dashboardsidebar />
        </div>

        <div id="layoutSidenav_content">
          <main>
            <div id="table" className="py-3">
              <Container>
                <div className="">
                  <h2 className="py-2 text-primary">Promotional Images</h2>
                  <div className="text-end py-2">
                    <Link
                      to="/dashboard/add-promotional-image"
                      className="btn btn-primary"
                    >
                      Add Promotional Image
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
                            <th>Course Name</th>
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
                                  <td>{data.coursename}</td>
                                  <td>{data.imageurl}</td>
                                  <td>{data.alt}</td>
                                  <td>{data.link}</td>
                                  <td>
                                    <div className="">
                                      <Link
                                        to={`/dashboard/edit-promotional-image/${data.id}`}
                                        className="btn-sm btn-primary mx-2 text-decoration-none"
                                      >
                                        <i className="fa fa-edit"></i> Edit
                                      </Link>
                                      <Button className="btn-sm btn-danger" onClick={() => DeleteImage(data.id)}><i className="fa fa-trash"></i> Delete</Button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            : '<p className="text-primary">No Records found.</p>'}
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

export default PromotionalImages;
