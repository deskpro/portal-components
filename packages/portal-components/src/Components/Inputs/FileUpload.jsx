import React from 'react';
import PropTypes from 'prop-types';
import DropZone from 'react-dropzone';
import SVGInline from 'react-svg-inline';
import { formatFileSize } from '@deskpro/js-utils/dist/numbers';
import fileIcon from 'assets/file-icon.svg';
import dndIcon from 'assets/drag-and-drop.svg';
import deleteIcon from 'assets/delete.svg';
import { Progress } from '../index';

import Field from '../Field';

if (!XMLHttpRequest.prototype.sendAsBinary) {
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

  return function (config) {
    if (!config.url) { return; }
    this.req = new SubmitRequest(config);
  };
}());

class File extends React.Component {
  static propTypes = {
    file: PropTypes.object.isRequired
  };

  renderRemove = () => (
    <span className="dp-pc_file-upload_remove-file">
      <SVGInline svg={deleteIcon} /> remove
    </span>
  );

  renderSize = () => {
    const { file } = this.props;
    if (file.size) {
      return `(${formatFileSize(file.size)})`;
    }
    return null;
  };

  render() {
    const { file } = this.props;
    return (
      <li>{file.name} {this.renderSize()} {this.renderRemove()}</li>
    );
  }
}

class FileUpload extends Field {
  constructor(props) {
    super(props);
    this.state = {
      files:    [],
      progress: -1,
    };
  }

  handleDrop = (accepted) => {
    this.setState({ files: accepted });
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
    const { name } = this.props;
    this.setFieldValue(name,  e.target.response.blob.id);
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

  renderLabel = () => {
    const {
      label,
    } = this.props;
    const htmlFor = this.id;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <label className="dp-pc_file-input_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  };

  renderIndicator = () => null;

  renderField = (form) => {
    const { multiple } = this.props;
    this.setFieldValue = form.setFieldValue;
    this.setFieldTouched = form.setFieldTouched;

    return (
      <div className="dp-pc_file-upload">
        <DropZone
          onDrop={this.handleDrop}
          multiple={multiple}
          className="dp-pc_file-upload__dropzone"
          inputProps={{
            id: this.id
          }}
        >
          <div className="choose">
            <SVGInline svg={fileIcon} />
            Choose {multiple ? 'files' : 'a file'}
          </div>
          <div className="or">or</div>
          <div className="dnd">
            <SVGInline svg={dndIcon} />
            Drag and drop
          </div>
        </DropZone>
        <Progress progress={this.state.progress} />
        <ul>
          {Array.from(this.state.files).map(file => <File key={file.name} file={file} />)}
        </ul>
      </div>
    );
  }
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
