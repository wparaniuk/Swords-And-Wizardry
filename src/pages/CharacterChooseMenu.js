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
            <span>Brak postaci, aby kontynuować musisz stworzyć nową:</span>
            <button className="btn-in-form" onClick={() => props.onPageSwitch('characterCreate')}>Stwórz postać</button>
            </>
          )
          : 
          (
            <span>Wybierz postać:
              <button className="link-btn" onClick={() => props.onPageSwitch('characterShow')}>{props.data.name}</button>
            </span>
          )
        }
    </>
  );
}