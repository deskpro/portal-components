import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Text from '../Components/Inputs/Text';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Text> = {
  title: 'Input/Text',
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'text',
    label: 'Text',
    description: 'Test description',
  },
  render: (args) => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <Text {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
