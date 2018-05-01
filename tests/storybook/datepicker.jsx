import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, DatePicker } from '../../src/Components';


storiesOf('Input', module)
  .add('DatePicker', () => (
    <Formik
      initialValues={{ date: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <DatePicker
            name="date"
            label="Date"
          />
          <button>Submit</button>
        </Form>
      )}
    />
  ));
