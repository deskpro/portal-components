import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';
import '@deskpro/react-datepicker-hijri/dist/react-datepicker.css';
import { Form, DatePicker, Submit, Formik } from '@deskpro/portal-components';

moment.locale('ar');


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