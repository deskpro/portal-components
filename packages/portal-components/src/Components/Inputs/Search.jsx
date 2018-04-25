import React from 'react';

import Input from './Input';

class Search extends Input
{
  constructor(props) {
    super(props);
    this.type = 'search';
  }

}

export default Search;