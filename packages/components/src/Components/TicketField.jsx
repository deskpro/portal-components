import React from 'react';
import PropTypes from 'prop-types';
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

class TicketField extends React.Component {
  static propTypes = {
    field:         PropTypes.object.isRequired,
    fileUploadUrl: PropTypes.string.isRequired,
    csrfToken:     PropTypes.string.isRequired,
  };

  renderCustomField = () => {
    const rec = opts => opts.map(option => ({ value: option.get('id'), label: option.get('title'), children: rec(option.get('children', new List()).toArray()) }));
    const { field, fileUploadUrl, csrfToken } = this.props;
    const name = field.get('field_id');
    const props = {
      label:       field.getIn(['data', 'title'], name),
      description: field.getIn(['data', 'description'], ''),
      name
    };
    let Component = Text;
    switch (field.getIn(['data', 'widget_type'])) {
      case 'date':
        Component = DatePicker;
        props.calendar = field.getIn(['data', 'options', 'calendar'], 'gregorian');
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
        break;
      case 'textarea':
        Component = Textarea;
        break;
      case 'multichoice':
        Component = MultipleDropDown;
        props.fClassName = 'dp-pc_multi-select';
        props.dataSource = {};
        props.dataSource.getOptions = rec(field.getIn(['data', 'choices'], new List()));
        break;
      case 'text':
      default:
        Component = Text;
    }
    return <Component {...props} />;
  };

  render() {
    const { field, fileUploadUrl, csrfToken } = this.props;
    if (field.get('field_type').match(/^ticket_field/) || field.get('field_type').match(/^chat_field/)) {
      return this.renderCustomField();
    }
    switch (field.get('field_type')) {
      case 'message':
        return <Textarea name="message" label="Message" />;
      case 'subject':
        return <Text name="subject" label="Subject" />;
      case 'email':
        return <Email name={field.get('field_id')} label={field.getIn(['data', 'title']) || field.get('field_id')} />;
      case 'hidden':
        return <Hidden name={field.get('field_id')} label={field.get('field_id')} />;
      case 'attachments':
        return (
          <FileUpload
            name="attachments"
            label="Attachments"
            url={fileUploadUrl}
            csrfToken={csrfToken}
          />
        );
      default:
        return (
          <Text
            name={field.get('field_id')}
            label={field.getIn(['data', 'title']) || field.get('field_id')}
          />
        );
    }
  }
}

export default TicketField;
