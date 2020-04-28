import React from "react";
import './Styling.scss';

export const Button = ({ klass, children }) => (
  <button className={"button "+klass} type="submit">
    {children}
  </button>
);