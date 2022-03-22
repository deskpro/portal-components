import DOMPurify from 'dompurify/dist/purify.es';
import * as React from 'react';
import classNames from 'classnames';
import Field, { FieldProps } from './Field';

interface DisplayProps extends FieldProps {
  html: string;
}

class Display extends Field<DisplayProps> {
  renderField() {
    return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.html) }} />;
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
