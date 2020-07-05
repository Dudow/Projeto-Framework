import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './posts.css'
import { FiArrowLeft, FiMoreHorizontal, FiSearch } from 'react-icons/fi'
import logo from '../../assets/Twintter.png'
import Lista from '../../components/Posts/Lista/lista'

// import logo from '../../assets/logo.svg'

class Posts extends Component {

    render() {
        
        return (
            <div className="container-post">
                <div id="pagePosts">
                    <header>
                        <Link to="/">
                            <FiArrowLeft />
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>

                        <h1 className="Pagetitle-post">Posts</h1>
                    </header>

                    <div className="search">
                        <div className="cima">
                            <span>                                
                                <FiArrowLeft />
                            </span>
                            <div className="lupa">
                                <FiSearch />
                                <input className="search-input" type="text" placeholder="Buscar no Twintter"></input>
                            </div>
                            <span>
                                <FiMoreHorizontal />
                            </span>
                        </div>
                        <div className="baixo">
                            <span className="principais">Principais</span>
                            <span className="recentes">Mais recentes</span>
                            <span className="pessoas">Pessoas</span>
                            <span className="fotos">Fotos</span>
                            <span className="videos">Vídeos</span>
                        </div>
                    </div>

                    <ul className="items-grid">
                        <Lista/>
                    </ul>

                </div>
            </div>
        )
    }
}

export default Posts