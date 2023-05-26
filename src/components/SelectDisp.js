import React from 'react';

const SelectDisp = ({ onSelectDisp }) => {


  const changeHandler = (e) => {
    const selectedValue = e.target.value;

    onSelectDisp(selectedValue);
  };

  return (
    <select onChange={changeHandler} value=''>
      <option disabled value="">
        select...
      </option>
      <option value="1">constant</option>
      <option value="2">argument</option>
      <option value="3">and</option>
      <option value="4">or</option>
    </select>
  );
};

export default SelectDisp;
