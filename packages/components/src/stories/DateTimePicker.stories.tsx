import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import DateTimePicker from '../Components/Inputs/DateTimePicker';
import Form from '../Components/Form';
import Submit from '../Components/Submit';
import 'react-datepicker/dist/react-datepicker.css';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DateTimePicker> = {
  title: 'Input/DateTimePicker',
  component: DateTimePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    formik: {
      initialValues: {
        date: '10/07/2001',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'date',
    label: 'Date',
  },
  render: (args) => (
    <Formik
      initialValues={{ date: '10/07/2001 11:11:12' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <DateTimePicker {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
