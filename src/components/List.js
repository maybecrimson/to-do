import React from "react";
import { connect } from 'react-redux';
import './Styling.scss';
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";

const getTodo = (state) => {
  return state
}

const List = ({todos}) => {
  {console.log(todos)}
  return (<ul>
    {todos.map(item => (
      <li
        key={item.id}
        style={{ textDecoration: item.done ? "line-through" : null }}
      >
        <Checkbox
          defaultChecked={item.done}
        />{" "}
        {item.name}
        <Button klass="deleteButton">D</Button>
      </li>
    ))}
    </ul>)
};

export default connect(getTodo)(List)