import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, Tel, Submit } from '@deskpro/portal-components';


storiesOf('Input', module)
  .add('Tel', () => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Tel
            name="phone"
            label="Phone"
            description="Phone number"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ))
  .add('Tel with indicator', () => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Tel
            name="phone"
            label="Phone"
            withIndicator
            description="Phone number"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));

