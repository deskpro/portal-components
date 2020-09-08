import React from 'react';
import PropTypes from 'prop-types';
import { formatFileSize } from '@deskpro/js-utils/dist/numbers';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import DeleteIcon from '../assets/delete.svg';

const I18N = {
  remove: 'remove'
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


  renderRemove = () => (
    <span className="dp-pc_file-upload_remove-file" onClick={this.onClickRemove} onKeyDown={this.onHandleKeyDown}>
      <DeleteIcon /> {this.i18n.remove}
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

export default File;
