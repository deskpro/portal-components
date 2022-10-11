import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Form, Textarea, Submit, Formik } from '@deskpro/portal-components';

export default {
  title: 'Input',
  decorators: [withKnobs],
}

export const TextareaStory = () => (
  <Formik
    initialValues={{ message: 'Initial message' }}
    onSubmit={action('submit')}
    render={() => (
      <Form>
        <Textarea
          name="message"
          label="Message"
          description={text('description', 'Test description')}
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  />
);
TextareaStory.storyName = 'Textarea';
