import React, { useState } from "react";
import "./App.css";
// import Button from "react-bootstrap/Button";

function App() {
  let [val, setVal] = useState();
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      {"  "}
      <br />
      <br />
      <h2>{val}</h2>
    </div>
  );
}

export default App;
