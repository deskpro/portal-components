import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import DatePicker from '../Components/Inputs/DatePicker';
import Form from '../Components/Form';
import Submit from '../Components/Submit';
import 'react-datepicker/dist/react-datepicker.css';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DatePicker> = {
  title: 'Input/DatePicker',
  component: DatePicker,
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
type Story = StoryObj<typeof DatePicker>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'date',
    label: 'Date',
  },
  render: (args) => (
    <Formik
      initialValues={{ date: '10/07/2001' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <DatePicker {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
