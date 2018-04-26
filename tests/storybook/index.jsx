import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import Yup from 'yup';
import { withFormik, Field } from 'formik';
import 'react-select/dist/react-select.css';
import { Form, Email, Password, Select } from '../../src/Components';

const options = [
  { value: 'free', label: 'Free' },
  { value: 'premium', label: 'Premium' },
];

const App = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <Form>
    <Email name="email" placeholder="Email" touched={touched} errors={errors} />
    <Password name="password" placeholder="Password" touched={touched} errors={errors} />
    <label htmlFor="checkbox">
      <Field id="checkbox" type="checkbox" name="newsletter" checked={values.newsletter} />
      Join our newsletter
    </label>
    <Select name="plan" options={options} />
    <button disabled={isSubmitting}>Submit</button>
  </Form>
);

App.propTypes = {
  values:       PropTypes.object,
  errors:       PropTypes.object,
  touched:      PropTypes.object,
  isSubmitting: PropTypes.bool,
};

App.defaultProps = {
  values:       {},
  errors:       {},
  touched:      {},
  isSubmitting: false,
};

const FormikApp = withFormik({
  mapPropsToValues({
    email, password, newsletter, plan
  }) {
    return {
      email:      email || 'julien@ducro.fr',
      password:   password || '',
      newsletter: newsletter || false,
      plan:       plan || 'premium',
    };
  },
  validationSchema: Yup.object().shape({
    email:    Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'chris@deskpro.com') {
        setErrors({ email: 'That email is already taken' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(App);

storiesOf('Test Formik', module)
  .add('POC', () =>
    <FormikApp />);
