import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import { Progress } from '../index';
import DropzoneImage from '../assets/dropzone-image.svg';
import ExclamationTriangle from '../assets/exclamation-triangle.svg';

const I18N = {
  uploading:       'Uploading',
  dragAndDropHere: 'Drag and drop file here',
  ok:              'OK',
};

class DropArea extends PureComponent {
  static propTypes = {
    progress:     PropTypes.number,
    isDragActive: PropTypes.bool.isRequired,
    i18n:         PropTypes.object,
    error:        PropTypes.object,
    clearError:   PropTypes.func,
  };

  static defaultProps = {
    progress: -1,
    i18n:     {},
    clearError() {},
    error:    null,
  };

  constructor(props) {
    super(props);

    this.i18n = deepMerge(I18N, props.i18n);
  }

  renderDrop = () => (
    <div>
      <DropzoneImage />
      <p>
        {this.i18n.dragAndDropHere}
      </p>
    </div>
  );

  renderProgress = () => {
    const { progress } = this.props;
    return (
      <div>
        {progress > 0 ? <span>{Math.round(progress)} %</span> : null}
        <Progress percent={progress} />
        <p>{this.i18n.uploading}...</p>
      </div>
    );
  };

  renderError = () => {
    const { error, clearError } = this.props;
    return (
      <div className="dp-pc_full-dnd__droparea_error">
        <ExclamationTriangle />
        <p>{error.message}</p>
        <button className="dpmsg-Button Button-large Button--danger" onClick={clearError}>
          {this.i18n.ok}
        </button>
      </div>
    );
  }

  render() {
    const {
      isDragActive,
      progress,
      error
    } = this.props;

    let content;
    if (error !== null) {
      content = this.renderError();
    } else if (progress < 0) {
      content = this.renderDrop();
    } else {
      content = this.renderProgress();
    }
    return (
      <Fragment>
        <div
          className="dp-pc_full-dnd__droparea"
          style={{
            display: isDragActive || progress !== -1 || error !== null ? 'block' : 'none'
          }}
        >
          {content}
        </div>
      </Fragment>
    );
  }
}

export default DropArea;
