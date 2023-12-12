import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, Text, Submit, Formik } from '@deskpro/portal-components';

export default {
  title: "Input",
}

export const Input = () => (
  <Formik
    initialValues={{ text: '' }}
    onSubmit={action('submit')}
  >
    {() => (
      <Form>
        <Text
          name="text"
          label="Text"
          description="Test description"
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  </Formik>
);
