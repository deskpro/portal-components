import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Yup from 'yup';
import Form from './Form';
import Submit from './Submit';
import TicketField from './TicketField';
import TicketDepartment from './TicketDepartment';

class TicketForm extends React.Component {
  static propTypes = {
    deskproLayout: PropTypes.object.isRequired,
    departments:   PropTypes.object.isRequired,
    onSubmit:      PropTypes.func.isRequired,
    department:    PropTypes.number,
  };

  static defaultProps = {
    department: null
  };

  constructor(props) {
    super(props);
    this.state = {
      department: props.department
    };
  }

  getLayout = () => {
    const layout = this.props.deskproLayout.find(d => d.get('department') === this.state.department);
    if (layout) {
      return layout;
    }
    return this.props.deskproLayout.find(d => d.get('department') === null);
  };

  getInitialValues = () => {
    const initialValues = {};
    this.getLayout().get('fields', []).forEach((field) => {
      if (field.get('field_id') === 'department') {
        initialValues.department = this.state.department;
      } else {
        initialValues[field.get('field_id')] = '';
      }
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

  handleDepartmentChange = (department) => {
    this.setState({
      department
    });
  };

  renderFields = () => {
    const { departments } = this.props;
    return this.getLayout().get('fields', []).map((field) => {
      if (field.get('field_id') === 'department') {
        return (
          <TicketDepartment
            key="department"
            departments={departments}
            handleChange={this.handleDepartmentChange}
          />
        );
      }
      return (
        <TicketField
          key={field.get('field_id')}
          field={field}
        />
      );
    });
  };

  render() {
    return (
      <Formik
        initialValues={this.getInitialValues()}
        onSubmit={this.props.onSubmit}
        validationSchema={this.getValidationSchema()}
        render={() => (
          <Form>
            {this.renderFields()}
            <Submit>Submit</Submit>
          </Form>
        )}
      />
    );
  }
}

export default TicketForm;
