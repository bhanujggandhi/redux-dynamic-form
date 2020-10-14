import React from "react";
import { Field, FieldArray } from "redux-form";

import LearningField from "./LearningField";
import RenderField from "./RenderField";

import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const SubjectField = ({ fields, meta: { touched, error, submitFailed } }) => {
  return (
    <ul>
      <li>
        <Button type='button' onClick={() => fields.push("")}>
          Add
        </Button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((subject, index) => (
        <li key={index}>
          <Button
            className='float-right'
            type='button'
            variant='danger'
            title='Remove Subject'
            onClick={() => fields.remove(index)}
          >
            <Trash type='button' />
          </Button>
          <h4>Subject #{index + 1}</h4>
          <Field
            name={`${subject}.subject`}
            type='text'
            component={RenderField}
            label='Subject'
          />
          <FieldArray name={`${subject}.details`} component={LearningField} />
        </li>
      ))}
    </ul>
  );
};

export default SubjectField;
