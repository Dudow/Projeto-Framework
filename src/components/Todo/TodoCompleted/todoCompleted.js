import React, { useState, useEffect } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BsCheckBox, BsPencil } from "react-icons/bs";


import MiniLoading from '../../Loadings/MiniLoading/miniLoading'

export default function Todo() {

    const [todo, setTodo] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [todoPage, setTodoPage] = useState(30)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTodo()
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [loading])

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight || page === totalPage || loading) {
            return
        }

        setPage(page + 1)

    }

    function getTodo() {
        setLoading(true)
        fetch(`htTps://jsonplaceholder.typicode.com/todos?completed=true&_page=${page}&_limit=${todoPage}`, {
            method: "GET"
        })
            .then(response => {
                setTotalPage(response.headers.get("x-total-count") / todoPage)
                return response.json()
            })
            .then(data => {
                setTodo([...todo, ...data])
                setLoading(false)
            })
    }

    return (
        <ul className="todo-done">
            <div>
                <span>
                    Done
                </span>
                <FiMoreHorizontal />
            </div>
            {todo.map(dados => (
                <li key={dados.id} className="todo-icon">
                    <span className="check-name">
                        {dados.title}
                        <BsPencil/>
                    </span>
                    <span  className="check-menu">
                        <span>
                            <BsCheckBox />
                        </span>
                        <span>
                            1/1
                        </span>
                    </span>

                </li>
            ))}

            {
                loading && <MiniLoading />
            }
        </ul>
    )
}