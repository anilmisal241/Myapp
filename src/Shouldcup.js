import React, { Component } from "react";
import "./App.css";

export default class shouldcup extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  shouldComponentUpdate() {
    console.log("Component Update");
    if (this.state.count < 10 && this.state.count > 3) {
      return true;
    }
  }
  render() {
    return (
      <div className="App">
        <h1>ShouldComponentUpdate {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          update
        </button>
      </div>
    );
  }
}
