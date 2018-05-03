import { fromJS } from 'immutable';

const ticketLayoutRaw = {
  data: [
    {
      department: 5,
      fields:     [
        {
          field_type: 'person',
          field_id:   'person',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'department',
          field_id:   'department',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'subject',
          field_id:   'subject',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_5',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_6',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_7',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_11',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'message',
          field_id:   'message',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'labels',
          field_id:   'labels',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'value',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        }
      ],
      context: 'user'
    },
    {
      department: 7,
      fields:     [
        {
          field_type: 'person',
          field_id:   'person',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'department',
          field_id:   'department',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'subject',
          field_id:   'subject',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_12',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_19',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'message',
          field_id:   'message',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'labels',
          field_id:   'labels',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'value',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        }
      ],
      context: 'user'
    },
    {
      department: 8,
      fields:     [
        {
          field_type: 'person',
          field_id:   'person',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'department',
          field_id:   'department',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'subject',
          field_id:   'subject',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_12',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_19',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'message',
          field_id:   'message',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'labels',
          field_id:   'labels',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'value',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        }
      ],
      context: 'user'
    },
    {
      department: 9,
      fields:     [
        {
          field_type: 'person',
          field_id:   'person',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'department',
          field_id:   'department',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'subject',
          field_id:   'subject',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_24',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'ticket_field',
          field_id:   'ticket_field_33',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'message',
          field_id:   'message',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'labels',
          field_id:   'labels',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'value',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        }
      ],
      context: 'user'
    },
    {
      department: null,
      fields:     [
        {
          field_type: 'person',
          field_id:   'person',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'department',
          field_id:   'department',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'subject',
          field_id:   'subject',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'message',
          field_id:   'message',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: true
        },
        {
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        },
        {
          field_type: 'labels',
          field_id:   'labels',
          options:    {
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'value',
            on_editticket:      true,
            criteria:           null
          },
          required: false
        }
      ],
      context: 'user'
    }
  ],
  meta:   {},
  linked: {}
};

export const ticketLayout = fromJS(ticketLayoutRaw.data);
