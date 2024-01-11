import { Route, Routes } from 'react-router'
import Home from './layouts/Home'

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
        </Routes>
    )
}