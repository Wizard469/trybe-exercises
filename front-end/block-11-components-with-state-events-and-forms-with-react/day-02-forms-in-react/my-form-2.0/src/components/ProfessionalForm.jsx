import { Component } from 'react';

class ProfessionalForm extends Component {
  render() {
    const { handleChange, state: { resume, role, roleDescription } } = this.props;
    return (
      <fieldset>
        <legend>Professional data</legend>
        <div className="container">
          <label htmlFor="resume">
            Curriculum resume:
            <textarea
            name="resume"
            value={ resume }
            maxlength={1000}
            required
            onChange={ handleChange }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="role">
            Role:
            <input
              type="text"
              name="role"
              id="role"
              value={ role }
              maxlength={40}
              required
              onChange={ handleChange }
              onMouseEnter={ () => {
                global.alert('Preencha com cuidado esta informação.')
              }
            }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="roleDescription">
              Role description:
              <textarea
              name="roleDescription"
              value={ roleDescription }
              maxlength={500}
              required
              onChange={ handleChange }
              />
            </label>
        </div>
      </fieldset>
    );
  }
}

export default  ProfessionalForm;
