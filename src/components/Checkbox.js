import React from "react";
import './Styling.scss';
import { store } from "../store";
import { toggleTodo } from "../actions";

export const Checkbox = ({ item }) => (
  <label>
    <input className="InputCheckbox" type="checkbox"
      onClick={() => store.dispatch(toggleTodo(item.id))}
      defaultChecked={item.done} />
    <span></span>
  </label>
);