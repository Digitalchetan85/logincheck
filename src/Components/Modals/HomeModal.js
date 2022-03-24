import React, { useEffect } from "react";
import { useState } from "react";
import { Image, Modal, Button } from "react-bootstrap";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const HomeModal = () => {
  
  const [formStatus, setformStatus] = useState("");
  const [Download, setDownload] = useState(false);

  const [link, Setlink] = useState("");

  const initialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (values) => {
    const data = values;

    // console.log(data);

    axios
      .get(
        "https://digitalagilityinstitute.com/agility.php?sendto=" +
          data.email +
          "&name=" +
          data.name
      )
      .then(function (response) {
        // console.log(response);
        setformStatus(response.data);
        setDownload(true);
      })
      .catch(function (error) {
        // console.log(error);
        setformStatus(error.data);
      });

      axios
      .post(
        "https://digitalagilityinstitute.com/Api/popup/savedata.php", data
      )
      
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [Images, SetImages] = useState([]);

  useEffect(() => {
    setTimeout(function () {
      setShow(true);
    }, 7000);
  }, []);

  useEffect(() => {
    axios
      .get("https://digitalagilityinstitute.com/Api/popup/getdata.php")
      .then((response) => {
        // console.log(response.data[0].link);
        SetImages(response.data);
        Setlink(response.data[0].link);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="text-center">
          {Images.map((img) => (
            // <a href={img.link} target="_blank" rel="noopener noreferrer" key={img.id}>
              <Image
                key={img.id}
                src={img.image}
                alt={img.alt}
                className="img-fluid"
              />
            // </a>
          ))}
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="bg-primary">
            <div className="text-center">
              <p className="text-center mb-0 pt-2 text-white">
                By submitting your details, you are providing consent for us to
                share our newsletter with you
              </p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center align-center">
              <div className="p-2">
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <small className="text-danger">
                  <ErrorMessage name="name" />
                </small>
              </div>
              <div className="p-2">
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <small className="text-danger">
                  <ErrorMessage name="email" />
                </small>
              </div>
              <div className="p-2 text-center text-md-start">
                {Download ? <a href={link} className="text-uppercase fw-normal btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Download
                </a>: <Button variant="secondary" type="submit" className="text-uppercase fw-normal">
                  Submit
                </Button>}
              </div>
            </div>
          </Form>
        </Formik>

        <div className="text-center">
          {formStatus ? (
            <div className="alert alert-success p-3 mb-0 text-center">
              {formStatus}
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default HomeModal;
