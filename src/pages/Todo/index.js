import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/Trecco.png'
import Lista from '../../components/Todo/Todo/todo'
import ListaCompleted from '../../components/Todo/TodoCompleted/todoCompleted'
import NewLista from '../../components/Todo/NewTodo/newTodo'

import './todo.css'

class Todo extends Component {
    render() {
        
        return (
            <div className="container-todo">
                <div>
                    <header>
                        <Link to="/">
                            <FiArrowLeft />
                            <img src={logo} alt="Logo-todo" className="logo-todo" />
                        </Link>
                    </header>

                    <h1 className="Pagetitle-todo">To-do</h1>

                    <div className="todo-container">
                            <Lista />
                            <ListaCompleted />
                            <NewLista />
                    </div>

                </div>
            </div>

        )
    }
}

export default Todo