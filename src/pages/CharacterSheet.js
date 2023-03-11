import React, { useEffect, useState } from "react";
import '../css/CharacterSheet.css'
import * as addFun from './AdditionalCharacterSheetFunctions.js'

export const CharacterSheet = (props) => {
  const [charData, setCharData] = useState(props.data.data);

  useEffect(() => {
    //const updatedCharData = { ...charData, class: charClass, race: charRace};
    //setCharData(updatedCharData);
  }, [])

  return (
    <div className="main">
      <div className="row space-evenly">
        <div className="column border1">
          <span>{charData.name}</span>
          <span>Imię</span>
        </div>
        <div className="column border1">
          <span>{addFun.calculateLevel(charData.experience, charData.class)}</span>
          <span>Poziom</span>
        </div>
      </div>

      <p></p>

      <div className="row space-evenly">
        <div className="column border1">
          <span>{charData.class}</span>
          <span>Klasa</span>
        </div>
        <div className="column border1">
          <span>{charData.race}</span>
          <span>Rasa</span>
        </div>
      </div>

      <p></p>

      <div className="row space-evenly">
        <div className="column border1">
          <span>{charData.armor_class}</span>
          <span>KP</span>
        </div>
        <div className="column border1">
          <span>{charData.defensive_throw}</span>
          <span>RO</span>
        </div>
        <div className="column border1">
          <span>{charData.health_points}</span>
          <span>PŻ</span>
        </div>
        <div className="column border1">
          <span>{charData.experience}</span>
          <span>PD</span>
        </div>
      </div>

      <p></p>

      <div className="row space-evenly">
        <div className="column min">
          <div className="row space-between border1">
            <span>Siła: {charData.strenght}</span>
            <span>{addFun.calculateModifier(charData.strenght)}</span>
          </div>
          <div className="row space-between border1">
            <span>Zręczność: {charData.dexterity}</span>
            <span>{addFun.calculateModifier(charData.dexterity)}</span>
          </div>
          <div className="row space-between border1">
            <span>Kondycja: {charData.condition}</span>
            <span>{addFun.calculateModifier(charData.condition)}</span>
          </div>
          <div className="row space-between border1">
            <span>Inteligencja: {charData.inteligence}</span>
            <span>{addFun.calculateModifier(charData.inteligence)}</span>
          </div>
          <div className="row space-between border1">
            <span>Mądrość: {charData.wisdom}</span>
            <span>{addFun.calculateModifier(charData.wisdom)}</span>
          </div>
          <div className="row space-between border1">
            <span>Charyzma: {charData.charisma}</span>
            <span>{addFun.calculateModifier(charData.charisma)}</span>
          </div>
        </div>
        <div className="column border1">
          <span>Ekwipunek:</span>
        </div>
      </div>

      <p></p>

      <div className="row space-evenly">
        <div className="column border1">
          <span>Zaklęcia:</span>
        </div>
        <div className="column border1">
          <span>Inne:</span>
        </div>
      </div>

      <p></p>

      <div className="row space-evenly">
        <div className="row border1">
          <span>Języki:</span>
        </div>
        <div className="border1">
          <span>Złoto: {charData.gold}</span>
        </div>
      </div>

    </div>
  );
}