import Field from '../Field';

class Hidden extends Field {
  constructor(props) {
    super(props);
    this.type = 'hidden';
  }
}

export default Hidden;
