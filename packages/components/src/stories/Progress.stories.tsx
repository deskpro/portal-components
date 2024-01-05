import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Progress from '../Components/Elements/Progress';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Progress> = {
  title: 'Input/Progress',
  component: Progress,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    percent: 25,
  },
  render: (args) => (
    <div>
      <Progress percent={50} />
      <Progress percent={100} />
      <Progress {...args} />
    </div>
  ),
};
