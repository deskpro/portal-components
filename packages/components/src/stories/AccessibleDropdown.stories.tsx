import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import AccessibleDropDown from '../Components/Choices/AccessibleDropDown';
import Form from '../Components/Form';
import Submit from '../Components/Submit';
import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AccessibleDropDown> = {
  title: 'Choices/Accessible Dropdown',
  component: AccessibleDropDown,
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
type Story = StoryObj<typeof AccessibleDropDown>;

const options = [
  { value: 'bacon', label: 'Bacon' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'jalapenos', label: 'Jalapeños' },
  { value: 'mushrooms', label: 'Mushrooms' },
  { value: 'onions', label: 'Onions' },
  { value: 'pickles', label: 'Pickles' },
];

const multiLevelOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
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

export const Input: Story = {
  args: {
    name: 'filling',
    dataSource: { getOptions: options },
    label: 'Filling',
  },
  render: (args) => (
    <Formik
      initialValues={{ filling: 'bacon' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <AccessibleDropDown {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
}

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
          <AccessibleDropDown {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
}

