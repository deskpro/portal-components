import React from 'react';
import PropTypes from 'prop-types';
import DropDown from './Choices/DropDown';

class TicketDepartment extends React.Component {
  static propTypes = {
    departments:  PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  render() {
    const { departments, handleChange } = this.props;
    return (
      <DropDown
        name="department"
        label="Department"
        options={departments.toArray().map(d => ({ label: d.get('title'), value: d.get('id') }))}
        handleChange={handleChange}
        clearable={false}
      />
    );
  }
}

export default TicketDepartment;
