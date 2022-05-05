import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatFileSize } from '@deskpro/js-utils/dist/numbers';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import DeleteIcon from '../assets/delete.svg';

const I18N = {
  remove:        'remove',
  tooLargeError: 'File too big',
  error:         'Error',
};

class File extends React.Component {
  static propTypes = {
    inputName: PropTypes.string.isRequired,
    onRemove:  PropTypes.func.isRequired,
    i18n:      PropTypes.object,
    file:      PropTypes.object.isRequired
  };

  static defaultProps = {
    i18n: {},
  };

  constructor(props) {
    super(props);

    this.i18n = deepMerge(I18N, props.i18n);
  }

  onClickRemove = () => {
    this.props.onRemove(this.props.file);
  };

  onHandleKeyDown = (ev) => {
    if (ev.ctrlKey && ev.altKey && ev.keyCode === 68) {
      this.props.onRemove(this.props.file);
    }
  };


  renderRemove = () => {
    if (this.props.file.error) {
      return null;
    }
    return (
      <span className="dp-pc_file-upload_remove-file" onClick={this.onClickRemove} onKeyDown={this.onHandleKeyDown}>
        <DeleteIcon /> {this.i18n.remove}
      </span>
    );
  }

  renderError = () => {
    const { file } = this.props;
    if (!file.error) {
      return null;
    }
    let error;
    switch (file.error.code) {
      case 'file-too-large':
        error = this.i18n.tooLargeError;
        break;
      default:
        // eslint-disable-next-line prefer-destructuring
        error = file.error.message ? file.error.message : this.i18n.error;
    }
    return (
      <span className="dp-pc_file-upload__file-error">{error}</span>
    );
  }

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
      <li className={classNames({ error: file.error })}>
        {file.filename || file.name} {this.renderSize()} {this.renderRemove()}
        {file.error ? '' : <input type="hidden" name={formName} value={file.authcode} />}
        {this.renderError()}
      </li>
    );
  }
}

export default File;
