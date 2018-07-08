import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form, Formik } from 'formik';

import FieldLayout from '../../src/Components/FieldLayout';
import { LayoutConfig } from '../../src/layouts/Layout';
import ticketFormLayout from '../../src/layouts/ticketFormLayout';

const layouts = new LayoutConfig(ticketFormLayout);

const fileFieldProps = {
  fileUploadUrl: 'http://deskpro5.local/en/dpblob',
  csrfToken:     '123456'
};

const TicketForm = props => (
  <Form>
    <FieldLayout layouts={layouts} {...props} {...fileFieldProps} />
  </Form>
);

storiesOf('TicketForm', module).add('FieldLayout', () => (
  <Formik
    enableReinitialize
    initialValues={layouts.getMatchingLayout().getDefaultValues()}
    onSubmit={action('submit')}
    component={TicketForm}
  />
));
