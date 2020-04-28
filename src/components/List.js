import React from "react";
import { connect } from 'react-redux';
import './Styling.scss';
import Row from "./Row";

const getTodo = (state) => {
  return {todos: state.todos}
}

const dispatchDelete = () => {

}

const List = ({todos}) => {
  
  return (<ul>
    {todos.map(item => (
      <Row item={item}/>
    ))}
    </ul>)
};

export default connect(getTodo)(List)