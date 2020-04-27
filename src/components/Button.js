import React from "react";
import './Styling.scss';

export const Button = ({ klass, onClick, children, active}) => (
  <button className={"button "+klass} disabled={!active} type="button" onClick={onClick}>
    {children}
  </button>
);