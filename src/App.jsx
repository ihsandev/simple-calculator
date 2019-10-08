import React from 'react';
import './App.css';
import Button from './components/Button'
import ClearButton from './components/ClearButton'
import Input from './components/Input'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      result: ""
    }
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    })
  }
  addToZeroEmpty = val => {
    if (this.state.input !== "") {
      console.log(val)
      this.setState({
        input: this.state.input + val
      })
    }
  }
  handleClear = () => {
    this.setState({
      input: "",
      result: ""
    })
  }
  handleEquals = () => {
    this.setState({
      result: eval(this.state.input).toFixed(2)
    })
  }

  render() {
    return (
      <div className="wrapper-calc">
        <div className="row">
          <Input input={this.state.input} />
        </div>
        <div className="row result">
          <span>=</span>
          <div>{this.state.result}</div>
        </div>
        <div className="row">
          <ClearButton onClear={this.handleClear}>Clear</ClearButton>
          <Button onHandleClick={this.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button onHandleClick={this.addToInput}>1</Button>
          <Button onHandleClick={this.addToInput}>2</Button>
          <Button onHandleClick={this.addToInput}>3</Button>
          <Button onHandleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button onHandleClick={this.addToInput}>4</Button>
          <Button onHandleClick={this.addToInput}>5</Button>
          <Button onHandleClick={this.addToInput}>6</Button>
          <Button onHandleClick={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <Button onHandleClick={this.addToInput}>7</Button>
          <Button onHandleClick={this.addToInput}>8</Button>
          <Button onHandleClick={this.addToInput}>9</Button>
          <Button onHandleClick={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button onHandleClick={this.addToInput}>+/-</Button>
          <Button onHandleClick={this.addToZeroEmpty}>0</Button>
          <Button onHandleClick={this.addToInput}>.</Button>
          <Button onHandleClick={this.handleEquals}>=</Button>
        </div>
      </div>
    );
  }
}

export default App;
