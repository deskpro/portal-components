import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Form, FileUpload, Submit, Formik, Progress
} from '@deskpro/portal-components';

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
            csrfToken="123456"
            multiple
            files={[
              {
                name:     'Test file',
                filename: 'Test file.pdf'
              }
            ]}
          />
          <Submit>submit</Submit>
        </Form>
      )}
    />
  ))
  .add('Progress Bar', () => (
    <div>
      <Progress percent={50} />
      <Progress percent={100} />
    </div>
  ));
