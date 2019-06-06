import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FieldLayout, Submit, LayoutConfig, Formik, Form } from '@deskpro/portal-components';


import ticketFormLayout from '../DemoState/ticketFormLayout';

const layouts = new LayoutConfig(ticketFormLayout);

const fileFieldProps = {
  fileUploadUrl: 'http://deskpro5.local/en/dpblob',
  csrfToken:     '123456'
};

const TicketForm = props => (
  <Form>
    <FieldLayout layouts={layouts} {...props} {...fileFieldProps} />
    <Submit>Save</Submit>
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
