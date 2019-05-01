import React from 'react';

const RadioInput = ({title, value, name}) => {
  return(
    <div className="radio-item">
      <div className="radio-title">{title}</div>
      <input type="radio" name={name} value={value} required/>
    </div>
  );
}

export default RadioInput;
