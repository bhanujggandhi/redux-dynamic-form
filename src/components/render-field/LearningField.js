import React from "react";
import { Field } from "redux-form";

import RenderField from "./RenderField";
import RenderTextArea from "./RenderTextArea";

import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const LearningField = ({ fields, meta: { touched, error, submitFailed } }) => {
  return (
    <ul>
      <li>
        <Button type='button' onClick={() => fields.push({})}>
          Add
        </Button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((learning, index) => (
        <li key={index}>
          <Button
            className='float-right'
            type='button'
            variant='danger'
            title='Remove Learning'
            onClick={() => fields.remove(index)}
          >
            <Trash />
          </Button>
          <h4>Learning #{index + 1}</h4>
          <Field
            name={`${learning}.title`}
            type='text'
            component={RenderField}
            label='Title'
          />
          <Field
            name={`${learning}.content`}
            type='text'
            component={RenderTextArea}
            placeholder='Content'
          />
        </li>
      ))}
    </ul>
  );
};

export default LearningField;
