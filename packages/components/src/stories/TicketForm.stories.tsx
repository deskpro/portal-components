import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import TicketForm from '../Components/TicketForm';

import { ticketLayout, departments, categories, priorities, products } from './DemoState/ticket_form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TicketForm> = {
  title: 'TicketForm/TicketForm',
  component: TicketForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TicketForm>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    showHover: false,
  },
  render: (args) => (
    <TicketForm
      deskproLayout={ticketLayout}
      departments={departments}
      categories={categories}
      priorities={priorities}
      products={products}
      {...args}
      department={undefined}
      onSubmit={action('submit')}
      fileUploadUrl="http://localhost:6006/"
      csrfToken="123456"
    />
  ),
};
