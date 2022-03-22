import * as React from 'react';
import { useMemo } from 'react';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import { FieldProps } from '../Field';
import Text from './Text';
import Email from './Email';

const I18N = {
  name:  'Name',
  email: 'Email'
};

interface PersonProps extends FieldProps {
  namePlaceholder:  string;
  emailPlaceholder: string;
  required:         boolean;
  isDisabled:       boolean;
}

const Person = ({
  name,
  namePlaceholder,
  emailPlaceholder,
  isDisabled,
  required,
  i18n,
}: PersonProps ) => {
  const mergedI18n = useMemo(() => {
    return deepMerge(I18N, i18n);
  }, [i18n]);

  const emailProps: FieldProps = {
    key:         'user_email',
    name:        `${name}.email.email`,
    label:       required ? `${mergedI18n.email} *` : mergedI18n.email,
    placeholder: emailPlaceholder,
    required,
  };

  if (isDisabled) {
    emailProps.disabled = 'disabled';
    emailProps.className = 'disabled';
  }

  return (
    <>
      <Text
        key="user_name"
        name={`${name}.name`}
        label={required ? `${mergedI18n.name} *` : mergedI18n.name}
        required
        placeholder={namePlaceholder}
      />,
      <Email {...emailProps} />
    </>
  );
}


Person.defaultProps = {
  namePlaceholder:  'John Doe',
  emailPlaceholder: 'john.doe@company.com',
  i18n:             {},
  required:         false,
};

export default Person;
