import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, WebhookDropDown, Submit, Formik } from '@deskpro/portal-components';

export default {
  title: 'Websources choices',
}

export const GetAddressIO = (args) => (
  <Formik
    initialValues={{}}
    onSubmit={action('submit')}
    render={() => (
      <Form>
        <WebhookDropDown
          name="address"
          dataSource={{
            url:       'https://api.getaddress.io/find/__FILTER__',
            method:    'param',
            auth:      { 'api-key': args.apiKey },
            parseData: (data) => {
              if (data) {
                return data.addresses.map(address => ({ value: address, label: address }));
              }
              return [];
            },
            inputValidation: input => input.match(/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9]{1,2}[A-Z]{1,2}/g)
          }}
          label="Address"
          multiple
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  />
);
GetAddressIO.storyName = 'Get Address IO';
GetAddressIO.args = {
  apiKey: 'YOUR_API_KEY',
};

export const FrenchPostalCode = () => (
  <Formik
    initialValues={{}}
    onSubmit={action('submit')}
    render={() => (
      <Form>
        <WebhookDropDown
          name="address"
          dataSource={{
            url:       'https://vicopo.selfbuild.fr/code/__FILTER__',
            method:    'none',
            parseData: (data) => {
              if (data) {
                return data.cities.map(city => ({ value: city.city, label: city.city }));
              }
              return [];
            },
            params:          { headers: {} },
            inputValidation: input => input.match(/^\d{5}$/g)
          }}
          label="Address"
          multiple
        />
        <Submit>Submit</Submit>
      </Form>
    )}
  />
);
FrenchPostalCode.storyName = 'French postal code';

