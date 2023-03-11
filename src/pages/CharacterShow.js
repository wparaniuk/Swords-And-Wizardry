import React, { useEffect, useState } from "react";
import { ChooseClassRace } from './ChooseClassRace.js'
import { CharacterSheet } from './CharacterSheet.js'

export const CharacterShow = (props) => {
  const [missingChoices, setMissingChoices] = useState('');
  const [charData, setCharData] = useState(props.data);

  const handleDataChange = (statsFromChooseRace) => {
    setCharData(statsFromChooseRace);
  }

  useEffect(() => {
    const { class: charClass = "", race: charRace = "" } = charData;

    if (charClass === 'None' || charRace === 'None') {
      setMissingChoices('yes');
    }
    else {
      setMissingChoices('no');
      
      //props.onDataChange();
    }
    props.handleUpdate(charData);
  }, [charData, ]);

  return (
    <>
      {
        missingChoices === 'yes' ? <ChooseClassRace missingChoices={missingChoices} data={props} handleDataChange={handleDataChange} />
        : <CharacterSheet data={props} handleDataChange={handleDataChange} />
      }
      <button className="btn-in-form" onClick={() => {
        props.onPageSwitch('characterChooseMenu')
        props.onDataChange();
        }}>Powrót</button>
    </>
  );
}