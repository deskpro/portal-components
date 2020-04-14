import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { capitalize } from '@deskpro/js-utils/dist/strings';
import FileUpload from './Inputs/FileUpload';
import Text from './Inputs/Text';
import Email from './Inputs/Email';
import Textarea from './Inputs/Textarea';
import DatePicker from './Inputs/DatePicker';
import DateTimePicker from './Inputs/DateTimePicker';
// import HijriDatePicker from './Inputs/HijriDatePicker';
import Checkboxes from './Choices/Checkboxes';
import DropDown from './Choices/DropDown';
import MultipleDropDown from './Choices/MultipleDropDown';
import Radio from './Choices/Radio';
import Hidden from './Inputs/Hidden';
import Checkbox from './Inputs/Checkbox';
import Display from './Display';
import FullDragDrop from './Inputs/FullDragDrop';

class TicketField extends React.Component {
  static propTypes = {
    field:          PropTypes.object.isRequired,
    fileUploadUrl:  PropTypes.string.isRequired,
    csrfToken:      PropTypes.string.isRequired,
    fileInputProps: PropTypes.object,
    files:          PropTypes.array,
    handleRemove:   PropTypes.func,
    languageId:     PropTypes.number.isRequired,
  };

  static defaultProps = {
    fileInputProps: {},
    files:          [],
    handleRemove() {},
  };

  renderLabel = () => {
    const { field, languageId } = this.props;
    let label;
    label = field.getIn(['data', 'title']) || field.get('field_id');
    if (languageId) {
      const translations = field.getIn(['data', 'translations']);
      if (translations) {
        label = field.getIn(['data', 'translations', languageId.toString(), 'title'], label);
      }
    }
    if (field.getIn(['options', 'required'], false)) {
      label = `${label} *`;
    }
    return label;
  };

  renderDescription = () => {
    const { field, languageId } = this.props;
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

  renderCustomField = () => {
    const rec = opts => opts.map(option => ({
      value:    option.get('id'),
      label:    option.get('title'),
      children: rec(option.get('children', new List()).toArray())
    }));
    const {
      field, fileUploadUrl, csrfToken, i18n
    } = this.props;
    const name = field.get('field_id');
    const props = {
      label:       this.renderLabel(),
      description: this.renderDescription(),
      required:    field.getIn(['options', 'required'], false),
      name
    };
    let Component = Text;
    switch (field.getIn(['data', 'widget_type'])) {
      case 'date':
        props.calendar = field.getIn(['data', 'options', 'calendar'], 'gregorian');
        Component = DatePicker;
        if (props.calendar === 'hijri') {
          // Component = HijriDatePicker;
        }
        break;
      case 'datetime':
        Component = DateTimePicker;
        props.calendar = field.getIn(['data', 'options', 'calendar'], 'gregorian');
        break;
      case 'checkbox':
        Component = Checkboxes;
        props.options = field.getIn(['data', 'choices'], new List())
          .toArray().map(option => ({ value: option.get('id'), label: option.get('title') }));
        break;
      case 'toggle':
        Component = Checkbox;
        break;
      case 'choice':
        Component = DropDown;
        props.dataSource = {};
        props.isClearable = false;
        props.isSearchable = false;
        props.i18n = i18n;
        props.dataSource.getOptions = rec(field.getIn(['data', 'choices'], new List()).toArray());
        break;
      case 'radio':
        Component = Radio;
        props.options = field.getIn(['data', 'choices'], [])
          .toArray().map(option => ({ value: option.get('id'), label: option.get('title') }));
        break;
      case 'file':
        Component = FileUpload;
        props.url = fileUploadUrl;
        props.csrfToken = csrfToken;
        props.i18n = i18n;
        break;
      case 'textarea':
        Component = Textarea;
        break;
      case 'multichoice':
        Component = MultipleDropDown;
        props.fClassName = 'dp-pc_multi-select';
        props.dataSource = {};
        props.i18n = i18n;
        props.dataSource.getOptions = rec(field.getIn(['data', 'choices'], new List()).toArray());
        break;
      case 'display':
        Component = Display;
        break;
      case 'text':
      default:
        Component = Text;
    }
    return <Component {...props} />;
  };

  render() {
    const {
      field,
      fileUploadUrl,
      csrfToken,
      fileInputProps,
      files,
      handleRemove,
      i18n,
    } = this.props;
    if (field.get('field_type').match(/^ticket_field/) || field.get('field_type').match(/^chat_field/)) {
      return this.renderCustomField();
    }
    switch (field.get('field_type')) {
      case 'message':
        return <Textarea name="message" label={capitalize(this.renderLabel())} errorsName="message.message" required={field.getIn(['options', 'required'], false)} />;
      case 'subject':
        return field.get('is_hidden') ?
          <Hidden name="subject" />
          : <Text name="subject" label={capitalize(this.renderLabel())} required={field.getIn(['options', 'required'], false)} />;
      case 'email':
      case 'cc':
        return <Email name={field.get('field_id')} label={this.renderLabel()} />;
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
            label={this.renderLabel()}
          />
        );
    }
  }
}

export default TicketField;
