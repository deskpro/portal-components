import * as React from 'react';
import ReactSelect from 'react-select';
import classNames from 'classnames';
import { AsYouType, CountryCode } from 'libphonenumber-js';
import Field, { FieldProps, FieldState } from '../Field';
import { SelectContainer } from '../Choices/DropDown';

interface TelProps extends FieldProps {
  excludeCountries:   string[];
  onlyCountries:      string[];
  preferredCountries: string[];
  withIndicator:      boolean;
  placeholder:        string;
}

interface TelState extends FieldState {
  country: CountryCode;
  indicator: string;
  nationalNumber: string;
}

class Tel extends Field<TelProps, TelState> {
  static defaultProps = {
    ...Field.defaultProps,
    excludeCountries:   [],
    onlyCountries:      [],
    preferredCountries: ['us', 'gb'],
    withIndicator:      false,
    placeholder:        '1234 123456',
  };

  constructor(props) {
    super(props);
    this.type = 'tel';
  }

  renderField = ({ form }) => {
    return super.renderField(form);
  }
}

export default Tel;
