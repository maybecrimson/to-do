import React from "react";
import './Styling.scss';

export const Input = ({ value, onChange }) => (
  <input className="inputTask" type="text" placeholder="Task" value={value} onChange={onChange} />
);