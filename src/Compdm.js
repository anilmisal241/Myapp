import React, { Component } from "react";

export default class compdm extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "Anil",
    };
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("Render");
    return (
      <div>
        <h1>welcome</h1>
        <button onClick={() => this.setState({ name: "Misal" })}>
          Update Name
        </button>
      </div>
    );
  }
}
