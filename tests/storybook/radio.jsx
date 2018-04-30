import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, Radio } from '../../src/Components';

const options = [
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'orange', label: 'Orange' },
  { value: 'pink', label: 'Pink' },
  { value: 'red', label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
];

storiesOf('Choices', module)
  .add('Radio', () => (
    <Formik
      initialValues={{ colour: '' }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <Radio
            name="colour"
            options={options}
            label="Colour"
          />
          <button>Submit</button>
        </Form>
      )}
    />
  ));
