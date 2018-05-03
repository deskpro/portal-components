import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TicketForm } from '../../src/Components';
import { ticketLayout } from '../DemoState/ticket_form';

storiesOf('TicketForm', module)
  .add('TicketForm', () => (
    <TicketForm deskproLayout={ticketLayout} onSubmit={action('submit')} />
  ));
