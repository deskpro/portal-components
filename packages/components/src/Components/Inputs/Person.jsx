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
    } = this.props;

    return [
      <Text
        key="person_name"
        name={`${name}.user_name`}
        label="Name"
        placeholder={namePlaceholder}
      />,
      <Email
        key="person_email"
        name={`${name}.user_email`}
        label="Email"
        placeholder={emailPlaceholder}
      />
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