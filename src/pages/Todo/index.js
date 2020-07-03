import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/logo.png'

import './todo.css'

class Todo extends Component {
    state = {
        completed: []
    }

    async componentDidMount() {
        const res = await api.get('todos?completed=true')
        this.setState({ completed: res.data })
    }

    render() {

        const { completed } = this.state

        return (
            <div className="container-todo">
                <div id="pagetodo">
                    <header>
                        <Link to="/">
                            <FiArrowLeft />
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>
                    </header>

                    <h1 className="Pagetitle">To-do</h1>

                    <ul className="album-grid">

                        {completed.map(todo => (
                            <li key={todo.id}>
                                {todo.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        )
    }
}

export default Todo