import Ajv from 'ajv';

import ticketFormLayout from '../../../src/layouts/ticketFormLayout';
import layoutSchema from '../../../src/layouts/schema.json';
import Layout from '../../../src/layouts/Layout';

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
  const layout = new Layout(ticketFormLayout);

  it('should find a layout by matching rules', () => {
    const match = layout.getMatchingLayout({ department: 5 });
    expect(match).toEqual(layout.layout[0]);
  });

  it('should find layout without rules when no rules matched', () => {
    const match = layout.getMatchingLayout({});
    expect(match).toEqual(layout.layout[layout.layout.length - 1]);
  });

  it('should get property of the field by path', () => {
    const match = layout.getMatchingLayout({ department: 7 });
    expect(match.fields[1].get('choices[0].title')).toEqual('Support');
  });
});
