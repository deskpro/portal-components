import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Text, Submit } from '../../src/Components';


storiesOf('Input', module)
  .add('Email', () => (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Text
            name="email"
            label="Email"
            required
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
