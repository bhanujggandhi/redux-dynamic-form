import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import RenderField from "../render-field/RenderField";
import SkillField from "../render-field/SkillField";

const DynamicForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='skills'>Skills to Work Upon</label>
      <FieldArray name='skills' component={SkillField} />
      <label htmlFor='strength'>Areas of Strength</label>
      <FieldArray name='strength' component={SkillField} />
      <label htmlFor='attention'>Areas of Attention</label>
      <FieldArray name='attention' component={SkillField} />
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
