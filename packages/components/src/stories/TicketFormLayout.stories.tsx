import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Form from '../Components/Form';
import Submit from '../Components/Submit';
import FieldLayout from '../Components/FieldLayout';

import { Formik } from 'formik';
import { LayoutConfig } from '../layouts/Layout';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Form> = {
  title: 'TicketForm/FieldLayout',
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

import ticketFormLayout from './DemoState/ticketFormLayout';

const layouts = new LayoutConfig(ticketFormLayout);

const fileFieldProps = {
  fileUploadUrl: 'http://deskpro.test/en/dpblob',
  csrfToken:     '123456'
};

export default meta;
type Story = StoryObj<typeof Form>;

const TicketForm = props => (
  <Form>
    <FieldLayout layouts={layouts} {...props} {...fileFieldProps} />
    <Submit>Save</Submit>
  </Form>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    showHover: false,
  },
  render: () => (
    <Formik
      enableReinitialize
      initialValues={layouts.getMatchingLayout()?.getDefaultValues()}
      onSubmit={action('submit')}
      component={TicketForm}
    />
  ),
};
