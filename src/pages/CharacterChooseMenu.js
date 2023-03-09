import React, { useEffect, useState } from "react";

export const CharacterChooseMenu = (props) => {
  const [isCharCreated, setCurrentCharButton] = useState(null);

  useEffect(() => {
    if (props.data) {
      setCurrentCharButton('yes');
    } else {
      setCurrentCharButton('no');
    }
  }, [props.data]);

  return (
    <>
        {
          isCharCreated === null ? <></>
          : isCharCreated === 'no' ?
          (
            <>
            <span>No characters, to proceed please create a new one:</span>
            <button className="btn-in-form" onClick={() => props.onPageSwitch('characterCreate')}>Create Character</button>
            </>
          )
          : 
          (
            <span>Choose Character:
              <button className="link-btn" onClick={() => props.onPageSwitch('characterShow')}>{props.data.name}</button>
            </span>
          )
        }
    </>
  );
}