import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Password } from 'Components';

describe('>>> Password --- Snapshot', () => {
  it('+++capturing Snapshot of Password', () => {
    const App = () => (
      <Form>
        <Password name="password" />
      </Form>
    );
    const FormikApp = withFormik({
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
