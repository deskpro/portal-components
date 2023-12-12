import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik, Form, MultipleDropDown, Submit } from '@deskpro/portal-components';

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
    >
      {() => (
        <Form>
          <MultipleDropDown
            name="filling"
            dataSource={{ getOptions: options }}
            label="Filling"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ));
