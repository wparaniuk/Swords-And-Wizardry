import React, { useEffect, useState } from "react";

const Dropdown = ({ options, value, onChange }) => {
  return (
    <p>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </p>
  );
};

export const ChooseClassRace = (props) => {
  const [charClass, setCharClass] = useState('Wojownik');
  const [charRace, setCharRace] = useState('Człowiek');
  const [charData, setCharData] = useState(props.data.data);
  const classes = ['Wojownik', 'Kapłan', 'Mag'];
  const races = ['Człowiek', 'Elf', 'Karsnolud', 'Niziołek'];
  const { charisma = 0, condition = 0, dexterity = 0, inteligence = 0, strenght = 0, wisdom = 0 } = props.data.data;

  useEffect(() => {
    const updatedCharData = { ...charData, class: charClass, race: charRace};
    setCharData(updatedCharData);
  }, [])

  const handleClassSelect = (option) => {
    setCharClass(option);
    const updatedCharData = { ...charData, class: option};
    setCharData(updatedCharData);
  };

  const handleRaceSelect = (option) => {
    setCharRace(option);
    const updatedCharData = { ...charData, race: option};
    setCharData(updatedCharData);
  };

  const classesOptions = classes.map((choice) => ({
    value: choice,
    label: choice,
  }));

  const racesOptions = races.map((choice) => ({
    value: choice,
    label: choice,
  }));

  return (
    <>
      {
        props.missingChoices === 'yes' ? (
          <>
            <span>Musisz najpierw wybrać <strong>klasę/rasę</strong>.</span>
            <div>
              <Dropdown options={classesOptions} value={charClass} onChange={handleClassSelect} />
              <Dropdown options={racesOptions} value={charRace} onChange={handleRaceSelect} />
              <button className="" onClick={() => props.handleDataChange(charData)}>Zatwierdź</button>
            </div>
            <p></p>
            <div>
              <span><strong>Twoje Statystyki:</strong></span>
              <p>Charyzma: {charisma}</p>
              <p>Kondycja: {condition}</p>
              <p>Zręczność: {dexterity}</p>
              <p>Inteligencja: {inteligence}</p>
              <p>Siła: {strenght}</p>
              <p>Mądrość: {wisdom}</p>
            </div>
          </>
        ) : <span>Wybranooooooooooooooo</span>
      }
    </>
  );
}