export default [
  {
    rules:  [{ field: 'department', op: 'eq', value: 5 }],
    fields: [
      {
        field: 'person',
        label: 'Person',
        type:  'text'
      },
      {
        field:   'department',
        label:   'Department',
        type:    'choice',
        choices: [
          { id: 1, title: 'Support' },
          { id: 2, title: 'Sales' },
          { id: 3, title: 'Support' },
          { id: 4, title: 'Sales' },
          { id: 5, title: 'Widgets' },
          { id: 6, title: 'Regulation and Control of Magical Creatures' },
          { id: 7, title: 'Regulation' },
          { id: 8, title: 'Control' },
          { id: 9, title: 'Hotdogs' }
        ]
      },
      {
        field: 'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        field:        'ticket_field_6',
        label:        'Widget Description',
        type:         'textarea',
        defaultValue:
          'Assumenda alias vel recusandae in. Eaque eum excepturi quos nam nam. ' +
          'Similique consequuntur ea suscipit et vero at odit. ' +
          'Asperiores voluptatem illo reprehenderit enim delectus dolorum iure.'
      },
      {
        field:        'ticket_field_7',
        label:        'Desired Sizes',
        type:         'checkbox',
        choices:      [{ id: 8, title: 'Small' }, { id: 9, title: 'Medium' }, { id: 10, title: 'Large' }],
        defaultValue: [10]
      },
      {
        field:       'ticket_field_11',
        label:       'Manufacture Date',
        description: 'A custom field',
        type:        'date'
      },
      {
        field: 'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        field: 'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  },
  {
    rules:  [{ field: 'department', op: 'eq', value: 7 }],
    fields: [
      {
        field: 'person',
        label: 'Person',
        type:  'text'
      },
      {
        field:   'department',
        label:   'Department',
        type:    'choice',
        choices: [
          { id: 1, title: 'Support' },
          { id: 2, title: 'Sales' },
          { id: 3, title: 'Support' },
          { id: 4, title: 'Sales' },
          { id: 5, title: 'Widgets' },
          { id: 6, title: 'Regulation and Control of Magical Creatures' },
          { id: 7, title: 'Regulation' },
          { id: 8, title: 'Control' },
          { id: 9, title: 'Hotdogs' }
        ]
      },
      {
        field: 'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        field:       'ticket_field_12',
        label:       'Reason for Complaint',
        description: 'A custom  field',
        type:        'radio',
        choices:     [
          { id: 13, title: 'Nuisance' },
          { id: 14, title: 'Dangerous' },
          { id: 15, title: 'Smelly' },
          { id: 16, title: 'Ugly' },
          { id: 17, title: 'Mean' },
          { id: 18, title: 'Other' }
        ]
      },
      {
        field:       'ticket_field_19',
        label:       'Suggested Actions',
        description: 'A custom  field',
        type:        'multichoice',
        choices:     [
          { id: 20, title: 'Eviction' },
          { id: 21, title: 'Shun' },
          { id: 22, title: 'Fire them off to the moon' },
          { id: 23, title: 'Strongly worded letter' }
        ],
        defaultValue: [23]
      },
      {
        field: 'message',
        label: 'Message',
        type:  'textarea'
      },
      {
        field: 'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        field: 'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  },
  {
    rules:  [{ field: 'department', op: 'eq', value: 8 }],
    fields: [
      {
        field: 'person',
        label: 'Person',
        type:  'text'
      },
      {
        field:   'department',
        label:   'Department',
        type:    'choice',
        choices: [
          { id: 1, title: 'Support' },
          { id: 2, title: 'Sales' },
          { id: 3, title: 'Support' },
          { id: 4, title: 'Sales' },
          { id: 5, title: 'Widgets' },
          { id: 6, title: 'Regulation and Control of Magical Creatures' },
          { id: 7, title: 'Regulation' },
          { id: 8, title: 'Control' },
          { id: 9, title: 'Hotdogs' }
        ]
      },
      {
        field: 'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        field:       'ticket_field_12',
        label:       'Reason for Complaint',
        description: 'A custom  field',
        type:        'radio',
        choices:     [
          { id: 13, title: 'Nuisance' },
          { id: 14, title: 'Dangerous' },
          { id: 15, title: 'Smelly' },
          { id: 16, title: 'Ugly' },
          { id: 17, title: 'Mean' },
          { id: 18, title: 'Other' }
        ]
      },
      {
        field:       'ticket_field_19',
        label:       'Suggested Actions',
        description: 'A custom  field',
        type:        'multichoice',
        choices:     [
          { id: 20, title: 'Eviction' },
          { id: 21, title: 'Shun' },
          { id: 22, title: 'Fire them off to the moon' },
          { id: 23, title: 'Strongly worded letter' }
        ],
        defaultValue: [23]
      },
      {
        field: 'message',
        label: 'Message',
        type:  'textarea'
      },
      {
        field: 'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        field: 'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  },
  {
    rules:  [{ field: 'department', op: 'eq', value: 9 }],
    fields: [
      {
        field: 'person',
        label: 'Person',
        type:  'text'
      },
      {
        field:   'department',
        label:   'Department',
        type:    'choice',
        choices: [
          { id: 1, title: 'Support' },
          { id: 2, title: 'Sales' },
          { id: 3, title: 'Support' },
          { id: 4, title: 'Sales' },
          { id: 5, title: 'Widgets' },
          { id: 6, title: 'Regulation and Control of Magical Creatures' },
          { id: 7, title: 'Regulation' },
          { id: 8, title: 'Control' },
          { id: 9, title: 'Hotdogs' }
        ]
      },
      {
        field: 'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        field:       'ticket_field_24',
        label:       'Hotdog Kind',
        description: 'A custom  field',
        type:        'choice',
        choices:     [
          { id: 25, title: 'Normal' },
          {
            id:       26,
            title:    'German',
            children: [
              { id: 28, title: 'Extrawurst' },
              {
                id:       29,
                title:    'Frankfurter',
                children: [{ id: 31, title: 'W\u00fcrstchen' }]
              }
            ]
          },
          { id: 27, title: 'Bratwurst' },
          { id: 30, title: 'Rindswurst' },
          { id: 32, title: 'Large' }
        ]
      },
      {
        field:       'ticket_field_33',
        label:       'Delivery Time',
        description: 'A custom  field',
        type:        'datetime'
      },
      {
        field: 'message',
        label: 'Message',
        type:  'textarea'
      },
      {
        field: 'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        field: 'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  },
  {
    fields: [
      {
        field: 'person',
        label: 'Person',
        type:  'text'
      },
      {
        field:   'department',
        label:   'Department',
        type:    'choice',
        choices: [
          { id: 1, title: 'Support' },
          { id: 2, title: 'Sales' },
          { id: 3, title: 'Support' },
          { id: 4, title: 'Sales' },
          { id: 5, title: 'Widgets' },
          { id: 6, title: 'Regulation and Control of Magical Creatures' },
          { id: 7, title: 'Regulation' },
          { id: 8, title: 'Control' },
          { id: 9, title: 'Hotdogs' }
        ]
      },
      {
        field: 'subject',
        label: 'Subject',
        type:  'text'
      },
      {
        field:       'ticket_field_24',
        label:       'Hotdog Kind',
        description: 'A custom  field',
        type:        'choice',
        choices:     [
          { id: 25, title: 'Normal' },
          {
            id:       26,
            title:    'German',
            children: [
              { id: 28, title: 'Extrawurst' },
              {
                id:       29,
                title:    'Frankfurter',
                children: [{ id: 31, title: 'W\u00fcrstchen' }]
              }
            ]
          },
          { id: 27, title: 'Bratwurst' },
          { id: 30, title: 'Rindswurst' },
          { id: 32, title: 'Large' }
        ]
      },
      {
        field:       'ticket_field_33',
        label:       'Delivery Time',
        description: 'A custom  field',
        type:        'datetime'
      },
      {
        field: 'message',
        label: 'Message',
        type:  'textarea'
      },
      {
        field: 'attachments',
        label: 'Attachments',
        type:  'file'
      },
      {
        field: 'labels',
        label: 'Labels',
        type:  'text'
      }
    ]
  }
];
