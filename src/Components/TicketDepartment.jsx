import React from 'react';
import PropTypes from 'prop-types';
import DropDown from './Choices/DropDown';

class TicketDepartment extends React.Component {
  static propTypes = {
    departments:  PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
  };

  render() {
    const { departments, handleChange } = this.props;
    return (
      <DropDown
        name="department"
        label="Department"
        dataSource={{ getOptions: departments }}
        handleChange={handleChange}
        clearable={false}
      />
    );
  }
}

export default TicketDepartment;
