import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropZone from 'react-dropzone';
import classNames from 'classnames';

import FullDragDrop from './Inputs/FullDragDrop';
import Text from './Inputs/Text';
import Textarea from './Inputs/Textarea';
import DatePicker from './Inputs/DatePicker';
import DateTimePicker from './Inputs/DateTimePicker';
import Checkboxes from './Choices/Checkboxes';
import DropDown from './Choices/DropDown';
import MultipleDropDown from './Choices/MultipleDropDown';
import Radio from './Choices/Radio';
import DropArea from './DropArea';
import { LayoutConfig } from '../layouts/Layout';
import AJAXSubmit from '../utils/AJAXSubmit';

const components = {
  file:        FullDragDrop,
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

  state = {
    activeLayout: null,
    files:        [],
  };

  componentDidUpdate(_, { activeLayout }) {
    // Reset form with new defaults when the layout is changed.
    if (activeLayout !== this.state.activeLayout) {
      const defaults = this.state.activeLayout.getDefaultValues();
      this.props.resetForm({ ...defaults, ...this.props.values });
    }
  }

  handleDrop = (accepted) => {
    AJAXSubmit({
      url:              this.props.url,
      files:            accepted,
      name:             'blob',
      token:            this.props.csrfToken,
      transferComplete: this.handleTransferComplete,
      transferFailed:   this.handleTransferFailed,
      updateProgress:   this.handleUpdateProgress,
    });
  };

  handleTransferComplete = (e) => {
    const { name, onChange } = this.props;
    const files = this.state.files.concat([e.target.response.blob]);
    this.setState({ files });
    onChange(name, files);
    this.setState({ progress: -1 });
  };

  handleTransferFailed = () => {
    this.setState({ progress: -1 });
  };

  handleUpdateProgress = (e) => {
    if (e.lengthComputable) {
      const percentComplete = e.loaded / e.total * 100;
      this.setState({ progress: percentComplete });
    } else {
      this.setState({ progress: -1 });
    }
  };

  handleRemove = (file) => {
    const files = this.state.files.filter(f => f.id !== file.id);
    this.setState({ files });
  };

  renderLayout = (fileInputProps = {}) => {
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
            props.inputProps = fileInputProps;
            props.files = this.state.files;
            props.handleRemove = this.handleRemove;
          }
          return (
            <span key={field.name}>
              <Component {...field} {...props} />
            </span>
          );
        })}
      </Fragment>
    );
  };

  render() {
    const { activeLayout, progress } = this.state;
    if (activeLayout.fields.find(f => f.type === 'file')) {
      return (
        <DropZone
          onDrop={this.handleDrop}
          noClick
          noKeyboard
          multiple
          ref={(c) => { this.dropZone = c; }}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              className={classNames('dp-pc_full-dnd__dropzone', { active: isDragActive })}
              {...getRootProps()}
            >
              <DropArea
                isDragActive={isDragActive}
                progress={progress}
                {...getInputProps()}
              />
              {this.renderLayout(getInputProps())}
            </div>
          )}
        </DropZone>
      );
    }
    return this.renderLayout();
  }
}

export default FieldLayout;
