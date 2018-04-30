import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Number } from 'Components';

describe('>>> Number --- Snapshot', () => {
  it('+++capturing Snapshot of Number', () => {
    const App = () => (
      <Form>
        <Number name="number" />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        number
      }) {
        return {
          number: number || 6
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
