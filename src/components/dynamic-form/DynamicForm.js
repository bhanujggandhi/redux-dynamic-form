import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import RenderField from "../render-field/RenderField";

const DynamicForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='clubName'
        type='text'
        component={RenderField}
        label='Club Name'
      />
      <div>
        <button type='submit' disabled={submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "dynamicForm",
})(DynamicForm);
