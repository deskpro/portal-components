import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, DropDown, Submit } from '../../src/Components';

const options = [
  { value: 'bacon', label: 'Bacon' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'jalapenos', label: 'Jalapeños' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'onions', label: 'Onions' },
  { value: 'pickles', label: 'Pickles' },
];

storiesOf('Choices', module)
  .add('Dropdown', () => (
    <Formik
      initialValues={{ filling: 'bacon' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <DropDown
            name="filling"
            options={options}
            label="Filling"
            multiple
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
