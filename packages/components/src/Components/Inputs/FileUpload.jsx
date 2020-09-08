import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropZone from 'react-dropzone';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import FileIcon from '../../assets/file-icon.svg';
import DndIcon from '../../assets/drag-and-drop.svg';
import { Progress } from '../index';

import Field from '../Field';
import AJAXSubmit from '../../utils/AJAXSubmit';
import File from '../File';

const I18N = {
  dragNDrop:   'Drag and drop',
  or:          'or',
  chooseAFile: 'Choose a file',
  chooseFiles: 'Choose files',
  remove:      'remove',
};

export class FileUploadInput extends React.Component {
  static propTypes = {
    multiple:  PropTypes.bool,
    id:        PropTypes.string,
    url:       PropTypes.string.isRequired,
    csrfToken: PropTypes.string.isRequired,
    name:      PropTypes.string.isRequired,
    label:     PropTypes.string,
    onChange:  PropTypes.func,
    i18n:      PropTypes.object,
    files:     PropTypes.array,
  };

  static defaultProps = {
    multiple: false,
    label:    '',
    id:       '',
    files:    [],
    onChange() {},
    i18n:     {},
  };

  constructor(props) {
    super(props);

    this.i18n = deepMerge(I18N, props.i18n);

    this.state = {
      files:    props.files,
      progress: -1,
      focused:  false,
      hovered:  false,
    };
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
    let { response } = e.target;
    if (typeof response === 'string') {
      response = JSON.parse(response);
    }
    const files = this.state.files.concat([response.blob]);
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

  handleKeyPress = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      this.dropZone.open();
    }
  };

  handleBlur = () => {
    this.setState({
      focused: false
    });
  };

  handleFocus = () => {
    this.setState({
      focused: true
    });
  };

  handleMouseEnter = () => {
    this.setState({
      hovered: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hovered: false
    });
  };

  handleRemove = (file) => {
    const files = this.state.files.filter(f => f.id !== file.id);
    this.setState({ files });
  };

  renderDivider = () => null;

  renderLabel = () => {
    const {
      label,
      id,
    } = this.props;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <label className="dp-pc_file-input_label" htmlFor={id}>
        {label}
      </label>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  };

  render() {
    const { multiple, name, id } = this.props;

    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    return (
      <div className={
        classNames('dp-pc_file-upload', { focused: this.state.focused, hovered: this.state.hovered })
      }
      >
        <DropZone
          onDrop={this.handleDrop}
          multiple={multiple}
          ref={(c) => { this.dropZone = c; }}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              className={classNames('dp-pc_file-upload__dropzone', { active: isDragActive })}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              {...getRootProps()}
              tabIndex={-1}
            >
              <input id={id} {...getInputProps()} />
              <div
                className="choose"
                tabIndex="0"
                onKeyPress={this.handleKeyPress}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              >
                <FileIcon />
                {multiple ? this.i18n.chooseFiles : this.i18n.chooseAFile}
              </div>
              <div className="or">{this.i18n.or}</div>
              <div className="dnd">
                <DndIcon />
                {this.i18n.dragNDrop}
              </div>
              <Progress percent={this.state.progress} />
            </div>
          )}
        </DropZone>
        <ul>
          {Array.from(this.state.files).map(file => (<File
            onRemove={this.handleRemove}
            inputName={name}
            key={`key_${file.name}`}
            i18n={this.i18n}
            file={file}
          />))}
        </ul>
      </div>
    );
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
  }
}

class FileUpload extends Field {
  renderField = form =>
    (
      <FileUploadInput
        onChange={form.setFieldValue}
        id={this.id}
        {...this.props}
      />
    )
}

FileUpload.propTypes = {
  ...Field.propTypes,
  multiple:  PropTypes.bool,
  url:       PropTypes.string.isRequired,
  csrfToken: PropTypes.string.isRequired,
};

FileUpload.defaultProps = {
  ...Field.defaultProps,
  multiple: false,
};

export default FileUpload;
