import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form, Password, Submit, Formik } from '@deskpro/portal-components';


storiesOf('Input', module)
  .add('Password', () => (
    <Formik
      initialValues={{ password: '' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Password
            name="password"
            label="Password"
            required
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ));
