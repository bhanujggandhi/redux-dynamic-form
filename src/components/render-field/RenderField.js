import React from "react";

import { Form } from "react-bootstrap";

const RenderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <Form.Control
          {...input}
          type={type}
          placeholder={label}
          style={{ width: "30%" }}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default RenderField;
