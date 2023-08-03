import * as React from 'react';
import { List } from 'immutable';
import FileUpload from './Inputs/FileUpload';
import Text from './Inputs/Text';
import Email from './Inputs/Email';
import Textarea from './Inputs/Textarea';
import DatePicker from './Inputs/DatePicker';
import DateTimePicker from './Inputs/DateTimePicker';
import Checkboxes from './Choices/Checkboxes';
import DropDown from './Choices/DropDown';
import MultipleDropDown from './Choices/MultipleDropDown';
import Radio from './Choices/Radio';
import Hidden from './Inputs/Hidden';
import Checkbox from './Inputs/Checkbox';
import Display from './Display';
import FullDragDrop from './Inputs/FullDragDrop';
import { recursiveDropdownChoices } from '../utils/helpers';
import type { DpBlob } from "../types/blob";
import * as Immutable from "immutable";
import type { I18nType } from "../types/i18n";

interface IProps {
  field:          Immutable.Map<string, string>;
  fileUploadUrl:  string;
  csrfToken:      string;
  fileInputProps: object;
  files:          DpBlob[];
  handleRemove:   (file: DpBlob) => void;
  languageId:     number;
  i18n:           I18nType;
}

const TicketField = ({
  field,
  fileUploadUrl,
  csrfToken,
  fileInputProps = {},
  files = [],
  handleRemove,
  languageId,
  i18n = {}
}: IProps) => {
  const renderLabel = (): string => {
    let label;
    label = field.getIn(['data', 'title']) || field.get('field_id');
    if (languageId && field.hasIn(['data', 'translations'])) {
      label = field.getIn(['data', 'translations', languageId.toString(), 'title'], label);
    } else if (i18n[field.get('field_id')]) {
      label = i18n[field.get('field_id')];
    }
    if (field.get('required', '') !== '') {
      label = `${label} *`;
    }
    return label;
  };

  const renderDescription = () => {
    let description;
    description = field.getIn(['data', 'description'], '');
    if (languageId) {
      const translations = field.getIn(['data', 'translations']);
      if (translations) {
        description = field.getIn(['data', 'translations', languageId.toString(), 'description'], description);
      }
    }
    return description;
  };

  const renderCustomField = () => {
    const name = field.get('field_id');
    const props = {
      label:       renderLabel(),
      description: renderDescription(),
      required:    field.get('required', 'false') !== 'false',
      i18n,
      name
    };

    console.log('name', field.get('field_id'));
    console.log('field', field.toJS());
    console.log('required', field.get('required', 'false'));

    let options;
    switch (field.getIn(['data', 'widget_type'])) {
      case 'date':
        return (
          <DatePicker
            calendar={field.getIn(['data', 'options', 'calendar'], 'gregorian')}
            format={field.getIn(['data', 'options', 'format'], 'yyyy-MM-dd HH:mm')}
            {...props}
          />
        );
      case 'datetime':
        return (
          <DateTimePicker
            calendar={field.getIn(['data', 'options', 'calendar'], 'gregorian')}
            format={field.getIn(['data', 'options', 'format'], 'yyyy-MM-dd HH:mm')}
            {...props}
          />
        );
      case 'checkbox':
        options = field.getIn(['data', 'choices'], List())
          .toArray().map(option => ({ value: option.get('id'), label: option.get('title') }));
        return <Checkboxes options={options} {...props} />;
      case 'toggle':
        return <Checkbox {...props} />;
      case 'choice':
        return (
          <DropDown
            closeOnBlur={field.getIn(['data', 'options', 'closeOnBlur'], true)}
            isClearable={false}
            isSearchable={false}
            dataSource={{
              getOptions: recursiveDropdownChoices(field.getIn(['data', 'choices'], List()).toArray())
            }}
            {...props}
          />
        );
      case 'radio':
        options = field.getIn(['data', 'choices'], [])
          .toArray().map(option => ({ value: option.get('id'), label: option.get('title') }));
        return <Radio options={options} {...props} />;
      case 'file':
        return <FileUpload url={fileUploadUrl} csrfToken={csrfToken} {...props} />;
      case 'textarea':
        return <Textarea {...props} />;
      case 'multichoice':
        return (
          <MultipleDropDown
            closeOnBlur={field.getIn(['data', 'options', 'closeOnBlur'], true)}
            fClassName='dp-pc_multi-select'
            dataSource={{
              getOptions: recursiveDropdownChoices(field.getIn(['data', 'choices'], List()).toArray())
            }}
            {...props}
          />
        );
      case 'display':
        return <Display html={field.getIn(['data', 'options', 'html'])} {...props} />;
      case 'hidden':
        return <Hidden {...props} />;
      case 'text':
      default:
        return <Text {...props} />;
    }
  };

  if (
    ['ticket_field', 'chat_field', 'user_field', 'org_field', 'custom_field'].indexOf(field.get('field_type')) !== -1
  ) {
    return renderCustomField();
  }
  const required = field.get('required', '') !== '';
  switch (field.get('field_type')) {
    case 'message':
      return (
        <Textarea
          name="message"
          label={field.get('required', '') !== '' ? `${i18n.message} *` : i18n.message}
          errorsName="message.message"
          i18n={i18n}
          required={required}
        />
      );
    case 'subject':
      return field.get('is_hidden') ?
        <Hidden name="subject" />
        : (
          <Text
            name="subject"
            label={required ? `${i18n.subject} *` : i18n.subject}
            required={required}
            i18n={i18n}
          />
        );
    case 'email':
    case 'cc':
      return (
        <Email
          name={field.get('field_id')}
          label={renderLabel()}
          required={required}
          i18n={i18n}
        />
      );
    case 'hidden':
      return <Hidden name={field.get('field_id')} label={field.get('field_id')} />;
    case 'attachments':
      return (
        <FullDragDrop
          name="attachments"
          label="Attachments"
          url={fileUploadUrl}
          csrfToken={csrfToken}
          inputProps={fileInputProps}
          files={files}
          handleRemove={handleRemove}
          i18n={i18n}
        />
      );
    default:
      return (
        <Text
          name={field.get('field_id')}
          label={renderLabel()}
          required={required}
          i18n={i18n}
        />
      );
  }
}

export default TicketField;
