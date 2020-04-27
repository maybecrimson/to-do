import React from "react";
import './Styling.scss';

export const Checkbox = ({ onClick, defaultChecked }) => (
  <label>
    <input className="InputCheckbox" type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
    <span></span>
  </label>
  
);