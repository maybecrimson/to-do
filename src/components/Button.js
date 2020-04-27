import React from "react";
import './Styling.scss';

export const Button = ({ klass, onClick, children }) => (
  <button className={"button "+klass} type="submit">
    {children}
  </button>
);