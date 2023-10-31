import React from "react";

const Login = ({ setEmail, setPassword, loginUser }) => {
  return (
    <div>
      <h1>Login User</h1>
      <div>
        <label>Your Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" />

        <label>Your Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>
      <button onClick={loginUser}>Login Button</button>
    </div>
  );
};

export default Login;
