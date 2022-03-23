import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = { numeroDeCliques1: 0, numeroDeCliques2: 0, numeroDeCliques3: 0  }
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }
  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }), () => {
      console.log(`Botão 1 = ${this.getBtnColor(this.state.numeroDeCliques1)}`)
    })
  }

  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }), () => {
      console.log(`Botão 2 = ${this.getBtnColor(this.state.numeroDeCliques2)}`)
    })
  }

  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }), () => {
      console.log(`Botão 3 = ${this.getBtnColor(this.state.numeroDeCliques3)}`)
    })
  }

  getBtnColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <div>
        <button 
        onClick={this.handleClick1}
        style={{ backgroundColor: this.getBtnColor(this.state.numeroDeCliques1) }}
        > Botão 1 | {this.state.numeroDeCliques1}</button>

        <button 
        onClick={this.handleClick2}
        style={{ backgroundColor: this.getBtnColor(this.state.numeroDeCliques2) }}
        > Botão 2 | {this.state.numeroDeCliques2}</button>
        <button 
        onClick={this.handleClick3}
        style={{ backgroundColor: this.getBtnColor(this.state.numeroDeCliques3) }}
        > Botão 3 | {this.state.numeroDeCliques3}</button>
      </div>
    )
  }
}


export default App;
