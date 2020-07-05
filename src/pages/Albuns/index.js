import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiSmile, FiWind, FiSlack } from 'react-icons/fi'
import { GrGrid } from "react-icons/gr";
import { BsPersonSquare } from "react-icons/bs";

import './albuns.css'
import logo from '../../assets/Tiltagram.png'
import igtv from '../../assets/IGTV-512.webp'
import Lista from '../../components/Album/ListAlbums/listAlbuns'

class Albums extends Component {

    render() {

        return (
            <div className="container">


                <div id="pageAlbums">
                    <header>
                        <Link to="/">
                            <FiArrowLeft />
                            <img src={logo} alt="Logo" className="logo-album" />
                        </Link>

                        <h1 className="Pagetitle-albums">Albuns</h1>
                    </header>

                    <div className="perfil">
                        <div className="perfil-image">
                            <div className="perfil-photo"><FiUser /></div>
                        </div>
                        <div className="perfil-info">
                            <div className="perfil-cima">
                                Frameworksystem
                        </div>
                            <div className="perfil-meio">
                                <span>
                                    <strong>
                                        305
                                </strong>
                                publicações
                            </span>
                                <span>
                                    <strong>
                                        2.113
                                </strong>
                                seguidores
                            </span>
                                <span>
                                    <strong>
                                        536
                                </strong>
                                seguindo
                            </span>
                            </div>
                            <div className="perfil-baixo">
                                <strong>
                                    Framework
                            </strong>
                            Construindo o futuro juntos.
                            <a href="https://linktr.ee/frameworksystem">linktr.ee/frameworksystem</a>
                            </div>

                        </div>
                    </div>

                    <div className="histories">
                        <div className="histories-photo">
                            <div>
                                <div>
                                    <FiSmile />
                                </div>
                                <span>
                                    Home office
                            </span>
                            </div>
                        </div>
                        <div className="histories-photo">
                            <div>
                                <div>
                                    <FiWind />
                                </div>
                                <span>
                                    House office
                            </span>
                            </div>
                        </div>
                        <div className="histories-photo">
                            <div>
                                <div>
                                    <FiSlack />
                                </div>
                                <span>
                                    Hotel office
                            </span>
                            </div>
                        </div>

                    </div>

                    <div className="album-container">
                        <div className="album-menu">
                            <div><GrGrid/><span>PUBLICAÇÕES</span></div>
                            <div><img src={igtv} alt="Igtv-icon" className="igtv-icon"/><span>IGTV</span></div>
                            <div><BsPersonSquare/><span>MARCADOS</span></div>
                        </div>
                        <Lista/>
                    </div>

                </div>
            </div>

        )
    }
}

export default Albums