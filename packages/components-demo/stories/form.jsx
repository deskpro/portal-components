import React from 'react';
import * as Yup from 'yup';
import {
  Form, Email, Password, DropDown, Checkbox, Submit, withFormik
} from '@deskpro/portal-components';

const options = [
  { value: 'free', label: 'Free' },
  { value: 'medium', label: 'Medium' },
  { value: 'premium', label: 'Premium' },
];

const App = (args) => (
  <Form
    showHover={args.showHover}
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
    <DropDown
      dataSource={{ getOptions: options }}
      name="plan"
      label="Plan"
    />
    <Submit disabled={args.isSubmitting}>Submit</Submit>
  </Form>
);

App.args = {
  isSubmitting: false,
  showHover: false,
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

export default {
  title: 'Forms',
};

export const BasicForm = () => <FormikApp />;
BasicForm.storyName = 'Basic form';
