import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import Form from '../../../../src/Components/Form';
import Url from '../../../../src/Components/Inputs/Url';
import { describe, expect, it } from '@jest/globals';

interface FormValues {
  url?: string;
}

interface MyFormikProps {
  url?: string;
}

describe('>>> Url --- Snapshot', () => {
  it('+++capturing Snapshot of Url', () => {
    const App = () => (
      <Form>
        <Url name="url" />
      </Form>
    );
    const FormikApp = withFormik<MyFormikProps, FormValues>({
      mapPropsToValues({
        url
      }) {
        return {
          url: url || 'www.deskpro.com'
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
