import { Route, Routes } from 'react-router-dom'
import Nav from "./Nav"
import Home from './Home'
import AboutMore from './AboutMore'
import Projects from './Projects'
import Contact from './Contact'

export default function Main () {
    return (
        <div className="main">
            <Nav />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route  path='/about' element={<AboutMore />} />
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </div>
    )
}