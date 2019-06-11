import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getIn } from 'formik';

import Field from '../Field';

class LikertScale extends Field {
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
    /* eslint-disable react/jsx-closing-tag-location */
    /* eslint-disable jsx-a11y/label-has-for */
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    for (let i = 5; i > 0; i--) {
      inputs.push(<label
        key={i}
        htmlFor={`${htmlId}-${i}`}
        tabIndex="0"
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
    /* eslint-enable react/jsx-closing-tag-location */
    /* eslint-enable jsx-a11y/label-has-for */
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
    return (
      <div
        className={classNames('dp-pc_likert', { focused: this.state.focused })}
      >
        {inputs}
      </div>
    );
  }
}

LikertScale.propTypes = {
  ...Field.propTypes,
  labels: PropTypes.arrayOf(PropTypes.string)
};

LikertScale.defaultProps = {
  labels: [
    'Strongly agree',
    'Agree',
    'Neutral',
    'Disagree',
    'Strongly disagree',
  ]
};

export default LikertScale;
