import { fromJS } from 'immutable';

const ticketLayoutRaw = {
  data: [
    {
      department: 5,
      fields:     [
        {
          version:    1,
          field_type: 'person',
          field_id:   'person',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'department',
          field_id:   'department',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: false
        },
        {
          version:    1,
          field_type: 'subject',
          field_id:   'subject',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: true
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_5',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          5,
            title:       'Widget Type',
            description: 'A custom  field',
            options:     {
              default_value: 'repellendus'
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   5,
            is_agent_field:  false,
            choices:         [],
            default_value:   'repellendus',
            widget_type:     'text',
            type_name:       'text',
            translations:    {
              1: {
                language:    1,
                title:       'Widget Type',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Widget Type',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Widget Type',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Widget Type',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Widget Type',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Type de widget',
                description: 'Un champ personalis\u00e9'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_6',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          6,
            title:       'Widget Description',
            description: 'A custom  field',
            options:     {
              default_value: 'Assumenda alias vel recusandae in. Eaque eum excepturi quos nam nam. '
                + 'Similique consequuntur ea suscipit et vero at odit. '
                + 'Asperiores voluptatem illo reprehenderit enim delectus dolorum iure.',
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   6,
            is_agent_field:  false,
            choices:         [],
            default_value:   'Assumenda alias vel recusandae in. Eaque eum excepturi quos nam nam. '
              + 'Similique consequuntur ea suscipit et vero at odit. '
              + 'Asperiores voluptatem illo reprehenderit enim delectus dolorum iure.',
            widget_type:  'textarea',
            type_name:    'textarea',
            translations: {
              1: {
                language:    1,
                title:       'Widget Description',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Widget Description',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Widget Description',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Widget Description',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Widget Description',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Description de Widget',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_7',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          7,
            title:       'Desired Sizes',
            description: 'A custom  field',
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
            type_name:    'checkbox',
            translations: {
              1: {
                language:    1,
                title:       'Desired Sizes',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Desired Sizes',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Desired Sizes',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Desired Sizes',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Desired Sizes',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Taille d\u00e9sir\u00e9e',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_11',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:              11,
            title:           'Manufacture Date',
            description:     'A custom  field',
            options:         [],
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   11,
            is_agent_field:  false,
            choices:         [],
            widget_type:     'date',
            type_name:       'date',
            translations:    {
              1: {
                language:    1,
                title:       'Manufacture Date',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Manufacture Date',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Manufacture Date',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Manufacture Date',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Manufacture Date',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Date de fabrication',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_34',
          options:    {
            criteria: {
              version: 1,
              mode:    'all',
              terms:   [
                {
                  type:    'CheckTicketField11',
                  op:      'between',
                  options: {
                    date1_relative:      1,
                    date1_relative_type: 'weeks',
                    date2_relative:      1,
                    date2_relative_type: 'days',
                    type_name:           'date',
                    value:               'date',
                    field_id:            '11'
                  }
                }
              ]
            },
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          34,
            title:       'Item Serial Number',
            description: 'Item Serial Number',
            options:     {
              custom_css_classname: '',
              clickable_links:      ''
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [],
            default_value:   '',
            widget_type:     'textarea',
            type_name:       'textarea',
            translations:    {
              1: {
                language:    1,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              2: {
                language:    2,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              3: {
                language:    3,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              4: {
                language:    4,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              5: {
                language:    5,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              6: {
                language:    6,
                title:       'Num\u00e9ro de s\u00e9rie',
                description: 'Num\u00e9ro de s\u00e9rie'
              }
            },
            aliases: [
              'SerialNumber'
            ]
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_35',
          options:    {
            criteria: {
              version: 1,
              mode:    'all',
              terms:   [
                {
                  type:    'CheckTicketField34',
                  op:      'is',
                  options: {
                    value:     '123',
                    type_name: 'textarea',
                    field_id:  '34'
                  }
                }
              ]
            },
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          35,
            title:       'Type of enquiry',
            description: '',
            options:     {
              custom_css_classname: '',
              multiple:             false,
              expanded:             false
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [
              {
                id:            36,
                title:         'Bug',
                is_selectable: true
              },
              {
                id:            37,
                title:         'New Feature',
                is_selectable: true
              },
              {
                id:            38,
                title:         'Graou',
                is_selectable: true
              }
            ],
            widget_type:  'choice',
            type_name:    'choice',
            translations: {
              1: {
                language:    1,
                title:       'Type of enquiry',
                description: ''
              },
              2: {
                language:    2,
                title:       'Type of enquiry',
                description: ''
              },
              3: {
                language:    3,
                title:       'Type of enquiry',
                description: ''
              },
              4: {
                language:    4,
                title:       'Type of enquiry',
                description: ''
              },
              5: {
                language:    5,
                title:       'Type of enquiry',
                description: ''
              },
              6: {
                language:    6,
                title:       'Type de demande',
                description: ''
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'product',
          field_id:   'product',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'category',
          field_id:   'category',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'priority',
          field_id:   'priority',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'message',
          field_id:   'message',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        }
      ]
    },
    {
      department: 7,
      fields:     [
        {
          version:    1,
          field_type: 'person',
          field_id:   'person',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'department',
          field_id:   'department',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: false
        },
        {
          version:    1,
          field_type: 'subject',
          field_id:   'subject',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: true
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_12',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          12,
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
            type_name:     'radio',
            translations:  {
              1: {
                language:    1,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Raison de la plainte',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_19',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          19,
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
            type_name:    'multichoice',
            translations: {
              1: {
                language:    1,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Suggested Actions',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_34',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          34,
            title:       'Item Serial Number',
            description: 'Item Serial Number',
            options:     {
              custom_css_classname: '',
              clickable_links:      ''
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [],
            default_value:   '',
            widget_type:     'textarea',
            type_name:       'textarea',
            translations:    {
              1: {
                language:    1,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              2: {
                language:    2,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              3: {
                language:    3,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              4: {
                language:    4,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              5: {
                language:    5,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              6: {
                language:    6,
                title:       'Num\u00e9ro de s\u00e9rie',
                description: 'Num\u00e9ro de s\u00e9rie'
              }
            },
            aliases: [
              'SerialNumber'
            ]
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_35',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          35,
            title:       'Type of enquiry',
            description: '',
            options:     {
              custom_css_classname: '',
              multiple:             false,
              expanded:             false
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [
              {
                id:            36,
                title:         'Bug',
                is_selectable: true
              },
              {
                id:            37,
                title:         'New Feature',
                is_selectable: true
              },
              {
                id:            38,
                title:         'Graou',
                is_selectable: true
              }
            ],
            widget_type:  'choice',
            type_name:    'choice',
            translations: {
              1: {
                language:    1,
                title:       'Type of enquiry',
                description: ''
              },
              2: {
                language:    2,
                title:       'Type of enquiry',
                description: ''
              },
              3: {
                language:    3,
                title:       'Type of enquiry',
                description: ''
              },
              4: {
                language:    4,
                title:       'Type of enquiry',
                description: ''
              },
              5: {
                language:    5,
                title:       'Type of enquiry',
                description: ''
              },
              6: {
                language:    6,
                title:       'Type de demande',
                description: ''
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'product',
          field_id:   'product',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'category',
          field_id:   'category',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'priority',
          field_id:   'priority',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'message',
          field_id:   'message',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        }
      ]
    },
    {
      department: 8,
      fields:     [
        {
          version:    1,
          field_type: 'person',
          field_id:   'person',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'department',
          field_id:   'department',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: false
        },
        {
          version:    1,
          field_type: 'subject',
          field_id:   'subject',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: true
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_12',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          12,
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
            type_name:     'radio',
            translations:  {
              1: {
                language:    1,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Reason for Complaint',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Raison de la plainte',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_19',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          19,
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
            type_name:    'multichoice',
            translations: {
              1: {
                language:    1,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Suggested Actions',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Suggested Actions',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_34',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          34,
            title:       'Item Serial Number',
            description: 'Item Serial Number',
            options:     {
              custom_css_classname: '',
              clickable_links:      ''
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [],
            default_value:   '',
            widget_type:     'textarea',
            type_name:       'textarea',
            translations:    {
              1: {
                language:    1,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              2: {
                language:    2,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              3: {
                language:    3,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              4: {
                language:    4,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              5: {
                language:    5,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              6: {
                language:    6,
                title:       'Num\u00e9ro de s\u00e9rie',
                description: 'Num\u00e9ro de s\u00e9rie'
              }
            },
            aliases: [
              'SerialNumber'
            ]
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_35',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          35,
            title:       'Type of enquiry',
            description: '',
            options:     {
              custom_css_classname: '',
              multiple:             false,
              expanded:             false
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [
              {
                id:            36,
                title:         'Bug',
                is_selectable: true
              },
              {
                id:            37,
                title:         'New Feature',
                is_selectable: true
              },
              {
                id:            38,
                title:         'Graou',
                is_selectable: true
              }
            ],
            widget_type:  'choice',
            type_name:    'choice',
            translations: {
              1: {
                language:    1,
                title:       'Type of enquiry',
                description: ''
              },
              2: {
                language:    2,
                title:       'Type of enquiry',
                description: ''
              },
              3: {
                language:    3,
                title:       'Type of enquiry',
                description: ''
              },
              4: {
                language:    4,
                title:       'Type of enquiry',
                description: ''
              },
              5: {
                language:    5,
                title:       'Type of enquiry',
                description: ''
              },
              6: {
                language:    6,
                title:       'Type de demande',
                description: ''
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'product',
          field_id:   'product',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'category',
          field_id:   'category',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'priority',
          field_id:   'priority',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'message',
          field_id:   'message',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        }
      ]
    },
    {
      department: 9,
      fields:     [
        {
          version:    1,
          field_type: 'person',
          field_id:   'person',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'department',
          field_id:   'department',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: false
        },
        {
          version:    1,
          field_type: 'subject',
          field_id:   'subject',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: true
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_24',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:              24,
            title:           'Hotdog Kind',
            description:     'A custom  field',
            options:         [],
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
            type_name:     'choice',
            translations:  {
              1: {
                language:    1,
                title:       'Hotdog Kind',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Hotdog Kind',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Hotdog Kind',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Hotdog Kind',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Hotdog Kind',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Hotdog Kind',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_33',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:              33,
            title:           'Delivery Time',
            description:     'A custom  field',
            options:         [],
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   33,
            is_agent_field:  false,
            choices:         [],
            widget_type:     'datetime',
            type_name:       'datetime',
            translations:    {
              1: {
                language:    1,
                title:       'Delivery Time',
                description: 'A custom  field'
              },
              2: {
                language:    2,
                title:       'Delivery Time',
                description: 'A custom  field'
              },
              3: {
                language:    3,
                title:       'Delivery Time',
                description: 'A custom  field'
              },
              4: {
                language:    4,
                title:       'Delivery Time',
                description: 'A custom  field'
              },
              5: {
                language:    5,
                title:       'Delivery Time',
                description: 'A custom  field'
              },
              6: {
                language:    6,
                title:       'Delivery Time',
                description: 'A custom  field'
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_34',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          34,
            title:       'Item Serial Number',
            description: 'Item Serial Number',
            options:     {
              custom_css_classname: '',
              clickable_links:      ''
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [],
            default_value:   '',
            widget_type:     'textarea',
            type_name:       'textarea',
            translations:    {
              1: {
                language:    1,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              2: {
                language:    2,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              3: {
                language:    3,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              4: {
                language:    4,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              5: {
                language:    5,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              6: {
                language:    6,
                title:       'Num\u00e9ro de s\u00e9rie',
                description: 'Num\u00e9ro de s\u00e9rie'
              }
            },
            aliases: [
              'SerialNumber'
            ]
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_35',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          35,
            title:       'Type of enquiry',
            description: '',
            options:     {
              custom_css_classname: '',
              multiple:             false,
              expanded:             false
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [
              {
                id:            36,
                title:         'Bug',
                is_selectable: true
              },
              {
                id:            37,
                title:         'New Feature',
                is_selectable: true
              },
              {
                id:            38,
                title:         'Graou',
                is_selectable: true
              }
            ],
            widget_type:  'choice',
            type_name:    'choice',
            translations: {
              1: {
                language:    1,
                title:       'Type of enquiry',
                description: ''
              },
              2: {
                language:    2,
                title:       'Type of enquiry',
                description: ''
              },
              3: {
                language:    3,
                title:       'Type of enquiry',
                description: ''
              },
              4: {
                language:    4,
                title:       'Type of enquiry',
                description: ''
              },
              5: {
                language:    5,
                title:       'Type of enquiry',
                description: ''
              },
              6: {
                language:    6,
                title:       'Type de demande',
                description: ''
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'product',
          field_id:   'product',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'category',
          field_id:   'category',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'priority',
          field_id:   'priority',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'message',
          field_id:   'message',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        }
      ]
    },
    {
      department: 0,
      fields:     [
        {
          version:    1,
          field_type: 'person',
          field_id:   'person',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'department',
          field_id:   'department',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: false
        },
        {
          version:    1,
          field_type: 'subject',
          field_id:   'subject',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          is_hidden: true
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_35',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          35,
            title:       'Type of enquiry',
            description: '',
            options:     {
              custom_css_classname: '',
              multiple:             false,
              expanded:             false
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [
              {
                id:            36,
                title:         'Bug',
                is_selectable: true
              },
              {
                id:            37,
                title:         'New Feature',
                is_selectable: true
              },
              {
                id:            38,
                title:         'Graou',
                is_selectable: true
              }
            ],
            widget_type:  'choice',
            type_name:    'choice',
            translations: {
              1: {
                language:    1,
                title:       'Type of enquiry',
                description: ''
              },
              2: {
                language:    2,
                title:       'Type of enquiry',
                description: ''
              },
              3: {
                language:    3,
                title:       'Type of enquiry',
                description: ''
              },
              4: {
                language:    4,
                title:       'Type of enquiry',
                description: ''
              },
              5: {
                language:    5,
                title:       'Type of enquiry',
                description: ''
              },
              6: {
                language:    6,
                title:       'Type de demande',
                description: ''
              }
            },
            aliases: []
          }
        },
        {
          version:    1,
          field_type: 'ticket_field',
          field_id:   'ticket_field_34',
          options:    {
            criteria: {
              version: 1,
              mode:    'all',
              terms:   [
                {
                  type:    'CheckTicketField35',
                  op:      'isset',
                  options: {
                    value: [
                      36
                    ],
                    type_name: 'choice',
                    field_id:  '35'
                  }
                }
              ]
            },
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          },
          data: {
            id:          34,
            title:       'Item Serial Number',
            description: 'Item Serial Number',
            options:     {
              custom_css_classname: '',
              clickable_links:      ''
            },
            is_user_enabled: true,
            is_enabled:      true,
            display_order:   0,
            is_agent_field:  false,
            choices:         [],
            default_value:   '',
            widget_type:     'textarea',
            type_name:       'textarea',
            translations:    {
              1: {
                language:    1,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              2: {
                language:    2,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              3: {
                language:    3,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              4: {
                language:    4,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              5: {
                language:    5,
                title:       'Item Serial Number',
                description: 'Item Serial Number'
              },
              6: {
                language:    6,
                title:       'Num\u00e9ro de s\u00e9rie',
                description: 'Num\u00e9ro de s\u00e9rie'
              }
            },
            aliases: [
              'SerialNumber'
            ]
          }
        },
        {
          version:    1,
          field_type: 'product',
          field_id:   'product',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'category',
          field_id:   'category',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'priority',
          field_id:   'priority',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'message',
          field_id:   'message',
          required:   true,
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        },
        {
          version:    1,
          field_type: 'attachments',
          field_id:   'attachments',
          options:    {
            criteria:           null,
            on_newticket:       true,
            on_viewticket:      true,
            on_viewticket_mode: 'always',
            on_editticket:      true
          }
        }
      ]
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

export const priorities = fromJS([
  {
    id:       3,
    title:    'Low',
    priority: 30
  },
  {
    id:       2,
    title:    'Medium',
    priority: 20
  },
  {
    id:       1,
    title:    'Urgent',
    priority: 10
  }
]);
export const products = fromJS([
  {
    id:            5,
    title:         'Product 5',
    display_order: 1,
    parent:        null
  },
  {
    id:            4,
    title:         'Product 4',
    display_order: 1,
    parent:        null
  },
  {
    id:            3,
    title:         'Product 3',
    display_order: 1,
    parent:        null
  },
  {
    id:            2,
    title:         'Product 2',
    display_order: 1,
    parent:        null
  },
  {
    id:            1,
    title:         'Product 1',
    display_order: 1,
    parent:        null
  }
]);
export const categories = fromJS([
  {
    id:            5,
    parent:        null,
    title:         'Ticket Category 5',
    display_order: 1
  },
  {
    id:            4,
    parent:        null,
    title:         'Ticket Category 4',
    display_order: 1
  },
  {
    id:            3,
    parent:        null,
    title:         'Ticket Category 3',
    display_order: 1
  },
  {
    id:            2,
    parent:        null,
    title:         'Ticket Category 2',
    display_order: 1
  },
  {
    id:            1,
    parent:        null,
    title:         'Ticket Category 1',
    display_order: 1
  }
]);

export const ticketLayout = fromJS(ticketLayoutRaw.data);
export const departments = fromJS(ticketLayoutRaw.meta.departments);
