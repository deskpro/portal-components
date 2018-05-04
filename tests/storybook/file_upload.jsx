import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import { Form, FileUpload } from '../../src/Components';

function setCookie(name, value, days, domain) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/; domain=${domain};`;
}

setCookie('_dp_csrf_token', '123456', 1, 'deskpro5.local');


storiesOf('Input', module)
  .add('FileUpload', () => (
    <Formik
      initialValues={{ files: [] }}
      onSubmit={action('submit')}
      render={() => (
        <Form>
          <FileUpload
            label="Attachments"
            name="files"
            url="http://deskpro5.local/en/dpblob"
            multiple
            csrfToken="123456"
          />
          <button>submit</button>
        </Form>
      )}
    />
  ));
