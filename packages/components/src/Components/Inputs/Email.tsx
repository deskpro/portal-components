import Field from '../Field';

class Email extends Field {
  constructor(props) {
    super(props);
    this.type = 'email';
  }
}

export default Email;
