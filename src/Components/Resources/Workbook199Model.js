import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormikTemplate from "./FormikTemplate";

const Workbook199Model = (props) => {
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
          <Modal.Title className="mx-auto">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormikTemplate price={props.price} hello={props.hello} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Workbook199Model;
