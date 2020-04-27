import React, { Component } from 'react';
import { List } from "./components/List";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import './App.scss';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Do this", done: false },
      { id: 2, name: "Do other", done: false },
      { id: 3, name: "Do 3", done: true },
      { id: 4, name: "Do 4", done: true }
    ],
    todoText: ""
  };

  onChangeInput = e => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [...todos, { id: todos.length + 1, name: todoText, done: false }],
      todoText: ""
    }));
  };

  onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done } : el
      )
    }));
  };

  handleDel = item => {
    this.setState(({ todos }) => ({
      todos: todos.filter(el => el.id !== item.id)
    }));
  };

  canSave = () => {
    return this.state.todoText != ""
  }

  render() {
    const { todos, todoText } = this.state;

    return (
      <div>
        <h2>To Do List</h2>
        <br></br>
        <form>
          <Input value={todoText} onChange={this.onChangeInput} onClick={this.onSubmitTodo} />
          <Button klass="saveButton" active={this.canSave()} onClick={this.onSubmitTodo}>Save</Button>
        </form>
        <hr width="50%" align="left"></hr>
        <List
          list={todos}
          onChangeBox={this.onChangeBox}
          handleDel={this.handleDel}
        />
      </div>
    );
  }
}