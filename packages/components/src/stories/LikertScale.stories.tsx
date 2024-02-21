import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import LikertScale from '../Components/Inputs/LikertScale';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LikertScale> = {
  title: 'Input/Likert scale',
  component: LikertScale,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LikertScale>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'likert_scale',
    label: 'Rating',
    description: 'Short description',
    required: true,
  },
  render: (args) => (
    <Formik
      initialValues={{ likert_scale: '' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <LikertScale {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
