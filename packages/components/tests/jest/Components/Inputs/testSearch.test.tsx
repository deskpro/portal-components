import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import Form from '../../../../src/Components/Form';
import Search from '../../../../src/Components/Inputs/Search';

describe('>>> Search --- Snapshot', () => {
  it('+++capturing Snapshot of Search', () => {
    const App = () => (
      <Form>
        <Search name="search" />
      </Form>
    );
    const FormikApp = withFormik({
      mapPropsToValues({
        search
      }) {
        return {
          search: search || 'Test search'
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
