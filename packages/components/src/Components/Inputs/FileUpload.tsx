import * as React from 'react';
import classNames from 'classnames';
import DropZone from 'react-dropzone';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import FileIcon from '../../tsx-assets/FileIcon';
import DndIcon from '../../tsx-assets/DragAndDrop';
import Progress from '../Elements/Progress';

import Field, { FieldProps } from '../Field';
import AJAXSubmit from '../../utils/AJAXSubmit';
import File from '../File';
import type { DpBlob } from "../../types/blob";
import type { I18nType } from "../../types/i18n";

const I18N = {
  dragNDrop:     'Drag and drop',
  or:            'or',
  chooseAFile:   'Choose a file',
  chooseFiles:   'Choose files',
  remove:        'remove',
  error413:      'File too large',
  errorMaxSize:  'File too large: {max} maximum',
  generalError:  'Upload failed',
  tooLargeError: 'File too big',
  error:         'Error',
};

interface FileUploadInputProps {
  multiple: boolean;
  id: string;
  url: string;
  csrfToken: string;
  name?: string;
  label: string;
  onChange: (name: string, files: DpBlob[]) => void;
  onTransferFailed?: () => void;
  i18n: object;
  files: DpBlob[];
  maxSize: number;
  form?: {
    on: (event: string, callback: () => void) => void;
  };
}

interface FileUploadInputState {
  files: DpBlob[];
  progress: number;
  focused: boolean;
  hovered: boolean;
  error: string;
}

export class FileUploadInput extends React.Component<FileUploadInputProps, FileUploadInputState> {

  static defaultProps = {
    multiple: false,
    label:    '',
    id:       '',
    files:    [],
    onChange() {},
    i18n:     {},
    maxSize:  Infinity,
    form:     null,
  };
  private i18n: I18nType;
  private dropZone: any;

  constructor(props) {
    super(props);

    this.i18n = deepMerge(I18N, props.i18n);

    this.state = {
      files:    props.files,
      progress: -1,
      focused:  false,
      hovered:  false,
      error:    '',
    };
  }

  handleDrop = (accepted, fileRejections) => {
    let files: DpBlob[];
    files = this.state.files.filter(f =>  !f.error);
    this.setState({ files });
    if (fileRejections.length > 0) {
      const errorFiles = [];
      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          const errorFile = file.file;
          errorFile.error = err;
          errorFiles.push(errorFile);
        });
      });
      files = files.concat(errorFiles);
      this.setState({ files });
    }
    if (accepted.length > 0) {
      AJAXSubmit({
        url:              this.props.url,
        files:            accepted,
        name:             'blob',
        token:            this.props.csrfToken,
        transferComplete: this.handleTransferComplete,
        transferFailed:   this.handleTransferFailed,
        updateProgress:   this.handleUpdateProgress,
        headers:          {
          'X-CSRF-Token': this.props.csrfToken,
        }
      });
    }
  };

  componentDidMount(): void {
    if (this.props.form) {
      this.props.form.on('reset', () => {
        this.setState({
          files: []
        });
      });
    }
  }

  handleTransferComplete = (e) => {
    const { name, onChange } = this.props;
    let { response } = e.target;
    if (e.target.status === 413) {
      return this.setState({
        progress: -1,
        error:    this.i18n.error413,
      });
    }
    if (e.target.status !== 200) {
      if (response && response.error && response.error.message) {
        return this.setState({
          progress: -1,
          error:    response.error.message,
        });
      }
      if (response && response.error && response.error.code === 'size') {
        return this.setState({
          progress: -1,
          error:    this.i18n.errorMaxSize.replace(/\{max\}/, response.error.detail),
        });
      }
      return this.setState({
        progress: -1,
        error:    this.i18n.generalError,
      });
    }
    if (typeof response === 'string') {
      response = JSON.parse(response);
    }
    const files = this.state.files.concat([response.blob]);
    this.setState({ files });
    onChange(name, files);
    return this.setState({ progress: -1 });
  };

  handleTransferFailed = () => {
    if (this.props.onTransferFailed) {
      this.props.onTransferFailed();
    } else {
      this.setState({
        progress: -1,
        error:    this.i18n.generalError,
      });
    }
  };

  handleUpdateProgress = (e) => {
    if (e.lengthComputable) {
      const percentComplete = e.loaded / e.total * 100;
      this.setState({ progress: percentComplete, error: '' });
    } else {
      this.setState({ progress: -1, error: '' });
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
    return (
      <label className="dp-pc_file-input_label" htmlFor={id}>
        {label}
      </label>
    );
  };

  render() {
    const {
      multiple, name, id, maxSize
    } = this.props;

    return (
      <div className={
        classNames('dp-pc_file-upload', {
          focused: this.state.focused,
          hovered: this.state.hovered,
          error:   this.state.error
        })
      }
      >
        <DropZone
          onDrop={this.handleDrop}
          multiple={multiple}
          maxSize={maxSize}
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
                tabIndex={0}
                onKeyDown={this.handleKeyPress}
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
        {this.state.error && <span className="dp-pc_file-upload__error">{this.state.error}</span>}
        <ul className="dp-pc_file-upload__attached">
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
  }
}

interface FileUploadProps extends FieldProps {
  multiple?: boolean;
  url:       string;
  csrfToken: string;
}

class FileUpload extends Field<FileUploadProps> {
  static defaultProps = {
    ...Field.defaultProps,
    multiple: false,
  }

  renderField = ({ form }) =>
    (
      <FileUploadInput
        onChange={form.setFieldValue}
        id={this.id}
        {...this.props}
      />
    )
}

export default FileUpload;
