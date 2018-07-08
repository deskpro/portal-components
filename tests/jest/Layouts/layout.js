import Ajv from 'ajv';

import ticketFormLayout from '../../../src/layouts/ticketFormLayout';
import layoutSchema from '../../../src/layouts/schema.json';
import { LayoutConfig } from '../../../src/layouts/Layout';

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
    expect(match.fields[1].get('options[0].label')).toEqual('Support');
  });
});
