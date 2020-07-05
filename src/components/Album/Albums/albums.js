import React from 'react'

export default function Album({ dados }) {
    return (
        <li key={dados.id}>
            <img className="imagem" src={dados.url} alt={dados.title} />
        </li>
    )
}