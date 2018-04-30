import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Url } from 'Components';

describe('>>> Url --- Snapshot', () => {
  it('+++capturing Snapshot of Url', () => {
    const App = () => (
      <Form>
        <Url name="url" />
      </Form>
    );
    const FormikApp = withFormik({
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
