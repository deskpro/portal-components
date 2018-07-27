import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, MultipleDropDown, Submit } from '../../src/Components';

const options = [
  { value: 'bacon', label: 'Bacon' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'jalapenos', label: 'Jalapeños' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'onions', label: 'Onions' },
  { value: 'pickles', label: 'Pickles' },
];

storiesOf('Choices', module)
  .add('MultipleDropDown', () => (
    <Formik
      initialValues={{ filling: ['bacon'] }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <MultipleDropDown
            name="filling"
            dataSource={{ getOptions: options }}
            label="Filling"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
