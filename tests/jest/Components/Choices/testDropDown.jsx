import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, DropDown } from 'Components';

describe('>>> DropDown --- Snapshot', () => {
  it('+++capturing Snapshot of DropDown', () => {
    const options = [
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'last', label: 'Last' },
    ];
    const App = () => (
      <Form>
        <DropDown name="dropDown" options={options} />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        dropDown
      }) {
        return {
          dropDown: dropDown || 'first'
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
