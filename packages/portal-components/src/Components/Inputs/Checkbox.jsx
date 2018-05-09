import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field as FormikField, getIn } from 'formik';
import { objectKeyFilter } from '@deskpro/js-utils/dist/objects';
import Field from '../Field';

class Checkbox extends Field {
  constructor(props) {
    super(props);
    this.type = 'checkbox';
    this.state = {
      focused: false
    };
  }

  handleKeyPress = (e, form) => {
    const { name } = this.props;
    if (e.key === ' ') {
      form.setFieldValue(name, !getIn(form.values, name));
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
    const {
      name, id, label, ...props
    } = this.props;
    /* eslint-disable jsx-a11y/label-has-for */
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    return (
      <div className={classNames('dp-pc_checkbox', { focused: this.state.focused })}>
        <FormikField
          id={id}
          type="checkbox"
          name={name}
          checked={getIn(form.values, name)}
          {...objectKeyFilter(props, Field.propTypes)}
        />
        <label
          htmlFor={this.id}
          tabIndex="0"
          className="dp-pc_checkbox__checkbox"
          onKeyPress={e => this.handleKeyPress(e, form)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <label htmlFor={id} className="dp-pc_checkbox__label">
          {label}
        </label>
      </div>
    );
    /* eslint-enable jsx-a11y/label-has-for */
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
  };

  renderLabel = () => null;
}

Checkbox.propTypes = Object.assign(Field.propTypes, {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
});

export default Checkbox;
