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
                        <spam>
                            <FiArrowLeft/>
                        </spam>
                            <div className="lupa">
                                <FiSearch/>
                                <input className="search-input" type="text"></input>
                            </div>
                        <spam>
                            <FiMoreHorizontal/>
                        </spam>
                    </div>
                    <div className="baixo">
                        <spam className="principais">Principais</spam>
                        <spam className="recentes">Mais recentes</spam>
                        <spam className="pessoas">Pessoas</spam>
                        <spam className="fotos">Fotos</spam>
                        <spam className="videos">Vídeos</spam>
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
                                    <spam className="post-user">
                                        <spam>
                                            Usuário maneiro{post.userId}
                                        </spam>
                                        <spam>
                                            @User{post.userId}
                                        </spam>
                                    </spam>

                                    <spam className="post-title">{post.title}</spam>
                                    {post.body}
                                </div>



                                <div className="tt-Icons">
                                    <spam><FaRegComment /></spam>
                                    <spam><AiOutlineRetweet /></spam>
                                    <spam><FaRegHeart /></spam>
                                    <spam><BsUpload /></spam>
                                </div>
                            </div>


                        </li>
                    ))}
                </ul>

            </div>

        )
    }
}

export default Posts