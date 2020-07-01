import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Posts from './pages/Posts'
import Albuns from './pages/Albuns'
import Todo from './pages/Todo'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Posts} path="/posts" />
            <Route component={Albuns} path="/albuns" />
            <Route component={Todo} path="/todo" />
        </BrowserRouter>
    )
}

export default Routes