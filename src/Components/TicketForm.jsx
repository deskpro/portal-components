import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Yup from 'yup';
import Form from './Form';
import TicketField from './TicketField';

class TicketForm extends React.Component {
  static propTypes = {
    deskproLayout: PropTypes.object.isRequired,
    onSubmit:      PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      department: null
    };
  }

  getLayout = () => this.props.deskproLayout.find(d => d.get('department') === this.state.department);

  getInitialValues = () => {
    const initialValues = {};
    this.getLayout().get('fields', []).forEach((field) => {
      initialValues[field.get('field_id')] = '';
    });
    return initialValues;
  };

  getValidationSchema = () => {
    // return lazy(obj)
    const shape = {};
    this.getLayout().get('fields', []).forEach((field) => {
      let validationRule;
      if (field.get('required', false)) {
        validationRule = Yup.string().required('Field is required');
      } else {
        validationRule = Yup.string();
      }
      shape[field.get('field_id')] = validationRule;
    });
    return Yup.object().shape(shape);
  };

  renderFields = () => this.getLayout().get('fields', []).map(field => <TicketField key={field.get('field_id')} field={field} />);

  render() {
    return (
      <Formik
        initialValues={this.getInitialValues()}
        onSubmit={this.props.onSubmit}
        validationSchema={this.getValidationSchema()}
        render={() => (
          <Form>
            {this.renderFields()}
            <button>Submit</button>
          </Form>
        )}
      />
    );
  }
}

export default TicketForm;
