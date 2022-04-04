import React, { useState, useEffect } from "react";
import "../assets/js/scripts";
import DashboardFooter from "../Includes/DashboardFooter";
import DashboardNavabar from "../Includes/DashboardNavabar";
import Dashboardsidebar from "../Includes/Dashboardsidebar";
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const Payment = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    axios.get(`/api/payment`).then((response) => {
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
                  <h2 className="py-2 text-primary">Payment Details</h2>
                </div>
                <Row className="justify-content-center">
                  <Col md={12}>
                    <div className="">
                      <Table striped bordered hover>
                        <thead>
                          <tr className="bg-primary text-white">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Payment ID</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data
                            ? Data.map((data) => (
                                <tr key={data.id}>
                                  <td>{data.id}</td>
                                  <td>{data.name}</td>
                                  <td>{data.email}</td>
                                  <td>{data.amount}</td>
                                  <td>{data.paymentid}</td>
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

export default Payment;
