import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, Password, Submit } from '../../src/Components';


storiesOf('Input', module)
  .add('Password', () => (
    <Formik
      initialValues={{ password: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Password
            name="password"
            label="Password"
            required
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
