import React from 'react'
import { createStore } from 'redux'

const store = createStore(rootReducer)

const _initalState = {todos: [
    { id: 1, name: "Do this", done: false },
    { id: 2, name: "Do other", done: false },
    { id: 3, name: "Do 3", done: true },
    { id: 4, name: "Do 4", done: true }
  ]}

const toDoReducer = (initalState=_initalState, action) => {
    return initalState;
}

