import React, { useEffect, useState } from "react";

export const CharacterShow = (props) => {
  const [isCharReady, setIsCharReady] = useState([]);

  useEffect(() => {
    //Check if race or class are 'None'
    Object.keys(props.data).forEach((key) => {
      if (key === 'class') {
        if (props.data[key] === 'None') {
          !isCharReady.includes(key) ? setIsCharReady([...isCharReady, key]) : null;
        }
        else {
          const filteredIsCharReady = isCharReady.filter(item => item !== key);
          setIsCharReady(filteredIsCharReady);
        }
      }
      if (key === 'race') {
        if (props.data[key] === 'None') {
          !isCharReady.includes(key) ? setIsCharReady([...isCharReady, key]) : null;
        }
        else {
          const filteredIsCharReady = isCharReady.filter(item => item !== key);
          setIsCharReady(filteredIsCharReady);
        }
      }
    });
  }, [props.data,]);

  console.log(isCharReady);

  return (
    <>
      {
        isCharReady.length === 2 ? <span>You need to choose <strong>{isCharReady[0] + ' and ' + isCharReady[1]}</strong> first.</span>
        : isCharReady.length === 1 ? <span>You need to choose <strong>{isCharReady[0]}</strong> first.</span>
        : <></>
      }
      <button className="btn-in-form" onClick={() => props.onPageSwitch('characterChooseMenu')}>Go Back</button>
    </>
  );
}