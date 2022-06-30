import { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  housingType: '',
  resume: '',
  role: '',
  roleDescription: '',
}

class Form extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  validateAddress = (address) => address.replace(/[^\w\s]/gi, '');

  handleChange = ({ target }) => {
    const { name } = target;
    let { value } = target;
  
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);
    this.setState({ [name]: value });
  }
  
  handleOnBlur = ({ target }) => {
    const { name } = target;
    let { value } = target;
  
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.setState({ [name]: value });
  }
  
  render() {
    return (
     <form>
      <div>Registration</div>
      <PersonalForm
        handleChange={ this.handleChange }
        handleOnBlur={ this.handleOnBlur }
        state={ this.state }
      />
      <ProfessionalForm
        handleChange={ this.handleChange }
        handleOnBlur={ this.handleOnBlur }
        state={ this.state }
      />
     </form>
    );
  }
}

export default Form;