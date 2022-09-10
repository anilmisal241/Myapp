import React, { useState } from "react";
import "./App.css";

function form() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [intrest, setIntrest] = useState("");
  function getFormData(e) {
    console.log(name, tnc, intrest);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <form onSubmit={getFormData}>
        {" "}
        <input
          type="text"
          placeholder=" Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setIntrest(e.target.value)}>
          <option> Select options</option>
          <option> Car1</option>
          <option> Car2</option>
          <option> Car3</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span> Terms and Conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default form;
