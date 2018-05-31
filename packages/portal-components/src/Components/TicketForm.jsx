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
    fileUploadUrl: PropTypes.string.isRequired,
    csrfToken:     PropTypes.string.isRequired,
    showHover:     PropTypes.bool,
  };

  static defaultProps = {
    department: null,
    showHover:  true,
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
        initialValues[field.get('field_id')] = field.getIn(['data', 'default_value'], '');
      }
    });
    return initialValues;
  };

  getValidationSchema = () => {
    // return lazy(obj)
    const shape = {};
    this.getLayout().get('fields', []).forEach((field) => {
      let validationRule = Yup.string();
      if (field.get('required', false) || field.getIn(['data', 'options', 'validation_type']) === 'required') {
        validationRule = validationRule.required('Field is required');
      }
      const regex = field.getIn(['data', 'options', 'regex']);
      const widgetType = field.getIn(['data', 'widget_type'], null);
      if (regex) {
        validationRule = validationRule.matches(new RegExp(regex.split('/')[1]), {
          message:            'Field is invalid',
          excludeEmptyString: field.getIn(['data', 'options', 'regex_required'])
        });
      }
      if (widgetType === 'datetime' || widgetType === 'date') {
        validationRule = Yup.date();
        const dateValidType = field.getIn(['data', 'options', 'date_valid_type']);
        if (dateValidType === 'range') {
          if (field.getIn(['data', 'options', 'date_valid_range1'])) {
            const range1 = new Date();
            range1.setDate(range1.getDate() - field.getIn(['data', 'options', 'date_valid_range1']));
            validationRule = validationRule.min(range1);
          }
          if (field.getIn(['data', 'options', 'date_valid_range2'])) {
            const range2 = new Date();
            range2.setDate(range2.getDate() + field.getIn(['data', 'options', 'date_valid_range2']));
            validationRule = validationRule.max(range2);
          }
        }
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
    const { departments, fileUploadUrl, csrfToken } = this.props;
    return this.getLayout().get('fields', []).map((field) => {
      switch (field.get('field_id')) {
        case 'department':
          return (
            <TicketDepartment
              key="department"
              departments={departments}
              handleChange={this.handleDepartmentChange}
            />
          );
        default:
          return (
            <TicketField
              key={field.get('field_id')}
              field={field}
              fileUploadUrl={fileUploadUrl}
              csrfToken={csrfToken}
            />
          );
      }
    });
  };

  render() {
    const { showHover } = this.props;
    return (
      <Formik
        enableReinitialize
        initialValues={this.getInitialValues()}
        onSubmit={this.props.onSubmit}
        validationSchema={this.getValidationSchema()}
      >
        {() => (
          <Form
            showHover={showHover}
          >
            {this.renderFields()}
            <Submit>Submit</Submit>
          </Form>
        )}
      </Formik>
    );
  }
}

export default TicketForm;
