import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { Formik } from 'formik';
import { Form, Textarea, Submit } from '@deskpro/portal-components';


storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => (
    <Formik
      initialValues={{ message: 'Initial message' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Textarea
            name="message"
            label="Message"
            description={text('Test description')}
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
