import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { describe, expect, it } from '@jest/globals';
import { withFormik } from 'formik';
import Form from '../../../../src/Components/Form';
import Text from '../../../../src/Components/Inputs/Text';

interface FormValues {
  text?: string;
}

interface MyFormikProps {
  text?: string;
}

describe('>>> Text --- Snapshot', () => {
  it('+++capturing Snapshot of Text', () => {
    const App = () => (
      <Form>
        <Text name="text" />
      </Form>
    );
    const FormikApp = withFormik<MyFormikProps, FormValues>({
      mapPropsToValues({
        text
      }) {
        return {
          text: text || 'Test text'
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
