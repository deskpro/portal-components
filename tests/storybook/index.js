import React from 'react';

import { storiesOf } from '@storybook/react';
import Yup from 'yup';
import { withFormik, Field } from 'formik';
import { Form, Email, Password } from '../../src/Components';

const App = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <Form>
    <Email name="email" placeholder="Email" touched={touched} errors={errors}/>
    <Password name="password" placeholder="Password" touched={touched} errors={errors}/>
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      Join our newsletter
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button disabled={isSubmitting}>Submit</button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'free'
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if(values.email === 'chris@deskpro.com') {
        setErrors({ email: 'That email is already taken' })
      } else {
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  }
})(App);

storiesOf('Test Formik', module)
  .add('POC', () =>
    <FormikApp />
  );
