import React from "react";
import { FieldArray, reduxForm } from "redux-form";

import LearningField from "../render-field/LearningField";
import SkillField from "../render-field/SkillField";
import SubjectField from "../render-field/SubjectField";

import { Form, Button } from "react-bootstrap";

const DynamicForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <Form className='mb-3' onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor='skills'>Skills to Work Upon</Form.Label>
        <FieldArray
          class='d-inline-flex p-2'
          name='skills'
          component={SkillField}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='strength'>Areas of Strength</Form.Label>
        <FieldArray name='strength' component={SkillField} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='attention'>Areas of Attention</Form.Label>
        <FieldArray name='attention' component={SkillField} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='learning'>
          Accomodation for learning, including required Equipment
        </Form.Label>
        <FieldArray name='learning' component={LearningField} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='subject'>Subjects</Form.Label>
        <FieldArray name='subject' component={SubjectField} />
      </Form.Group>
      <div>
        <Button type='submit' disabled={submitting}>
          Submit
        </Button>
        <Button
          variant='warning'
          className='float-right'
          type='button'
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "dynamicForm",
})(DynamicForm);
