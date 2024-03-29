import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { describe, expect, it } from '@jest/globals';
import Form from '../../../../src/Components/Form';
import Password from '../../../../src/Components/Inputs/Password';

interface FormValues {
  password?: string;
}

interface MyFormikProps {
  password?: string;
}

describe('>>> Password --- Snapshot', () => {
  it('+++capturing Snapshot of Password', () => {
    const App = () => (
      <Form>
        <Password name="password" />
      </Form>
    );
    const FormikApp = withFormik<MyFormikProps, FormValues>({
      mapPropsToValues({
        password
      }) {
        return {
          password: password || 'password1234'
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
