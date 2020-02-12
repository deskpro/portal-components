import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import Text from './Text';
import Email from './Email';


class Person extends React.Component {
  render() {
    const {
      name,
      namePlaceholder,
      emailPlaceholder,
      isDisabled,
    } = this.props;

    const emailProps = {
      key:         'person_email',
      name:        `${name}.email`,
      label:       'Email',
      errorsName:  name,
      placeholder: emailPlaceholder,
    };

    if (isDisabled) {
      emailProps.disabled = 'disabled';
      emailProps.className = 'disabled';
    }

    return [
      <Text
        key="person_name"
        name={`${name}.name`}
        label="Name"
        placeholder={namePlaceholder}
        errorsName={name}
      />,
      <Email {...emailProps} />
    ];
  }
}

Person.propTypes = {
  ...Field.propTypes,
  namePlaceholder:  PropTypes.string,
  emailPlaceholder: PropTypes.string,
};

Person.defaultProps = {
  ...Field.defaultProps,
  namePlaceholder:  'John Doe',
  emailPlaceholder: 'john.doe@company.com',
};

export default Person;
