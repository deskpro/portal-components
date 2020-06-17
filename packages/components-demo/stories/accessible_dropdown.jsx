import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form, AccessibleDropDown, Submit, Formik } from '@deskpro/portal-components';

const options = [
  { value: 'bacon', label: 'Bacon' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'jalapenos', label: 'Jalapeños' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'onions', label: 'Onions' },
  { value: 'pickles', label: 'Pickles' },
];

storiesOf('Choices', module)
  .add('Accessible Dropdown', () => (
    <Formik
      initialValues={{ filling: 'bacon' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <AccessibleDropDown
            dataSource={{ getOptions: options }}
            handleChange={action('change')}
            name="filling"
            label="Filling"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
