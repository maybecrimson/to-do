export const ADD_TODO = 0
export const DELETE_TODO = 1
export const TOGGLE_TODO = 2

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text  
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}