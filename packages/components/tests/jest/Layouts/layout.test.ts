import * as Ajv from 'ajv';

import ticketFormLayout from '../../DemoState/ticketFormLayout';
import { LayoutConfig, LayoutField } from '../../../src/layouts/Layout';

import * as layoutSchema from "../../../src/layouts/schema.json";

describe('>>> Layout Schema — valid', () => {
  const ajv = new Ajv();
  const schemaValidator = ajv.compile(layoutSchema);

  it('TicketForm valid layout config', () => {
    const valid = schemaValidator(ticketFormLayout);
    if (!valid) {
      // eslint-disable-next-line no-console
      console.error(schemaValidator.errors);
    }
    expect(valid).toEqual(true);
  });
});

describe('>>> Layout helper class', () => {
  const layouts = new LayoutConfig(ticketFormLayout);

  it('should find a layout by matching rules', () => {
    const match = layouts.getMatchingLayout({ department: 5 });
    expect(match).toEqual(layouts.layouts[0]);
  });

  it('should find layout without rules when no rules matched', () => {
    const match = layouts.getMatchingLayout({});
    expect(match).toEqual(layouts.layouts[layouts.layouts.length - 1]);
  });

  it('should get property of the field by path', () => {
    const match = layouts.getMatchingLayout({ department: 7 });
    expect(match.fields[1].get('dataSource.getOptions[0].label')).toEqual('Support');
  });
});

const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10);
const formattedFutureDate = `${futureDate.getFullYear()}-${futureDate.getMonth() + 1}-${futureDate.getDate()}`;

describe('>>> Layout Field validations', () => {
  it('should validate required fields', () => {
    const field = new LayoutField({
      name:       'ticket_field_1',
      type:       'number',
      validation: ['required', 'min:5', 'max:10']
    });
    expect(field.validate(8)).toBeUndefined();
    expect(field.validate(0)).toBe('Field is required');
  });

  it('should validate min/max for numeric field', () => {
    const field = new LayoutField({
      name:       'ticket_field_1',
      type:       'number',
      validation: ['required', 'min:5', 'max:10']
    });
    expect(field.validate(3)).toBe('Value should be greater then 5');
    expect(field.validate(15)).toBe('Value should be less then 10');
  });

  it('should validate minLength/maxLength of the text field', () => {
    const field = new LayoutField({
      name:       'password',
      type:       'password',
      validation: ['minLength:6', 'maxLength:8']
    });
    expect(field.validate('short')).toBe('You should specify at least 6 symbols');
    expect(field.validate('longer')).toBeUndefined();
    expect(field.validate('something')).toBe('You should specify up to 8 symbols');
  });

  it('should validate value by regex pattern', () => {
    const field = new LayoutField({
      name:       'password',
      type:       'password',
      validation: ['regex:[0-9A-Za-z]{6,}']
    });
    expect(field.validate('something')).toBeUndefined();
    expect(field.validate('something123')).toBeUndefined();
    expect(field.validate('123something')).toBeUndefined();
    expect(field.validate('somet112hing')).toBeUndefined();
    expect(field.validate('some_thing')).toBe('Value does not match the pattern "[0-9A-Za-z]{6,}"');
    expect(field.validate('some')).toBe('Value does not match the pattern "[0-9A-Za-z]{6,}"');
  });

  it('should validate date field by range', () => {
    const field = new LayoutField({
      name:       'birthday',
      type:       'date',
      validation: ['dateRange:1938-01-01:2000-12-31']
    });
    expect(field.validate(new Date())).toBe('Date should be between 1938-01-01 and 2000-12-31');
    expect(field.validate(new Date('1989-06-04'))).toBeUndefined();
  });

  it('should validate date field to be after now', () => {
    const field = new LayoutField({
      name:       'dueDate',
      type:       'date',
      validation: ['dateRange']
    });
    expect(field.validate(formattedFutureDate)).toBeUndefined();
    expect(field.validate('1989-06-04')).toBe('Date should be after now');
  });

  it('should validate date field to be before now', () => {
    const field = new LayoutField({
      name:       'ticket_field_77',
      type:       'date',
      validation: ['dateRange::2018-01-01']
    });
    expect(field.validate(formattedFutureDate)).toBe('Date should be before 2018-01-01');
    expect(field.validate('1989-06-04')).toBeUndefined();
  });

  it('should validate with custom message', () => {
    const field = new LayoutField({
      name:       'field',
      type:       'date',
      validation: [{ rule: 'dateRange', message: 'The date should be in a future' }]
    });
    expect(field.validate('1989-06-04')).toBe('The date should be in a future');
  });

  it('should validate with custom message containing params', () => {
    const field = new LayoutField({
      name:       'password',
      type:       'password',
      validation: [{ rule: 'regex:[0-9A-Za-z]{6,}', message: 'Value "{value}" does not match the pattern "{pattern}"' }]
    });
    expect(field.validate('some')).toBe('Value "some" does not match the pattern "[0-9A-Za-z]{6,}"');
  });
});
