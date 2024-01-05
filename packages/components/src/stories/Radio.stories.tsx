import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Radio from '../Components/Choices/Radio';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Radio> = {
  title: 'Choices/Radio',
  component: Radio,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

const options = [
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'orange', label: 'Orange' },
  { value: 'pink', label: 'Pink' },
  { value: 'red', label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
];

export const Input: Story = {
  args: {
    name: 'colour',
    options,
    label: 'Colour',
    description: 'Pick a colour',
  },
  render: (args) => (
    <Formik
      initialValues={{ colour: 'pink' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Radio {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
}