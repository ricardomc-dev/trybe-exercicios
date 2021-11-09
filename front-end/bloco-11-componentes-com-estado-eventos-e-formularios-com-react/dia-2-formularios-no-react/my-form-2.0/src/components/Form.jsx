import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <form>
        <fieldset>
          <label>
            Nome 
            <input type="text" name="nome" id="id-name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="id-email" />
          </label>
          <label>
            CPF
            <input type="number" name="cpf" id="id-cpf" />
          </label>
          <label>
            Endereço
            <textarea name="endereço" id="id-address" cols="30" rows="10"></textarea>
          </label>
          <label>
            Cidade
            <input type="text" name="cidade" id="id-city" />
          </label>
          <label>
            Estado
            <select name="estado" id="id-state">
              <option value="estado">Selecione o Estado</option> 
              <option value="ac">Acre</option>
            </select>
          </label>
        </fieldset>
        <fieldset>

        </fieldset>
      </form>
    );
  }
}
 
export default Form;