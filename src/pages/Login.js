import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = (props) => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }

  return (
    <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type Password" id="password" name="password" />
            
            <button type="submit">Login</button>
        </form>

        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Here</button>
    </div>
  );
}