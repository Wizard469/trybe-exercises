import { Component } from 'react';

class DisplayFormData extends Component {
  render() {
  const {
    state: {
      name, email, cpf, address, city, state, housingType, resume, role, roleDescription
    }
  } = this.props;

    return (
      <div>
        <h2>Data sent</h2>
        <h3>Personal</h3>
        <div>
          <p>{ `Name: ${ name }` }</p>
          <p>{  `Email: ${ email }` }</p>
          <p>{ `CPF: ${ cpf }` }</p>
          <p>{ `Address: ${ address }` }</p>
          <p>{ `City: ${ city } - ${ state }` }</p>
          <p>{ `Housing Type: ${ housingType }` }</p>
        </div>

        <h3>Professional</h3>
        <div>
          <p>{ `Curriculum: ${ resume }` }</p>
          <p>{ `Role: ${ role }` }</p>
          <p>{ `Role description: ${ roleDescription }` }</p>
        </div>
      </div>
    );
  }
}

export default DisplayFormData;
