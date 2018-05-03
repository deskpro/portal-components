import React from 'react';
import PropTypes from 'prop-types';
import Text from './Inputs/Text';

class TicketField extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
  };

  render() {
    const { field } = this.props;
    return (
      <Text
        name={field.get('field_id')}
        label={field.get('field_id')}
      />
    );
  }
}

export default TicketField;
