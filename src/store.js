import { createStore } from 'redux'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions'

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
                todos: initalState.todos.slice()
            }
            newState.todos.push({ id: ++count, name: action.text, done: false })
            return newState;
        }  
        case DELETE_TODO: {
            const newState = {
                todos: initalState.todos.filter(item => item.id != action.id)
            }
            return newState;
        } 
        case TOGGLE_TODO: {
            const newState = {
                todos: initalState.todos.map(item => {
                   if(item.id == action.id){
                    item.done = !item.done
                   }
                   return item
                })
            }
            return newState;
        } 
        default: 
            return initalState;
    };
}

export const store = createStore(toDoReducer)