import React from 'react';
import { action } from '@storybook/addon-actions';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, DatePicker, Submit, Formik } from '@deskpro/portal-components';

export default {
  title: 'Input'
}

export const DatePickerStory = () => (
  <Formik
    initialValues={{ date: '14/05/1984' }}
    onSubmit={action('submit')}
  >
    {() => (
      <Form>
        <DatePicker
          name="date"
          label="Date"
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  </Formik>
);
DatePickerStory.storyName = 'DatePicker';
