import React from 'react';
import PropTypes from 'prop-types';
import DropDown from './Choices/DropDown';

class TicketDepartment extends React.Component {
  static propTypes = {
    departments:  PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    name:         PropTypes.string
  };

  static defaultProps = {
    name: 'department'
  };

  render() {
    const { departments, handleChange } = this.props;
    return (
      <DropDown
        name={this.props.name}
        label="Department"
        dataSource={{ getOptions: departments }}
        handleChange={handleChange}
        isClearable={false}
      />
    );
  }
}

export default TicketDepartment;
