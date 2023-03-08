import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

export const User_Panel = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const logout = () =>
  {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch(() => {
      console.log(error);
    });
  }

  return (
    <div className="auth-form-container">
        <h2>Logged as: <p className="blue">{user.email}</p></h2>

        <button className="link-btn" onClick={logout}>Logout</button>
    </div>
  );
}