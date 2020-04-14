import React from 'react';
import PropTypes from 'prop-types';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import DropDown from './Choices/DropDown';

const I18N = {
  department: 'Department',
  select:     'Select',
  back:       'Back',
};

class TicketDepartment extends React.Component {
  static propTypes = {
    departments:  PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    name:         PropTypes.string,
    i18n:         PropTypes.object,
    required:     PropTypes.bool,
  };

  static defaultProps = {
    name:     'department',
    i18n:     {},
    required: false,
  };

  constructor(props) {
    super(props);
    this.i18n = deepMerge(I18N, props.i18n);
  }

  render() {
    const { departments, handleChange, required } = this.props;
    return (
      <DropDown
        name={this.props.name}
        label={required ? `${this.i18n.department} *` : this.i18n.department}
        dataSource={{ getOptions: departments }}
        handleChange={handleChange}
        isClearable={false}
        isSearchable={false}
        i18n={this.i18n}
        required
      />
    );
  }
}

export default TicketDepartment;
