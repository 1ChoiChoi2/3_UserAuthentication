import React, { useState, useEffect } from "react";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Show Modal
  const showSignUpModal = () => {
    setModalLogin(false);
    setModalSignUp(!modalSignUp);
  };

  const showLoginModal = () => {
    setModalSignUp(false);
    setModalLogin(!modalLogin);
  };

  // Sign Up
  const signUpNewUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((err) => console.log(err));
  };

  // Login
  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((err) => console.log(err));
  };

  // Logout
  const logout = () => {
    signOut(auth);
    setUser({});
  };

  // Remain State Change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({}); // No user is logged in
      }
    });
  }, []);

  return (
    <div className="App">
      {user.email ? (
        <>
          <h1>{user.email}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={showSignUpModal}>Sign Up</button>
          <button onClick={showLoginModal}>Login</button>
          {modalSignUp && (
            <SignUp
              setEmail={setEmail}
              setPassword={setPassword}
              signUpNewUser={signUpNewUser}
            />
          )}
          {modalLogin && (
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              loginUser={loginUser}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
