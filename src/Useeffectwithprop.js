import React, { useEffect, useState } from "react";
import "./App.css";

function Useeffectwithprop(props) {
  useEffect(() => {
    console.log("Count Called");
  }, [props.count]);
  return (
    <div className="App">
      <h1>Count:{props.count}</h1>
      <h1>Data:{props.data}</h1>
    </div>
  );
}

export default Useeffectwithprop;
