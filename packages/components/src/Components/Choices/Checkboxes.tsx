import * as React from 'react';
import classNames from 'classnames';
import { FieldArray, getIn } from 'formik';
import Field, { FieldProps, FieldState } from '../Field';

interface CheckboxesProps extends FieldProps {
  options: {
    label: string | React.ReactElement;
    value: any;
  }[];
}

interface CheckboxesState extends FieldState {
  focused: boolean;
}

class Checkboxes extends Field<CheckboxesProps, CheckboxesState> {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  handleKeyPress = (e, form, arrayHelpers, value) => {
    const { name } = this.props;
    if (e.key === ' ') {
      e.preventDefault();
      if (!form.values[name].includes(value)) {
        arrayHelpers.push(value);
      } else {
        const idx = getIn(form.values, name).indexOf(value);
        arrayHelpers.remove(idx);
      }
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

  onChange = (e, form, name, value, arrayHelpers) => {
    e.preventDefault();
    const idx = getIn(form.values, name).indexOf(value);
    if (idx === -1) {
      arrayHelpers.push(value);
    } else {
      arrayHelpers.remove(idx);
    }
  };

  renderLabel = () => {
    const {
      label,
    } = this.props;
    const htmlFor = this.id;
    return (
      <label className="dp-pc_checkboxes_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
  };

  renderDescription = () => {
    const { description } = this.props;

    if (description) {
      return <span className="dp-pc_description dp-pc_checkboxes_description">{description}</span>;
    }
    return null;
  }

  renderField = ({ form }) => {
    const {
      name, label, options, className, fClassName, errorsName, i18n, ...props
    } = this.props;
    return (
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <div
            className={classNames('dp-pc_checkboxes', { focused: this.state.focused }, className)}
            {...props}
          >
            {options.map(option => (
              <label
                key={option.value}
                htmlFor={`${this.id}-${option.value}`}
                tabIndex={0}
                className="dp-pc_checkboxes_checkbox"
                onKeyPress={e => this.handleKeyPress(e, form, arrayHelpers, option.value)}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onClick={(e) => { this.onChange(e, form, name, option.value, arrayHelpers); }}
              >
                <input
                  id={`${this.id}-${option.value}`}
                  name={name}
                  type="checkbox"
                  value={option.value}
                  checked={!!form.values[name] && form.values[name].includes(option.value)}
                  onChange={(e) => { this.onChange(e, form, name, option.value, arrayHelpers); }}
                />
                <i onClick={(e) => { this.onChange(e, form, name, option.value, arrayHelpers); }} />
                {' '}
                <span className="label">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        )}
      />
    );
  }
}

export default Checkboxes;
