import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form, DropDown, Submit, Formik } from '@deskpro/portal-components';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  {
    value:    '4',
    label:    'Option 4',
    children: [
      {
        value:    '4-A',
        label:    'Option 4 - A',
        children: [
          {
            value: '4-A-I',
            label: 'Option 4 - A - I'
          },
          {
            value: '4-A-II',
            label: 'Option 4 - A - II'
          },
          {
            value: '4-A-III',
            label: 'Option 4 - A - III'
          },
          {
            value: '4-A-IV',
            label: 'Option 4 - A - IV'
          },
        ]
      },
      {
        value: '4-B',
        label: 'Option 4 - B'
      },
      {
        value: '4-C',
        label: 'Option 4 - C'
      },
      {
        value: '4-D',
        label: 'Option 4 - D'
      },
    ]
  },
  { value: '5', label: 'Option 5' },
  { value: '6', label: 'Option 6' },
];

storiesOf('Choices', module)
  .add('Multilevel Dropdown', () => (
    <Formik
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <DropDown
            dataSource={{ getOptions: options }}
            name="multilevel"
            label="Label"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    />
  ));
