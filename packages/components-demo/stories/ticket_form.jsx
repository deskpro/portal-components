import React from 'react';
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

export default {
  title: 'TicketForm',
};

export const TicketFormStory = (args) => (
  <TicketForm
    showHover={args.showHover}
    deskproLayout={ticketLayout}
    departments={departments}
    categories={categories}
    priorities={priorities}
    products={products}
    department={null}
    onSubmit={action('submit')}
    fileUploadUrl="http://localhost:6006/"
    csrfToken="123456"
  />
);
TicketFormStory.args = {
  showHover: false,
};
TicketFormStory.storyName = 'TicketForm';
