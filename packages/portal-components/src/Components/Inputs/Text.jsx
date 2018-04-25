import React from 'react';

import Input from './Input';

class Text extends Input
{
  constructor(props) {
    super(props);
    this.type = 'text';
  }

}

export default Text;