import * as React from 'react';
import classNames from 'classnames';
import { getIn } from 'formik';

import Field, { FieldProps } from '../Field';

interface LikertScaleProps extends FieldProps {
  labels: string[];
}

class LikertScale extends Field<LikertScaleProps> {
  static defaultProps = {
    ...Field.defaultProps,
    labels: [
      'Strongly agree',
      'Agree',
      'Neutral',
      'Disagree',
      'Strongly disagree',
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  handleKeyPress = (e, form, value) => {
    const { name } = this.props;
    if (e.key === ' ') {
      e.preventDefault();
      form.setFieldValue(name, value);
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

  renderField = (form) => {
    const { name, labels } = this.props;
    const inputs = [];
    const htmlId = this.id;
    const value = getIn(form.values, name);
    for (let i = 5; i > 0; i--) {
      inputs.push(<label
        key={i}
        htmlFor={`${htmlId}-${i}`}
        tabIndex={0}
        className="dp-pc_likert_input"
        onKeyPress={e => this.handleKeyPress(e, form, i)}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <input
          id={`${htmlId}-${i}`}
          name={name}
          type="radio"
          value={i}
          hidden
          checked={parseInt(value, 10) === i}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <label
          className="dp-pc_likert_number"
          htmlFor={`${htmlId}-${i}`}
        >
          {i}
        </label>
        <label
          className="dp-pc_likert_label"
          htmlFor={`${htmlId}-${i}`}
        >
          {labels[i - 1]}
        </label>
      </label>);
    }
    return (
      <div
        className={classNames('dp-pc_likert', { focused: this.state.focused })}
      >
        {inputs}
      </div>
    );
  }
}

export default LikertScale;
