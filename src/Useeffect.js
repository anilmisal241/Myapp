import React, { useEffect, useState } from "react";
import "./App.css";

function useeffect() {
  const [name, setName] = useState("Anil");
  useEffect(() => {
    console.log("useEffect is called");
  });
  return (
    <div className="App">
      <h1>Welcome {name}</h1>
      <button
        onClick={() => {
          setName("Misal");
        }}
      >
        Update
      </button>
    </div>
  );
}

export default useeffect;
