import userEvent from "@testing-library/user-event";
import React, { useEffect, useState, useRef } from "react";
import '../css/CharacterSheet.css'
import * as addFun from './AdditionalCharacterSheetFunctions.js'

export const CharacterSheet = (props) => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [textBoxPosition, setTextBoxPosition] = useState({ top: 0, left: 0 });
  const [numbersOnly, setNumbersOnly] = useState(false);
  const [value, setValue] = useState('');
  const [fieldName, setFieldName] = useState('');
  const charData = props.data.data;
  const myRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myRef.current && !myRef.current.contains(event.target)) {
        // Call your function here
        handleOutsideClick();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [myRef]);

  const handleOutsideClick = () => {
    setShowTextBox(false);
    setValue('');
    setNumbersOnly(false);
  };

  const handleClick = (event, text) => {
    if (text) {
      setNumbersOnly(true);
    }
    const { top, left } = event.target.getBoundingClientRect();
    setFieldName(event.target.getAttribute('value'));
    setTextBoxPosition({ top, left });
    setShowTextBox(true);
  };

  const handleChange = (e) => {
    if (numbersOnly) {
      const pattern = /^[0-9]*$/;
      const newValue = e.target.value;
      if (pattern.test(newValue)) {
        setValue(newValue);
      }
    }
    else {
      setValue(e.target.value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    charData[fieldName] = value;
    props.handleDataChange(charData)
    setShowTextBox(false);
  }

  return (
    <div className="main">
      {showTextBox && (
        <form onSubmit={handleSubmit} className="inputBox-form" ref={myRef} style={{
            position: "absolute",
            top: textBoxPosition.top + 30,
            left: textBoxPosition.left,
          }}>
          <input className="inputBox-input" type="text" pattern="[0-9]*" value={value} onChange={handleChange}/>
          <button className="inputBox-btn" type="submit">
          <svg height="30px" viewBox="0 0 24 24" width="30px"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#0084ff"></path></svg>
          </button>
        </form>
      )}
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
          <span>{addFun.calculateRO(charData.experience, charData.class)}</span>
          <span>RO</span>
        </div>
        <div className="column border1">
          <span>{addFun.calculateAtk(charData.experience, charData.class)}</span>
          <span>ATK</span>
        </div>
        <div className="column border1">
          <span>{charData.health_points}</span>
          <span>PŻ</span>
        </div>
        <div className="column border1">
          <span onClick={(event) => handleClick(event, true)} value='experience'>{charData.experience}</span>
          <span>PD</span>
        </div>
      </div>

      <p></p>

      <div className="row space-evenly">
        <div className="column min">
          <div className="row space-between border1">
            <span>Siła: {charData.strenght}</span>
            <span className="modifier">{addFun.calculateModifier(charData.strenght)}</span>
          </div>
          <div className="row space-between border1">
            <span>Zręczność: {charData.dexterity}</span>
            <span className="modifier">{addFun.calculateModifier(charData.dexterity)}</span>
          </div>
          <div className="row space-between border1">
            <span>Kondycja: {charData.condition}</span>
            <span className="modifier">{addFun.calculateModifier(charData.condition)}</span>
          </div>
          <div className="row space-between border1">
            <span>Inteligencja: {charData.inteligence}</span>
            <span className="modifier">{addFun.calculateModifier(charData.inteligence)}</span>
          </div>
          <div className="row space-between border1">
            <span>Mądrość: {charData.wisdom}</span>
            <span className="modifier">{addFun.calculateModifier(charData.wisdom)}</span>
          </div>
          <div className="row space-between border1">
            <span>Charyzma: {charData.charisma}</span>
            <span className="modifier">{addFun.calculateModifier(charData.charisma)}</span>
          </div>
        </div>
        <div className="column border1">
          <span onClick={handleClick}>Ekwipunek:</span>
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
          <span onClick={(event) => handleClick(event, true)} value='gold'>Złoto: {charData.gold}</span>
        </div>
      </div>

    </div>
  );
}