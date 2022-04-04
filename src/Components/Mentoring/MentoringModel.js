import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import MentoringFormik from "./MentoringFormik";

const MentoringModel = (props) => {
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

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0 bg-primary text-white">
          <Modal.Title className="mx-auto">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MentoringFormik price={props.price} title={props.title} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MentoringModel;
