import React from "react";

const SignUp = ({ setEmail, setPassword, signUpNewUser }) => {
  return (
    <div>
      <h1>Sign Up User</h1>
      <div>
        <label>Your Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" />

        <label>Your Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>
      <button onClick={signUpNewUser}>Sign Up Button</button>
    </div>
  );
};

export default SignUp;
