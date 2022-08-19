import * as React from 'react';
import { Fragment, PureComponent } from 'react';
import DropZone, { DropzoneRef } from 'react-dropzone';
import classNames from 'classnames';
import { Layout } from '../layouts/Layout';

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
import { DpBlob } from "../types/blob";

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

interface IProps {
  layouts:  LayoutConfig;
  values:   object;
  fileUploadUrl: string;
  csrfToken: string;
  resetForm: (arg: any) => void;
  name: string;
  url: string;
  onChange: (name: string, files: DpBlob[]) => void;
}

interface IState {
  progress:     number;
  activeLayout: Layout;
  files:        DpBlob[];
}

class FieldLayout extends PureComponent<IProps, IState> {
  private dropZone: DropzoneRef;

  static getDerivedStateFromProps({ layouts, values }, { activeLayout }) {
    const newLayout = layouts.getMatchingLayout(values);
    if (newLayout !== activeLayout) {
      return { activeLayout: newLayout };
    }
    return null;
  }

  componentDidUpdate(_, { activeLayout }) {
    // Reset form with new defaults when the layout is changed.
    if (activeLayout !== this.state.activeLayout && this.state.activeLayout) {
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
          const props: Record<string, unknown> = { values: this.props.values };
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
