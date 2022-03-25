import { List } from 'immutable';

export const recursiveDropdownChoices = opts => opts.map(option => ({
  value:    option.get('id'),
  label:    option.get('title'),
  children: recursiveDropdownChoices(option.get('children', List()).toArray())
}));

export const recursiveDropdownChoicesWithSorting = opts => opts
  .sort((a, b) => {
    if (a.get('display_order') < b.get('display_order')) {
      return -1;
    }
    if (a.get('display_order') > b.get('display_order')) {
      return 1;
    }
    if (a.get('display_order') === b.get('display_order')) {
      if (a.get('id') < b.get('id')) {
        return -1;
      }
      if (a.get('id') > b.get('id')) {
        return 1;
      }
    }
    return 0;
  })
  .map(option => ({
    value:    option.get('id'),
    label:    option.get('title'),
    children: recursiveDropdownChoicesWithSorting(option.get('children', List()).toArray())
  }));
