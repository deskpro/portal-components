import * as React from 'react';
import classNames from 'classnames';
import AutosizeTextarea from 'react-textarea-autosize';
import { getIn } from 'formik';
import Field from '../Field';

class Textarea extends Field {
  constructor(props) {
    super(props);
    this.type = 'textarea';
  }

  renderField = ({ form }) => {
    const {
      name,
      className,
      required
    } = this.props;

    return (
      <AutosizeTextarea
        id={this.id}
        name={name}
        component="textarea"
        className={classNames('dp-pc_input', className)}
        onChange={e => form.setFieldValue(name, e.target.value)}
        onBlur={() => form.setFieldTouched(name, true)}
        value={getIn(form.values, name)}
        required={required}
      />
    );
  };
}

export default Textarea;
