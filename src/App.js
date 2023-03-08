import React, { useState } from "react";
import "./App.css";
import { Login } from "./pages/Login.js";
import { Register } from "./pages/Register.js";
import { User_Panel } from "./pages/User_Panel.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './scripts/Firebase.js';

function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  //onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is logged in
      setCurrentForm('logged');
      console.log('logged in app.js');
    }
    else {
      // User is signed out
      () => setCurrentForm('login');
      console.log("not logged in app.js");
    }
  //});

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