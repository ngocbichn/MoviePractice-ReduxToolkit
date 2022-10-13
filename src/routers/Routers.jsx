import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Home from '../pages/home/Home'
import MovieDetail from '../pages/movieDetail/MovieDetail'

const Routers = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'detail/:movieIds',
                    element: <MovieDetail />,
                },
            ]
        }
    ])
    return routing
}

export default Routers