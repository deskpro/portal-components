import * as React from 'react';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import DropDown from './Choices/DropDown';
import type { I18nType } from "../types/i18n";
import type { Department } from "../types/department";

const I18N = {
  department: 'Department',
  select:     'Select',
  back:       'Back',
};

interface TicketDepartmentProps {
  departments:  Department[];
  handleChange: ( department: Department ) => void;
  name:         string;
  i18n:         I18nType;
  required:     boolean;
}

class TicketDepartment extends React.Component<TicketDepartmentProps> {
  static defaultProps = {
    name:     'department',
    i18n:     {},
    required: false,
  };
  private readonly i18n: I18nType;

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
