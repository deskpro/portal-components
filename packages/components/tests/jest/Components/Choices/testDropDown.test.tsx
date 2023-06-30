import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { withFormik } from 'formik';
import { describe, expect, it, jest } from '@jest/globals';
import Form from '../../../../src/Components/Form';
import DropDown from '../../../../src/Components/Choices/DropDown';

jest.mock("react-select", () => {
  return {
    default: ({...props}) => <div>{JSON.stringify(props)}</div>
  }
});

describe('>>> DropDown --- Snapshot', () => {
  it('+++capturing Snapshot of DropDown', () => {
    const options = [
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'last', label: 'Last' },
    ];
    const App = () => (
      <Form>
        <DropDown name="dropDown" dataSource={{ getOptions: options }} />
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
