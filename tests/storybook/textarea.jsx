import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, Textarea, Submit } from '../../src/Components';


storiesOf('Input', module)
  .add('Textarea', () => (
    <Formik
      initialValues={{ message: 'Initial message' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Textarea
            name="message"
            label="Message"
            required
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
