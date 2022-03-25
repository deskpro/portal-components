export enum WidgetType {
  Text = 'text',
  TextArea = 'textarea',
  Choice = 'choice',
  MultiChoice = 'multichoice',
  Checkbox = 'checkbox',
  Toggle = 'toggle',
  Date = 'date',
  DateTime = 'datetime',
  Display = 'display',
  Hidden = 'hidden',
  Data = 'data',
  DataJson = 'datajson',
  DataList = 'datalist',
  Url = 'url',
  Number = 'number',
  Currency = 'currency',
  File = 'file',
  Javascript = 'javascript',
}

export type Field = {
  field_id: string;
  required: boolean;
  is_hidden: boolean;
  data: {
    widget_type: WidgetType;
    default_value: any;
  }
}

export type FormConfig = {
  department: string | number;
  fields: Field[];
}
