import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.addDigit = this.addDigit.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.clearMemory = this.clearMemory.bind(this);
  }
  clearMemory() {
    console.log("clear");
  }
  addDigit(n) {
    console.log(n);
  }
  setOperation(op) {
    console.log(op);
  }

  render() {
    return (
      <div className="calculator">
        <Display value="100" />
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
