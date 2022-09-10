import React, { Component } from "react";

export default class addMinus extends Component {
  state = {
    num: 0,
  };

  addNum = () => {
    this.setState({ num: this.state.num + 1 });
  };
  minusNum = () => {
    this.setState({ num: this.state.num - 1 });
  };
  shouldComponentUpdate() {
    return this.state.num > 0;
  }
  render() {
    const myNum = this.state.num + " This my number";
    return (
      <div className="App">
        <h1>Number {myNum}</h1>
        <button onClick={this.addNum}>Add</button>
        <button onClick={this.minusNum}>Minus</button>
      </div>
    );
  }
}
