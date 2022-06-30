import { Component } from 'react';

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba','Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

class PersonalForm extends Component {
  render() {
    const { state: { name, email, cpf, address, city }, handleChange, handleOnBlur } = this.props;
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
              onChange={ handleChange }
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
              onChange={ handleChange }
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
              onChange={ handleChange }
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
            onChange={ handleChange }
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
              onBlur={ handleOnBlur }
              onChange={ handleChange }
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
              onChange={ handleChange }
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
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="Apartment">
            Apartment
            <input 
              type="radio"
              name="housingType"
              id="Apartment"
              value="Apartment"
              onChange={ handleChange }
            />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
