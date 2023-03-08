import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQVSbtQdJpkAL367aG4jfyu-Y80do1siI",
  authDomain: "dnd-app-e6448.firebaseapp.com",
  databaseURL: "https://dnd-app-e6448.firebaseio.com",
  projectId: "dnd-app-e6448",
  storageBucket: "dnd-app-e6448.appspot.com",
  messagingSenderId: "956423798217",
  appId: "1:956423798217:web:adad88ce811562958c3c18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);