import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Load from './components/Loadings/Loading/loading'
const Home = lazy(() => import('./pages/Home'))
const Posts = lazy(() => import('./pages/Posts'))
const Albuns = lazy(() => import('./pages/Albuns'))
const Todo = lazy(() => import('./pages/Todo'))

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <Load/>
            }>
                <Route component={Home} path="/" exact />
                <Route component={Posts} path="/posts" />
                <Route component={Albuns} path="/albuns" />
                <Route component={Todo} path="/todo" />
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes