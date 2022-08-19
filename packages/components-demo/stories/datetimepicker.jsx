import React from 'react';
import { action } from '@storybook/addon-actions';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, DateTimePicker, Submit, Formik } from '@deskpro/portal-components';

export default {
  title: "Input"
}

export const DateTimePickerStory = () => (
  <Formik
    initialValues={{ date: '14/05/1984 15:00' }}
    onSubmit={action('submit')}
    render={() => (
      <Form>
        <DateTimePicker
          name="date"
          label="Date"
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  />
);
DateTimePickerStory.storyName = 'DateTimePicker';
