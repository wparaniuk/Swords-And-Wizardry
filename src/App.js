import React, { useState, useEffect } from "react";
import "./App.css";
import { Login } from "./pages/Login.js";
import { Register } from "./pages/Register.js";
import { User_Panel } from "./pages/User_Panel.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './scripts/Firebase.js';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setCurrentForm('logged');
      }
      else {
        // User is signed out
        setCurrentForm('login');
      }
      });
      return unsubscribe;
    }, []);

  return (
    <div className="App">
      {
        currentForm === "register" ? <Register onFormSwitch={toggleForm} />
        : currentForm === "logged" ? <User_Panel />
        : currentForm === "login" ? <Login onFormSwitch={toggleForm} />
        : console.log('Error: not programmed currentForm:' + currentForm)
      }
    </div>
  );
}
export default App;