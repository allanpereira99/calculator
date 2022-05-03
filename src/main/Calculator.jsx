import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";
const initialState = {
  displaValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.addDigit = this.addDigit.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.clearMemory = this.clearMemory.bind(this);
  }
  clearMemory() {
    this.setState({ ...initialState });
  }
  addDigit(n) {
    if (n === "." && this.state.displaValue.includes(".")) {
      return;
    }
    const clearDisplay =
      this.state.displaValue === "0" || this.state.clearDisplay;
    const currentValor = clearDisplay ? "" : this.state.displaValue;
    const displaValue = currentValor + n;
    this.setState({ displaValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displaValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  }
  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;
      const values = [...this.state.values];
      let geval = eval;
      values[0] = geval(`${values[0]} ${currentOperation} ${values[1]}`);
      values[1] = 0;

      this.setState({
        displaValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displaValue} />
        <Button value="AC" click={this.clearMemory} triple operation="true" />
        <Button value="/" click={this.setOperation} operation="true" />
        <Button value="7" click={this.addDigit} />
        <Button value="8" click={this.addDigit} />
        <Button value="9" click={this.addDigit} />
        <Button value="*" click={this.setOperation} operation="true" />
        <Button value="4" click={this.addDigit} />
        <Button value="5" click={this.addDigit} />
        <Button value="6" click={this.addDigit} />
        <Button value="-" click={this.setOperation} operation="true" />
        <Button value="1" click={this.addDigit} />
        <Button value="2" click={this.addDigit} />
        <Button value="3" click={this.addDigit} />
        <Button value="+" click={this.setOperation} operation="true" />
        <Button value="0" click={this.addDigit} double />
        <Button value="." click={this.addDigit} />
        <Button value="=" click={this.setOperation} operation="true" />
      </div>
    );
  }
}
