import { useState } from "react"
import '../styles/Nav.css'

export default function Nav() {
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle menu function
    const viewMenu = () => {
        if(!isMenuClicked){
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <nav className="nav">
            <div className="site-title">
                Darcy Struble
            </div>
            <div className='burger-menu' onClick={viewMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            <div className={menuClass}>
                <ul>
                    <li>
                        <a href="#about">// About</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#projects">// Projects</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#contact">// Contact</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">// Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}