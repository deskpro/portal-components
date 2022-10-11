import * as React from 'react';
import { PureComponent } from 'react';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import Progress from '../Components/Elements/Progress';
import DropzoneImage from '../tsx-assets/DropzoneImage';
import ExclamationTriangle from '../tsx-assets/ExclamationTriangle';
import type { Error } from '../types/error';
import type { I18nType } from "../types/i18n";

const I18N = {
  uploading:       'Uploading',
  dragAndDropHere: 'Drag and drop file here',
  ok:              'OK',
};

interface DropAreaProps {
  progress?:    number;
  isDragActive: boolean;
  i18n:         I18nType
  error:        Error;
  clearError:   () => void;
}

class DropArea extends PureComponent<DropAreaProps> {
  static defaultProps = {
    progress: -1,
    i18n:     {},
    clearError() {},
    error:    null,
  };
  private i18n: I18nType;

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
      <div
        className="dp-pc_full-dnd__droparea"
        style={{
          display: isDragActive || progress !== -1 || error !== null ? 'block' : 'none'
        }}
      >
        {content}
      </div>
    );
  }
}

export default DropArea;
