import React from 'react';
import PropTypes from 'prop-types';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import Field from '../Field';
import Text from './Text';
import Email from './Email';

const I18N = {
  name:  'Name',
  email: 'Email'
};

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.i18n = deepMerge(I18N, props.i18n);
  }

  render() {
    const {
      name,
      namePlaceholder,
      emailPlaceholder,
      isDisabled,
    } = this.props;

    const emailProps = {
      key:         'person_email',
      name:        `${name}.email.email`,
      label:       this.i18n.email,
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
        label={this.i18n.name}
        placeholder={namePlaceholder}
      />,
      <Email {...emailProps} />
    ];
  }
}

Person.propTypes = {
  ...Field.propTypes,
  namePlaceholder:  PropTypes.string,
  emailPlaceholder: PropTypes.string,
  i18n:             PropTypes.object,
};

Person.defaultProps = {
  ...Field.defaultProps,
  namePlaceholder:  'John Doe',
  emailPlaceholder: 'john.doe@company.com',
  i18n:             {}
};

export default Person;
