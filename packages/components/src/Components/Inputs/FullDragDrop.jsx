import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import AttachIcon from '../../assets/attach.svg';

import Field from '../Field';
import File from '../File';

const I18N = {
  addAttachment: 'Add attachment',
  or:            'or',
  dragNDrop:     'Drag & drop',
};

export class FullDragDropInput extends React.Component {
  static propTypes = {
    multiple:     PropTypes.bool,
    id:           PropTypes.string,
    url:          PropTypes.string.isRequired,
    csrfToken:    PropTypes.string.isRequired,
    name:         PropTypes.string.isRequired,
    label:        PropTypes.string,
    onChange:     PropTypes.func,
    handleRemove: PropTypes.func,
    i18n:         PropTypes.object,
    inputProps:   PropTypes.object,
    files:        PropTypes.array,
  };

  static defaultProps = {
    multiple:   true,
    label:      '',
    id:         'file-input',
    files:      [],
    onChange() {},
    handleRemove() {},
    i18n:       {},
    inputProps: {},
  };

  constructor(props) {
    super(props);

    this.i18n = deepMerge(I18N, props.i18n);

    this.state = {
      focused: false,
      hovered: false,
    };
  }

  handleRemove = (file) => {
    this.props.handleRemove(file);
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
    const { name, inputProps } = this.props;

    let id = this.props;
    if (!id) {
      id = 'file-input';
    }

    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    return (
      <div className={
        classNames('dp-pc_file-upload', { focused: this.state.focused, hovered: this.state.hovered })
      }
      >
        <input id={id} style={{ display: 'none' }} {...inputProps} />
        <div className="dp-pc_file-full-dnd">
          <label htmlFor={id} className="dnd">
            <AttachIcon />
            {this.i18n.addAttachment}
          </label>&nbsp;
          <span className="or">{this.i18n.or}</span>&nbsp;
          <span className="dnd">
            {this.i18n.dragNDrop}
          </span>
        </div>
        <ul>
          {Array.from(this.props.files).map(file => (<File
            onRemove={this.handleRemove}
            inputName={name}
            key={`key_${file.name}`}
            file={file}
          />))}
        </ul>
      </div>
    );
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
  }
}

class FullDragDrop extends Field {
  renderLabel = () => null;

  renderField = form =>
    (
      <FullDragDropInput
        onChange={form.setFieldValue}
        id={this.id}
        {...this.props}
      />
    )
}

FullDragDrop.propTypes = {
  ...Field.propTypes,
};

FullDragDrop.defaultProps = {
  ...Field.defaultProps,
};

export default FullDragDrop;
