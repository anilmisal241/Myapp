import React, { useState } from "react";

function Login() {
  //   const [user, setUser] = useState("");
  //   const [pass, setPass] = useState("");
  const [userErr, setUserErr] = useState("false");
  function LoginHandle(e) {
    e.preventDefault();
  }
  function userHandle(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={LoginHandle}>
        <input
          type="text"
          placeholder="Enter your userName"
          onChange={userHandle}
        />
        {userErr ? <span>Invalid Details</span> : null}
        <br />
        <br />
        <input type="text" placeholder="Enter your Password" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
