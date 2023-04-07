import React, { useEffect, useState, useRef } from "react";
import '../css/CharacterSheet.css'
import * as addFun from './AdditionalCharacterSheetFunctions.js'
import { SPELLS_LIST } from "./SpellsList";
import { showSpellDesc } from "./SpellsDescriptions";
import ShortTextBoxModal from "./elements/ShortTextBoxModal";
import PromptModal from "./elements/PromptModal";

export const CharacterSheet = (props) => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [promptModalProps, setPromptModalProps] = useState(false);
  const [showSpellbox, setShowSpellbox] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState('');
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
      }};
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [myRef]);

  //Handle remove item after pressing "-" sign on list eg. in equipment
  const handleRemoveItem = async (event, index, field_in_firebase) => {
    try {

      const userResponse = await new Promise((resolve, reject) => {
        setShowPromptModal(true);
        setPromptModalProps({
          message: charData[field_in_firebase][index],
          onYes: () => resolve(true),
          onNo: () => resolve(false),
        });
      });

      if (userResponse === true) {
        // continue with the logic after user confirms
        const myArray = charData[field_in_firebase]
        const newArray = myArray.slice(0, index).concat(myArray.slice(index + 1));
        charData[field_in_firebase] = newArray
        props.handleDataChange(charData);
      } else {
        // handle the case when user cancels
        setShowPromptModal(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setShowPromptModal(false);
    }
  };

  //Hide modal if clicked outside div
  const handleOutsideClick = () => {
    setShowTextBox(false);
    setShowSpellbox(false);
    setValue('');
    setNumbersOnly(false);
  };

  //Handle data change on editable fields eg. HP or Gold
  const handleEditClick = (event, text) => {
    if (text) setNumbersOnly(true);
    else setNumbersOnly(false);
    const { top, left } = event.target.getBoundingClientRect();
    setFieldName(event.target.getAttribute('value'));
    setTextBoxPosition({ top: top + window.scrollY, left });
    setShowTextBox(true);
  };

  //Show modal with spell description
  const handleShowSpellClick = (event, spellDesc) => {
    const { top, left } = event.target.getBoundingClientRect();
    setSelectedSpell(spellDesc);
    setShowSpellbox(true);
    setTextBoxPosition({ top: top + window.scrollY, left });
  };

  //Handle change values of textbox and/or check if it's numbers
  const handleChange = (e) => {
    if (numbersOnly) {
      const pattern = /^[0-9]*$/;
      const newValue = e.target.value;
      if (pattern.test(newValue)) setValue(newValue);
    }
    else {
      setValue(e.target.value)
    }
  };

  //Handle submit data from form to firebase using props.handleDataChange()
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (value === '') return;
    if (Array.isArray(charData[fieldName])) {
      charData[fieldName].push(value);
    }
    else {
      charData[fieldName] = value;
    }
    props.handleDataChange(charData);
    setShowTextBox(false);
    setValue('');
  }

  return (
    <div className="main">
      {showTextBox && ( 
        <ShortTextBoxModal /* Show modal for input text */
        handleSubmit={handleSubmit}
        value={value}
        handleChange={handleChange}
        textBoxPosition={textBoxPosition}
        ref={myRef}
      />
      )}
      {showPromptModal && (
      <PromptModal textBoxPosition={textBoxPosition} {...promptModalProps}
      />
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
          <span onClick={(event) => handleEditClick(event, true)} value='health_points'>{charData.health_points}</span>
          <span>PŻ</span>
        </div>
        <div className="column border1">
          <span onClick={(event) => handleEditClick(event, true)} value='experience'>{charData.experience}</span>
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
          <span className="noBreak" onClick={(event) => handleEditClick(event, false)} value='equipment'>Ekwipunek:
          <svg value='equipment' fill="#00ff00" viewBox="0 0 20 20" height='20px'><path value='equipment' d="M11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17Z"></path></svg>
          </span>
          {
          charData.equipment.map((item, index_eq) => (
            <span className="noBreak" key={index_eq}>{item}
            <svg onClick={(event) => handleRemoveItem(event, index_eq, "equipment")} fill="#ff0000" viewBox="-50 -50 450 500" height='20px'><path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774 C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936 C441.333,189.472,459.308,207.456,459.313,229.648z"></path></svg>
            </span>
          ))
          }
        </div>
      </div>

      <p></p>

      <div className="row space-evenly">
        <div className="column border1">
          <span>Zaklęcia:</span>
          {
            charData.class === 'Kapłan' || charData.class === 'Mag' ? (
              SPELLS_LIST[charData.class][addFun.calculateLevel(charData.experience, charData.class)-1].map((spell, index) => (
                <span key={index} onClick={
                  (event) => 
                  handleShowSpellClick(event, showSpellDesc(spell))
                }>{spell}</span>
              ))
            ) : null
          }
        </div>

        {showSpellbox && (
        <div className="spellBox" ref={myRef} style={{
          position: "absolute",
          top: '50',
          left: '50',
          whiteSpace: "pre-line" //
        }}>
          <span>{selectedSpell}</span>
        </div>
      )}

        <div className="column border1">
        <span className="noBreak" onClick={(event) => handleEditClick(event, false)} value='other'>Inne:
          <svg value='other' fill="#00ff00" viewBox="0 0 20 20" height='20px'><path value='other' d="M11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17Z"></path></svg>
          </span>
          {
          charData.other.map((item_other, index_other) => (
            <span className="" key={index_other}>{item_other}
            <svg onClick={(event) => handleRemoveItem(event, index_other, "other")} fill="#ff0000" viewBox="-50 -120 550 500" height='20px'><path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774 C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936 C441.333,189.472,459.308,207.456,459.313,229.648z"></path></svg>
            </span>
          ))
          }
        </div>
      </div>

      <p></p>

      <div className="row space-evenly">
        <div className="row border1">
          <span>Języki:</span>
        </div>
        <div className="border1">
          <span onClick={(event) => handleEditClick(event, true)} value='gold'>Złoto: {charData.gold}</span>
        </div>
      </div>

    </div>
  );
}