import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Checkboxes from '../Components/Choices/Checkboxes';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Checkboxes> = {
  title: 'Choices/Checkboxes',
  component: Checkboxes,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

const options = [
  { value: 'bacon', label: 'Bacon' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'jalapenos', label: 'Jalapeños' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'onions', label: 'Onions' },
  { value: 'pickles', label: 'Pickles' },
];

export const Input: Story = {
  args: {
    name: 'filling',
    options,
    label: 'Filling',
  },
  render: (args) => (
    <Formik
      initialValues={{ filling: ['bacon'] }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Checkboxes {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
}