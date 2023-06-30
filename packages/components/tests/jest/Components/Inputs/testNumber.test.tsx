import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { describe, expect, it } from '@jest/globals';
import Form from '../../../../src/Components/Form';
import Number from '../../../../src/Components/Inputs/Number';

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
