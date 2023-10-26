import { Route, Routes } from 'react-router-dom'
import Nav from "./Nav"
import Home from './Home'
import About from './About'
import Projects from './Projects'

export default function Main () {
    return (
        <div className="main">
            <Nav />
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route  path='/about' element={<About />} />
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </div>
    )
}