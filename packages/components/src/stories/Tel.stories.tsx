import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Tel from '../Components/Inputs/Tel';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Tel> = {
  title: 'Input/Tel',
  component: Tel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tel>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'phone',
    label: 'Phone',
    description: 'Phone number',
  },
  render: (args) => (
    <Formik
      initialValues={{ phone: '' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Tel {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithIndicator: Story = {
  args: {
    name: 'phone',
    label: 'Phone',
    description: 'Phone number',
    withIndicator: true,
  },
  render: (args) => (
    <Formik
      initialValues={{ phone: '' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Tel {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
