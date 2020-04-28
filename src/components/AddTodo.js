import React from "react";
import { connect } from 'react-redux'
import './Styling.scss';
import { Button } from "./Button";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
    let input

    return (
    <form
        onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
        <input placeholder="Task" className="inputTask" ref={node => (input = node)} />
        <Button klass="saveButton">Save</Button>
    </form>
    )
}

export default connect()(AddTodo)