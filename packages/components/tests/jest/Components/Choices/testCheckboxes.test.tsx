import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { describe, expect, it } from '@jest/globals';
import Form from '../../../../src/Components/Form';
import Checkboxes from '../../../../src/Components/Choices/Checkboxes';

interface FormValues {
  checkboxes: string[];
}

interface MyFormikProps {
  checkboxes: string[];
}

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
    const FormikApp = withFormik<MyFormikProps, FormValues>({
      mapPropsToValues({
        checkboxes
      }) {
        return {
          checkboxes: checkboxes || []
        };
      },
      handleSubmit(values, { setSubmitting }) {
        setSubmitting(false);
      }
    })(App);
    const renderedValue = renderer.create(<FormikApp checkboxes={[]} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('+++capturing Snapshot of Checkboxes with existing value', () => {
    const options = [
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'last', label: 'Last' },
    ];
    const App = () => (
      <Form>
        <Checkboxes name="checkboxes" id="checkbox" options={options} />
      </Form>
    );
    const FormikApp = withFormik<MyFormikProps, FormValues>({
      mapPropsToValues({
        checkboxes
      }) {
        return {
          checkboxes: checkboxes || ['first']
        };
      },
      handleSubmit(values, { setSubmitting }) {
        setSubmitting(false);
      }
    })(App);
    const renderedValue = renderer.create(<FormikApp checkboxes={[]} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
