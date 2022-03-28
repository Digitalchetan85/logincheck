import React, { useEffect, useState } from "react";
import DashboardFooter from "./Includes/DashboardFooter";
import DashboardNavabar from "./Includes/DashboardNavabar";
import Dashboardsidebar from "./Includes/Dashboardsidebar";
import "./assets/js/scripts";
import {
  Button,
  Modal,
  Col,
  Container,
  Row,
  Card,
  Form,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const PromotionImages = () => {
  const [Data, SetData] = useState("");

  const GetData = () => {
    axios
      .get("/api/promotionalimages")
      .then((res) => {
        // console.log(res.data.data);
        SetData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

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
                  <Card className="my-2">
                    <Card.Header>
                      <Card.Title className="text-primary">
                        Promotion Images
                      </Card.Title>
                    </Card.Header>
                  </Card>

                  <div className="text-end">
                    <Button variant="primary" as={Link} to="/dashboard/add-promotion-image">
                      Add Promotion Image
                    </Button>
                  </div>
                  <div className="py-3">
                    <table className="table table-bordered table-hover table-primary">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Imgae URL</th>
                          <th scope="col">Alt</th>
                          <th scope="col">Link</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Data.map((data) => (
                          <tr key={data.id}>
                            <th>{data.id}</th>
                            <td>{data.imageurl}</td>
                            <td>{data.alt}</td>
                            <td>{data.link}</td>
                            <td>
                              <Button className="btn-sm btn-primary mx-2" as={Link} to={`/dashboard/edit-promotion-image/${data.id}`}>
                                <i className="fa fa-edit"></i> Edit
                              </Button>
                              <Button className="btn-sm btn-danger mx-2">
                                <i className="fa fa-trash"></i> Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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

export default PromotionImages;
