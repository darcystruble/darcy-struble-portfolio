import { useState } from "react"
import '../styles/Nav.css'

export default function Nav() {
    const [hamburg, setHamburg] = useState(false)

    return (
        <nav className="nav">
            <div className="site-title">
                Darcy Struble
            </div>
            <div className="nav-elements">
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