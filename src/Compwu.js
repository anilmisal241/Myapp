import React, { Component } from "react";
import "./App.css";
import Student from "./Student";

export default class compwu extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Welocome component Mount</h1>
        {this.state.show ? <Student /> : <h2>Component Removed</h2>}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
      </div>
    );
  }
}
