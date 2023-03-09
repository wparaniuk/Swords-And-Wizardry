import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

export const CharacterCreate = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //Create character data
    var char = Math.floor(Math.random() * 15) + 3;
    var con = Math.floor(Math.random() * 15) + 3;
    var dex = Math.floor(Math.random() * 15) + 3;
    var int = Math.floor(Math.random() * 15) + 3;
    var str = Math.floor(Math.random() * 15) + 3;
    var wis = Math.floor(Math.random() * 15) + 3;
    var char = Math.floor(Math.random() * 15) + 3;
    var gold = (Math.floor(Math.random() * 15) + 3) * 10;
    var hp = Math.floor(Math.random() * 5) + 1;
    var ac = 10;
    var dex_modifier = "0"; var str_modifier = "0"; var atk_modifier = "0";
    con <= 8 ? hp = hp - 1 : con >= 13 ? hp = hp + 1 : hp // Condition modifier
    if (dex <= 8) { // Dexterity modifier
        ac = ac - 1;
        dex_modifier = "-1";
    } else if (dex >= 13) {
        ac = ac + 1;
        dex_modifier = "+1";
    }
    if (str <= 8) { // Strenght modifier
        ac = ac - 1;
        str_modifier = "-1";
        atk_modifier = "-1";
    } else if (str >= 13) {
        ac = ac + 1;
        str_modifier = "+1";
        atk_modifier = "+1";
    }
    //Create document in collection
    setDoc(doc(props.db, "characters", user.email), {
      //Assign character data
      name: name,
      armor_class: ac,
      class: "None",
      defensive_throw: 0,
      condition: con,
      dexterity: dex,
      dex_modifier: dex_modifier,
      str_modifier: str_modifier,
      atk_modifier: atk_modifier,
      inteligence: int,
      charisma: char,
      strenght: str,
      wisdom: wis,
      experience: 0,
      gold: gold,
      health_points: hp,
      level: 1,
      race: "None",
      weapon: "None",
      uid: user.uid,
    }).then(function() {
      //Character created
      console.log('Created');
      props.onDataChange('reload')
      props.onPageSwitch('characterChooseMenu');
    }).catch(function (error) {
      // Handle Errors here.
      console.log("error.message " + error.message);
      console.log("error.code " + error.code);
      window.alert(error.code)
    });
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="" placeholder="Character Name" id="name" name="name" />

          <button className="btn-in-form" type="submit">Create Character</button>
      </form>
      <button className="btn-in-form" onClick={() => props.onPageSwitch('characterChooseMenu')}>Cancel and Go Back</button>
    </>
  );
}