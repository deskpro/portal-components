import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form, Text, Submit, Formik } from '@deskpro/portal-components';


storiesOf('Input', module)
  .add('Text', () => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Text
            name="text"
            label="Text"
            description="Test description"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
