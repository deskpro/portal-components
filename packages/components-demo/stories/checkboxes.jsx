import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, Checkboxes, Submit, Formik } from '@deskpro/portal-components';

const options = [
  { value: 'bacon', label: 'Bacon' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'jalapenos', label: 'Jalapeños' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'onions', label: 'Onions' },
  { value: 'pickles', label: 'Pickles' },
];

export default {
  title: "Choices"
}

export const CheckboxesStory = () => (
  <Formik
    initialValues={{ filling: ['bacon'] }}
    onSubmit={action('submit')}
  >
    {() => (
      <Form>
        <Checkboxes
          name="filling"
          options={options}
          label="Filling"
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  </Formik>
);
CheckboxesStory.storyName = 'Checkboxes';
