import React, { Component } from "react";

export default class Const extends Component {
  constructor() {
    super();
    this.state = {
      data: "Anil",
    };
  }
  render() {
    console.log("Render", this.props);
    return (
      <div>
        <h1> This is class Component with constructor {this.state.data}</h1>
      </div>
    );
  }
}
