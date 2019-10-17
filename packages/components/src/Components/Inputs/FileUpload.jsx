import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropZone from 'react-dropzone';
import { formatFileSize } from '@deskpro/js-utils/dist/numbers';
import FileIcon from '../../assets/file-icon.svg';
import DndIcon from '../../assets/drag-and-drop.svg';
import DeleteIcon from '../../assets/delete.svg';
import { Progress } from '../index';

import Field from '../Field';

if (!XMLHttpRequest.prototype.sendAsBinary) {
  // eslint-disable-next-line func-names
  XMLHttpRequest.prototype.sendAsBinary = function (sData) {
    const nBytes = sData.length;
    const ui8Data = new Uint8Array(nBytes);
    for (let nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff; // eslint-disable-line  no-bitwise
    }
    /* send as ArrayBufferView...: */
    this.send(ui8Data);
    /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
  };
}

// eslint-disable-next-line func-names
const AJAXSubmit = (function () {
  function submitData(oData, config) {
    /* the AJAX request... */
    const oAjaxReq = new XMLHttpRequest();
    oAjaxReq.submittedData = oData;

    if (config.updateProgress) {
      oAjaxReq.addEventListener('progress', config.updateProgress);
    }
    if (config.transferComplete) {
      oAjaxReq.addEventListener('load', config.transferComplete);
    }
    if (config.transferFailed) {
      oAjaxReq.addEventListener('error', config.transferFailed);
    }
    if (config.transferCanceled) {
      oAjaxReq.addEventListener('abort', config.transferCanceled);
    }

    oAjaxReq.withCredentials = true;
    /* method is POST */
    oAjaxReq.responseType = 'json';
    oAjaxReq.open('post', oData.receiver, true);
    /* enctype is multipart/form-data */
    const sBoundary = `---------------------------${Date.now().toString(16)}`;
    oAjaxReq.setRequestHeader('Content-Type', `multipart/form-data; boundary=${sBoundary}`);
    oAjaxReq.sendAsBinary(`--${sBoundary}\r\n${
      oData.segments.join(`--${sBoundary}\r\n`)}--${sBoundary}--\r\n`);
  }

  function processStatus(oData, config = {}) {
    if (oData.status > 0) { return; }
    /* the form is now totally serialized! do something before sending it to the server... */
    // /* doSomething(oData); */
    // /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
    submitData(oData, config);
  }

  function pushSegment(oFREvt) {
    this.owner.segments[this.segmentIdx] += `${oFREvt.target.result}\r\n`;
    this.owner.status = this.owner.status - 1;
    processStatus(this.owner, this.config);
  }

  function SubmitRequest(config) {
    this.receiver = config.url;
    this.status = 0;
    this.segments = [];
    for (let nFile = 0; nFile < config.files.length; nFile++) {
      const oFile = config.files[nFile];
      const oSegmReq = new FileReader();
      /* (custom properties:) */
      oSegmReq.segmentIdx = this.segments.length;
      oSegmReq.owner = this;
      oSegmReq.config = config;
      /* (end of custom properties) */
      oSegmReq.onload = pushSegment;
      this.segments.push(`Content-Disposition: form-data; name="file[${
        config.name}]"; filename="${oFile.name}"\r\nContent-Type: ${oFile.type}\r\n\r\n`);
      this.status = this.status + 1;
      oSegmReq.readAsBinaryString(oFile);
    }
    this.segments.push(`Content-Disposition: form-data; name="file[_dp_csrf_token]"\r\n\r\n${config.token}\r\n`);
    processStatus(this, config);
  }

  // eslint-disable-next-line func-names
  return function (config) {
    if (!config.url) { return; }
    this.req = new SubmitRequest(config);
  };
}());

class File extends React.Component {
  static propTypes = {
    inputName: PropTypes.string.isRequired,
    file:      PropTypes.object.isRequired
  };

  renderRemove = () => (
    <span className="dp-pc_file-upload_remove-file">
      <DeleteIcon /> remove
    </span>
  );

  renderSize = () => {
    const { file } = this.props;
    if (typeof file.size === 'string') {
      return `(${file.size})`;
    } else if (typeof file.size === 'number') {
      return `(${formatFileSize(file.size)})`;
    }
    return null;
  };

  render() {
    const { file, inputName } = this.props;
    const formName = `${inputName}[${file.id}][blob_auth]`;

    return (
      <li>
        {file.filename} {this.renderSize()} {this.renderRemove()}
        <input type="hidden" name={formName} value={file.authcode} />
      </li>
    );
  }
}

export class FileUploadInput extends React.Component {
  static propTypes = {
    multiple:  PropTypes.bool,
    id:        PropTypes.string,
    url:       PropTypes.string.isRequired,
    csrfToken: PropTypes.string.isRequired,
    name:      PropTypes.string.isRequired,
    label:     PropTypes.string,
    onChange:  PropTypes.func,
  };

  static defaultProps = {
    multiple: false,
    label:    '',
    id:       '',
    onChange() {},
  };

  constructor(props) {
    super(props);
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
          {({ getRootProps, getInputProps }) => (
            <div
              className="dp-pc_file-upload__dropzone"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              {...getRootProps()}
            >
              <input id={id} name={name} {...getInputProps()} />
              <div
                className="choose"
                tabIndex="0"
                onKeyPress={this.handleKeyPress}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              >
                <FileIcon />
                Choose {multiple ? 'files' : 'a file'}
              </div>
              <div className="or">or</div>
              <div className="dnd">
                <DndIcon />
                Drag and drop
              </div>
            </div>
          )}
        </DropZone>
        <Progress progress={this.state.progress} />
        <ul>
          {Array.from(this.state.files).map(file => <File inputName={name} key={file.name} file={file} />)}
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
