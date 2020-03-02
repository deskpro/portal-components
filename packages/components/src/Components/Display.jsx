import React from 'react';
import classNames from 'classnames';
import Field from './Field';

class Display extends Field {
  /* eslint-disable class-methods-use-this */
  renderField() {
    return null;
  }
  /* eslint-disable class-methods-use-this */

  renderDescription = () => {
    const { description } = this.props;

    if (description) {
      return <span className="dp-pc_description">{description}</span>;
    }
    return null;
  };

  renderLabel = () => {
    const { label } = this.props;
    const htmlFor = this.id;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <label className="dp-pc_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  };

  render() {
    return (
      <div className={classNames('dp-pc_field', this.className)}>
        {this.type !== 'hidden' ? this.renderLabel() : null}
        {this.renderField()}
        {this.renderDescription()}
      </div>
    );
  }
}

export default Display;
