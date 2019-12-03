import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import Text from './Text';
import Email from './Email';


class Person extends Field {
  constructor(props) {
    super(props);
    this.type = 'person';
  }

  renderField = () => {
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

  renderDivider = () => null;
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
