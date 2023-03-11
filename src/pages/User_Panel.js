import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc  } from "firebase/firestore";
import { db } from '../scripts/Firebase.js';
import { CharacterChooseMenu } from '../pages/CharacterChooseMenu.js';
import { CharacterShow } from '../pages/CharacterShow.js';
import { CharacterCreate } from '../pages/CharacterCreate.js';

export const User_Panel = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [currentPage, setCurrentPage] = useState('characterChooseMenu');
  const [data, setData] = useState(null);
  const [dataReload, setDataReload] = useState(null);

  const toggledataReload = (dataReload) => {
    setDataReload(dataReload);
  }

  const toggleCurrentPage = (currentPage) => {
    setCurrentPage(currentPage);
  }

  //Check if character exists in 'characters' collection for specific user.email
  useEffect(() =>{
    const unsubscribe = getDoc(doc(db, "characters", user.email)).then(docSnap => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        setData('');
      }
    })
    unsubscribe;
  }, [dataReload,]);

  const handleUpdate = async (newData) => {
    const docRef = doc(db, "characters", user.email);
    await updateDoc(docRef, newData);
  };

  const logout = () =>
  {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch(() => {
      console.log("Sign out error: " + error);
    });
  }

  return (
    <div className="auth-form-container">
        <h2>Zalogowany jako: <span className="blue">{user.email}</span></h2>

        {
          currentPage === 'characterChooseMenu' && data != null ? <CharacterChooseMenu onPageSwitch={toggleCurrentPage} data={data} />
          : currentPage === 'characterChooseMenu' && data === null ? <></>
          : currentPage === 'characterCreate' ? <CharacterCreate onPageSwitch={toggleCurrentPage} db={db} onDataChange={toggledataReload} />
          : currentPage === 'characterShow' ? <CharacterShow onPageSwitch={toggleCurrentPage} data={data} handleUpdate={handleUpdate} onDataChange={toggledataReload}  />
          : console.log('Error: not programmed currentPage: ' + currentPage)
        }

        <button className="link-btn" onClick={logout}>Wyloguj</button>
    </div>
  );
}