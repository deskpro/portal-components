import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, HijriDatePicker, Submit, Formik } from '@deskpro/portal-components';

storiesOf('Input', module)
  .add('HijriDatePicker', () => (
    <Formik
      initialValues={{ date: '1404/13/08' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <HijriDatePicker
            name="date"
            label="Date"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
