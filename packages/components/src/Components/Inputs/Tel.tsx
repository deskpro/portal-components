import * as React from 'react';
import ReactSelect from 'react-select';
import worldCountries from 'world-countries/dist/countries.json';
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
  private countries;

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
    if (props.withIndicator) {
      this.className = 'dp-pc_field--tel';
      this.state = {
        country:        null,
        indicator:      '',
        nationalNumber: '',
      };
    }
  }

  handleIndicator = (value) => {
    this.setState({
      country:   value.country,
      indicator: value.value
    });
  };

  handleNationalNumber = (e) => {
    const formatted = new AsYouType(this.state.country).input(`+${this.state.indicator}${e.target.value}`);
    const regex = new RegExp(`^\\+${this.state.indicator}\\s*`);
    const nationalNumber = formatted.replace(regex, '');
    this.setState({
      nationalNumber
    });
  };

  static filterIndicator(value, filter) {
    const nameRegex = new RegExp(filter, 'i');
    return value.data.countryName.match(nameRegex) || value.data.value.match(filter);
  }

  loadCountries = () => {
    const { onlyCountries, excludeCountries } = this.props;
    if (!this.countries) {
      this.countries = [];
      Array.from(worldCountries)
        .filter((country) => {
          if (onlyCountries.length) {
            return onlyCountries.includes(country.cca2);
          }
          if (excludeCountries.length) {
            return !excludeCountries.includes(country.cca2);
          }
          return true;
        })
        .forEach((country) => {
          country.idd.suffixes.forEach((code) => {
            this.countries.push({
              value:   code,
              country: country.cca2,
              label:   (
                <span>(+{code})
                  <span className="react-select__description">
                    {country.flag} {country.name.common}
                  </span>
                </span>),
              countryName: country.name.common
            });
          });
        });
    }
    return this.countries;
  };

  renderField = ({ form }) => {
    const {
      name,
      className,
      placeholder,
    } = this.props;
    if (!this.props.withIndicator) {
      return super.renderField(form);
    }
    return <>
      <ReactSelect
        key="indicator"
        value={
          this.loadCountries().find(indicator =>
            indicator.country === this.state.country
            && indicator.value === this.state.indicator)}
        name={name}
        isClearable={false}
        filterOption={Tel.filterIndicator}
        components={{ SelectContainer }}
        onChange={this.handleIndicator}
        onBlur={() => form.setFieldTouched(name, true)}
        options={this.loadCountries()}
        classNamePrefix="react-select"
        placeholder="(1234)"
      />,
      <input
        key="national_number"
        type="tel"
        value={this.state.nationalNumber}
        onChange={this.handleNationalNumber}
        placeholder={placeholder}
        className={classNames('dp-pc_input', className)}
      />
    </>;
  }
}

export default Tel;
