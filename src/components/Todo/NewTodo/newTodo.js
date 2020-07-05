import React from 'react'
import { BsPlus } from "react-icons/bs";

export default function TodoNew() {
    return (
        <ul className="new-todo">
            <span>
                <BsPlus/> Add another list
            </span>
        </ul>
    )
}