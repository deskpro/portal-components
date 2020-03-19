import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import { Progress } from '../index';
import DropzoneImage from '../assets/dropzone-image.svg';

const I18N = {
  uploading:       'Uploading',
  dragAndDropHere: 'Drag and drop file here',
};

class DropArea extends PureComponent {
  static propTypes = {
    progress:     PropTypes.number,
    isDragActive: PropTypes.bool.isRequired,
    i18n:         PropTypes.object,
  };

  static defaultProps = {
    progress: -1,
    i18n:     {},
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

  render() {
    const {
      isDragActive,
      progress
    } = this.props;

    return (
      <Fragment>
        <div
          className="dp-pc_full-dnd__droparea"
          style={{
            display: isDragActive || progress !== -1 ? 'block' : 'none'
          }}
        >
          {progress < 0 ? this.renderDrop() : this.renderProgress()}
        </div>
      </Fragment>
    );
  }
}

export default DropArea;
