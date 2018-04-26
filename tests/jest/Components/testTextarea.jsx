import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Textarea } from 'Components';

describe('>>> Textarea --- Snapshot', () => {
  it('+++capturing Snapshot of Textarea', () => {
    const App = () => (
      <Form>
        <Textarea name="textarea" />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        textarea
      }) {
        return {
          textarea: textarea || 'Test textarea'
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
