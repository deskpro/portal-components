import { sanitize } from 'dompurify';
import React from 'react';
import classNames from 'classnames';
import Field from './Field';

class Display extends Field {
  renderField() {
    return <div dangerouslySetInnerHTML={{ __html: sanitize(this.props.html) }} />;
  }

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
    return (
      <label className="dp-pc_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
  };

  render() {
    return (
      <div className={classNames('dp-pc_field', this.className)}>
        {this.type !== 'hidden' ? this.renderLabel() : null}
        {this.renderDescription()}
        {this.renderField()}
      </div>
    );
  }
}

export default Display;
