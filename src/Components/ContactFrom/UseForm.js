import { useState } from "react";
import axios from "axios";

const UseForm = (Validation) => {
  const [mailStatus, SetMailStatus] = useState("");

  const [values, Setvalues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, Seterrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    Seterrors(Validation(values));

    // console.log(values.name, values.email, values.phone, values.subject);

    axios
      .get(
        "http://webmillionservices.com/loan-mail-mobile.php?sendto=" +
          values.email +
          "&name=" +
          values.name +
          "&phone=" +
          values.phone +
          "&subject=" +
          values.subject +
          "&msg=" +
          values.message
      )
      .then((response) => {
        // console.log(response);
        SetMailStatus(response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setvalues({
      ...values,
      [name]: value,
    });
  };

  return { handleChange, values, handleSubmit, errors, mailStatus };
};

export default UseForm;
