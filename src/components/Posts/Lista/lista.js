import React, {useState, useEffect} from 'react'

import Post from '../Post/post'
import MiniLoading from '../../Loadings/MiniLoading/miniLoading'

export default function Lista(){

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [postsPage, setPostsPage] = useState(5)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPosts()
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [loading])

    function handleScroll(){
        if(window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight || page === totalPage || loading){
            return
        }

        setPage(page+1)

    }

    function getPosts(){
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPage}`, {
            method: "GET"
        })
        .then(response => {
            setTotalPage(response.headers.get("x-total-count") / postsPage)
            return response.json()
        })
        .then(data => {
            setPosts([...posts, ...data])
            setLoading(false)
        })
    }

    return(
        <div>
            {posts.map(dados => (
                <Post dados = {dados}/>
            ))}

            {
              loading && <MiniLoading/> 
            }
        </div>
    )
}