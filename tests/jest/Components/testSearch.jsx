import React from 'react';
import renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { Form, Search } from 'Components';

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
