import React, {useState, useEffect} from 'react'

import Album from '../Albums/albums'
import MiniLoading from '../../Loadings/MiniLoading/miniLoading'

export default function Albums(){

    const [albums, setAlbums] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [albumsPage, setAlbumsPage] = useState(10)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getalbums()
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

    function getalbums(){
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${albumsPage}`, {
            method: "GET"
        })
        .then(response => {
            setTotalPage(response.headers.get("x-total-count") / albumsPage)
            return response.json()
        })
        .then(data => {
            setAlbums([...albums, ...data])
            setLoading(false)
        })
    }

    return(
        <ul className="album-grid">
            {albums.map(dados => (
                <Album dados = {dados}/>
            ))}

            {
              loading && <MiniLoading/> 
            }
        </ul>
    )
}