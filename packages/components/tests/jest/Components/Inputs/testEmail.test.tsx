import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { describe, expect, it } from '@jest/globals';
import Form from '../../../../src/Components/Form';
import Email from '../../../../src/Components/Inputs/Email';

interface FormValues {
  email?: string;
}

interface MyFormikProps {
  email?: string;
}

describe('>>> Email --- Snapshot', () => {
  it('+++capturing Snapshot of Email', () => {
    const App = () => (
      <Form>
        <Email name="email" />
      </Form>
    );
    const FormikApp = withFormik<MyFormikProps, FormValues>({
      mapPropsToValues({
        email
      }) {
        return {
          email: email || 'test@deskpro.com'
        };
      },
      handleSubmit(values, { setSubmitting }) {
        setSubmitting(false);
      }
    })(App);
    const renderedValue = renderer.create(<FormikApp />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
