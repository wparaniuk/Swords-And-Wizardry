import './firebase.js';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

export function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('pre');
    const navigate = useNavigate();
    console.log(useNavigate());
    
    console.log('Sign-out successful');
    navigate('/');
  }).catch((error) => {
    // An error happened.
  });
};