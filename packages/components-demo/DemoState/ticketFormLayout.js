export default [
  {
    rules:  [{ field: 'department', op: 'eq', value: 5 }],
    fields: [
      {
        name:  'person',
        label: 'Person',
        type:  'text'
      },
      {
        name:       'department',
        label:      'Department',
        type:       'choice',
        dataSource: {
          getOptions: [
            { value: 1, label: 'Support' },
            { value: 2, label: 'Sales' },
            { value: 3, label: 'Support' },
            { value: 4, label: 'Sales' },
            { value: 5, label: 'Widgets' },
            { value: 6, label: 'Regulation and Control of Magical Creatures' },
            { value: 7, label: 'Regulation' },
            { value: 8, label: 'Control' },
            { value: 9, label: 'Hotdogs' }
          ]
        }
      },
      {
        name:  'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        name:         'ticket_field_6',
        label:        'Widget Description',
        type:         'textarea',
        defaultValue:
          'Assumenda alias vel recusandae in. Eaque eum excepturi quos nam nam. '
          + 'Similique consequuntur ea suscipit et vero at odit. '
          + 'Asperiores voluptatem illo reprehenderit enim delectus dolorum iure.'
      },
      {
        name:         'ticket_field_7',
        label:        'Desired Sizes',
        type:         'checkbox',
        options:      [{ value: 8, label: 'Small' }, { value: 9, label: 'Medium' }, { value: 10, label: 'Large' }],
        defaultValue: [10]
      },
      {
        name:        'ticket_field_11',
        label:       'Manufacture Date',
        description: 'A custom field',
        type:        'date'
      },
      {
        name:  'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        name:  'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  },
  {
    rules:  [{ field: 'department', op: 'eq', value: 7 }],
    fields: [
      {
        name:  'person',
        label: 'Person',
        type:  'text'
      },
      {
        name:       'department',
        label:      'Department',
        type:       'choice',
        dataSource: {
          getOptions: [
            { value: 1, label: 'Support' },
            { value: 2, label: 'Sales' },
            { value: 3, label: 'Support' },
            { value: 4, label: 'Sales' },
            { value: 5, label: 'Widgets' },
            { value: 6, label: 'Regulation and Control of Magical Creatures' },
            { value: 7, label: 'Regulation' },
            { value: 8, label: 'Control' },
            { value: 9, label: 'Hotdogs' }
          ]
        }
      },
      {
        name:  'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        name:        'ticket_field_12',
        label:       'Reason for Complaint',
        description: 'A custom  field',
        type:        'radio',
        options:     [
          { value: 13, label: 'Nuisance' },
          { value: 14, label: 'Dangerous' },
          { value: 15, label: 'Smelly' },
          { value: 16, label: 'Ugly' },
          { value: 17, label: 'Mean' },
          { value: 18, label: 'Other' }
        ]
      },
      {
        name:        'ticket_field_19',
        label:       'Suggested Actions',
        description: 'A custom  field',
        type:        'multichoice',
        options:     [
          { value: 20, label: 'Eviction' },
          { value: 21, label: 'Shun' },
          { value: 22, label: 'Fire them off to the moon' },
          { value: 23, label: 'Strongly worded letter' }
        ],
        defaultValue: [23]
      },
      {
        name:  'message',
        label: 'Message',
        type:  'textarea'
      },
      {
        name:  'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        name:  'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  },
  {
    rules:  [{ field: 'department', op: 'eq', value: 8 }],
    fields: [
      {
        name:  'person',
        label: 'Person',
        type:  'text'
      },
      {
        name:       'department',
        label:      'Department',
        type:       'choice',
        dataSource: {
          getOptions: [
            { value: 1, label: 'Support' },
            { value: 2, label: 'Sales' },
            { value: 3, label: 'Support' },
            { value: 4, label: 'Sales' },
            { value: 5, label: 'Widgets' },
            { value: 6, label: 'Regulation and Control of Magical Creatures' },
            { value: 7, label: 'Regulation' },
            { value: 8, label: 'Control' },
            { value: 9, label: 'Hotdogs' }
          ]
        }
      },
      {
        name:  'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        name:        'ticket_field_12',
        label:       'Reason for Complaint',
        description: 'A custom  field',
        type:        'radio',
        options:     [
          { value: 13, label: 'Nuisance' },
          { value: 14, label: 'Dangerous' },
          { value: 15, label: 'Smelly' },
          { value: 16, label: 'Ugly' },
          { value: 17, label: 'Mean' },
          { value: 18, label: 'Other' }
        ]
      },
      {
        name:        'ticket_field_19',
        label:       'Suggested Actions',
        description: 'A custom  field',
        type:        'multichoice',
        options:     [
          { value: 20, label: 'Eviction' },
          { value: 21, label: 'Shun' },
          { value: 22, label: 'Fire them off to the moon' },
          { value: 23, label: 'Strongly worded letter' }
        ],
        defaultValue: [23]
      },
      {
        name:  'message',
        label: 'Message',
        type:  'textarea'
      },
      {
        name:  'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        name:  'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  },
  {
    rules:  [{ field: 'department', op: 'eq', value: 9 }],
    fields: [
      {
        name:  'person',
        label: 'Person',
        type:  'text'
      },
      {
        name:       'department',
        label:      'Department',
        type:       'choice',
        dataSource: {
          getOptions: [
            { value: 1, label: 'Support' },
            { value: 2, label: 'Sales' },
            { value: 3, label: 'Support' },
            { value: 4, label: 'Sales' },
            { value: 5, label: 'Widgets' },
            { value: 6, label: 'Regulation and Control of Magical Creatures' },
            { value: 7, label: 'Regulation' },
            { value: 8, label: 'Control' },
            { value: 9, label: 'Hotdogs' }
          ]
        }
      },
      {
        name:  'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        name:        'ticket_field_24',
        label:       'Hotdog Kind',
        description: 'A custom  field',
        type:        'choice',
        dataSource:  {
          getOptions: [
            { value: 25, label: 'Normal' },
            {
              value:    26,
              label:    'German',
              children: [
                { value: 28, label: 'Extrawurst' },
                {
                  value:    29,
                  label:    'Frankfurter',
                  children: [{ value: 31, label: 'W\u00fcrstchen' }]
                }
              ]
            },
            { value: 27, label: 'Bratwurst' },
            { value: 30, label: 'Rindswurst' },
            { value: 32, label: 'Large' }
          ]
        }
      },
      {
        name:        'ticket_field_33',
        label:       'Delivery Time',
        description: 'A custom  field',
        type:        'datetime'
      },
      {
        name:  'message',
        label: 'Message',
        type:  'textarea'
      },
      {
        name:  'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        name:  'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  },
  {
    fields: [
      {
        name:       'person',
        label:      'Person',
        type:       'text',
        validation: ['required']
      },
      {
        name:       'department',
        label:      'Department',
        type:       'choice',
        dataSource: {
          getOptions: [
            { value: 1, label: 'Support' },
            { value: 2, label: 'Sales' },
            { value: 3, label: 'Support' },
            { value: 4, label: 'Sales' },
            { value: 5, label: 'Widgets' },
            { value: 6, label: 'Regulation and Control of Magical Creatures' },
            { value: 7, label: 'Regulation' },
            { value: 8, label: 'Control' },
            { value: 9, label: 'Hotdogs' }
          ]
        }
      },
      {
        name:  'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        name:        'ticket_field_24',
        label:       'Hotdog Kind',
        description: 'A custom  field',
        type:        'choice',
        dataSource:  {
          getOptions: [
            { value: 25, label: 'Normal' },
            {
              value:    26,
              label:    'German',
              children: [
                { value: 28, label: 'Extrawurst' },
                {
                  value:    29,
                  label:    'Frankfurter',
                  children: [{ value: 31, label: 'W\u00fcrstchen' }]
                }
              ]
            },
            { value: 27, label: 'Bratwurst' },
            { value: 30, label: 'Rindswurst' },
            { value: 32, label: 'Large' }
          ]
        }
      },
      {
        name:        'ticket_field_33',
        label:       'Delivery Time',
        description: 'A custom  field',
        type:        'datetime'
      },
      {
        name:       'message',
        label:      'Message',
        type:       'textarea',
        validation: ['required']
      },
      {
        name:  'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        name:  'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  }
];
