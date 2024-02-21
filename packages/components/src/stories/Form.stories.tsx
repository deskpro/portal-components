import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import * as Yup from 'yup';

import Email from '../Components/Inputs/Email';
import Password from '../Components/Inputs/Password';
import Checkbox from '../Components/Inputs/Checkbox';
import DropDown from '../Components/Choices/DropDown';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Form> = {
  title: 'Forms/Basic form',
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

const options = [
  { value: 'free', label: 'Free' },
  { value: 'medium', label: 'Medium' },
  { value: 'premium', label: 'Premium' },
];

export default meta;
type Story = StoryObj<typeof Form>;

const validationSchema = Yup.object().shape({
  email:      Yup.string().email('Email not valid').required('Email is required'),
  password:   Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required'),
  newsletter: Yup.string().matches(/true/, 'You must accept the newsletter')
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    showHover: false,
  },
  render: (args) => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
      validationSchema={validationSchema}
    >
      {() => (
        <Form
          showHover={args.showHover}
        >
          <Email name="email" placeholder="Email" label="Email" />
          <Password
            name="password"
            placeholder="Password"
            label="Password"
            description="Must have 9 characters minimum"
          />
          <Checkbox
            id="checkbox"
            name="newsletter"
            label="Join our newsletter"
          />
          <DropDown
            dataSource={{ getOptions: options }}
            name="plan"
            label="Plan"
          />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
