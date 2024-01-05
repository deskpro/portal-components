import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Email from '../Components/Inputs/Email';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Email> = {
  title: 'Input/Email',
  component: Email,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Email>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'email',
    label: 'Email',
    required: true,
  },
  render: (args) => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Email {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
