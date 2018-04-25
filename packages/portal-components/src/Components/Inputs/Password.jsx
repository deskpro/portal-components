import React from 'react';

import Input from './Input';

class Password extends Input
{
  constructor(props) {
    super(props);
    this.type = 'password';
  }

}

export default Password;