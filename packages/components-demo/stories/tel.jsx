import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, Tel, Submit, Formik } from '@deskpro/portal-components';

export default {
  title: 'Input'
};
export const TelStory = () => (
  <Formik
    initialValues={{ text: '' }}
    onSubmit={action('submit')}
  >
    {() => (
      <Form>
        <Tel
          name="phone"
          label="Phone"
          description="Phone number"
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  </Formik>
);
TelStory.storyName = 'Tel';
export const TelWithIndicator = () => (
  <Formik
    initialValues={{ text: '' }}
    onSubmit={action('submit')}
  >
    {() => (
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
  </Formik>
);
TelWithIndicator.storyName = 'Tel With Indicator';

