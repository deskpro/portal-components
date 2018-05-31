import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, Text, Submit } from '../../src/Components';


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
