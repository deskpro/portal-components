import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Text } from '../../src/Components';


storiesOf('Input', module)
  .add('Email', () => (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form
          style={{ width: '50%', border: 'solid 1px green' }}
        >
          <Text
            name="email"
            label="Email"
            required
          />
          <button>Submit</button>
        </Form>
      )}
    />
  ));
