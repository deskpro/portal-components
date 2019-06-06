import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Choices', module)
  .add('Checkboxes', () => (
    <Formik
      initialValues={{ filling: ['bacon'] }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Checkboxes
            name="filling"
            options={options}
            label="Filling"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
