import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Password from '../Components/Inputs/Password';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Password> = {
  title: 'Input/Password',
  component: Password,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Password>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'password',
    label: 'Password',
    required: true,
  },
  render: (args) => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Password {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
