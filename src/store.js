import React from 'react'
import { createStore } from 'redux'
import { ADD_TODO } from './actions'

let count = 4;

const _initalState = {
    todos: [
        { id: 1, name: "Do this", done: false },
        { id: 2, name: "Do other", done: false },
        { id: 3, name: "Do 3", done: true },
        { id: 4, name: "Do 4", done: true }
    ]
}

const toDoReducer = (initalState=_initalState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const newState = {
                ...initalState
            }
            newState.todos.push({ id: ++count, name: action.text, done: false })
            return newState;
        }  
        default: 
            return initalState;
    };
}

export const store = createStore(toDoReducer)