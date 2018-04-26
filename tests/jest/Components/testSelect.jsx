import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Select } from 'Components';

describe('>>> Select --- Snapshot', () => {
  it('+++capturing Snapshot of Select', () => {
    const options = [
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'last', label: 'Last' },
    ];
    const App = () => (
      <Form>
        <Select name="select" options={options} />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        select
      }) {
        return {
          select: select || 'first'
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
