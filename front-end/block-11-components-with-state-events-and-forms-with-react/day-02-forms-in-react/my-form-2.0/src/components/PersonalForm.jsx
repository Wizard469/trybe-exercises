import { Component } from 'react';

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba','Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  housingType: '',
}

class PersonalForm extends Component {
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
    const { name, email, cpf, address, city } = this.state;
    return (
      <fieldset>
        <legend>Personal data</legend>
        <div className="container">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              value={ name }
              maxLength={40}
              required
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              name="email"
              id="email"
              value={ email }
              maxLength={50}
              required
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="cpf">
            CPF:
            <input
              type="text"
              name="cpf"
              id="cpf"
              value={ cpf }
              maxLength={11}
              required
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="address">
            Address:
          <input type="text"
            name="address"
            id="address"
            value={ address }
            maxLength={200}
            required
            onChange={ this.handleChange }
          />
          </label>
        </div>
        <div className="container">
          <label htmlFor="city">
            City:
            <input
              type="text"
              name="city"
              id="city"
              value={ city }
              maxLength={28}
              required
              onBlur={ this.handleOnBlur }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="state">
            State:
            <select
              name="state"
              id="state"
              required
              onChange={ this.handleChange }
              defaultValue=""
            >
              <option value="">Select</option>
              {
                states.map((state, key) => (
                  <option key={ key }>{ state }</option>
                ))
              }
            </select>
          </label>
        </div>
        <div className="container">
          <label htmlFor="house">
            House
            <input 
              type="radio"
              name="housingType"
              id="house"
              required
              value="House"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="Apartment">
            Apartment
            <input 
              type="radio"
              name="housingType"
              id="Apartment"
              value="Apartment"
              onChange={ this.handleChange }
            />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
