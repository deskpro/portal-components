import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import DropDown from '../Components/Choices/DropDown';
import Form from '../Components/Form';
import Submit from '../Components/Submit';
import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DropDown> = {
  title: 'Choices/Dropdown',
  component: DropDown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropDown>;

const fakeAPI = (filter, delay, value) => new Promise((resolve) => {
  setTimeout(() => {
    const regexp = new RegExp(filter.toLowerCase());
    const result = value.filter(o => o.label.toLowerCase().match(regexp) || filter === '');
    resolve(result);
  }, delay);
});

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


export const Dropdown: Story = {
  args: {
    name: 'filling',
    dataSource: { getOptions: options},
    label: 'Filling',
    multiple: true,
  },
  render: (args) => (
    <Formik
      initialValues={{ filling: 'bacon' }}
      onSubmit={action('submit')}
    >
      {() => (
      <Form>
        <DropDown {...args} />
        <Submit>Submit</Submit>
      </Form>
      )}
    </Formik>
  ),
}

export const Async: Story = {
  args: {
    name: 'filling',
    dataSource: { getOptions: filter => fakeAPI(filter, 300, options) },
    label: 'Filling',
    multiple: true,
  },
  render: (args) => (
    <Formik
      initialValues={{ filling: 'bacon' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <DropDown {...args} />
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
    label: 'Multilevel',
  },
  render: (args) => (
    <Formik
      initialValues={{ filling: 'bacon' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <DropDown {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
}