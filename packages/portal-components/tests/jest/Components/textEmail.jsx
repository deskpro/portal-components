import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Email } from 'Components';

describe('>>> Email --- Snapshot', () => {
  it('+++capturing Snapshot of Email', () => {
    const App = () => (
      <Form>
        <Email name="email" />
      </Form>
    );
    const FormikApp = withFormik({
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
