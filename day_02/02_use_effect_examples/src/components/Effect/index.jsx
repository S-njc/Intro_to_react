import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [value, setValue] = useState(0);
  const [specialValue, setSpecialValue] = useState(0);
  const colours = ['tan', 'firebrick', 'cadetblue', 'gold', 'plum'];

  useEffect(() => {
    console.log('I have been added to the DOM');
  }, []);

  function handleClick() {
    setValue((prev) => prev + 1);

    if (value % 10 === 0) {
      setSpecialValue((prev) => prev + 1);
    }
  }

  return (
    <div style={{ backgroundColor: colours[specialValue] }}>
      <h2>Effects!</h2>
      <h2>Value: {value}</h2>
      <h2>specialValue: {specialValue}</h2>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
};

export default Effect;
