import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import CascadingDropDown from '../Components/Choices/CascadingDropDown';
import Form from '../Components/Form';
import Submit from '../Components/Submit';
import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CascadingDropDown> = {
  title: 'Choices/Cascading Dropdown',
  component: CascadingDropDown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    formik: {
      initialValues: {
        filling: 'bacon',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CascadingDropDown>;

const multiLevelOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  {
    value:    '3',
    label:    'Option 3',
    children: [
      {
        value:    '3-A',
        label:    'Option 3 - A',
        children: [
          {
            value: '3-A-I',
            label: 'Option 3 - A - I'
          },
          {
            value: '3-A-II',
            label: 'Option 3 - A - II'
          },
          {
            value: '3-A-III',
            label: 'Option 3 - A - III'
          },
          {
            value: '3-A-IV',
            label: 'Option 3 - A - IV'
          },
        ]
      },
      {
        value:    '3-B',
        label:    'Option 3 - B',
        children: [
          {
            value: '3-B-I',
            label: 'Option 3 - B - I'
          },
          {
            value: '3-B-II',
            label: 'Option 3 - B - II'
          },
          {
            value: '3-B-III',
            label: 'Option 3 - B - III'
          },
          {
            value: '3-B-IV',
            label: 'Option 3 - B - IV'
          },
        ]
      },
      {
        value: '3-C',
        label: 'Option 3 - C'
      },
      {
        value: '3-D',
        label: 'Option 3 - D'
      },
    ]
  },
  {
    value:    '4',
    label:    'Option 4',
    children: [
      {
        value:    '4-A',
        label:    'Option 4 - A',
        children: [
          {
            value: '4-A-I',
            label: 'Option 4 - A - I'
          },
          {
            value: '4-A-II',
            label: 'Option 4 - A - II'
          },
          {
            value: '4-A-III',
            label: 'Option 4 - A - III'
          },
          {
            value: '4-A-IV',
            label: 'Option 4 - A - IV'
          },
        ]
      },
      {
        value: '4-B',
        label: 'Option 4 - B'
      },
      {
        value: '4-C',
        label: 'Option 4 - C'
      },
      {
        value: '4-D',
        label: 'Option 4 - D'
      },
    ]
  },
  { value: '5', label: 'Option 5' },
  { value: '6', label: 'Option 6' },
];

export const MultiLevel: Story = {
  args: {
    name: 'multilevel',
    dataSource: { getOptions: multiLevelOptions },
    label: 'Multi Level',
    handleChanged: action('change'),
  },
  render: (args) => (
    <Formik
      initialValues={{ multilevel: '1' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <CascadingDropDown {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
}

