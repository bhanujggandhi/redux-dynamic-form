import React from "react";
import { Field } from "redux-form";

import RenderField from "./RenderField";

const LearningField = ({ fields, meta: { touched, error, submitFailed } }) => {
  return (
    <ul>
      <li>
        <button type='button' onClick={() => fields.push({})}>
          Add
        </button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((learning, index) => (
        <li key={index}>
          <button
            type='button'
            title='Remove Learning'
            onClick={() => fields.remove(index)}
          >
            Remove #{index + 1}
          </button>
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
            component='textarea'
            placeholder='Content'
          />
        </li>
      ))}
    </ul>
  );
};

export default LearningField;
