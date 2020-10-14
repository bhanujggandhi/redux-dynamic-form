import React from "react";

import { Form } from "react-bootstrap";

const RenderTextArea = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <Form.Control
          as='textarea'
          style={{ width: "30%" }}
          row={3}
          {...input}
          type={type}
          placeholder={label}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default RenderTextArea;
