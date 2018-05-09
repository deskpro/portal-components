import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Text } from '../../src/Components';


storiesOf('Input', module)
  .add('Text', () => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form
          style={{ width: '50%', border: 'solid 1px green' }}
        >
          <Text
            name="text"
            label="Text"
            required
          />
          <button>Submit</button>
        </Form>
      )}
    />
  ));
