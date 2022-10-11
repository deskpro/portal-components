import * as React from 'react';
import classNames from 'classnames';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import AttachIcon from '../../tsx-assets/Attach';

import Field, { FieldProps } from '../Field';
import File from '../File';
import type { DpBlob } from "../../types/blob";
import type { I18nType } from "../../types/i18n";

const I18N = {
  addAttachment: 'Add attachment',
  or:            'or',
  dragNDrop:     'Drag & drop',
};

interface FullDragDropInputProps {
  multiple:     boolean;
  id:           string;
  url?:         string;
  csrfToken:    string;
  name?:        string;
  label:        string;
  onChange:     (value: any) => void;
  handleRemove: (file: DpBlob) => void;
  i18n:         object;
  inputProps:   object;
  files:        DpBlob[];
}

interface FullDragDropInputState {
  focused: boolean;
  hovered: boolean;
}

export class FullDragDropInput extends React.Component<FullDragDropInputProps, FullDragDropInputState> {
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
  private i18n: I18nType;

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
    return (
      <label className="dp-pc_file-input_label" htmlFor={id}>
        {label}
      </label>
    );
  };

  render() {
    const { name, inputProps } = this.props;

    let { id } = this.props;
    if (!id) {
      id = 'file-input';
    }

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
            key={`key_${file.filename}`}
            file={file}
            i18n={this.i18n}
          />))}
        </ul>
      </div>
    );
  }
}

interface FullDragDropProps extends FieldProps {
  url:          string;
  csrfToken:    string;
  inputProps:   object;
  files:        DpBlob[];
  handleRemove: (file: DpBlob) => void;
}

class FullDragDrop extends Field<FullDragDropProps> {
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

export default FullDragDrop;
