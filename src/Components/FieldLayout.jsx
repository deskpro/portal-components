import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import FileUpload from './Inputs/FileUpload';
import Text from './Inputs/Text';
import Textarea from './Inputs/Textarea';
import DatePicker from './Inputs/DatePicker';
import DateTimePicker from './Inputs/DateTimePicker';
import Checkboxes from './Choices/Checkboxes';
import DropDown from './Choices/DropDown';
import MultipleDropDown from './Choices/MultipleDropDown';
import Radio from './Choices/Radio';
import { LayoutConfig } from '../layouts/Layout';

const components = {
  file:        FileUpload,
  text:        Text,
  textarea:    Textarea,
  date:        DatePicker,
  datetime:    DateTimePicker,
  checkbox:    Checkboxes,
  choice:      DropDown,
  radio:       Radio,
  multichoice: MultipleDropDown
};

class FieldLayout extends PureComponent {
  static propTypes = {
    layouts:       PropTypes.instanceOf(LayoutConfig).isRequired,
    values:        PropTypes.object.isRequired,
    fileUploadUrl: PropTypes.string,
    csrfToken:     PropTypes.string,
    resetForm:     PropTypes.func.isRequired,
  };

  static defaultProps = {
    fileUploadUrl: '',
    csrfToken:     ''
  };

  static getDerivedStateFromProps({ layouts, values }, { activeLayout }) {
    const newLayout = layouts.getMatchingLayout(values);
    if (newLayout !== activeLayout) {
      return { activeLayout: newLayout };
    }
    return null;
  }

  state = { activeLayout: null };

  componentDidUpdate(_, { activeLayout }) {
    // Reset form with new defaults when the layout is changed.
    if (activeLayout !== this.state.activeLayout) {
      const defaults = this.state.activeLayout.getDefaultValues();
      this.props.resetForm({ ...defaults, ...this.props.values });
    }
  }

  render() {
    const { activeLayout } = this.state;
    return (
      <Fragment>
        {activeLayout.fields.map((field) => {
          const Component = components[field.type];
          if (!Component) {
            // Do we need to warn developer that component is not found?
            return null;
          }
          const props = { values: this.props.values };
          // TODO: it looks like a hardcode. Can we move this into schema definition?
          if (field.type === 'file') {
            props.file = this.props.fileUploadUrl;
            props.csrfToken = this.props.csrfToken;
          }
          return (
            <span key={field.name}>
              <Component {...field} {...props} />
            </span>
          );
        })}
      </Fragment>
    );
  }
}

export default FieldLayout;
