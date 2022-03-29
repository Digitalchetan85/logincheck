import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import DashboardFooter from "../Includes/DashboardFooter";
import DashboardNavabar from "../Includes/DashboardNavabar";
import Dashboardsidebar from "../Includes/Dashboardsidebar";
import Swal from 'sweetalert2'

const EditCoachingSlider = () => {
  const { id } = useParams();
  const [Input, setInput] = useState([]);
  const navigate = useNavigate();

  const [initialData, SetInitialData] = useState("")
  const [loading, setLoading] = useState(true)
  // console.log(id);

  const Submit = (e) => {
      e.preventDefault();
      const values = Input;
    //   console.log(values);

    axios.post('/api/update-coaching-slider-image', values).then((response) => {
        // console.log(response)
        if (response.data.status === 201) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              });
            navigate('/dashboard/coaching-slider');
        }
    })
  }

  const handleInput = (e) => {
      e.persist();
      setInput({...Input, [e.target.name]: e.target.value });
  }

  useEffect(() => {
      axios.get(`/api/coaching-slider/${id}`).then((response) => {
        setInput(response.data.data);
        setLoading(false);
      })
  }, [])

if(loading) {
    return "Loading";
}

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
                  <h2 className="py-2 text-primary">Popup Images</h2>
                </div>
                <Row className="justify-content-center">
                  <Col md={10}>
                    <div className="">
                      <Form onSubmit={Submit}>
                        <Form.Group className="mb-3">
                          <Image src={Input.imageurl} alt="" className="img-fluid" width="200px" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Enter Image URL"
                            name="imageurl"
                            value={Input.imageurl}
                            onChange = {handleInput}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Enter Alt"
                            value={Input.alt}
                            name="alt"
                            onChange = {handleInput}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Enter link"
                            value={Input.link}
                            name="link"
                            onChange = {handleInput}
                          />
                        </Form.Group>

                        <Button type="submit" className="btn btn-primary">Save Changes</Button>
                      </Form>
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

export default EditCoachingSlider;
