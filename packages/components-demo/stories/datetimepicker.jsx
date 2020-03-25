import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, DateTimePicker, Submit, Formik } from '@deskpro/portal-components';


storiesOf('Input', module)
  .add('DateTimePicker', () => (
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
  ));
