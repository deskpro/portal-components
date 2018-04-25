import { configure } from '@storybook/react';

function loadStories() {
  require('../tests/storybook');
}

configure(loadStories, module);
