import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { describe, expect, it } from '@jest/globals';
import Form from '../../../../src/Components/Form';
import Radio from '../../../../src/Components/Choices/Radio';

interface FormValues {
  radio: string;
}

interface MyFormikProps {
  radio: string;
}

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
    const FormikApp = withFormik<MyFormikProps, FormValues>({
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
    const renderedValue = renderer.create(<FormikApp radio='' />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
