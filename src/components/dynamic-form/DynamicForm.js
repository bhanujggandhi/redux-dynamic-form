import React from "react";
import { FieldArray, reduxForm } from "redux-form";

import LearningField from "../render-field/LearningField";
import SkillField from "../render-field/SkillField";
import SubjectField from "../render-field/SubjectField";

const DynamicForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='skills'>Skills to Work Upon</label>
      <FieldArray name='skills' component={SkillField} />
      <label htmlFor='strength'>Areas of Strength</label>
      <FieldArray name='strength' component={SkillField} />
      <label htmlFor='attention'>Areas of Attention</label>
      <FieldArray name='attention' component={SkillField} />
      <label htmlFor='learning'>
        Accomodation for learning, including required Equipment
      </label>
      <FieldArray name='learning' component={LearningField} />
      <label htmlFor='subject'>Subjects</label>
      <FieldArray name='subject' component={SubjectField} />
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
