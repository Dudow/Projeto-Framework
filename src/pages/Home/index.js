import React from 'react'
import {FiInstagram, FiTwitter, FiCalendar} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './home.css'

import logo from '../../assets/logo.png'

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Logo" className="logo"/>
                </header>

                <main>
                    <h1>
                        atividade para o estágio - Framestagio
                    </h1>
                    <p>
                        somos apaixonados por promover colaboração, inovação e transformação em nossos clientes.
                    </p>

                    <Link to="/posts">
                        <span>
                            <FiTwitter/>
                        </span>
                        <strong className="button-text">Posts</strong>
                    </Link>
                    <Link to="/albuns">
                        <span>
                            <FiInstagram/>
                        </span>
                        <strong className="button-text">Albuns</strong>
                    </Link>
                    <Link to="/todo">
                        <span>
                            <FiCalendar/>
                        </span>
                        <strong className="button-text">To-do list</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home