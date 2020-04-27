import React from "react";
import './Styling.scss';
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";

export const List = ({ list, onChangeBox, handleDel }) => (
  <ul>
    {list.map(item => (
      <li
        key={item.id}
        style={{ textDecoration: item.done ? "line-through" : null }}
      >
        <Checkbox
          onClick={() => onChangeBox(item)}
          defaultChecked={item.done}
        />{" "}
        {item.name}
        <Button klass="deleteButton" onClick={() => handleDel(item)}>D</Button>
      </li>
    ))}
  </ul>
);