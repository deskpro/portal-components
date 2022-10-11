import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, Email, Submit, Formik } from '@deskpro/portal-components';

export default {
  title: 'Input'
}

export const EmailStory = () => (
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
);
EmailStory.storyName = 'Email';
