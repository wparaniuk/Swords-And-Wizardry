import './Firebase.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom"

const auth = getAuth();

export function check_session(){
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
      if (user) {
          //window.location.href = "./../user_panel.js";
          console.log(user);
          navigate("/User_Panel")
      //var user = firebase.auth().currentUser;
      }
      else {
      // User is signed out
      console.log("not logged in");
      }
  });
}

export function login(){
  var email_val, email = document.getElementById("email_field");
  var password_val, password = document.getElementById("password_field");
  if (email != null){
    email_val = email.value;
  }
  if (password != null){
      password_val = password.value;
  }

  signInWithEmailAndPassword(auth, email_val, password_val)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Signed in")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function register() {
    window.location.href = "register.html"; 
}