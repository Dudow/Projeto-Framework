import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './albuns.css'
import { FiArrowLeft } from 'react-icons/fi'

// import logo from '../../assets/logo.svg'

class Albums extends Component {
    state = {
        photos: []
    }

    async componentDidMount() {
        const res = await api.get('photos')
        this.setState({ photos: res.data })
    }

    render() {

        const { photos } = this.state

        console.log(photos)

        return (
            <div id="pageAlbums">
                <header>
                    <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
                </header>

                <h1 className="Pagetitle">Albuns</h1>

                <ul className="album-grid">
                    {photos.map(photo => (
                        <li key={photo.id}>
                            <img className="imagem" src={photo.url} alt={photo.title}></img>
                        </li>
                    ))}
                </ul>

            </div>

        )
    }
}

export default Albums