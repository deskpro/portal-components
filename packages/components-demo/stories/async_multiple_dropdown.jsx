import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, MultipleDropDown, Submit, Formik } from '@deskpro/portal-components';

const options = [
  { value: 'bacon', label: 'Bacon' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'jalapenos', label: 'Jalapeños' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'onions', label: 'Onions' },
  { value: 'pickles', label: 'Pickles' },
];

const fakeAPI = (filter, delay, value) => new Promise((resolve) => {
  setTimeout(() => {
    const regexp = new RegExp(filter.toLowerCase());
    const result = value.filter(o => o.label.toLowerCase().match(regexp) || filter === '');
    resolve(result);
  }, delay);
});

export default {
  title: "Choices"
}

export const AsyncMultipleDropdown = () => (
  <Formik
    initialValues={{ filling: 'bacon' }}
    onSubmit={action('submit')}
  >
    {() => (
      <Form>
        <MultipleDropDown
          name="filling"
          dataSource={{ getOptions: filter => fakeAPI(filter, 300, options) }}
          label="Filling"
          multiple
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  </Formik>
);
AsyncMultipleDropdown.storyName = 'Async MultipleDropdown';
