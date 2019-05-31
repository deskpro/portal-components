import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, LikertScale, Submit } from '@deskpro/portal-components';


storiesOf('Input', module)
  .add('Likert scale', () => (
    <Formik
      initialValues={{ likert_scale: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <LikertScale
            name="likert_scale"
            label="Rating"
            description="Short description"
            required
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
