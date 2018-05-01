import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, DatePicker } from 'Components';

describe('>>> DatePicker --- Snapshot', () => {
  it('+++capturing Snapshot of DatePicker', () => {
    const App = () => (
      <Form>
        <DatePicker name="date" />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        date
      }) {
        return {
          email: date || ''
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
