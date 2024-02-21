import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import FileUpload from '../Components/Inputs/FileUpload';
import Form from '../Components/Form';
import Submit from '../Components/Submit';

import { Formik } from 'formik';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof FileUpload> = {
  title: 'Input/FileUpload',
  component: FileUpload,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

function setCookie(name, value, days, domain) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/; domain=${domain};`;
}

setCookie('_dp_csrf_token', '123456', 1, 'deskpro.test');

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    name: 'files',
    label: 'Attachments',
    url: 'http://deskpro.test/en/dpblob',
    csrfToken: '123456',
    multiple: true,
    files: [
      {
        name: 'Test file',
        filename: 'Test file.pdf',
      }
    ]
  },
  render: (args) => (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={action('submit')}
    >
      {() => (
        <Form>
          <FileUpload {...args} />
          <Submit>Submit</Submit>
        </Form>
      )}
    </Formik>
  ),
};
