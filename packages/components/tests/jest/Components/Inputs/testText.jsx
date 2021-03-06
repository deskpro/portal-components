import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Text } from 'Components';

describe('>>> Text --- Snapshot', () => {
  it('+++capturing Snapshot of Text', () => {
    const App = () => (
      <Form>
        <Text name="text" />
      </Form>
    );
    const FormikApp = withFormik({
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
