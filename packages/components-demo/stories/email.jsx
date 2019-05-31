import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, Email, Submit } from '@deskpro/portal-components';


storiesOf('Input', module)
  .add('Email', () => (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Email
            name="email"
            label="Email"
            required
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
