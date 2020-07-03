import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './posts.css'
import { FiArrowLeft, FiUser, FiMoreHorizontal, FiSearch } from 'react-icons/fi'
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import logo from '../../assets/logo.png'

// import logo from '../../assets/logo.svg'

class Posts extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await api.get('posts')
        this.setState({ posts: res.data })
    }

    render() {

        const { posts } = this.state

        return (
            <div className="container-post">
                <div id="pagePosts">
                    <header>
                        <Link to="/">
                            <FiArrowLeft />
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>

                        <h1 className="Pagetitle">Posts</h1>
                    </header>

                    <div className="search">
                        <div className="cima">
                            <span>
                                <FiArrowLeft />
                            </span>
                            <div className="lupa">
                                <FiSearch />
                                <input className="search-input" type="text"></input>
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
                        {posts.map(post => (
                            <li key={post.id}>
                                <div className="space-photo">
                                    <div className="fake-photo"><FiUser />{post.userId}</div>
                                </div>
                                <div className="post-area">
                                    <div>
                                        <span className="post-user">
                                            <span>
                                                Usuário maneiro{post.userId}
                                            </span>
                                            <span>
                                                @User{post.userId}
                                            </span>
                                        </span>

                                        <span className="post-title">{post.title}</span>
                                        {post.body}
                                    </div>



                                    <div className="tt-Icons">
                                        <span><FaRegComment /></span>
                                        <span><AiOutlineRetweet /></span>
                                        <span><FaRegHeart /></span>
                                        <span><BsUpload /></span>
                                    </div>
                                </div>


                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        )
    }
}

export default Posts