import React, { Component } from 'react'
import Input from './components/Input/app'
import { connect } from 'react-redux'
import Result from './components/Result/app'
import { showResult } from './components/ACTION/result/app'
import { multiplication } from './components/ACTION/multiplication/app'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
      multipli: 0
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
          result: Number(num1) + Number(num2),
          multipli: Number(num1) * Number(num2)
        },
          () => {
            const { showResult, multiplication } = this.props
            const { result, multipli } = this.state
            console.log('props', result, result, multipli )
            showResult(result)
            multiplication(multipli)
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
  showResult,
  multiplication
}

export default connect(null, mapDispatchToProps)(App)

