import React from 'react';
import PropTypes from 'prop-types';
import FileUpload from './Inputs/FileUpload';
import Text from './Inputs/Text';
import Textarea from './Inputs/Textarea';

class TicketField extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
  };

  renderCustomField = () => 'Custom field';

  render() {
    const { field } = this.props;
    if (field.get('field_id').match(/^ticket_field/)) {
      return this.renderCustomField();
    }
    switch (field.get('field_id')) {
      case 'message':
        return <Textarea name="message" label="Message" />;
      case 'attachments':
        return <FileUpload name="attachments" label="Attachments" />;
      default:
        return (
          <Text
            name={field.get('field_id')}
            label={field.get('field_id')}
          />
        );
    }
  }
}

export default TicketField;
