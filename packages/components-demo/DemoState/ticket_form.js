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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     {
            id:          6,
            parent:      null,
            title:       'Widget Description',
            description: 'A custom  field',
            options:     {
              default_value: 'Assumenda alias vel recusandae in. Eaque eum excepturi quos nam nam. ' +
              'Similique consequuntur ea suscipit et vero at odit. ' +
              'Asperiores voluptatem illo reprehenderit enim delectus dolorum iure.',
              custom_css_classname: '',
              validation_type:      'regex',
              clickable_links:      '',
              regex:                '/^Deskpro/',
              regex_required:       true
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   6,
            is_agent_field:  false,
            choices:         [],
            default_value:   'Assumenda alias vel recusandae in. Eaque eum excepturi quos nam nam. ' +
            'Similique consequuntur ea suscipit et vero at odit. ' +
            'Asperiores voluptatem illo reprehenderit enim delectus dolorum iure.',
            widget_type:  'textarea',
            translations: {},
            aliases:      []
          }
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
          required: null,
          data:     {
            id:          7,
            parent:      null,
            title:       'Desired Sizes',
            description: '',
            options:     {
              multiple: true,
              expanded: true
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   7,
            is_agent_field:  false,
            choices:         [
              {
                id:            8,
                title:         'Small',
                is_selectable: true
              },
              {
                id:            9,
                title:         'Medium',
                is_selectable: true
              },
              {
                id:            10,
                title:         'Large',
                is_selectable: true
              }
            ],
            default_value: [
              10
            ],
            widget_type:  'checkbox',
            translations: {},
            aliases:      []
          }
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
          required: null,
          data:     {
            id:              11,
            parent:          null,
            title:           'Manufacture Date',
            description:     'A custom  field',
            options:         {},
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   11,
            is_agent_field:  false,
            choices:         [],
            default_value:   null,
            widget_type:     'date',
            translations:    {},
            aliases:         []
          }
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     {
            id:          12,
            parent:      null,
            title:       'Reason for Complaint',
            description: 'A custom  field',
            options:     {
              multiple: false,
              expanded: true
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   12,
            is_agent_field:  false,
            choices:         [
              {
                id:            13,
                title:         'Nuisance',
                is_selectable: true
              },
              {
                id:            14,
                title:         'Dangerous',
                is_selectable: true
              },
              {
                id:            15,
                title:         'Smelly',
                is_selectable: true
              },
              {
                id:            16,
                title:         'Ugly',
                is_selectable: true
              },
              {
                id:            17,
                title:         'Mean',
                is_selectable: true
              },
              {
                id:            18,
                title:         'Other',
                is_selectable: true
              }
            ],
            default_value: 18,
            widget_type:   'radio',
            translations:  {},
            aliases:       []
          }
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
          required: null,
          data:     {
            id:          19,
            parent:      null,
            title:       'Suggested Actions',
            description: 'A custom  field',
            options:     {
              multiple: true
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   19,
            is_agent_field:  false,
            choices:         [
              {
                id:            20,
                title:         'Eviction',
                is_selectable: true
              },
              {
                id:            21,
                title:         'Shun',
                is_selectable: true
              },
              {
                id:            22,
                title:         'Fire them off to the moon',
                is_selectable: true
              },
              {
                id:            23,
                title:         'Strongly worded letter',
                is_selectable: true
              }
            ],
            default_value: [
              23
            ],
            widget_type:  'multichoice',
            translations: {},
            aliases:      []
          }
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
          required: true,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     {
            id:          12,
            parent:      null,
            title:       'Reason for Complaint',
            description: 'A custom  field',
            options:     {
              multiple: false,
              expanded: true
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   12,
            is_agent_field:  false,
            choices:         [
              {
                id:            13,
                title:         'Nuisance',
                is_selectable: true
              },
              {
                id:            14,
                title:         'Dangerous',
                is_selectable: true
              },
              {
                id:            15,
                title:         'Smelly',
                is_selectable: true
              },
              {
                id:            16,
                title:         'Ugly',
                is_selectable: true
              },
              {
                id:            17,
                title:         'Mean',
                is_selectable: true
              },
              {
                id:            18,
                title:         'Other',
                is_selectable: true
              }
            ],
            default_value: 18,
            widget_type:   'radio',
            translations:  {},
            aliases:       []
          }
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
          required: null,
          data:     {
            id:          19,
            parent:      null,
            title:       'Suggested Actions',
            description: 'A custom  field',
            options:     {
              multiple: true
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   19,
            is_agent_field:  false,
            choices:         [
              {
                id:            20,
                title:         'Eviction',
                is_selectable: true
              },
              {
                id:            21,
                title:         'Shun',
                is_selectable: true
              },
              {
                id:            22,
                title:         'Fire them off to the moon',
                is_selectable: true
              },
              {
                id:            23,
                title:         'Strongly worded letter',
                is_selectable: true
              }
            ],
            default_value: [
              23
            ],
            widget_type:  'multichoice',
            translations: {},
            aliases:      []
          }
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     {
            id:          24,
            parent:      null,
            title:       'Hotdog Kind',
            description: 'A custom  field',
            options:     {
              custom_css_classname: '',
              validation_type:      'required',
              multiple:             false,
              expanded:             false,
              required:             true,
              min_length:           '1',
              max_length:           ''
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   24,
            is_agent_field:  false,
            choices:         [
              {
                id:            25,
                title:         'Normal',
                is_selectable: true
              },
              {
                id:            26,
                title:         'German',
                is_selectable: false,
                children:      [
                  {
                    id:            28,
                    title:         'Extrawurst',
                    is_selectable: true
                  },
                  {
                    id:            29,
                    title:         'Frankfurter',
                    is_selectable: false,
                    children:      [
                      {
                        id:            31,
                        title:         'W\u00fcrstchen',
                        is_selectable: true
                      }
                    ]
                  }
                ]
              },
              {
                id:            27,
                title:         'Bratwurst',
                is_selectable: true
              },
              {
                id:            30,
                title:         'Rindswurst',
                is_selectable: true
              },
              {
                id:            32,
                title:         'Large',
                is_selectable: true
              }
            ],
            default_value: 32,
            widget_type:   'choice',
            translations:  {},
            aliases:       []
          }
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
          required: null,
          data:     {
            id:          33,
            parent:      null,
            title:       'Delivery Time',
            description: 'A custom  field',
            options:     {
              custom_css_classname: '',
              default_mode:         'current',
              required:             false,
              agent_required:       false,
              date_valid_type:      'range',
              date_valid_range1:    5,
              date_valid_range2:    30,
              date_valid_timezone:  'Europe/Berlin'
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   33,
            is_agent_field:  false,
            choices:         [],
            default_value:   null,
            widget_type:     'datetime',
            translations:    {},
            aliases:         []
          }
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
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
          required: null,
          data:     null
        }
      ],
      context: 'user'
    }
  ],
  meta: {
    departments: [
      {
        id:                 1,
        parent:             null,
        children:           [],
        title:              'Support',
        user_title:         'Support',
        is_tickets_enabled: true,
        is_chat_enabled:    false,
        display_order:      0,
        avatar:             {
          default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
          url_pattern:         null,
          base_gravatar_url:   null
        },
        brands: [
          1
        ]
      },
      {
        id:                 2,
        parent:             null,
        children:           [],
        title:              'Sales',
        user_title:         'Sales',
        is_tickets_enabled: true,
        is_chat_enabled:    false,
        display_order:      0,
        avatar:             {
          default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
          url_pattern:         null,
          base_gravatar_url:   null
        },
        brands: [
          1
        ]
      },
      {
        id:                 3,
        parent:             null,
        children:           [],
        title:              'Support',
        user_title:         'Support',
        is_tickets_enabled: false,
        is_chat_enabled:    true,
        display_order:      0,
        avatar:             {
          default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
          url_pattern:         null,
          base_gravatar_url:   null
        },
        brands: [
          1
        ]
      },
      {
        id:                 4,
        parent:             null,
        children:           [],
        title:              'Sales',
        user_title:         'Sales',
        is_tickets_enabled: false,
        is_chat_enabled:    true,
        display_order:      0,
        avatar:             {
          default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
          url_pattern:         null,
          base_gravatar_url:   null
        },
        brands: [
          1
        ]
      },
      {
        id:                 5,
        parent:             null,
        children:           [],
        title:              'Widgets',
        user_title:         'Widgets',
        is_tickets_enabled: true,
        is_chat_enabled:    false,
        display_order:      0,
        avatar:             {
          default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
          url_pattern:         null,
          base_gravatar_url:   null
        },
        brands: [
          1
        ]
      },
      {
        id:       6,
        parent:   null,
        children: [
          {
            id:                 7,
            parent:             6,
            children:           [],
            title:              'Regulation',
            user_title:         'Regulation',
            is_tickets_enabled: true,
            is_chat_enabled:    false,
            display_order:      2,
            avatar:             {
              default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
              url_pattern:         null,
              base_gravatar_url:   null
            },
            brands: [
              1
            ]
          },
          {
            id:                 8,
            parent:             6,
            children:           [],
            title:              'Control',
            user_title:         'Control',
            is_tickets_enabled: true,
            is_chat_enabled:    false,
            display_order:      3,
            avatar:             {
              default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
              url_pattern:         null,
              base_gravatar_url:   null
            },
            brands: [
              1
            ]
          }
        ],
        title:              'Regulation and Control of Magical Creatures',
        user_title:         'Regulation and Control of Magical Creatures',
        is_tickets_enabled: true,
        is_chat_enabled:    false,
        display_order:      1,
        avatar:             {
          default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
          url_pattern:         null,
          base_gravatar_url:   null
        },
        brands: []
      },
      {
        id:                 9,
        parent:             null,
        children:           [],
        title:              'Hotdogs',
        user_title:         'Hotdogs',
        is_tickets_enabled: true,
        is_chat_enabled:    false,
        display_order:      4,
        avatar:             {
          default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
          url_pattern:         null,
          base_gravatar_url:   null
        },
        brands: [
          1
        ]
      }
    ]
  },
  linked: {}
};

export const ticketLayout = fromJS(ticketLayoutRaw.data);
export const departments = fromJS(ticketLayoutRaw.meta.departments);
