import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Textarea from '../Components/Inputs/Textarea';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Textarea> = {
  title: 'Input/Textarea',
  component: Textarea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'message',
    label: 'Message',
    description: 'Test description',
  },
  render: (args) => (
    <Formik
      initialValues={{ message: 'Initial message' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Textarea {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
