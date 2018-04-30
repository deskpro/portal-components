import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Radio } from 'Components';

describe('>>> Radio --- Snapshot', () => {
  it('+++capturing Snapshot of Radio', () => {
    const options = [
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'last', label: 'Last' },
    ];
    const App = () => (
      <Form>
        <Radio name="radio" options={options} />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        radio
      }) {
        return {
          radio: radio || 'first'
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
