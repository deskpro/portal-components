import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, DatePicker, Submit, Formik } from '@deskpro/portal-components';

storiesOf('Input', module)
  .add('DatePicker', () => (
    <Formik
      initialValues={{ date: '14/05/1984' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <DatePicker
            name="date"
            label="Date"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
