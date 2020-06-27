import { List } from 'immutable';

export const recursiveDropdownChoices = opts => opts.map(option => ({
  value:    option.get('id'),
  label:    option.get('title'),
  children: recursiveDropdownChoices(option.get('children', new List()).toArray())
}));
