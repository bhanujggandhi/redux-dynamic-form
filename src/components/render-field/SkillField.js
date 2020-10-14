import React from "react";
import { Field } from "redux-form";

import RenderField from "./RenderField";

import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const SkillField = ({ fields, meta: { touched, error, submitFailed } }) => {
  return (
    <ul>
      <li>
        <Button type='button' onClick={() => fields.push("")}>
          Add
        </Button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((skill, index) => (
        <li key={index}>
          <Button
            className='float-right'
            type='button'
            variant='danger'
            title='Remove Member'
            onClick={() => fields.remove(index)}
          >
            <Trash />
          </Button>
          <h4>#{index + 1}</h4>
          <Field
            name={skill}
            type='text'
            component={RenderField}
            label='Write here..'
          />
        </li>
      ))}
    </ul>
  );
};

export default SkillField;
