import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { TicketForm } from '@deskpro/portal-components';
import { ticketLayout, departments, categories, priorities, products } from '../DemoState/ticket_form';

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
      categories={categories}
      priorities={priorities}
      products={products}
      department={null}
      onSubmit={action('submit')}
      fileUploadUrl="https://www.test-cors.org/"
      csrfToken="123456"
    />
  ));
