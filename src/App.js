import React, { Component } from 'react';
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <br></br>
        <AddTodo/>
        <hr width="50%" align="left"></hr>
        <List/>
      </div>
    );
  }
}