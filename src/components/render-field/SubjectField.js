import React from "react";
import { Field, FieldArray } from "redux-form";
import LearningField from "./LearningField";
import RenderField from "./RenderField";

const SubjectField = ({ fields, meta: { touched, error, submitFailed } }) => {
  return (
    <ul>
      <li>
        <button type='button' onClick={() => fields.push("")}>
          Add
        </button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((subject, index) => (
        <li key={index}>
          <button
            type='button'
            title='Remove Subject'
            onClick={() => fields.remove(index)}
          >
            Remove #{index + 1}
          </button>
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
