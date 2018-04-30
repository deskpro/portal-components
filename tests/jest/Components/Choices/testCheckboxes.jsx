import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Checkboxes } from 'Components';

describe('>>> Checkboxes --- Snapshot', () => {
  it('+++capturing Snapshot of Checkboxes', () => {
    const options = [
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'last', label: 'Last' },
    ];
    const App = () => (
      <Form>
        <Checkboxes name="checkboxes" options={options} />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        checkboxes
      }) {
        return {
          checkboxes: checkboxes || 'first'
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
