import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { describe, expect, it } from '@jest/globals';
import Form from '../../../../src/Components/Form';
import Search from '../../../../src/Components/Inputs/Search';

interface FormValues {
  search?: string;
}

interface MyFormikProps {
  search?: string;
}

describe('>>> Search --- Snapshot', () => {
  it('+++capturing Snapshot of Search', () => {
    const App = () => (
      <Form>
        <Search name="search" />
      </Form>
    );
    const FormikApp = withFormik<MyFormikProps, FormValues>({
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
