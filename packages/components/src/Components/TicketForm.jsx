import React from 'react';
import PropTypes from 'prop-types';
import AbstractForm from './AbstractForm';
import TicketDepartment from './TicketDepartment';

class TicketForm extends AbstractForm {
  static propTypes = {
    deskproLayout: PropTypes.object.isRequired,
    departments:   PropTypes.object.isRequired,
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
    return this.props.deskproLayout.find(d => d.get('department') === 0);
  };

  handleDepartmentChange = (department) => {
    this.setState({
      department
    });
  };

  renderDepartment = () => {
    const { departments } = this.props;

    return (
      <TicketDepartment
        key="department"
        departments={departments.toArray().map(d => ({ label: d.get('title'), value: d.get('id') }))}
        handleChange={this.handleDepartmentChange}
      />
    );
  }
}

export default TicketForm;
