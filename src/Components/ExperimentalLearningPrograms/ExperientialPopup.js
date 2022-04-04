import React, {useEffect} from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ExperientialFormik from "./ExperientialFormik";
import axios from "axios"
import TopMenubar from "../Includes/TopMenubar";
import Footer from "../Includes/Footer";

const ExperientialPopup = (props) => {
  const [Timing, setSchedule] = useState([]);

  // alert(props.coursename);

  useEffect(() => {
    axios
      .get(
        "/api/course-schedule-by-coursename/"+props.coursename
      )
      .then((response) => {
        // console.log(response.data);
        setSchedule(response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mt-3">
        <Button variant="primary" onClick={handleShow}>
          Buy Now
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="mx-auto">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExperientialFormik
            title="Hello1"
            price="39"
            hello="https://google.com"
            Timing={Timing}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ExperientialPopup;
