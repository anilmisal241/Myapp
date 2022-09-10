import React from "react";
class student extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
    alert("componentWillUnmount called");
  }
  render() {
    return <h1>Student name is Anil</h1>;
  }
}
export default student;
