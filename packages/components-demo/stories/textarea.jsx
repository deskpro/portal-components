import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, Textarea, Submit, Formik } from '@deskpro/portal-components';

export default {
  title: 'Input',
}

export const TextareaStory = (args) => (
  <Formik
    initialValues={{ message: 'Initial message' }}
    onSubmit={action('submit')}
  >
    {() => (
      <Form>
        <Textarea
          name="message"
          label="Message"
          description={args.description}
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  </Formik>
);
TextareaStory.args = {
  description: 'Test description',
};
TextareaStory.storyName = 'Textarea';
