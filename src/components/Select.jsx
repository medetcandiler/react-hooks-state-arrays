import React from "react";

function Select({ onSelectHandler }) {
  return (
    <select onChange={onSelectHandler}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>
  );
}

export default Select;
