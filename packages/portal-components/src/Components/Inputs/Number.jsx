import React from 'react';

import Input from './Input';

class Number extends Input
{
  constructor(props) {
    super(props);
    this.type = 'number';
  }

}

export default Number;