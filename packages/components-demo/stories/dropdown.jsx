import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, DropDown, Submit, Formik } from '@deskpro/portal-components';

const options = [
  { value: 'bacon', label: 'Bacon' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'jalapenos', label: 'Jalapeños' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'onions', label: 'Onions' },
  { value: 'pickles', label: 'Pickles' },
];

export default {
  title: 'Choices'
}

export const DropdownStory = () => (
  <Formik
    initialValues={{ filling: 'bacon' }}
    onSubmit={action('submit')}
    render={() => (
      <Form>
        <DropDown
          dataSource={{ getOptions: options }}
          name="filling"
          label="Filling"
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  />
);
DropdownStory.storyName = 'Dropdown';
