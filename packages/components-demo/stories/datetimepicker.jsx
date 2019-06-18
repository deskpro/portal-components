import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';
import '@deskpro/react-datepicker-hijri/dist/react-datepicker.css';
import { Form, DateTimePicker, Submit, Formik } from '@deskpro/portal-components';

moment.locale('en');

storiesOf('Input', module)
  .add('DateTimePicker', () => (
    <Formik
      initialValues={{ date: '14/05/1984' }}
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
