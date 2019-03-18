import React, { Component } from 'react'
import Input from './components/Input/app'
import { connect } from 'react-redux'
import Result from './react-redux/Result/app'
import { multiplicar,sumar,valores } from './react-redux/Actions/Calculos/app'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      num1: 0,
      num2: 0,
      suma: 0,
      multiplicacion: 0,
      arryavalores: []
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }


  handleOnChange(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    },
      () => {
        const { num1, num2 } = this.state
        this.setState({
          suma: Number(num1) + Number(num2),
          multiplicacion: Number(num1) * Number(num2),
          arryavalores: [Number(num1)=== 0 ? null: Number(num1), Number(num2)=== 0 ? null: Number(num2)]
        },
          () => {
            const { multiplicar, sumar, valores } = this.props
            const { suma, multiplicacion, arryavalores } = this.state
            sumar(suma)
            multiplicar(multiplicacion)
            valores(arryavalores)
          })
      }
    )

  }

  render() {
    const { num1, num2 } = this.state
    return (
      <div className="App">
        <div className="form">
          <Input
            label={'Número 1'}
            type={'text'}
            change={this.handleOnChange}
            value={num1 === 0 ? '' : num1}
            name={'num1'}
            placeholder={'Número 1'} />
          <Input
            label={'Número 2'}
            type={'text'}
            change={this.handleOnChange}
            value={num2 === 0 ? '' : num2}
            name={'num2'}
            placeholder={'Número 2'} />
        </div>
        <Result/>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sumar,
  multiplicar,
  valores
}

export default connect(null, mapDispatchToProps)(App)

