import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == "" || repeat_password == "") {
      window.alert('Passwords cannot be empty.')
    }
    else {
      if (password == repeat_password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
        }).catch(function (error) {
          // Handle Errors here.
          console.log("error.message " + error.message);
          console.log("error.code " + error.code);
          window.alert(error.code)
        });
      }
      else {
        window.alert('Passwords must be the same.')
      }
    }
      
    }

  return (
    <div className="auth-form-container">
        <h2>Register</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">Repeat Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type Password" id="password" name="password" />

            <label htmlFor="repeat_password">Password:</label>
            <input value={repeat_password} onChange={(e) => setRepatPassword(e.target.value)} type="password" placeholder="Repeat Password" id="repeat_password" name="repeat_password" />
            
            <button className="btn-in-form" type="submit">Register</button>
        </form>

        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login Here</button>
    </div>
  );
}