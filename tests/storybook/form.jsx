import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import Yup from 'yup';
import { withFormik } from 'formik';
import 'react-select/dist/react-select.css';
import { Form, Email, Password, DropDown, Checkbox, Submit } from '../../src/Components';

const options = [
  { value: 'free', label: 'Free' },
  { value: 'medium', label: 'Medium' },
  { value: 'premium', label: 'Premium' },
];

const App = ({
  isSubmitting
}) => (
  <Form
    showHover={boolean('Show hover', false)}
  >
    <Email name="email" placeholder="Email" label="Email" />
    <Password
      name="password"
      placeholder="Password"
      label="Password"
      description="Must have 9 characters minimum"
    />
    <Checkbox
      id="checkbox"
      name="newsletter"
      label="Join our newsletter"
    />
    <DropDown name="plan" options={options} label="Plan" />
    <Submit disabled={isSubmitting}>Submit</Submit>
  </Form>
);

App.propTypes = {
  isSubmitting: PropTypes.bool,
};

App.defaultProps = {
  isSubmitting: false,
};

const FormikApp = withFormik({
  mapPropsToValues({
    email, password, newsletter, plan
  }) {
    return {
      email:      email || '',
      password:   password || '',
      newsletter: newsletter || false,
      plan:       plan || 'premium',
    };
  },
  validationSchema: Yup.object().shape({
    email:      Yup.string().email('Email not valid').required('Email is required'),
    password:   Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required'),
    newsletter: Yup.string().matches(/true/, 'You must accept the newsletter')
  }),
  handleSubmit(values, { setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'chris@deskpro.com') {
        setErrors({ email: 'That email is already taken' });
      } else {
        console.log(values); // eslint-disable-line no-console
      }
      setSubmitting(false);
    }, 2000);
  }
})(App);

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add('Basic form', () =>
    <FormikApp />);
