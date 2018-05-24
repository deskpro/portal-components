import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { TicketForm } from '../../src/Components';
import { ticketLayout, departments } from '../DemoState/ticket_form';

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

storiesOf('TicketForm', module)
  .addDecorator(withKnobs)
  .add('TicketForm', () => (
    <TicketForm
      showHover={boolean('Show hover', false)}
      deskproLayout={ticketLayout}
      departments={departments}
      department={5}
      onSubmit={action('submit')}
      fileUploadUrl="http://deskpro5.local/en/dpblob"
      csrfToken="123456"
    />
  ));
