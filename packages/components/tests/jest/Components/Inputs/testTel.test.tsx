import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import Form from '../../../../src/Components/Form';
import Tel from '../../../../src/Components/Inputs/Tel';

describe('>>> Tel --- Snapshot', () => {
  it('+++capturing Snapshot of Tel', () => {
    const App = () => (
      <Form>
        <Tel name="tel" />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        tel
      }) {
        return {
          tel: tel || '0123456789'
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
