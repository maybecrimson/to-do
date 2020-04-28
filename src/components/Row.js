import React from "react";
import './Styling.scss';
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { store } from "../store";
import { deleteTodo } from "../actions";


const Row = ({ item }) => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                store.dispatch(deleteTodo(item.id))
            }}>
            <li
                key={item.id}
                style={{ textDecoration: item.done ? "line-through" : null }}
            >
                <Checkbox item={item}/>
                {" "}
                {item.name}

                <Button klass="deleteButton">D</Button>
            </li>
        </form>
    )
}

export default Row