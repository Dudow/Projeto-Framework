import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'

// import logo from '../../assets/logo.svg'

const Todo = () => {
    
    const [todo, setTodo] = useState([])

    useEffect(() => {
        api.get('todos').then(res => {
            setTodo(res.data)
        })
    }, [])

    console.log(todo)

    return(

        <div id="page-create-point">
            <header>
                <Link to="/">
                    {/* <FiArrowLeft /> */}
                    Voltar para home
                </Link>
            </header>

            <form>
                <h1>Cadastro do ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="off"
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                placeholder="email@email.com"
                            />
                        </div>
                        <div className="field">
                            
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input
                                type="text"
                                pattern="\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4,5}"
                                name="whatsapp"
                                id="whatsapp"
                                autoComplete="off"
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereços</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado</label>
                            <select name="uf" id="uf">
                                
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Ítens de coleta</h2>
                        <span>Selecione um ou mais ítens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        
                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>
        </div>
    )
}

export default Todo