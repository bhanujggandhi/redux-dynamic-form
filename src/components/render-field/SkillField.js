import React from "react";
import { Field } from "redux-form";

import RenderField from "./RenderField";

const SkillField = ({ fields, meta: { touched, error, submitFailed } }) => {
  return (
    <ul>
      <li>
        <button type='button' onClick={() => fields.push("")}>
          Add
        </button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((skill, index) => (
        <li key={index}>
          <button
            type='button'
            title='Remove Member'
            onClick={() => fields.remove(index)}
          >
            Remove #{index + 1}
          </button>
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
